import { apiClient } from "@/lib/api-client";
import { z } from "zod";

export const signUpRequestSchema = z.object({
  email: z.string().email(),
  username: z.string().trim().min(3),
});
export const signUpResponseSchema = z.object({
  token: z.string(),
});
export type SignUpRequest = z.infer<typeof signUpRequestSchema>;
export type SignUpResponse = z.infer<typeof signUpResponseSchema>;

export const useSignUp = () => {
  return async (formData: SignUpRequest) => {
    const res = await apiClient.post("/auth/sign-up", formData);
    const parsedRes = signUpResponseSchema.safeParse(res.data);
    if (!parsedRes.success) {
      throw new Error("Invalid response");
    }
    return parsedRes.data;
  };
};
