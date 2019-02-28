import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import golLogo from '../../assets/images/projects/gol.png'
import bradescoLogo from '../../assets/images/projects/bradesco.png'
import talkativeLogo from '../../assets/images/projects/talkative.svg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
        <ExperienceUnit
            logo={talkativeLogo}
            colour="#01bb9b"
            title="Talkative"
            link="https://talkative.media/"
            timeperiod="2016"
            subtitle="Led the whole product team for development of the application. Team included developers, designers, testers, art directors, and support."
          />
          <ExperienceUnit
            logo={golLogo}
            colour="#FF7122"
            title="GOL Linhas Aéreas"
            link="https://itunes.apple.com/br/app/gol-check-in-status-do-voo/id337961662?mt=8"
            subtitle="Led the team responsible for redesigning and developing the new GOL app. Team included designers, developers, testers, translators and copywriters."
          />
          <ExperienceUnit
            logo={bradescoLogo}
            colour="#FFFFFF"
            title="Bradesco for Glass"
            link="https://banco.bradesco/"
            subtitle="Led the team responsible for creating the first Google Glass application released in Brazil."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
