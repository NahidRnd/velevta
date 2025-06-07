import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "@/types";
import Rating from "./rating";

const ProductCard = ({ product }: { product: Product }) => {
    return ( 
        <Card>
            <CardHeader>
                <Link href={`/product/${product.slug}`}>
                    {product.images[0] ? (
                        <Image src={product.images[0]} alt={product.name} width={300} height={300} className="h-80" />
                    ): (
                        <Image src='/images/noimage.png' alt={product.name} width={300} height={300} />
                    )}
                    
                </Link>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="text-xs">{product.brand}</div>
                <Link href={`/product/${product.slug}`}><h3 className="text-sm font-medium">{product.name}</h3></Link>
                <div className="flex justify-between gap-4">
                    <Rating value={Number(product.rating)} />
                    {product.stock > 0 ? (
                        <ProductPrice value={Number(product.price)} />
                    ) : (
                        <p className="text-red-500">Out of Stock</p>
                    )}
                </div>
            </CardContent>
        </Card>
     );
}
 
export default ProductCard;