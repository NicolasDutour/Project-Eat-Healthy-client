import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Provider } from "react-redux";
import PropTypes from "prop-types"
import { ThemeProvider } from "@material-ui/styles"
import { CssBaseline } from "@material-ui/core"

import Navbar from "./Navbar"
import store from '../store'

import { theme, useStyles } from "./Styles/StyleLayout"

const Layout = ({ children }) => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <main className={classes.main}>{children}</main>
      </Provider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
