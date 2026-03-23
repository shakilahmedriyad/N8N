import SignUpForm from "@/components/Feature/Auth/SignUpForm/SignUpForm";
import { requireUnauth } from "@/lib/auth-utils";

export default async function SignUpPage() {
  await requireUnauth();
  return <SignUpForm />;
}
