'use client';
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({images} : {images: string[]}) => {
    const [current, setCurrent] = useState(0);
    return ( 
        <div>
            <Image src={images[current]} alt="product image" width={700} height={700} className="min-h-[300px] object-cover object-center" />
            <div className="flex">
                {images.map((image, index) => (
                    <div key={index} onClick={() => setCurrent(index)} className={cn(
                        'opacity-50 cursor-pointer', current === index && 'opacity-100'
                    )}>
                        <Image key={index} src={image} alt="product image small" width={100} height={100} className="" />
                    </div>
                ))}
            </div>
        </div>
        
     );
}
 
export default ProductImages;