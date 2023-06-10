"use client"

import React from "react"
import { Separator } from "@radix-ui/react-separator"

import SliderCustom from "@/components/ui/slider-custom"

import Blog from "./blog"

export default function Blogs() {
  let arr = [1, 2, 3, 4, 5, 6]
  return (
    <section>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Blog</h2>
        <p className="text-sm text-muted-foreground">
          Blog tentang literasi anak dan parenting.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-1 gap-6">
        <div className="relative">
          <SliderCustom id="blog">
            <div className="flex space-x-4 pb-4">
              {arr.map((i) => (
                <Blog />
              ))}
            </div>
          </SliderCustom>
        </div>
      </div>
    </section>
  )
}
