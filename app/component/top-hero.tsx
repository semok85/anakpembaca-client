/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

import Hero from "./hero"

export default function TopHero() {
  return (
    <section>
      <div className="mx-auto py-4 sm:px-1 sm:py-4">
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <li className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <Hero />
          </li>
          <li>
            <a href="#" className="group relative block">
              <img
                src="/images/bg/book-child2.png"
                alt=""
                className="aspect-square h-48 w-full rounded-md object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end rounded-md p-6 shadow duration-300 ease-in-out hover:shadow-lg">
                <h3 className="mb-2 text-xl font-medium ">Casual Trainers</h3>

                {/* <Link
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants()}
                >
                  Ini Link
                </Link> */}
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="group relative block">
              <img
                src="/images/bg/book-child.png"
                alt=""
                className="aspect-square h-48 w-full rounded-md object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end rounded-md p-6 shadow duration-300 ease-in-out hover:shadow-lg">
                <h3 className="mb-2 text-xl font-medium">Winter Jumpers</h3>

                {/* <Link
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants()}
                >
                  Ini Link
                </Link> */}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
