/* eslint-disable @next/next/no-img-element */
import React from "react"

import Hero from "./hero"

export default function Colection() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl py-4 sm:px-1 sm:py-4 lg:px-8">
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <li className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <Hero />
          </li>
          <li>
            <a href="#" className="group relative block">
              <img
                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="aspect-square h-48 w-full rounded-md object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Casual Trainers
                </h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="group relative block">
              <img
                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="aspect-square h-48 w-full rounded-md object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Winter Jumpers
                </h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}