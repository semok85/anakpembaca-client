"use client"

import React, { useState } from "react"
import Image from "next/image"

import { ScrollArea } from "@/components/ui/scroll-area"

export default function BookGalery() {
  const [primaryPicure, setPrimaryPicture] = useState(
    "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
  )

  const handleClick = (imageUrl: string) => {
    setPrimaryPicture(imageUrl)
  }
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-1 grid grid-cols-1 gap-4">
        <ScrollArea className="h-[450px]">
          <div
            className="mb-4"
            onClick={() =>
              handleClick(
                "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
              )
            }
          >
            <Image
              className="portrait aspect-[3/4] h-auto w-full rounded-md object-cover"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
              alt=""
              width={100}
              height={150}
            />
          </div>
          <div
            className="mb-4"
            onClick={() =>
              handleClick(
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              )
            }
          >
            <Image
              className="portrait aspect-[3/4] h-auto w-full rounded-md object-cover"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
              width={100}
              height={150}
            />
          </div>
          <div
            className="mb-4"
            onClick={() =>
              handleClick(
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              )
            }
          >
            <Image
              className="portrait aspect-[3/4] h-auto w-full rounded-md object-cover"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
              width={100}
              height={150}
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              alt=""
            />
          </div>
        </ScrollArea>
      </div>
      <div className="col-span-4">
        <Image
          className="portrait aspect-[3/4] h-auto w-full rounded-md object-cover"
          src={primaryPicure}
          alt=""
          width={400}
          height={300}
        />
      </div>
    </div>
  )
}
