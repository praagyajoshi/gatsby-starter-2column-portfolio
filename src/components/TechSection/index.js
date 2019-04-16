import React from 'react'
import Section from '../Section'
import TechUnit from '../TechUnit'


import csharpLogo from '../../assets/images/tech/csharp.svg'
import cssLogo from '../../assets/images/tech/css.svg'
import htmlLogo from '../../assets/images/tech/html.svg'
import javaLogo from '../../assets/images/tech/java.svg'
import javascriptLogo from '../../assets/images/tech/javascript.svg'
import phpLogo from '../../assets/images/tech/php.svg'
import pythonLogo from '../../assets/images/tech/python.svg'
import swiftLogo from '../../assets/images/tech/swift.svg'
import typescriptLogo from '../../assets/images/tech/typescript.svg'

class TechSection extends React.Component {
  render() {
    return (
      <Section title="Tech">
        <div className="row between-xs">
        <p>These are languages that have been used in projects I was involved. I am familiar with those, but not proficient with all.</p>
        <TechUnit
            logo={csharpLogo}
            subtitle="C#"
        />
        <TechUnit
            logo={cssLogo}
            subtitle="CSS"
        />
        <TechUnit
            logo={htmlLogo}
            subtitle="HTML"
        />
        <TechUnit
            logo={javaLogo}
            subtitle="JAVA"
        />
        <TechUnit
            logo={javascriptLogo}
            subtitle="Javascript"
        />
        <TechUnit
            logo={phpLogo}
            subtitle="PHP"
        />
        <TechUnit
            logo={pythonLogo}
            subtitle="Python"
        />
        <TechUnit
            logo={swiftLogo}
            subtitle="Swift"
        />
        <TechUnit
            logo={typescriptLogo}
            subtitle="Typescript"
        />
        </div>
      </Section>
    )
  }
}

export default TechSection
