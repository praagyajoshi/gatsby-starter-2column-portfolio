import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import zomatoLogo from '../../assets/images/experience/zomato-logo.svg'
import fitsoLogo from '../../assets/images/experience/fitso-logo.jpg'
import kayakoLogo from '../../assets/images/experience/kayako-logo-2.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={zomatoLogo}
            colour='#CB202D'
            title='Zomato'
            link='https://www.zomato.com/'
            timeperiod='2014 - 2015'
            subtitle='Learnt the ins and outs of product development and
              built various features including a completely new product.'
          />
          <ExperienceUnit
            logo={fitsoLogo}
            colour='#FFFFFF'
            title='Fitso'
            link='https://www.getfitso.com/'
            timeperiod='2016'
            subtitle='Built real time GPS tracking on the iOS app,
              all consumer facing web modules and external APIs in
              this early stage startup.'
          />
          <ExperienceUnit
            logo={kayakoLogo}
            colour='#403949'
            title='Kayako'
            link='https://www.kayako.com/'
            timeperiod='2017 - 2018'
            subtitle='Worked as a Product Engineer on email processing,
              push notifications, SLAs amongst other things.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
