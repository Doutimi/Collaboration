import { createFileRoute } from '@tanstack/react-router'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export const Route = createFileRoute('/auth/login/')({
  component: Login,
})
