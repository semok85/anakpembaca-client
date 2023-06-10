"use client"

import Link from "next/link"
import { useLogoutMutation } from "@/redux/features/auth/authApi.slice"

import { siteConfig } from "@/config/site"
import useAuth from "@/hooks/useAuth"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import AvatarHeader from "./custom-ui/avatar-header"
import { InputWithButton } from "./custom-ui/input-with-buton"
import MainSearch from "./custom-ui/main-search"

export function SiteHeader() {
  const isAuth = useAuth()

  return (
    <header
      id="header"
      className="sticky top-0 z-40 w-full border-b bg-background opacity-95"
    >
      <div className="container flex h-16 items-center space-x-4  sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex w-full items-center justify-center space-x-4">
          <div className="hidden lg:block">
            {/* <InputWithButton /> */}
            <MainSearch />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4 md:space-x-2">
          <nav className="mr-6 flex items-center justify-between space-x-3 lg:mr-8">
            <ThemeToggle />

            {isAuth ? (
              <AvatarHeader />
            ) : (
              <>
                <Link
                  href="/authentication/register"
                  rel="noreferrer"
                  className={buttonVariants()}
                >
                  Register
                </Link>
                <Link
                  href="/authentication/login"
                  className=" w-16 text-sm font-semibold leading-6"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
