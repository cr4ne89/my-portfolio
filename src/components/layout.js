/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import "./layout.css"


const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout
