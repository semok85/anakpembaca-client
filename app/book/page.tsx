import { Metadata } from "next"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Book } from "./components/book"
import { Menu } from "./components/menu"
import { PodcastEmptyPlaceholder } from "./components/podcast-empty-placeholder"
import { Sidebar } from "./components/sidebar"
import { allBooks, madeForYouAlbums, topRatedBooks } from "./data/library"
import { playlists } from "./data/playlists"
import "./styles.css"
import Image from "next/image"
import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Cari buku",
  description: "Cari buku berdasarkan kategori",
}

export default function MusicPage() {
  return (
    <>
      <Sidebar playlists={playlists} className=" hidden w-60 lg:block" />
      <div className="w-full lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
          <Tabs defaultValue="buku-anak" className="h-full space-y-6">
            <div className="space-between flex items-center">
              <TabsList>
                <TabsTrigger value="buku-anak" className="relative">
                  Buku anak
                </TabsTrigger>
                <TabsTrigger value="podcasts">Novel</TabsTrigger>
                <TabsTrigger value="live" disabled>
                  Buku Parenting
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto mr-4">
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add music
                </Button>
              </div>
            </div>
            <TabsContent
              value="buku-anak"
              className="border-none p-0 outline-none"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Listen Now
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Top picks for you. Updated daily.
                  </p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="relative">
                <div className="lg:grid-col-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                  {allBooks.map((book) => (
                    <Book
                      key={book.title}
                      book={book}
                      className="w-[full]"
                      aspectRatio="portrait"
                      width={200}
                      height={330}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="podcasts"
              className="h-full flex-col border-none p-0 data-[state=active]:flex"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    New Episodes
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Your favorite podcasts. Updated daily.
                  </p>
                </div>
              </div>
              <Separator className="my-4" />
              <PodcastEmptyPlaceholder />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
