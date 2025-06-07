'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const CredentialsSignInForm = () => {
    const [data, action] = useActionState(signInWithCredentials, {
        success: false,
        message: ''
    });

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const SignInBtn = () => {
        const { pending } = useFormStatus();
        return (
            <Button disabled={pending} className="w-full text-white" variant='default'>
                { pending ? 'Signing In...' : 'Sign In' }
            </Button>
        )
    }

    return ( 
        <form action={action}>
            <input type="hidden" name="callbackUrl" value={callbackUrl} />
            <div className="space-y-6">
                { data && !data.success && (
                    <div className="text-center text-red-600">
                        {data.message}
                    </div>
                )}
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required autoComplete="password" />
                </div>
                <div>
                    <SignInBtn />
                </div>
                <div className="text-sm text-center text-primary">
                    Don&apos;t have an account ? <Link href='/signup' target="self">Sign Up</Link>
                </div>
            </div>        
        </form>
     );
}
 
export default CredentialsSignInForm;