//force the page to render on the server at request time and disable caching
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { getMyCart } from "@/lib/actions/cart.actions";
import CartTable from "./cart-table";

export const metadata = {
  title: 'Shopping Cart',
};

const CartPage = async () => {
    const cart = await getMyCart();
    return ( 
        <div className="container">
            <CartTable cart={cart} />
        </div>
     );
}
 
export default CartPage;