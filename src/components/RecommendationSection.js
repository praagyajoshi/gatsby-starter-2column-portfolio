import React from "react"
import Section from "./Section"
import RecommendationUnit from "./RecommendationUnit"
import { StaticQuery, graphql } from "gatsby"

export default children => (
  <StaticQuery
    query={graphql`
      query RecommendationQuery {
        allContentfulRecommendation {
          nodes {
            id
            photo {
              title
              file {
                url
              }
            }
            name
            context
            content {
              content
            }
          }
        }
      }
    `}
    render={data => (
      <Section
        title="This is what some people said about working with me"
        className="recommendationSection"
      >
        {data.allContentfulRecommendation.nodes.map(node => (
          <RecommendationUnit
            id={node.id}
            key={node.id}
            photo={node.photo}
            name={node.name}
            context={node.context}
            text={node.content.content}
          />
        ))}
        <div className="row">
          <div className="col-xs-12">
            <p>
              <a href="https://www.linkedin.com/in/gusfune/" target="_blank">
                Want to read more? Check my Linkedin
              </a>
            </p>
          </div>
        </div>
      </Section>
    )}
  />
)
