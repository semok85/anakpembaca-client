import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Blog from "@/components/custom-ui/playgoround/blog"
import Book from "@/components/custom-ui/playgoround/book"
import Colection from "@/components/custom-ui/playgoround/colection"
import Colection2 from "@/components/custom-ui/playgoround/colection-2"
import Footer from "@/components/custom-ui/playgoround/footer"
import Header2 from "@/components/custom-ui/playgoround/header-2"
import Hero from "@/components/custom-ui/playgoround/hero"
import Review from "@/components/custom-ui/playgoround/review"

export default function IndexPage() {
  return (
    <section className="container grid items-center">
      {/* <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div> */}
      <Colection />
      <Colection2 />
      <Book />
      <Review />
      <Blog />
      <Header2 />
      <Footer />
    </section>
  )
}
