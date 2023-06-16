"use client"

import React, { useCallback } from "react"
import Link from "next/link"
import { useAddNewBookMutation } from "@/redux/features/book/bookApi.slice"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { categoriesCheckList, categoriesList } from "@/config/category"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const BookFormSchema = z.object({
  title: z.string(),
  author: z.string(),
  illustrator: z.string(),
  publisher: z.string(),
  publicationYear: z.string(),
  description: z.string(),
  cover: z.any(),
  images: z.any(),
  category: z.array(z.string()),
  price: z.number(),
  presalePrice: z.number(),
  quantity: z.number(),
  pages: z.number(),
  weight: z.number(),
  length: z.number(),
  width: z.number(),
  height: z.number(),
  language: z.string(),
  isbn: z.string(),
  status: z.enum(["in stock", "out of stock", "pre order"]),
})

type BookFormValues = z.infer<typeof BookFormSchema>

const defaultValues: Partial<BookFormValues> = {
  title: "",
  author: "",
  illustrator: "",
  publisher: "",
  publicationYear: "",
  description: "",
  cover: "",
  images: [],
  category: [""],
  price: 0,
  presalePrice: 0,
  quantity: 0,
  pages: 0,
  weight: 0,
  length: 0,
  width: 0,
  height: 0,
  language: "indonesia",
  isbn: "",
  status: "out of stock",
}

const listItems = [
  ...categoriesCheckList(categoriesList[0]),
  ...categoriesCheckList(categoriesList[1]),
  ...categoriesCheckList(categoriesList[2]),
]

export default function CreateBook() {
  const [addNewBook, { isLoading, isSuccess, isError, error }] =
    useAddNewBookMutation()
  const form = useForm<BookFormValues>({
    resolver: zodResolver(BookFormSchema),
    defaultValues,
    mode: "onChange",
  })
  const { toast } = useToast()
  async function onSubmit(data: BookFormValues) {
    const formData = new FormData()
    formData.append("title", data.title)
    formData.append("author", data.author)
    formData.append("illustrator", data.illustrator)
    formData.append("publisher", data.publisher)
    formData.append("publicationYear", data.publicationYear)
    formData.append("description", data.description)
    formData.append("cover", data.cover)
    for (let i = 0; i < data.images.length; i++) {
      formData.append("images", data.images[i])
    }
    for (let i = 1; i < data.category.length; i++) {
      formData.append("category", data.category[i])
    }
    formData.append("price", data.price.toString())
    formData.append("presalePrice", data.presalePrice.toString())
    formData.append("quantity", data.quantity.toString())
    formData.append("pages", data.pages.toString())
    formData.append("weight", data.weight.toString())
    formData.append("length", data.length.toString())
    formData.append("width", data.width.toString())
    formData.append("height", data.height.toString())
    formData.append("language", data.language)
    formData.append("isbn", data.isbn)
    formData.append("status", data.status)
    try {
      const addBookResponse = await addNewBook(formData).unwrap()
      toast({
        title: "Scheduled: Catch up ",
        description: "Friday, February 10, 2023 at 5:57 PM",
      })
    } catch (error) {
      console.log(error)
      toast({
        variant: "destructive",
        title: "Scheduled: Catch up ",
        description: "Friday, February 10, 2023 at 5:57 PM",
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        encType="multipart/form-data"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Judul buku</FormLabel>
                <FormControl>
                  <Input placeholder="judul buku" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Penulis</FormLabel>
                <FormControl>
                  <Input placeholder="penulis" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="illustrator"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Illustrator</FormLabel>
                <FormControl>
                  <Input placeholder="illustrator" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="publisher"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Penerbit</FormLabel>
                <FormControl>
                  <Input placeholder="Penerbit Buku" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="publicationYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tahun terbit</FormLabel>
                <FormControl>
                  <Input placeholder="Tahun buku diterbitkan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deskripsi</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Deskripsi buku"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Anda dapat menambahkan simbol <span>#</span> di depan kata
                  untuk menambahkan tag
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cover"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover buku</FormLabel>
                <FormControl>
                  <Input
                    id="picture"
                    type="file"
                    className="resize-none"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      if (event.target.files) {
                        const file = event.target.files[0]
                        field.onChange(file)
                      }
                    }}
                  />
                </FormControl>
                <FormDescription>Upload Cover Buku</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images buku</FormLabel>
                <FormControl>
                  <Input
                    id="images"
                    type="file"
                    multiple
                    className="resize-none"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      if (event.target.files) {
                        const files = event.target.files
                        field.onChange(files)
                      }
                    }}
                  />
                </FormControl>
                <FormDescription>Upload Images Buku</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Harga buku</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Harga jual buku"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        Number.isNaN(parseFloat(e.target.value))
                          ? 0
                          : parseFloat(e.target.value)
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="presalePrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Harga beli buku</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Harga buku dari penerbit"
                    {...field}
                    type="number"
                    onChange={(e) =>
                      field.onChange(
                        Number.isNaN(parseFloat(e.target.value))
                          ? 0
                          : parseFloat(e.target.value)
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stok buku</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jumlah total stok buku"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        Number.isNaN(parseFloat(e.target.value))
                          ? 0
                          : parseFloat(e.target.value)
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jumlah halaman</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jumlah total halaman buku"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        Number.isNaN(parseFloat(e.target.value))
                          ? 0
                          : parseFloat(e.target.value)
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Berat buku</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Berat buku dalam gram"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        Number.isNaN(parseFloat(e.target.value))
                          ? 0
                          : parseFloat(e.target.value)
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="length"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Panjang buku</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Panjang buku dalam cm"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        Number.isNaN(parseFloat(e.target.value))
                          ? 0
                          : parseFloat(e.target.value)
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lebar buku</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Lebar buku dalam cm"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        Number.isNaN(parseFloat(e.target.value))
                          ? 0
                          : parseFloat(e.target.value)
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ketebalan buku</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ketebalan buku dalam cm"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        Number.isNaN(parseFloat(e.target.value))
                          ? 0
                          : parseFloat(e.target.value)
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isbn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input placeholder="Kode ISBN" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="category"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Kategori buku</FormLabel>
                <FormDescription>
                  Pilih kategori yang sesuai, bisa lebih dari satu
                </FormDescription>
              </div>
              <div className="grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
                {listItems.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="category"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Bahasa</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="indonesia" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Bahasa Indonesia
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="inggris" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Bahasa Inggris
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="daerah" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Bahasa Daerah
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Status ketersediaan buku</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="in stock" />
                      </FormControl>
                      <FormLabel className="font-normal">In Stock</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="out of stock" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Out of Stock
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="pre order" />
                      </FormControl>
                      <FormLabel className="font-normal">Pre Order</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="my-12 flex w-full">
          <Button className="ml-auto">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Upload Buku
          </Button>
        </div>
      </form>
    </Form>
  )
}
