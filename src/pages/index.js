import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query ArticlesQuery {
      allStrapiArticle {
        nodes {
          title
          content
          created_at
          strapiId
          author {
            username
          }
          description
        }
      }
    }
  `)
  return (

    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      {
        data.allStrapiArticle.nodes.map(article => {
          return (
            <div key={article.strapiId}>
              <p> {article.title} </p>
              <p> {article.content} </p>
              <p> {article.author.username} </p>
              <p> {article.created_at} </p>
              <p> {article.description} </p>
            </div>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage
