import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { Trans } from "react-i18next"

import Layout from "../components/layout"
import "../components/i18n"
import profileImage from "../assets/images/gusfune.jpg"
import favicon16 from "../assets/favicons/favicon-16x16.png"
import favicon32 from "../assets/favicons/favicon-32x32.png"
import ProjectsSection from "../components/ProjectsSection"
import RecommendationSection from "../components/RecommendationSection"

const IndexPage = ({ data }) => (
  <div className="template-wrapper">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: data.site.siteMetadata.description },
        { name: "keywords", content: data.site.siteMetadata.keywords },
        { property: "og:url", content: data.site.siteMetadata.url },
        { property: "og:image", content: profileImage },
        { property: "og:title", content: data.site.siteMetadata.title },
        {
          property: "og:description",
          content: data.site.siteMetadata.description,
        },
      ]}
      link={[
        { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16 },
        { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32 },
        {
          rel: "stylesheet",
          type: "text/css",
          charset: "UTF-8",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          sizes: "32x32",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
        },
      ]}
    />
    <Layout>
      <h2>
        <Trans i18nKey="hi">Hi</Trans>, I'm{" "}
        <span className="bold">Gus Fune</span>
      </h2>

      <h3 className="bold">
        I'm a highly technical Web & Mobile Product Manager who delivered over
        100 products to scale.
      </h3>
      <ProjectsSection />
      <RecommendationSection />
    </Layout>
  </div>
)

IndexPage.propTypes = {
  children: PropTypes.func,
}

export default IndexPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        url
        keywords
      }
    }
  }
`
