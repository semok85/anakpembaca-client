import React from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"

import CreateBook from "../components/create-book"

export default async function BookTable() {
  return (
    <>
      <div className="container">
        <div className="mb-4 mt-8 flex items-center">
          <h2 className="text-3xl font-bold tracking-tight">Create Books</h2>
          <div className="ml-auto">
            <Link href="/admin/dashboard/books" className={buttonVariants()}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Table Books
            </Link>
          </div>
        </div>
        <CreateBook />
      </div>
    </>
  )
}
