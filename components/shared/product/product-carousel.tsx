'use client'

import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Product } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProductCarousel = ({data}: {data: Product[]}) => {
    return ( 
    <Carousel
      className='w-full mb-12'
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
        {data.map((product: Product) => (
          <CarouselItem key={product.id}>
              <div className='relative mx-auto'>
                {product.banner ? (
                <Image
                  alt={product.name}
                  src={product.banner!}
                  width='0'
                  height='0'
                  sizes='100vw'
                  className='w-full h-64'
                /> 
                ) : (
                   <Image src='/images/noimage.png' alt={product.name} width={300} height={300} />     
                )}
                
                <div className='absolute inset-0 flex items-end justify-center'>
                  <h2 className='bg-gray-900/30 text-2xl font-bold px-2 text-white w-full py-2 flex justify-center items-center'>
                    {product.name}
                    <Link href={`/product/${product.slug}`} className='text-lg font-semibold ml-6 uppercase flex mt-1'>Shop Now <ArrowRight /></Link>
                  </h2>
                </div>
              </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    );
}
 
export default ProductCarousel;