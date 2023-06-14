import React from "react"

export default function InputTest() {
  return (
    <div className="w-full max-w-md">
      <label htmlFor="author" className="block font-medium text-gray-700">
        Author:
      </label>
      <select
        id="author"
        name="author[]"
        multiple
        className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="Author 1">Author 1</option>
        <option value="Author 2">Author 2</option>
        <option value="Author 3">Author 3</option>
        <option value="Author 4">Author 4</option>
      </select>
    </div>
  )
}
