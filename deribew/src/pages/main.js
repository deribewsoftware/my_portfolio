import React from 'react'
import Hero from '../components/hero';
import { css } from '@emotion/css';
import Project from '../components/project';
import Skill from '../components/skill';
import Title from '../components/title';
import About from '../components/about';
import Contact from '../components/contact';

const Main = () => {
  return (
    <div>

      <Hero/>
      <Skill/>



      <div
      className={css`
      margin-top:80px;
      
      `}
      >
        <Title content={'Projects'}/>
      <div
      className={css`
      margin-top:80px;
      padding:20px;
      display:flex;
      justify-content:center;
      gap:40px;
      flex-wrap:wrap;
      `}
      >
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </div>
      </div>

      {/* about me */}
      <div
      className={
        css`
        align-items:center;
        display:flex;
        justify-content:center;
        flex-direction:column;
        `
      }
      >
      <Title content={'About Me'}/>
      <About/>
      </div>


{/* Contact me */}

<div
      className={
        css`
        align-items:center;
        display:flex;
        justify-content:center;
        flex-direction:column;
        `
      }
      >
      <Title content={'Contact Me'}/>
      <Contact/>
      </div>
    </div>
  )
}

export default Main;
