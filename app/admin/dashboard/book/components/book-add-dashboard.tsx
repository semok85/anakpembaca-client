"use client"

import * as React from "react"
import Link from "next/link"
import { useAddNewBookMutation } from "@/redux/features/book/bookApi.slice"
import { zodResolver } from "@hookform/resolvers/zod"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const BookFormSchema = z.object({
  title: z.string(),
  // author: z.array(
  //   z.object({
  //     name: z.string(),
  //   })
  // ),
  author: z.string(),
  illustrator: z.string(),
  publisher: z.string(),
  publicationYear: z.string(),
  description: z.string(),
  cover: z.any(),
  images: z.any(),
  category: z.array(z.string()),
  // price: z.number(),
  // presalePrice: z.number(),
  // quantity: z.number(),
  // pages: z.number(),
  // weight: z.number(),
  // dimention: z.object({
  //   length: z.number(),
  //   width: z.number(),
  //   height: z.number(),
  // }),
  // material: z.string(),
  // language: z.string(),
  // isbn: z.string(),
  // tags: z.array(z.string()),
  // status: z.enum(["available", "out of stock", "pre-order"]),
})

type BookFormValues = z.infer<typeof BookFormSchema>

// This can come from your database or API.
const defaultValues: Partial<BookFormValues> = {
  title: "",
  // author: [{ name: "" }],
  author: "",
  illustrator: "",
  publisher: "",
  publicationYear: "",
  description: "",
  cover: "",
  images: [],
  category: [""],
  // price: 0,
  // presalePrice: 0,
  // quantity: 0,
  // pages: 0,
  // weight: 0,
  // dimention: {
  //   length: 0,
  //   width: 0,
  //   height: 0,
  // },
  // material: "",
  // language: "",
  // isbn: "",
  // tags: [""],
  // status: "out of stock",
}

const listItems = [
  ...categoriesCheckList(categoriesList[0]),
  ...categoriesCheckList(categoriesList[1]),
  ...categoriesCheckList(categoriesList[2]),
]

export default function AddBookDashboard() {
  const [addNewBook, { isLoading, isSuccess, isError, error }] =
    useAddNewBookMutation()
  const form = useForm<BookFormValues>({
    resolver: zodResolver(BookFormSchema),
    defaultValues,
    mode: "onChange",
  })

  console.log("Test")
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
    try {
      const addBookResponse = await addNewBook(formData)
      console.log("Response :", addBookResponse)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        encType="multipart/form-data"
      >
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
                Anda dapat menambahkan simbol <span>#</span> di depan kata untuk
                menambahkan tag
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
        <FormField
          control={form.control}
          name="category"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Kategori buku</FormLabel>
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
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}
