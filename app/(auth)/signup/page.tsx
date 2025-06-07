import { auth } from "@/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SignUpForm from "./sign-up-form";

export const metadata: Metadata = {
    title: 'Sign Up',
}

const SignUpPage = async (props: {
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
          <CardTitle className='text-center'>Create Account</CardTitle>
          <CardDescription className='text-center'>
            Enter your information below to sign up
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
            <SignUpForm />
        </CardContent>
      </Card>
    </div>
     );
}
 
export default SignUpPage;