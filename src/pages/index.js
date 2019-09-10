import React from "react"
import PropTypes from "prop-types"
import { Trans } from "react-i18next"

import Layout from "../components/Layout"
import "../components/i18n"
import ProjectsSection from "../components/ProjectsSection"
import RecommendationSection from "../components/RecommendationSection"

const IndexPage = ({ data }) => (
  <div className="template-wrapper">
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
