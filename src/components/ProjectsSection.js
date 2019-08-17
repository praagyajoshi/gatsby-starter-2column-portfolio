import React from "react"
import Section from "./Section"
import ProjectUnit from "./ProjectUnit"

import { StaticQuery, graphql } from "gatsby"

export default children => (
  <StaticQuery
    query={graphql`
      query ProjectsSectionQuery {
        allContentfulProject(sort: { fields: [year], order: DESC }) {
          nodes {
            id
            logo {
              file {
                url
              }
            }
            colour
            title
            link
            links {
              link
              name
              platform
            }
            subtitle
            role
            year
          }
        }
      }
    `}
    render={data => (
      <Section title="These are some selected projects from the last years that I'm really proud of">
        <div className="row">
          {data.allContentfulProject.nodes.map(node => (
            <ProjectUnit
              id={node.id}
              key={node.id}
              logo={node.logo.file.url}
              colour={node.colour}
              title={node.title}
              link={node.link}
              subtitle={node.subtitle}
              role={node.role}
              year={node.year}
              links={node.links}
            />
          ))}
        </div>
      </Section>
    )}
  />
)
