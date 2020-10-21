import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Login from "../components/pages/Login"

const LoginPage = () => {
    return (
        <Layout>
            <SEO title="Login" />
            <Login />
        </Layout>
    )
}

export default LoginPage
