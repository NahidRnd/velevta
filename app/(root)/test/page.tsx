import { auth } from "@/auth";
import Dropdown from "@/components/shared/header/dropdown";
import { Button } from "@/components/ui/button";
import { signOutUser } from "@/lib/actions/user.actions";
import { UserIcon } from "lucide-react";
import Link from "next/link";

const TestPage = async() => {
    const session = await auth();
    if(!session) {
        return (
            <Link href="/signin?callbackUrl=http://localhost:3000/test"><UserIcon /></Link>
        )
    }
    const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? 'U';
    return ( 
        <div className='flex gap-2 items-center'>
            <Dropdown firstInitial={firstInitial}>
                <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>
                        {session.user?.name}
                    </p>
                    <p className='text-xs leading-none text-gray-500'>
                        {session.user?.email}
                    </p>
                </div>
                <div>
                    <form action={signOutUser} method="post" className='w-full'>
                        <Button className='w-full py-3 mt-3 h-4 justify-start px-0' variant='ghost'>
                            Sign Out
                        </Button>
                    </form>
                </div> 
            </Dropdown>
        </div>
     );
}
 
export default TestPage;