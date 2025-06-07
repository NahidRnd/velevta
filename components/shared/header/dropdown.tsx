'use client';

import { useState } from "react";

const Dropdown = ({children, firstInitial}: Readonly<{
  children: React.ReactNode; 
  firstInitial: string;
}>) => {

    const [isOpen, setIsOpen] = useState(false);  

    return ( 
        <>
        <div onClick={() => setIsOpen(!isOpen)} className='flex items-center cursor-pointer'>
            <div className='relative w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-gray-300'>
                {firstInitial}
            </div>
        </div>
        {isOpen && (
        <div className="absolute bg-white p-3 w-52 mt-34 border border-gray-300 rounded-md z-10">
            {children}
        </div>
        )}
        </>
     );
}
 
export default Dropdown;