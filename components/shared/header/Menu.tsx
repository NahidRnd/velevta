'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
    const pathname = usePathname();
    return ( 
        <>
            <li>
                <Link href='/' className={`${(pathname === '/')?'text-primary' : ''} hover:text-primary rounded-md py-2`}>Home Page</Link>
            </li>
            <li>
                <Link href='/properties' className={`${(pathname === '/properties')?'text-primary' : ''} hover:text-primary rounded-md py-2`}>Shop</Link>
            </li> 
            <li>
                <Link href='/properties' className={`${(pathname === '/properties')?'text-primary' : ''} hover:text-primary rounded-md py-2`}>Products</Link>
            </li> 
            <li>
                <Link href='/properties' className={`${(pathname === '/properties')?'text-primary' : ''} hover:text-primary rounded-md py-2`}>About Us</Link>
            </li> 
            <li>
                <Link href='/properties' className={`${(pathname === '/properties')?'text-primary' : ''} hover:text-primary rounded-md py-2`}>Contact Us</Link>
            </li> 
            <li>
                <Link href='/properties' className={`${(pathname === '/properties')?'text-primary' : ''} hover:text-primary rounded-md py-2`}>Blog</Link>
            </li> 
        </>
     );
}
 
export default Menu;