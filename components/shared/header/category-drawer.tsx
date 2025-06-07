import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { getAllCategories } from "@/lib/actions/product.actions";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const CategoryDrawer = async () => {
    const categories = await getAllCategories();
    return (
    <Drawer direction='left'>
      <DrawerTrigger asChild>
        <Button variant='secondary' className="text-white">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className='h-full max-w-sm bg-secondary text-white !border-r-0'>
        <DrawerHeader>
          <DrawerTitle>Select a category</DrawerTitle>
          <div className='space-y-1'>
            {categories.map((x) => (
              <Button
                className='w-full justify-start'
                variant='ghost'
                key={x.category}
                asChild
              >
                <DrawerClose asChild>
                  <Link className="hover:text-primary" href={`/search?category=${x.category}`}>
                    {x.category} ({x._count})
                  </Link>
                </DrawerClose>
              </Button>
            ))}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
    );
}
 
export default CategoryDrawer;