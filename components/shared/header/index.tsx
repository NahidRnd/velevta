import { APP_NAME } from "@/lib/constants";
import { AlignLeft, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Menu from "./Menu";
import UserButton from "./user-button";
import CategoryDrawer from "./category-drawer";
import Search from "./search";


const Header = () => {

    return ( 
        <header className="w-full">
            <div className="container !pb-0">
                <div className="flex justify-between items-center m-auto border-b !border-b-gray-200 pb-10">
                    <div className="hidden md:flex flex-1">
                        <CategoryDrawer />
                        <Search />
                    </div>
                    <nav className="md:hidden">
                        <Sheet>
                            <SheetTrigger><AlignLeft size={30} /></SheetTrigger>
                            <SheetContent side="left" className="w-[80%]"> 
                                <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                                <div className="flex flex-col justify-between h-[80vh]">
                                    <div>
                                        Search
                                        <ul className={`flex flex-col gap-3 justify-center pt-2`}>
                                            <Menu />
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-3 border-t pt-2">
                                        <ModeToggle />
                                        <UserButton style="flex gap-2" text=" My Acount" />
                                        <Link href='/favorites' className="flex gap-2"><Heart /> Favorites</Link>
                                    </div>
                                </div>
                                <SheetDescription>
                                </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </nav>
                    <div>
                        <Link href='/' className="flex items-center">
                            <Image src='/images/logo.png' width={48} height={48} alt={`${APP_NAME} logo`}/>
                            <span className='hidden md:block font-bold text-2xl ml-3'>
                                {APP_NAME}
                            </span>
                        </Link>
                    </div>
                    <div className="flex-1 justify-end flex items-center gap-6">
                        <div className="hidden gap-6 md:flex items-center">
                            <ModeToggle />
                            <UserButton style='' text='' />
                            <Link href='/favorites'><Heart /></Link>
                        </div>
                        <Link href='/cart'><ShoppingCart /></Link>
                    </div>
                </div>
                <div>
                    <nav className="z-9 relative">
                        <div className="max-w-[1140px] m-auto">
                            <div className="flex items-center justify-center relative h-20">
                                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                </div>
                                <div className="hidden md:ml-6 md:block">
                                <ul className={`flex gap-x-5  justify-center`}>
                                    <Menu />
                                </ul>
                                </div>
                            </div>
                        </div>              
                    </nav>
                    
                </div>
            </div>
        </header>
     );
}
 
export default Header;