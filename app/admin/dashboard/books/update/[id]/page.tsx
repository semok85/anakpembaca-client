"use client"

import React, { useEffect } from "react"
import { useParams } from "next/navigation"
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "@/redux/features/book/bookApi.slice"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { categoriesCheckList, categoriesList } from "@/config/category"
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
  status: z.string(),
})

type BookFormValues = z.infer<typeof BookFormSchema>

const listItems = [
  ...categoriesCheckList(categoriesList[0]),
  ...categoriesCheckList(categoriesList[1]),
  ...categoriesCheckList(categoriesList[2]),
]

export default function UpdateBook() {
  const { id } = useParams()
  const { data: book, isLoading: bookLoading } = useGetBookByIdQuery(id, {
    refetchOnMountOrArgChange: true,
    skip: false,
  })
  const defaultValues: Partial<BookFormValues> = {
    title: undefined,
    author: undefined,
    illustrator: undefined,
    publisher: undefined,
    publicationYear: undefined,
    description: undefined,
    cover: undefined,
    images: undefined,
    category: undefined,
    price: undefined,
    presalePrice: undefined,
    quantity: undefined,
    pages: undefined,
    weight: undefined,
    length: undefined,
    width: undefined,
    height: undefined,
    language: undefined,
    isbn: undefined,
    status: undefined,
  }
  console.log("defaut value :", defaultValues)
  const [updateBook, { isLoading }] = useUpdateBookMutation()

  const form = useForm<BookFormValues>({
    resolver: zodResolver(BookFormSchema),
    defaultValues,
    mode: "onChange",
  })
  const { toast } = useToast()
  async function onSubmit(data: BookFormValues) {
    console.log("OnSUBMIT")
    const formData = new FormData()
    formData.append("id", id)
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
      const updateResponse = await updateBook({ id, formData }).unwrap()
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
  useEffect(() => {
    if (book) {
      form.setValue("title", book.title)
      form.setValue("author", book.author)
      form.setValue("illustrator", book?.illustrator)
      form.setValue("publisher", book?.publisher)
      form.setValue("publicationYear", book?.publicationYear)
      form.setValue("description", book?.description)
      form.setValue("cover", book?.cover)
      form.setValue("images", book?.images)
      form.setValue("category", book?.category)
      form.setValue("price", book?.price)
      form.setValue("presalePrice", book?.presalePrice)
      form.setValue("quantity", book?.quantity)
      form.setValue("pages", book?.pages)
      form.setValue("weight", book?.weight)
      form.setValue("length", book?.length)
      form.setValue("width", book?.width)
      form.setValue("height", book?.height)
      form.setValue("language", book?.language)
      form.setValue("isbn", book?.isbn)
      form.setValue("status", book?.status)
    }
  }, [book, form])

  return (
    <div className="container">
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
                    <Input placeholder="Judul buku" {...field} />
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
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
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
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
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
    </div>
  )
}
