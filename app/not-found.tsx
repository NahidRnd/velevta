'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const NotFoundPage = () => {
    return ( 
        <div className="flex flex-col justify-center gap-8 items-center h-[70vh]">
            <Image priority={true} src='/images/logo.svg' width={48} height={48} alt={`${APP_NAME} logo`}/>
            <div className='p-6 rounded-lg shadow-md w-1/3 text-center'>
                <h1 className='text-3xl font-bold mb-4'>Not Found</h1>
                <p className='text-destructive'>Could not find requested resource</p>
                <Button variant='outline' className='mt-4 ml-2' onClick={() => (window.location.href = '/')}>
                    Back to home
                </Button>
            </div>
        </div>
     );
}
 
export default NotFoundPage;