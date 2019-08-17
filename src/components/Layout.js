import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import CookieConsent from "react-cookie-consent"
import PropTypes from "prop-types"

import About from "../components/About"
import Links from "../components/Links"
import profileImage from "../assets/images/gusfune.jpg"
import favicon16 from "../assets/favicons/favicon-16x16.png"
import favicon32 from "../assets/favicons/favicon-32x32.png"
import "./Layout.scss"

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query MetadataQuery {
        site {
          siteMetadata {
            title
            description
            url
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description,
            },
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
        <div className="index">
          <div className="main">{children}</div>

          <div className="aside">
            <div className="top">
              <About />
            </div>
            <div className="bottom">
              <Links />
            </div>
          </div>
        </div>
        <CookieConsent
          location="bottom"
          buttonText="Ok!"
          cookieName="gusfuneCookie"
          style={{ background: "#111", fontSize: "1.1rem" }}
          buttonStyle={{ color: "#000", background: "#fff" }}
          expires={150}
        >
          This website uses cookies so I can find ways to improve it over time.
          Because of regulation, I am obliged to tell you so, but no worries,
          all data is kept anonymous and never shared with third-parties.{" "}
        </CookieConsent>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
