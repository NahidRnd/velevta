import DealCountdown from "@/components/deal-countdown";
import HomeSlider from "@/components/home-slider";
import IconBoxes from "@/components/icon-boxes";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ProductList from "@/components/shared/product/product-list";
import ViewAllProductsButton from "@/components/view-all-products-button";
import { getFeaturedProducts, getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: 'Home',
};

const HomaPage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return ( 
    <>
    <HomeSlider />
    <ProductList data={latestProducts} title="Latest Products" limit={4} />
    <ViewAllProductsButton />
    <div className="container">
      {featuredProducts.length > 0 && <ProductCarousel data={featuredProducts} />}
    </div>
    <IconBoxes />
    <div className="container">
      <DealCountdown />
    </div>
    </>
   );
}
 
export default HomaPage;