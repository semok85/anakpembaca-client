import "@/styles/globals.css"
import React from "react"
import type { Metadata } from "next"

import Footer from "@/app/component/footer"

import { MainNav } from "./components/main-nav"
import { Search } from "./components/search"
import TeamSwitcher from "./components/team-switcher"
import { UserNav } from "./components/user-nav"

export const metadata: Metadata = {
  title: "Books page",
  description: "Displaying page",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      <div>{children}</div>
      <Footer />
    </>
  )
}
