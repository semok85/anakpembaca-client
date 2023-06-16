import { RootState } from "@/redux/store"
import {
  EntityState,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit"

import type { Book } from "@/types/book"

import { apiSlice } from "../../service/api.slice"

const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.id as string,
})
const initialState = booksAdapter.getInitialState()

export const booksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<EntityState<Book>, void>({
      query: () => ({
        url: "/books",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError
        },
      }),
      transformResponse: (responseData: Book[]) => {
        const loadedBooks = responseData.map((book) => {
          return book
        })
        return booksAdapter.setAll(initialState, loadedBooks)
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Book", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Book", id } as const)),
          ]
        } else return [{ type: "Book", id: "LIST" }]
      },
    }),
    getBookById: builder.query<Book, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError
        },
      }),
      providesTags: (result, error, id) => [{ type: "Book", id }],
    }),
    addNewBook: builder.mutation<FormData, Partial<FormData>>({
      query: (formData) => ({
        url: "/books",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [{ type: "Book", id: "LIST" }],
    }),
    updateBook: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/books/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Book", id: arg.id }],
    }),
  }),
})

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useAddNewBookMutation,
  useUpdateBookMutation,
} = booksApiSlice

//returns the query result object
export const selectBooksResult = booksApiSlice.endpoints.getBooks.select()

// creates memoized selector
const selectBooksData = createSelector(
  selectBooksResult,
  (bookResult) => bookResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllBooks,
  selectById: selectBooksById,
  selectIds: selectBookIds,
  // Pass in a selector that returns the users slice of state
} = booksAdapter.getSelectors<RootState>(
  (state) => selectBooksData(state) ?? initialState
)
