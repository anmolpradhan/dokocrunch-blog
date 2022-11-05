import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <div className="px-24 py-5 grid grid-cols-2 border border-b bg-white">
      <div>
        <Link href="/">
          <span className="text-xl bg-blue-500 text-white rounded-md p-2 cursor-pointer">
            Doko Crunch
          </span>
        </Link>
      </div>
      <div className="flex flex-row justify-end">
        {categories.map((category) => {
          return (
            <span key={category.id}>
              <Link href={`/category/${category.attributes.slug}`}>
                <span className="hover:text-blue-500 cursor-pointer p-2 uppercase">
                  {category.attributes.name}
                </span>
              </Link>
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Nav
