import React from "react"
import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

import BookTableDashboard from "./components/book-table-dashboard"

export default function BookTable() {
  return (
    <>
      <div className="container">
        <div className="mt-8 flex">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <Button className="ml-auto">
            <PlusCircle className="mr-2 h-4 w-4" />
            Upload Buku
          </Button>
        </div>
        <BookTableDashboard />
      </div>
    </>
  )
}
