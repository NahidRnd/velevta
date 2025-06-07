import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import MainNav from './main-nav';
import ModeToggle from '@/components/shared/header/mode-toggle';
import UserButton from '@/components/shared/header/user-button';
import { Heart, ShoppingCart } from 'lucide-react';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex flex-col'>
        <div className='border-b container mx-auto'>
          <div className='flex h-16 items-center px-4'>
            <Link href='/' className='w-22'>
              <Image
                src='/images/logo.svg'
                width={48}
                height={48}
                alt={`${APP_NAME} logo`}
              />
            </Link>
            <MainNav className='mx-6' />
            <div className='ml-auto flex items-center space-x-4'>
              <div className="flex gap-6">
                  <div className="hidden gap-6 md:flex">
                      <ModeToggle />
                      <UserButton style='' text='' />
                      <Link href='/favorites'><Heart /></Link>
                  </div>
                  <Link href='/cart'><ShoppingCart /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 space-y-4 p-8 pt-6 container mx-auto'>
          {children}
        </div>
      </div>
    </>
  );
}