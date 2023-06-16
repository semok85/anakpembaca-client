import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import SliderCustom from "@/components/ui/slider-custom"
import Blog from "@/components/custom-ui/playgoround/blog"
import Book from "@/components/custom-ui/playgoround/book"
import Footer from "@/app/component/footer"
import Header2 from "@/components/custom-ui/playgoround/header-2"
import InputTest from "@/components/custom-ui/playgoround/inputTest"
import Review from "@/components/custom-ui/playgoround/review"
import { SiteHeader } from "@/components/site-header"
import Author from "@/app/component/author"

import AddBookDashboard from "./admin/dashboard/books/components/create-book"
import Blogs from "./component/blogs"
import TopAuthor from "./component/top-author"
import TopHero from "./component/top-hero"
import TopRated from "./component/top-rated"

export default function IndexPage() {
  return (
    <>
      <SiteHeader />
      <section className="container grid items-center">
        {/* <TopHero />
        <TopRated />
        <TopAuthor />
        <Blogs />
        <Book />
        <Review /> */}
        <AddBookDashboard />
        {/* <Blog /> */}

        {/* <Header2 /> */}
      </section>
      <Footer />
    </>
  )
}
