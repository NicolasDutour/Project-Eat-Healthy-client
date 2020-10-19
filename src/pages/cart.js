import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Cart from "../components/pages/Cart"

const CartPage = () => {
    return (
        <Layout>
            <SEO title="Panier" />
            <Cart />
        </Layout>
    )
}

export default CartPage
