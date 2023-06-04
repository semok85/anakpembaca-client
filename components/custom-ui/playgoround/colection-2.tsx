import React from "react"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import SliderCustom from "@/components/ui/slider-custom"
import { AlbumArtwork } from "@/app/book/components/album-artwork"
import { listenNowAlbums } from "@/app/book/data/albums"

export default function Colection2() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl rounded-md px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Watches
                </h2>

                <p className="mt-4 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  rerum quam amet provident nulla error!
                </p>
              </header>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
              >
                Shop All
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 lg:py-8">
            <div className="relative">
              <SliderCustom>
                <div className="flex space-x-4 pb-4">
                  {listenNowAlbums.map((album) => (
                    <AlbumArtwork
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
              {/* <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {listenNowAlbums.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[250px]"
                      aspectRatio="portrait"
                      width={250}
                      height={330}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
