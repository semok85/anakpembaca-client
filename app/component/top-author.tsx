"use client"

import React from "react"
import { Separator } from "@radix-ui/react-separator"

import SliderCustom from "@/components/ui/slider-custom"

import Author from "./author"

export default function TopAuthor() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  return (
    <section>
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Top Penulis</h2>
        <p className="text-sm text-muted-foreground">
          Top picks for you. Updated daily.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-1 gap-4">
        <div className="relative">
          <SliderCustom id="topauthor">
            <div className="flex space-x-4 pb-4">
              {arr.map((i) => (
                <Author title="Sem Oktavianus" url="#" />
              ))}
            </div>
          </SliderCustom>
        </div>
      </div>
    </section>
  )
}
