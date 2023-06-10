import React from "react"
import Image from "next/image"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import BookGalery from "./components/book-galery"
import BookReview from "./components/book-reviews"
import BookSummary from "./components/book-summary"

export default function BookDetail({ params }) {
  return (
    <section className="mx-auto">
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-5">
          <div className="md:sticky md: top-24 md:col-span-2">
            <BookGalery />
          </div>
          <div className="md:col-span-3">
            <Tabs defaultValue="summary" className="w-full">
              <TabsList>
                <TabsTrigger value="summary">Detail Buku</TabsTrigger>
                <TabsTrigger value="review">Review Buku</TabsTrigger>
              </TabsList>
              <TabsContent value="summary" className="pt-5">
                <BookSummary />
              </TabsContent>
              <TabsContent value="review">
                <BookReview />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
