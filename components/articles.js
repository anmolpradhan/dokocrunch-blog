import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {

  return (
      <div className="grid grid-cols-2 gap-4">
          {articles.map((article, i) => {
            return (
              <Card
                article={article}
                key={`article__left__${article.attributes.slug}`}
              />
            )
          })}
      </div>
  )
}

export default Articles
