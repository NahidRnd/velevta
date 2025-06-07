import { DollarSign, Headset, ShoppingBag, WalletCards } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const IconBoxes = () => {
    return (
    <div className="container">
      <Card className="border-0 border-b rounded-none shadow-white">
        <CardContent className='grid gap-4 md:grid-cols-4 p-4 justify-items-center'>
          <div className='space-y-2 text-center'>
            <ShoppingBag className="m-auto text-primary" size={36} />
            <div className='text-sm font-bold m-0 mt-2'>Free Shipping</div>
            <div className='text-sm text-gray-500'>
              Free shipping for order above $100
            </div>
          </div>
          <div className='space-y-2 text-center'>
            <DollarSign className="m-auto text-primary" size={36} />
            <div className='text-sm font-bold m-0 mt-2'>Money Back Guarantee</div>
            <div className='text-sm text-gray-500'>
              Within 30 days for an exchange
            </div>
          </div>
          <div className='space-y-2 text-center'>
            <WalletCards className="m-auto text-primary" size={36} />
            <div className='text-sm font-bold m-0 mt-2'>Flexible Payment</div>
            <div className='text-sm text-gray-500'>
              Pay with credit card, PayPal or COD
            </div>
          </div>
          <div className='space-y-2 text-center'>
            <Headset className="m-auto text-primary" size={36} />
            <div className='text-sm font-bold m-0 mt-2'>24/7 Support</div>
            <div className='text-sm text-gray-500'>
              Get support at any time
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    );
}
 
export default IconBoxes;