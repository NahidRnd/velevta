import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const ClientCarousel = () => {
    return ( 
        <Carousel opts={{loop: true,}} className="pt-6 px-20">
            <CarouselContent>
                <CarouselItem className="basis-1/6 bg-white py-5 px-8 shadow-c mr-5 h-35 w-33 rounded-xl object-contain flex items-center">
                    <Image src='/images/brand1.webp' alt="clients" width={180} height={100} />
                </CarouselItem>
                <CarouselItem className="basis-1/6 bg-white py-5 px-8 shadow-c mr-5 h-35 w-33 rounded-xl object-contain flex items-center">
                    <Image src='/images/brand2.webp' alt="clients" width={180} height={100} />
                </CarouselItem>
                <CarouselItem className="basis-1/6 bg-white py-5 px-8 shadow-c mr-5 h-35 w-33 rounded-xl object-contain flex items-center">
                    <Image src='/images/brand3.webp' alt="clients" width={180} height={100} />
                </CarouselItem>
                <CarouselItem className="basis-1/6 bg-white py-5 px-8 shadow-c mr-5 h-35 w-33 rounded-xl object-contain flex items-center">
                    <Image src='/images/brand4.webp' alt="clients" width={180} height={100} />
                </CarouselItem>
                <CarouselItem className="basis-1/6 bg-white py-5 px-8 shadow-c mr-5 h-35 w-33 rounded-xl object-contain flex items-center">
                    <Image src='/images/brand5.webp' alt="clients" width={180} height={100} />
                </CarouselItem>
                <CarouselItem className="basis-1/6 bg-white py-5 px-8 shadow-c mr-5 h-35 w-33 rounded-xl object-contain flex items-center">
                    <Image src='/images/brand6.webp' alt="clients" width={180} height={100} />
                </CarouselItem>
                <CarouselItem className="basis-1/6 bg-white py-5 px-8 shadow-c mr-5 h-35 w-33 rounded-xl object-contain flex items-center">
                    <Image src='/images/brand7.webp' alt="clients" width={180} height={100} />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
     );
}
 
export default ClientCarousel;