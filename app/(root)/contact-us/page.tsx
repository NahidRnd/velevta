import Image from "next/image";
import ContactForm from "./contact-form";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import ContactMap from "./contact-map";

const ContactPage = () => {
    return ( 
        <div>
            <div className="relative bg-[url('/images/contact-us.jpg')] bg-cover w-full h-80 text-white flex flex-col items-center justify-center">
                <div className="bg-[#0307124d] absolute inset-0"></div>
                <h1 className="text-5xl font-bold my-2 relative">
                    Contact Us
                </h1>
            </div>
            <div className="container flex flex-col md:flex-row gap-6 justify-between items-center md:mt-20!">
                <div className="md:w-1/4 bg-[#f7f7f9] w-full px-9 pt-6 pb-2">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">Headquarters</h3>
                        <p className="text-dark">1600 Amphitheatre Parkway</p><p className="text-dark">New York WC1 1BA</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">Phone Number</h3>
                        <p className="text-dark">+147 974 555 22</p><p className="text-dark">+147 974 555 11</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">Support</h3>
                        <p className="text-dark">support@velveta.com</p><p className="text-dark">help@velveta.com</p><p className="text-dark">sale@velveta.com</p>
                    </div>
                </div>
                <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold">Let&apos;s Connect</h3>
                    <p className="text-sm text-dark mt-[6px]">Your email address will not be published. Required fields are marked *</p>
                    <ContactForm />
                </div>
            </div>
            <div className="container">
                <h2 className="text-3xl font-bold md:my-10 mb-8 mt-2">Our Store</h2>
                <div className="flex flex-col md:flex-row gap-y-6 justify-between">
                    <div className="group relative text-center">
                        <Image src="/images/store-1.jpg" alt="our store" width={350} height={280} className="rounded-xl md:w-[280px] w-[350px]" />
                        <h4 className=" rounded-xl text-lg uppercase font-bold text-white absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center transition-all duration-300 group-hover:pb-22 group-hover:bg-[#ED711B]/90">New York</h4>
                        <div className="absolute text-white text-sm top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
                            <div className="absolute bottom-10 opacity-0 space-y-1 transition-all duration-300 group-hover:mb-10 group-hover:opacity-100">
                                <p><a href="mailto:support@velveta.com" className="hover:underline">email: support@velveta.com</a></p>
                                <p><a href="tel:+1795556622" className="hover:underline">phone: +179 555 6622</a></p>
                                <div className="mt-4 flex justify-center space-x-4">
                                    <a href="#" className=""><FaFacebookF size={18} /></a>
                                    <a href="#" className=""><FaTwitter size={18} /></a>
                                    <a href="#" className=""><FaLinkedinIn size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative text-center">
                        <Image src="/images/store-2.jpg" alt="our store" width={350} height={280} className="rounded-xl md:w-[280px] w-[350px]" />
                        <h4 className=" rounded-xl text-lg uppercase font-bold text-white absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center transition-all duration-300 group-hover:pb-22 group-hover:bg-[#ED711B]/90">London</h4>
                        <div className="absolute text-white text-sm top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
                            <div className="absolute bottom-10 opacity-0 space-y-1 transition-all duration-300 group-hover:mb-10 group-hover:opacity-100">
                                <p><a href="mailto:support@velveta.com" className="hover:underline">email: support@velveta.com</a></p>
                                <p><a href="tel:+1795556622" className="hover:underline">phone: +179 555 6622</a></p>
                                <div className="mt-4 flex justify-center space-x-4">
                                    <a href="#" className=""><FaFacebookF size={18} /></a>
                                    <a href="#" className=""><FaTwitter size={18} /></a>
                                    <a href="#" className=""><FaLinkedinIn size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative text-center">
                        <Image src="/images/store-3.jpg" alt="our store" width={350} height={280} className="rounded-xl md:w-[280px] w-[350px]" />
                        <h4 className=" rounded-xl text-lg uppercase font-bold text-white absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center transition-all duration-300 group-hover:pb-22 group-hover:bg-[#ED711B]/90">Berlin</h4>
                        <div className="absolute text-white text-sm top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
                            <div className="absolute bottom-10 opacity-0 space-y-1 transition-all duration-300 group-hover:mb-10 group-hover:opacity-100">
                                <p><a href="mailto:support@velveta.com" className="hover:underline">email: support@velveta.com</a></p>
                                <p><a href="tel:+1795556622" className="hover:underline">phone: +179 555 6622</a></p>
                                <div className="mt-4 flex justify-center space-x-4">
                                    <a href="#" className=""><FaFacebookF size={18} /></a>
                                    <a href="#" className=""><FaTwitter size={18} /></a>
                                    <a href="#" className=""><FaLinkedinIn size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative text-center">
                        <Image src="/images/store-4.jpg" alt="our store" width={350} height={280} className="rounded-xl md:w-[280px] w-[350px]" />
                        <h4 className=" rounded-xl text-lg uppercase font-bold text-white absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center transition-all duration-300 group-hover:pb-22 group-hover:bg-[#ED711B]/90">Istanbul</h4>
                        <div className="absolute text-white text-sm top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
                            <div className="absolute bottom-10 opacity-0 space-y-1 transition-all duration-300 group-hover:mb-10 group-hover:opacity-100">
                                <p><a href="mailto:support@velveta.com" className="hover:underline">email: support@velveta.com</a></p>
                                <p><a href="tel:+1795556622" className="hover:underline">phone: +179 555 6622</a></p>
                                <div className="mt-4 flex justify-center space-x-4">
                                    <a href="#" className=""><FaFacebookF size={18} /></a>
                                    <a href="#" className=""><FaTwitter size={18} /></a>
                                    <a href="#" className=""><FaLinkedinIn size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ContactMap />
            </div>
        </div>

     );
}
 
export default ContactPage;