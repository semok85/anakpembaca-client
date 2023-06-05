import React from "react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import SliderCustom from "@/components/ui/slider-custom"
import { Book } from "@/app/book/components/book"
import { listenNowAlbums } from "@/app/book/data/albums"

export default function Colection2() {
  return (
    <section>
      <div className="mx-auto rounded-md py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-stretch">
          <div
            className="grid place-content-center rounded-md drop-shadow hover:drop-shadow-lg sm:p-8"
            style={{
              backgroundImage: "url(/images/bg/rated.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                  Top Rated
                </h2>

                <p className="my-4 text-gray-800">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  rerum quam amet provident nulla error!
                </p>
              </header>

              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants()}
              >
                Lihat semua
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 lg:py-8">
            <div className="relative">
              <SliderCustom id="topbooks">
                <div className="flex space-x-4 pb-4">
                  {listenNowAlbums.map((album) => (
                    <Book
                      key={album.name}
                      album={album}
                      className="w-[250px]"
                      aspectRatio="portrait"
                      width={250}
                      height={330}
                    />
                  ))}
                </div>
              </SliderCustom>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
