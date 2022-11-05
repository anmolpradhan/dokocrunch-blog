import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div className=" drop-shadow-md hover:drop-shadow-xl cursor-pointer p-2 flex flex-col gap-2">
        <div>
          <NextImage image={article.attributes.image} />
        </div>
        <div>
          <span
            id="category"
            className="text-sm bg-blue-500 text-white rounded-md p-2 cursor-pointer"
          >
            {article.attributes.category.data.attributes.name}
          </span>
        </div>
        <p id="title" className="text-xl text-indigo-500">
          {article.attributes.title}
        </p>
      </div>
    </Link>
  )
}

export default Card
