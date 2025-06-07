import { auth } from "@/auth";
import AddToCart from "@/components/shared/product/add-to-cart";
import ProductImages from "@/components/shared/product/product-images";
import ProductPrice from "@/components/shared/product/product-price";
import { Button } from "@/components/ui/button";
import { getMyCart } from "@/lib/actions/cart.actions";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { Minus, Plus } from "lucide-react";
import { notFound } from "next/navigation";
import ReviewList from "./review-list";
import Rating from "@/components/shared/product/rating";

const ProductDetailsPage = async(props: {
    params: Promise<{slug: string}>
}) => {
    const { slug } = await props.params;

    const product = await getProductBySlug(slug);
    if(!product) notFound();

    const session = await auth();
    const userId = session?.user?.id;

    const cart = await getMyCart();

    return ( 
        <>
        <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full">
                <ProductImages images={product.images} />
            </div>
            <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <Rating value={Number(product.rating)} />
                <p>{product.numReviews} reviews</p>
                <ProductPrice value={Number(product.price)} />
                {product.stock > 0 ? (
                    <p className="text-green-600">In Stock</p>
                ) : (
                    <p className="text-red-500">Out of Stock</p>
                )}
                <p>{product.description}</p>
                <div className="flex gap-6">
                    <AddToCart cart={cart} item={{productId: product.id, name: product.name, slug: product.slug, price: product.price, qty: 1, image: product.images![0],}} />
                </div>
            </div>
        </div>
        </section>
        <section className='container mt-10'>
            <h2 className='mb-5'>Customer Reviews</h2>
            <ReviewList productId={product.id} productSlug={product.slug} userId={userId || ''} />
        </section>
        </>
     );
}
 
export default ProductDetailsPage;