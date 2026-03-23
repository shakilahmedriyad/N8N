import SignInForm from "@/components/Feature/Auth/SignInForm/SignInForm";
import { requireUnauth } from "@/lib/auth-utils";

export default async function SignInPage() {
  await requireUnauth();

  return <SignInForm />;
}
