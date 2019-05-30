import React from 'react'
import Section from './Section'
import RecommendationUnit from './RecommendationUnit'
import Slider from "react-slick";
import { StaticQuery, graphql } from 'gatsby'

const SliderSettings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 2500
};

export default ( children ) => (
  <StaticQuery
    query={graphql`
      query RecommendationQuery {
        allContentfulRecommendation {
            nodes {
              id
              photo {
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
        <Section title="This is what some people said about working with me" className="recommendationSection">
          <Slider {...SliderSettings}>
            {data.allContentfulRecommendation.nodes.map(node => (
              <RecommendationUnit
                id={node.id}
                photo={node.photo.file.url}
                name={node.name}
                context={node.context}
                text={node.content.content}
              />
            ))}
          </Slider>
        </Section>
    )}
  />
)