'use client';

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Cart, CartItem } from "@/types";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { useRouter } from "next/navigation";
import { Loader, Minus, Plus } from "lucide-react";
import { useState, useTransition } from "react";


const AddToCart = ({ cart, item }: { cart?: Cart, item: CartItem }) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleAddToCart = async () => {  
        startTransition(async () => {
            item.qty = qtyValue;
            // Execute the addItemToCart action
            const res = await addItemToCart(item);

            // Display appropriate toast message based on the result
            if (!res.success) {
                toast("", {
                //   variant: 'destructive',
                description: res.message,
                });
                return;
            }

            toast("Added",{
                description: res.message,
                action: {
                    label: "Go to cart",
                    onClick: () => router.push('/cart')},
                    //   className='bg-primary text-white hover:bg-gray-800'
                }
            );
        });
    }

    const [qtyValue, setQtyValue] = useState(1);

    const handleDec = () => {
        setQtyValue(prev => prev - 1)
    }

    const handleInc = () => {
        setQtyValue(prev => prev + 1);       
    }

    // Check if item is in cart
    const existItem = cart && cart.items.find((x) => x.productId === item.productId);

    return existItem ? (
        <>
        <div className="flex justify-between border-2 border-[#e4e4e4] gap-2 p-3 min-w-[116px] w-[54px]">
            <Minus onClick={() => handleDec()} className="pl-2 w-20 cursor-pointer" />
            <input type="text" defaultValue={qtyValue} className="min-w-3 text-center" />
            <Plus onClick={() => handleInc()} className="pr-2 w-20 cursor-pointer" />
        </div>
        <Button className="bg-gray-900 rounded-[0px] text-white !py-[26px] !px-16" disabled>
            Already Added
        </Button>
        </>
    ) : ( 
        <>
        <div className="flex justify-between border-2 border-[#e4e4e4] gap-2 p-3 min-w-[116px] w-[54px]">
            {isPending ? (<Loader className="w-4 h-4 animate-spin" />) : (<Minus onClick={() => handleDec()} className="pl-2 w-20" />)}
            <input type="text" defaultValue={qtyValue} className="min-w-3 text-center" />
            {isPending ? (<Loader className="w-4 h-4 animate-spin" />) : (<Plus onClick={() => handleInc()} className="pr-2 w-20" />)}
        </div>
        <Button onClick={() => handleAddToCart()} className="bg-gray-900 rounded-[0px] text-white !py-[26px] !px-16">
            {isPending ? (<Loader className="w-4 h-4 animate-spin" />) :('Add To Cart')}
        </Button>  
        </>
     );
}
 
export default AddToCart;