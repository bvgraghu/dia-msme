import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";
import { LoginAside } from "./LoginAside";

export const metadata: Metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      <LoginAside />
      <LoginForm />
    </div>
  );
}
