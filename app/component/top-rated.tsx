import React from "react"

import { topRatedBooks } from "@/app/book/data/library"

import BookColection from "./book-colection"

export default function TopRated() {
  return (
    <BookColection
      title="Top rated"
      description="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
      url="#"
      data={topRatedBooks}
    />
  )
}
