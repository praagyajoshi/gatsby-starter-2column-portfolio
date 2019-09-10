import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./About.scss"

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        CSPOImage: file(relativePath: { eq: "seal-cspo.png" }) {
          childImageSharp {
            fixed(width: 92, height: 92) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        Avatar: file(relativePath: { eq: "gusfune.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 180, maxHeight: 180) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className="about">
        <div className="image">
          <Img
            title="Gus fune"
            alt="Gus fune"
            fluid={data.Avatar.childImageSharp.fluid}
          />
        </div>
        <div className="bio">
          <p>
            I’m an experienced product manager who can fix hard-to-find bugs,
            test design changes in the browser, and automate anything my team
            needs to get done faster.
          </p>
          <p>
            I’ve delivered over 100 projects for clients like 3M, Coca-Cola,
            Behold Studios, BMW, Heineken, McDonald's and Motorola. I’ve also
            worked with early-stage startups on everything from product research
            to hiring, team-building, and even accounting.
          </p>
        </div>
        <div className="certification">
          <Img
            title="Certified Scrum Product Owner®"
            alt="Certified Scrum Product Owner®"
            fixed={data.CSPOImage.childImageSharp.fixed}
          />
        </div>
      </div>
    )}
  />
)
export default About
