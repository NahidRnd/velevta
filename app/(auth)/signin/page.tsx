import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import CredentialsSignInForm from "./credentials-signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Sign In',
}

const SignInPage = async (props: {
  searchParams: Promise<{callbackUrl: string}>
}) => {
    const {callbackUrl} = await props.searchParams;
    const session = await auth();
    if(session) {
      return redirect(callbackUrl || '/');
    }
    return ( 
    <div className='w-full max-w-md mx-auto'>
      <Card>
        <CardHeader className='space-y-4'>
          <Link href='/' className='flex justify-center items-center'>
            <Image priority={true} src='/images/logo.png' width={100} height={100} alt={`${APP_NAME} logo`} />
          </Link>
          <CardTitle className='text-center'>Sign In</CardTitle>
          <CardDescription className='text-center'>
            Select a method to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
            <CredentialsSignInForm />
        </CardContent>
      </Card>
    </div>
     );
}
 
export default SignInPage;