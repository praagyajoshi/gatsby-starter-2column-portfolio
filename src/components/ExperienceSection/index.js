import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import dijitallyLogo from '../../assets/images/experience/dijitally.svg'
import wololoLogo from '../../assets/images/experience/wololo.png'
import epicLogo from '../../assets/images/experience/epic.svg'
import versusLogo from '../../assets/images/experience/versus.svg'
import tecnoblogLogo from '../../assets/images/experience/tecnoblog.png'
import papodehomemLogo from '../../assets/images/experience/papodehomem.png'

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
            logo={versusLogo}
            colour='#333'
            title='Versus FC'
            role='Chief Product Officer'
            link='https://versusfc.com/'
            timeperiod='2018'
            subtitle='Lead the initial work for the product and department organization for incubating company. Was main responsible for drafting all IT operations, design, and development of company prototype, MVP and investment pitch presentations.'
          />
          <ExperienceUnit
            logo={wololoLogo}
            colour='#382670'
            title='Wololo'
            role='Chief Technology Officer'
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
            subtitle='Managed over 200 projects among web and mobile products, from initial concepts to final delivery.'
          />
          <ExperienceUnit
            logo={papodehomemLogo}
            colour='#FFFFFF'
            title='Papo de Homem'
            role='Tech Manager'
            link='https://papodehomem.com.br'
            timeperiod='2006 - 2012'
            subtitle='I was responsible for all technological infrastructure and development for the web portal, managing and overseeing all programming work and budget, and conceptualizing and benchmarking innovative projects and display media.'
          />
          <ExperienceUnit
            logo={tecnoblogLogo}
            colour='#2180a7'
            title='Tecnoblog'
            role='Writer'
            link='https://tecnoblog.net'
            timeperiod='2011 - 2014'
            subtitle='Ffreelance contributor to a Brazilian technology website, writing articles, interviews, event coverages, and reviews in the field of games and technology.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
