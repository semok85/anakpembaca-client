import "@/styles/globals.css"
import React from "react"
import type { Metadata } from "next"

import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Books page",
  description: "Displaying page",
}

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <div className="">
        {/* <Menu /> */}
        <div>
          <div className="bg-background">
            <div className="flex">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
