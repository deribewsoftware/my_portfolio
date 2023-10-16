import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/css'

const ProjectStyled=styled.div`
width: 600px;
background-color: #ffffff;

color:#282c34;
box-shadow: 0 0 3px  rgba(0,0,0,0.2);
border-radius:6px;

`
const Link=styled.a`
text-decoration:none;
font-size:16px;
color:rgba(10,10,205,1);
padding:20px;
transition:all 0.5s ease-in-out;
:hover{
    font-weight:500;
text-decoration:underline
}
`
const Project = () => {
  return (
    <ProjectStyled>
        <iframe
        className={css`
        overflow-x: hidden;
        border-radius:6px;
        
        `}
        height='400px'
        width='99%'
        title='Embedded website'
        src='https://react-project-7kedjbi4r-deribew-shimelis-projects.vercel.app/'
        />

      
      <h1
       className={css`
       font-size:22px;
       font-weight:bold;
       
       `}
      >Project Title</h1>


      <p
       className={css`
       font-size:14px;
       color:gray;
       
       `}
      >Keep in mind that this CSS will only affect WebKit browsers like Chrome and Safari.
       Other browsers have their own scrollbar styles, which can be harder to customize due to 
       browser limitations.Keep in mind that this CSS will only affect WebKit browsers like 
       Chrome and Safari. Other browsers have their own scrollbar styles, which can be harder 
       to customize due to browser limitations.Keep in mind that this CSS will only affect WebKit browsers like Chrome and Safari.
       Other browsers have their own scrollbar styles, which can be harder to customize due to browser limitations.vv</p>
      <div
       className={css`
       display: flex;
       gap:30px;
       justify-content:center;
       
       `}
      >
        <Link>Github repo</Link>
        <Link>Deployment Link</Link>
      </div>
    </ProjectStyled>
  )
}

export default Project
