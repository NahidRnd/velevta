import Image from "next/image";
import Counter from "./counter";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClientCarousel from "./client-carousel";

const AboutPage = () => {
    return ( 
        <div>
            <div className="bg-[url('/images/about-us.jpg')] w-full h-80 object-cover text-white flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold uppercase">
                    Welcome to Velveta
                </h3>
                <h1 className="text-5xl font-bold my-2">
                    About Us
                </h1>
                <p className="max-w-95 text-center">
                    Velveta is your destination for fashion that speaks louder than words.
                </p>
            </div>
            <div className="container flex flex-col md:flex-row gap-6 md:py-20! justify-between items-center">
                <div className="md:w-[38%]">
                    <h5 className="text-lg">01. What We Do</h5>
                    <h3 className="text-3xl font-bold leading-7 py-3 max-w-80">Provide perfect and practical services</h3>
                    <p className="text-dark mt-2 max-w-90">At Velveta, we dont just sell clothes—we craft confidence. Born from a passion for elegance, individuality, and timeless style</p>
                </div>
                <div className="flex flex-col md:w-[22%] items-center py-10 px-4 shadow">
                    <Counter target={55} duration={2000} />
                    <h3 className="text-xl font-bold text-dark py-2">Business Year</h3>
                    <p className="text-center text-text">For over three decades, crafting fashion that blends timeless elegance.</p>
                </div>
                <div className="flex flex-col md:w-[22%] items-center py-10 px-4 shadow">
                    <Counter target={60} duration={2000} />
                    <h3 className="text-xl font-bold text-dark py-2">Design Brands</h3>
                    <p className="text-center text-text">From bold streetwear to refined couture, distinctive design brands.</p>
                </div>
                <div className="flex flex-col md:w-[22%] items-center py-10 px-4 shadow">
                    <Counter target={150} duration={2000} />
                    <h3 className="text-xl font-bold text-dark py-2">Team Members</h3>
                    <p className="text-center text-text">Behind every garment is a team of designers, tailors, stylists.</p>
                </div>
            </div>
            <div className="container flex flex-col md:flex-row gap-10 items-center justify-between">
                <div className="md:w-[50%]">
                    <Image src="/images/customer.jpg" alt="about us page picture" width={580} height={507} className="rounded-xl" />
                </div>
                <div className="md:w-[44%]">
                    <h5 className="text-lg">02. Happy Customer</h5>
                    <h3 className="text-3xl font-bold leading-7 py-3 max-w-100">Provide fashionable and qualifed products</h3>
                    <p className="text-dark mt-2">Already millions of people are very satisfied by this page builder and the number is growing more and more. Technology developing, requirements are increasing. Riode has brought.</p>
                    <Link href="/products" className="flex text-lg font-semibold items-center mt-6 gap-2">visit our store <ArrowRight /></Link>
                </div>
            </div>
            <div className="container flex flex-col md:flex-row gap-10 items-center justify-between">
                <div className="md:w-[44%]">
                    <h5 className="text-lg">03. Our Store</h5>
                    <h3 className="text-3xl font-bold leading-7 py-3 max-w-100">Expect Restless Amazing Support</h3>
                    <p className="text-dark mt-2">Already millions of people are very satisfied by this page builder and the number is growing more and more. Technology developing, requirements are increasing. Riode has brought.</p>
                    <Link href="/products" className="flex text-lg font-semibold items-center mt-6 gap-2">visit our store <ArrowRight /></Link>
                </div>
                <div className="md:w-[50%]">
                    <Image src="/images/store.jpg" alt="about us page picture" width={580} height={507} className="rounded-xl" />
                </div>
            </div>
            <div className="bg-[#f6f7f9] flex flex-col items-center py-20">
                <h5 className="text-lg">04. Our Clients</h5>
                <h3 className="text-3xl font-bold leading-7 py-3 max-w-100">Popular Brands</h3>
                <ClientCarousel />
            </div>
        </div>
     );
}
 
export default AboutPage;