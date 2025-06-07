import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getAllCategories } from "@/lib/actions/product.actions";
import { SearchIcon } from "lucide-react";

const Search = async () => {
    const categories = await getAllCategories();

    return (
    <form action='/search' method='GET'>
      <div className='flex w-full max-w-sm items-center ml-2 search-box'>
        <Select name='category'>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='All' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key={'All'} value={'all'}>
              All
            </SelectItem>
            {categories.map((x) => (
              <SelectItem key={x.category} value={x.category}>
                {x.category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input name='q' type='text' placeholder='Search...' className='rounded-none md:w-[100px] lg:w-[300px]' />
        <Button variant='outline' className="rounded-l-none !rounded-r-md !w-10">
          <SearchIcon />
        </Button>
      </div>
    </form>
    );
}
 
export default Search; 


/*

input block min-w-0 grow py-1.5 pr-3 pl-1
<div class="grid shrink-0 grid-cols-1 focus-within:relative">
<select id="currency" name="currency" aria-label="Currency" class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">


*/