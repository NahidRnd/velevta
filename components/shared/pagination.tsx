'use client';

type PaginationProps = {
  page: number | string;
  totalPages: number;
  urlParamName?: string;
};

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { formUrlQuery } from "@/lib/utils";

const Pagination = ({ page, totalPages, urlParamName }: PaginationProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleClick = (btnType: string) => {
        const pageValue = btnType === 'next' ?  Number(page) + 1 : Number(page) - 1;
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: urlParamName || 'page',
            value: pageValue.toString(),
        });

        router.push(newUrl, { scroll: false });
    }

    return ( 
        <div className='flex gap-2'>
            <Button onClick={() => handleClick('prev')} size='lg' variant='outline' className='w-28' disabled={Number(page) <= 1}>
                Previous
            </Button>
            <Button onClick={() => handleClick('next')} size='lg' variant='outline' className='w-28' disabled={Number(page) >= totalPages}>
                Next
            </Button>
            </div>
     );
}
 
export default Pagination;