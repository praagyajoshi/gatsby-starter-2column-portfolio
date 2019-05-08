import React from 'react'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h2>
          Hi, I'm <span className="bold">Gus Fune</span>
        </h2>

        <h3 className="bold">
          I am a Web & Mobile Product Manager.
        </h3>

        {/*|}
        <h3 className="bold">whoaim</h3>

        <p>My passion for this comes from growing in a house where I had daily contact with programming. During my teenage years, I have learned to programme via books and then a few years later I co-founded a website which grew from zero to over 2 million readers when I left. This gave me a lot of knowledge in this area and soon I started freelancing for a couple of companies in Brazil.</p>
        <p>With a lot of projects coming I ended up opening my own company where I have delivered over 100 projects for all kinds of companies for a few years. Being tired from managing most of the non-fun aspects of a small company I have closed it and joined a startup as a CTO where I had the chance to work with a bigger team and focus more on the product managing fun.</p>
        <p>Looking for a career shift I left and gone back to freelancing which ended up landing me two remote roles linked to management and development, which I am doing at the moment.</p>
        <p>In the next months, I am moving to Sweden with my wife and am currently looking for a position where I can learn and use my skills.</p>
        {*/}
        <ProjectsSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
