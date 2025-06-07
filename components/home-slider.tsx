'use client';

import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const HomeSlider = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
   const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      setTotalItems(carouselApi.scrollSnapList().length);
    };

    updateCarouselState();

    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState); // Clean up on unmount
    };
  }, [carouselApi]);
  
    const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };
    return (
        <Carousel className='w-full mb-12'
            setApi={setCarouselApi}
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
                }),
            ]}
        >
        <CarouselContent>
            <CarouselItem>
              <div className='relative mx-auto'>
                <Image alt='Velveta' src='/images/slider1.jpg' width='0' height='0' sizes='100vw' className='w-full h-[500px] object-cover'/>    
                <div className='absolute inset-0 flex items-center justify-end'>
                  <div className='text-white mr-[15%] max-w-[380px] text-left'>
                    <h2 className='text-4xl font-bold text-left'>
                        Velveta: Elevate Your Shopping Experience
                    </h2>
                    <p className='my-4 text-lg'>
                        A sleek intro that sets the tone luxury, convenience, and curated style.
                    </p>
                    <Link href='/' className='text-sm font-semibold uppercase flex items-center justify-center bg-secondary rounded-sm px-6 py-3 max-w-[160px]'>Shop Now <ArrowRight /></Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='relative mx-auto'>
                <Image alt='Velveta' src='/images/slider2.jpg' width='0' height='0' sizes='100vw' className='w-full h-[500px] object-cover'/>    
                <div className='absolute inset-0 flex items-center'>
                  <div className='text-white ml-[15%] max-w-[380px] text-left'>
                    <h2 className='text-4xl font-bold text-left'>
                        Curated Elegance: Discover Our Top Picks
                    </h2>
                    <p className='my-4 text-lg'>
                        Brief product highlights, whether it’s fashion, home decor, or tech.
                    </p>
                    <Link href='/' className='text-sm font-semibold uppercase flex items-center justify-center bg-white text-secondary rounded-sm px-6 py-3 max-w-[160px]'>Shop Now <ArrowRight /></Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='relative mx-auto'>
                <Image alt='Velveta' src='/images/slider3.jpg' width='0' height='0' sizes='100vw' className='w-full h-[500px] object-cover'/>    
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-white max-w-[380px] text-center'>
                    <h2 className='text-4xl font-bold text-center'>
                        Ready to Explore? Start Shopping Now
                    </h2>
                    <p className='my-4 text-lg'>
                        Incentivize action mention a special deal or exclusive launch.
                    </p>
                    <div className='flex justify-center'>
                        <Link href='/' className='text-sm font-semibold uppercase flex items-center justify-center border !border-white rounded-sm px-6 py-3 max-w-[160px]'>Shop Now <ArrowRight /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
        </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}

       {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {Array.from({ length: 3 }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "border border-white" }`}
          />
        ))}
      </div>
    </Carousel>
    );
}
 
export default HomeSlider;