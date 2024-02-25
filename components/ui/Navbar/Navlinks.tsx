'use client';

import Link from 'next/link';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import Logo from '@/components/icons/Logo';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import ThemeSwitcher from '../ThemeSwitcher';
import Input from '../Input';
import Button from '../Button';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="flex items-center flex-1">
        <Link
          href="/"
          className={'flex flex-row items-center gap-2'}
          aria-label="Logo"
        >
          <Logo className="size-[54px] hover:bg-primary/20 bg-transparent border-2 border-primary/50 p-3 rounded-2xl" />
          <h1 className="md:text-2xl text-xl font-extrabold shadow-primary/90 sm:block hidden hover:[text-shadow:_1px_1px_16px_var(--tw-shadow-color)] transition-all duration-300 ease-in-out-sine">
            Study<span className="text-primary/90">Fliss</span>
          </h1>
        </Link>
        <nav className="ml-12 space-x-4 lg:block hidden">
          <Link href="/" className={''}>
            Pricing
          </Link>
          {user && (
            <Link href="/account" className={''}>
              Account
            </Link>
          )}
        </nav>
      </div>
      <div className="flex justify-end items-center space-x-2">
        {user ? (
          <>
            <p className="text-sm lg:block hidden">{user.email}</p>
            <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
              <Input type="hidden" name="pathName" value={usePathname()} />
              <Button
                variant={'outline'}
                type="submit"
                className={'border-primary/50 border-2 lg:py-6 lg:px-6 py-6 px-4 lg:text-sm text-xs rounded-xl'}
              >
                Sign out
              </Button>
            </form>
          </>
        ) : (
          <Link href="/signin" className={''}>
            <Button
              variant={'outline'}
              type="submit"
              className={'border-primary/50 border-2 lg:py-6 lg:px-6 py-6 px-4 lg:text-sm text-xs rounded-xl'}
            >
              Sign in
            </Button>
          </Link>
        )}
        <ThemeSwitcher />
      </div>
    </div>
  );
}
