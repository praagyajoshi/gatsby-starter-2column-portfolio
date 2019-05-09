import React from 'react'
import Section from '../Section'
import ProjectUnit from '../ProjectUnit'

import golLogo from '../../assets/images/projects/gol.png'
import bradescoLogo from '../../assets/images/projects/bradesco.png'
import talkativeLogo from '../../assets/images/projects/talkative.svg'
import connectorLogo from '../../assets/images/projects/connector.png'
import rogueLogo from '../../assets/images/projects/rogue.png'
import olaLogo from '../../assets/images/projects/ola.svg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="These are some selected projects from the last years that I'm really proud of">
        <div className="row">
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
        {*/}
        <ProjectUnit
            logo={talkativeLogo}
            colour="#01bb9b"
            title="Talkative"
            link="https://talkative.media/"
            subtitle="Led the whole product team for the development of a new product for Web, iOS and Android. It kept over 4,5 starts reviews on stores."
            role="CTO"
            year="2017"
          />
        <ProjectUnit
            logo={golLogo}
            colour="#FF7122"
            title="GOL Linhas Aéreas"
            link="https://itunes.apple.com/br/app/gol-check-in-status-do-voo/id337961662?mt=8"
            subtitle="Led the team responsible for redesigning and developing a more modern iOS and Android app for GOL, the biggest airline company in Brazil."
            role="Product Lead"
            year="2016"
          />
          <ProjectUnit
            logo={bradescoLogo}
            colour="#FFFFFF"
            title="Bradesco for Glass"
            link="https://banco.bradesco/"
            subtitle="Led the production of the first wearable product in Brazil for Bradesco, the third biggest bank in the country."
            role="Product Lead"
            year="2013"
          />
          {/*}
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
    )
  }
}

export default ProjectsSection
