import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header/index"
import Footer from "./footer/index"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return data.site.siteMetadata
}

function Layout({ children }) {
  const { title, description } = useSiteMetadata()

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout