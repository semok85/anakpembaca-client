import React from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative z-20 flex items-center overflow-hidden bg-background drop-shadow duration-300 ease-in-out hover:drop-shadow-lg">
      <div
        className="container relative mx-auto flex rounded-md px-6 py-16"
        style={{
          backgroundImage: "url(/images/bg/bg-0.png)",
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
        <div className="relative z-20 ml-12 flex flex-col sm:w-2/3 lg:w-2/5">
          <span className="mb-12 h-2 w-20 bg-gray-800 dark:bg-white"></span>
          <h1 className="font-bebas-neue flex flex-col pb-2 text-4xl font-black uppercase leading-none text-gray-800 dark:text-white sm:text-3xl">
            <span className="text-5xl sm:text-7xl">Buku</span> adalah jendela
            keajaiban bagi anak
          </h1>
          <p className="text-sm text-gray-700 dark:text-white sm:text-base">
            Buku tidak hanya sekadar halaman-halaman terikat, tetapi alat yang
            membuka peluang bagi anak-anak untuk menjelajahi dunia dengan
            imajinasi dan pengetahuan tanpa batas.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href={siteConfig.links.docs}
              rel="noreferrer"
              className={buttonVariants()}
            >
              Cari buku
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants()}
            >
              Tentang kami
            </Link>
          </div>
        </div>
        <div className="relative mx-auto hidden sm:block ">
          {/* <Image
            src="/images/bg/child.png"
            className="m-auto max-w-xs md:max-w-sm"
            width={500}
            height={500}
            alt="hero image"
          /> */}
        </div>
      </div>
    </div>
  )
}
