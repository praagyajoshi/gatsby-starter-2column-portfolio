import React from 'react'
import Section from './Section'
import ProjectUnit from './ProjectUnit'

import { StaticQuery, graphql } from 'gatsby'

//import connectorLogo from '../../assets/images/projects/connector.png'
//import rogueLogo from '../../assets/images/projects/rogue.png'
//import olaLogo from '../../assets/images/projects/ola.svg'

export default ( children ) => (
  <StaticQuery
    query={graphql`
      query ProjectsSectionQuery {
        allContentfulProject {
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
              logo={node.logo.file.url}
              colour={node.colour}
              title={node.title}
              link={node.link}
              subtitle={node.subtitle}
              role={node.role}
              year={node.year}
            />
          ))}
          {/*}
          <ProjectUnit
              logo={olaLogo}
              colour="#ffffff"
              title="OLA Australia"
              link="https://ola.com.au/"
              subtitle="Main developer and maintenance for a new OLA Australia and New Zealand website."
              role="Led Developer"
              year="2019"
            />
            <ProjectUnit
              logo={connectorLogo}
              colour="#442159"
              title="Connector"
              link="https://connector.ie/"
              subtitle="Led web development team for agency website."
              role="Lead Developer"
              year="2018"
            />
            <ProjectUnit
              logo={rogueLogo}
              colour="#0c70a5"
              title="Developer"
              link="http://www.roguesnail.com/"
              subtitle="Developed the website for this independent game company."
              role="Developer"
              year="2017"
            />
            {*/}
          </div>
        </Section>
    )}
  />
)