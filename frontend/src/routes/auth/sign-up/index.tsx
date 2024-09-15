import { Input } from "@/components/Input";
import { signUpResponseSchema } from "@/hooks/useSignUp";
import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";


const SignUp = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const username = formData.get("username");

    const parsedFormValues = signUpResponseSchema.parse({
      email,
      username,
    });

    // TODO: Send form data to server
    alert(JSON.stringify(parsedFormValues));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-medium">Sign Up</h1>
      <div className="flex justify-center max-w-md flex-col mx-auto">
        <Input
          name="email"
          title="Email"
          htmlFor="email"
          type="text"
          id="email"
          placeholder="janedoe@example.com"
          required
        />
        <Input
          name="username"
          title="username"
          htmlFor="username"
          type="text"
          id="username"
          placeholder="sakarachan#232"
          required
        />
        <button type="submit">Submit</button>{" "}
      </div>
    </form>
  );
};

export const Route = createFileRoute("/auth/sign-up/")({
  component: SignUp,
});
