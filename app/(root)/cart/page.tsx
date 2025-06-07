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