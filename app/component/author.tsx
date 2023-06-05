import React from "react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface AuthorCustom {
  title: string
  url: string
}

export default function Author({ title, url }: AuthorCustom) {
  return (
    <Card className="w-60 bg-gray-900 pt-5 text-center shadow hover:shadow-lg">
      <CardContent>
        <h2
          style={{ fontFamily: "Bebas Neue" }}
          className="scroll-m-20 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl tracking-tight text-transparent transition-colors first:mt-0"
        >
          {title}
        </h2>
      </CardContent>
      <CardFooter>
        <a href={url} className="ml-2 text-sm text-muted-foreground">
          Lihat semua
        </a>
      </CardFooter>
    </Card>
  )
}
