import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Home from "../components/pages/Home"

const Index = () => {
  return (
    <Layout>
      <SEO title="Accueil" />
      <Home />
    </Layout>
  )
}

export default Index
