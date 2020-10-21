import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Register from "../components/pages/Register"

const RegisterPage = () => {
    return (
        <Layout>
            <SEO title="Register" />
            <Register />
        </Layout>
    )
}

export default RegisterPage
