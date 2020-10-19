import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardProduct from "../CardProduct"

import { useStyles } from '../Styles/StyleProducts'

const getData = graphql`
query productsQuery {
    allStrapiProduct {
      nodes {
        ingredients
        name
        price
        id
        picture {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  const classes = useStyles()
  const data = useStaticQuery(getData)

  return (
    <div className={classes.container}>
      {data.allStrapiProduct.nodes.map(product => (
        <div key={product.id}>
          <CardProduct product={product} />
        </div>
      ))}
    </div>
  )
}

export default Products