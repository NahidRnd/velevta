'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SignUpForm = () => {
    const [data, action] = useActionState(signUpUser, {
        success: false,
        message: ''
    });

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const SignUpBtn = () => {
        const { pending } = useFormStatus();
        return (
            <Button disabled={pending} className="w-full text-white" variant='default'>
                { pending ? 'Submitting...' : 'Sign Up' }
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
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" required autoComplete="name" />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required autoComplete="password" />
                </div>
                <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" name="confirmPassword" type="password" required autoComplete="confirmPassword" />
                </div>
                <div>
                    <SignUpBtn />
                </div>
                <div className="text-sm text-center text-primary">
                    Already have an account ? <Link href='/signin' target="self">Sign In</Link>
                </div>
            </div>        
        </form>
     );
}
 
export default SignUpForm;