import { APP_NAME } from "@/lib/constants";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return ( 
        <footer className="border-t bg-secondary text-[#999]">
            <div className="container flex justify-between gap-6 px-10 mx-20">
                <div className="flex flex-col gap-y-3 max-w-[300px]">
                    <Link href='/' className="flex items-center">
                        <Image src='/images/logo-d.png' width={48} height={48} alt={`${APP_NAME} logo`}/>
                        <span className='hidden md:block font-bold text-2xl ml-3 text-white'>
                            {APP_NAME}
                        </span>
                    </Link>
                    <p className="mt-2">
                        Velveta brings elegance and innovation to online shopping. Discover curated collections, seamless experiences, and modern design.
                    </p>
                    <p><a href="mailto:support@velveta.com" className="hover:text-primary">support@velveta.com</a></p>
                    <div className="mt-2 flex space-x-4">
                        <a href="#" className="hover:text-primary"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-primary"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-primary"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-primary"><Youtube size={20} /></a>
                        <a href="#" className="hover:text-primary"><Linkedin size={20} /></a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mt-4">About Us</h3>
                    <ul className="mt-3 space-y-2">
                        <li><a href="#" className="hover:text-white">Our Story</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                        <li><a href="#" className="hover:text-white">Press & Media</a></li>
                        <li><a href="#" className="hover:text-white">Sustainability</a></li>
                        <li><a href="#" className="hover:text-white">Partnerships</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mt-4">Customer Service</h3>
                    <ul className="mt-3 space-y-2">
                        <li><a href="#" className="hover:text-white">Help Center</a></li>
                        <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
                        <li><a href="#" className="hover:text-white">Shipping Information</a></li>
                        <li><a href="#" className="hover:text-white">Track My Order</a></li>
                        <li><a href="#" className="hover:text-white">Contact Support</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mt-4">My Account</h3>
                    <ul className="mt-3 space-y-2">
                        <li><a href="#" className="hover:text-white">Login</a></li>
                        <li><a href="#" className="hover:text-white">Order History</a></li>
                        <li><a href="#" className="hover:text-white">Wishlist</a></li>
                        <li><a href="#" className="hover:text-white">Payment Methods</a></li>
                        <li><a href="#" className="hover:text-white">Account Settings</a></li>
                    </ul>
                </div>
            </div>
            <div className="p-5 flex justify-center border-t mx-32">
                {currentYear} {APP_NAME}. All Rights Reserved
            </div>
        </footer>
     );
}
 
export default Footer;