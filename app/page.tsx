import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import SliderCustom from "@/components/ui/slider-custom"
import Blog from "@/components/custom-ui/playgoround/blog"
import Book from "@/components/custom-ui/playgoround/book"
import Colection from "@/components/custom-ui/playgoround/colection"
import Colection2 from "@/components/custom-ui/playgoround/colection-2"
import Footer from "@/components/custom-ui/playgoround/footer"
import Header2 from "@/components/custom-ui/playgoround/header-2"
import Review from "@/components/custom-ui/playgoround/review"
import Author from "@/app/component/author"

import Blogs from "./component/blogs"
import TopAuthor from "./component/top-author"

export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center">
        <Colection />
        <Colection2 />
        <TopAuthor />
        <Colection2 />
        <Blogs />
        {/* <Book />
        <Review />
        <Blog />

        <Header2 /> */}
      </section>
      <Footer />
    </>
  )
}
