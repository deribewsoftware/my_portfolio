import React from 'react'
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import python from '../assets/python.png'
import java from '../assets/java.png';
import cssIcon from '../assets/css.png'
import html from '../assets/html.png';
import dart from '../assets/dart.png'
import javascript from '../assets/javascript.png';
import nodejs from '../assets/node.png'
import typescript from '../assets/typescript.png'
import c from '../assets/c.png'
import cplus from '../assets/c++.png';
//frameworks
import django from '../assets/django.png';
import nextJs from '../assets/nextJs.png'
import nestJs from '../assets/nestJs.png'
import flutter from '../assets/flutter.png'
import react from '../assets/react.png';
import angular from '../assets/angular.png';

const SkillStyled=styled.div`
display: flex;
position: relative;
height:600px;
flex-direction: column;

`
const ListCard = styled.div`
display: flex;
gap:10px;
width:400px;
flex-wrap: wrap;
`
const Image=styled.img`
height:80px;
width:80px;
object-fit: contain;
`

const Skill = () => {

    const programmingLanguages=[python, javascript, java,typescript,nodejs,dart,cssIcon,html,c,cplus]
    const frameworks=[angular,react,nestJs,nextJs,django,flutter]
  return (
    <SkillStyled>
      <div
       className={css`
       display: flex;
       flex-wrap: wrap;
       margin-top:100px;
       justify-content: space-around;
       `}
      >
       <ListCard>{programmingLanguages.map((language)=><Image src={language} alt='icon'/> )}</ListCard>

       <ListCard>{frameworks.map((framework)=><Image src={framework} alt='icon'/> )}</ListCard>
      </div>
      <div
      className={css`

      position: absolute;
     
      right: 30%;
      bottom: -50px;
      `}
      >
        <img
        className={css`
        width: 600px;
        `}
        src='https://thumbs.dreamstime.com/z/hispanic-man-standing-over-blue-background-pointing-to-both-sides-fingers-different-direction-disagree-287292514.jpg?w=992'
        />
      </div>
    </SkillStyled>
  )
}

export default Skill;
