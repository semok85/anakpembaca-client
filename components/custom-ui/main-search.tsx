import React from "react"
import { Search } from "lucide-react"

export default function MainSearch() {
  return (
    <>
      <div className="relative mx-auto hidden w-full max-w-lg sm:block">
        <div className="group relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-40 group-hover:duration-200 dark:group-hover:opacity-70"></div>
          <div className="items-top relative flex justify-start rounded-lg bg-white leading-none ring-1 ring-gray-900/5">
            <input
              className="h-10 w-64 rounded-lg bg-white pl-6 pr-4 text-sm focus:outline-none xl:w-[415px]"
              id="search"
              type="search"
              placeholder="Cari buku..."
            />

            <button
              type="button"
              className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-sm text-gray-600 transition hover:text-gray-700"
            >
              <Search className="h-4 w-4 font-semibold" />
            </button>
          </div>
        </div>
        <label className="sr-only" htmlFor="search">
          {" "}
          Search{" "}
        </label>
      </div>
    </>
  )
}
