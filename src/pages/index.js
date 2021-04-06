import "../styles/index.scss"
import * as React from "react"
import Layout from "../components/Layout/index"
import Hero from "../components/Homepage/Hero/index"
import Parolen from "../components/Homepage/Parolen/index"
import Themen from "../components/Homepage/Themen/index"
import Werte from "../components/Homepage/Werte/index"
import Verpassen from "../components/Homepage/Verpassen/index"
import Engagement from "../components/Homepage/Engagement/index"
import Twitterfeed from "../components/Homepage/TwitterFeed/index"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Parolen />
    <Themen />
    {/* <Werte />
    <Verpassen />
    <Engagement/>
    <Twitterfeed /> */}
    
  </Layout>
)

export default IndexPage
