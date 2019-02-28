import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import dijitallyLogo from '../../assets/images/experience/dijitally.svg'
import wololoLogo from '../../assets/images/experience/wololo.png'
import epicLogo from '../../assets/images/experience/epic.svg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={dijitallyLogo}
            colour='#000000'
            title='Dijitally'
            role='Tech Lead'
            link='https://www.dijitally.com/'
            timeperiod='2018 - Present'
            subtitle='Leading the restructuring of the technology department and all operations related to digital products.'
          />
          <ExperienceUnit
            logo={wololoLogo}
            colour='#382670'
            title='Wololo'
            role='CTO'
            link='https://talkative.media/'
            timeperiod='2017 – 2018'
            subtitle='Lead the Product Design and Development team with 16 employees, for the Talkative app for iOS, Android and Web. Role included drafting, implementing, and managing all team processes, deciding upon technology adoption with attention to cost-efficiency, and managing expectations from board members and investors.'
          />
          <ExperienceUnit
            logo={epicLogo}
            colour='#FFFFFF'
            title='Epic Awesome'
            role='Executive Producer'
            link='https://epicawesome.co'
            timeperiod='2011 - 2018'
            subtitle='I led and managed the product and projects lifecycle, from initial concepts to final delivery, managing a cross-functional team of designers, developers, copywriters, marketers, testers, etc.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
