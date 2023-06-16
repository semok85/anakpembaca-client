export interface Book {
  id: string
  title: string
  author: string
  illustrator: string
  publisher: string
  publicationYear: string
  description: string
  cover: string
  images: { fileName: string; url: string; id: string }[]
  category: string[]
  price: number
  presalePrice: number
  quantity: number
  pages: number
  weight: number
  length: number
  width: number
  height: number
  language: string
  isbn: string
  status: "in stock" | "out of stock" | "pre order"
}
