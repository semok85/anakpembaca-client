import React from "react"
import { PlusCircle } from "lucide-react"
import { BookTable, Columns } from "./components/columns"
import { DataTable } from "@/components/ui/data-table"

import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

import BookTableDashboard from "./components/book-table-dashboard"

async function getData(): Promise<BookTable[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      title: "Judul Buku",
      publisher: "Anak Pembaca",
      stock: 5,
      price: 4500,
    },
    {
      id: "728ed52f",
      title: "Siapa yang kentut",
      publisher: "Anak Pembaca",
      stock: 7,
      price: 5000,
    },
    // ...
  ]
}

export default  async function BookTable() {
  const data = await getData()
  return (
    <>
      <div className="container">
        <div className="mb-4 mt-8 flex items-center">
          <h2 className="text-3xl font-bold tracking-tight">Books</h2>
          <div className="ml-auto"><Link href="/admin/dashboard/books/create" className={buttonVariants()}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Upload Buku
          </Link></div>
          
        </div>
        <div className="mb-12">
        <DataTable columns={Columns} data={data} />
        </div>
        
      </div>
    </>
  )
}
