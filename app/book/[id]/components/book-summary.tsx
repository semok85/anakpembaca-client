import React from "react"

import { Badge } from "@/components/ui/badge"

export default function BookSummary() {
  return (
    <div className="w-full">
      <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
        Pre Order
      </strong>

      <div className="mt-8 flex justify-between">
        <div className="w-full space-y-2">
          <h1 className="text-xl font-bold sm:text-2xl">Ini judul Buku</h1>
          <div className="flex max-w-[400px] gap-4">
            <div>
              <p className="mb-1 text-sm font-semibold">Rating</p>
              <div className="-ms-0.5 flex">
                <div className="mr-2 flex items-center">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm">4.7/200 review</span>
              </div>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold">Suka</p>
              <div className="-ms-0.5 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="red"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />{" "}
                </svg>
                <span className="text-sm">250 Suka</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex max-w-[500px] justify-between">
            <div>
              <p className="mb-1 text-sm font-bold">Penulis</p>
              <p className="text-sm font-medium">Sem Oktavianus</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold">Ilustrator</p>

              <p className="text-sm font-medium">Yoseplin lastaria</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold">Penerbit</p>

              <p className="text-sm font-medium">Gramedia</p>
            </div>
          </div>
        </div>

        <p className="text-lg font-bold">$119.99</p>
      </div>

      <div className="mt-4 w-full">
        <div className="w-full">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam
            dicta beatae eos ex error culpa delectus rem tenetur, architecto
            quam nesciunt, dolor veritatis nisi minus inventore, rerum at
            recusandae?
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div>
          <p className="mb-1 text-sm font-bold">Kategori</p>

          <div className="flex flex-wrap gap-1">
            <Badge>Usia 1-3 tahun</Badge>
            <Badge>Cerita bergambar</Badge>
            <Badge>Buku Karton</Badge>
          </div>
        </div>

        <div className="mt-4">
          <p className="mb-1 text-sm font-bold">Tags</p>

          <div className="flex flex-wrap gap-1">
            <Badge variant="outline">Kepemimpinan</Badge>
            <Badge variant="outline">Persahabatan</Badge>
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-1 text-sm font-bold">Detail buku</p>

          <div className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-1 text-sm">
            <span>Panjang: 20 cm</span>
            <span>Lebar: 30 cm</span>
            <span>Tebal: 4 cm</span>
            <span>Berat: 1200 gram</span>
            <span>Jumlah halaman: 20 halaman</span>
            <span>Material buku: ..</span>
            <span>ISBN: ..</span>
            <span>Bahasa: ..</span>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <div>
            <label htmlFor="quantity" className="sr-only">
              Qty
            </label>

            <input
              type="number"
              id="quantity"
              min="1"
              value="1"
              className="w-12 rounded border-gray-500 py-3 text-center text-xs"
            />
          </div>

          <button
            type="submit"
            className="block cursor-not-allowed rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
