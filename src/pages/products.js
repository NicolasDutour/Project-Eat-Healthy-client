import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Products from "../components/pages/Products"

const ProductsPage = () => {
    return (
        <Layout>
            <SEO title="Produits" />
            <Products />
        </Layout>
    )
}

export default ProductsPage
