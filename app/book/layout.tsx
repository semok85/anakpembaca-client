import "@/styles/globals.css"
import React from "react"
import type { Metadata } from "next"

import { Menu } from "./components/menu"
import { Sidebar } from "./components/sidebar"
import { playlists } from "./data/playlists"

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
      <div className="">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="flex">
              <Sidebar
                playlists={playlists}
                className=" hidden w-60 lg:block"
              />
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
