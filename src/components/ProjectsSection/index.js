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
      <Section title="Selected Projects">
        <div className="row">
        <ProjectUnit
            logo={olaLogo}
            colour="#ffffff"
            title="OLA Australia"
            link="https://ola.com.au/"
            subtitle="Main developer and maintenance for OLA Australia website."
            role="Lead Developer"
            year="2019"
          />
        <ProjectUnit
            logo={talkativeLogo}
            colour="#01bb9b"
            title="Talkative"
            link="https://talkative.media/"
            subtitle="Lead the whole product team for development of the application. Team included developers, designers, testers, art directors, and support."
            role="CTO"
            year="2017"
            team="TEAM"
          />
        <ProjectUnit
            logo={golLogo}
            colour="#FF7122"
            title="GOL Linhas Aéreas"
            link="https://itunes.apple.com/br/app/gol-check-in-status-do-voo/id337961662?mt=8"
            subtitle="Lead the team responsible for redesigning and developing the new GOL app. Team included designers, developers, testers, translators and copywriters."
            role="Product Lead"
            year="2016"
          />
          
        {/*}
          <ProjectUnit
            logo={bradescoLogo}
            colour="#FFFFFF"
            title="Bradesco for Glass"
            link="https://banco.bradesco/"
            subtitle="Lead the team responsible for creating the first Google Glass application released in Brazil working with developers, designers and client."
          />
          <ProjectUnit
            logo={connectorLogo}
            colour="#442159"
            title="Connector"
            link="https://connector.ie/"
            subtitle="Lead development team for front-end and part of back-end work for agency website."
          />
          <ProjectUnit
            logo={rogueLogo}
            colour="#0c70a5"
            title="Rogue Snail"
            link="http://www.roguesnail.com/"
            subtitle="Developed the website for this independent game company."
          />
        {*/}
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
