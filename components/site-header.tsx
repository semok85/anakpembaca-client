import Link from "next/link"
import { useLogoutMutation } from "@/redux/features/auth/authApi.slice"

import { siteConfig } from "@/config/site"
import useAuth from "@/hooks/useAuth"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { InputWithButton } from "./custom-ui/input-with-buton"

export function SiteHeader() {
  const isAuth = useAuth()
  const [logout] = useLogoutMutation()
  const logOutHandler = () => {
    logout("")
  }
  return (
    <header
      id="header"
      className="sticky top-0 z-40 w-full border-b bg-background opacity-90"
    >
      <div className="container flex h-16 items-center space-x-4  sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex w-full items-center justify-center space-x-4">
          <div className="hidden w-full md:block">
            <InputWithButton />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            {isAuth && (
              <Button onClick={logOutHandler} variant="outline">
                LogOut
              </Button>
            )}

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
