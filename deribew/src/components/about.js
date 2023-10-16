import { css } from '@emotion/css'
import styled from '@emotion/styled'
import React from 'react'
const AboutStyle=styled.div`
position: relative;
display:flex;
flex-wrap: wrap;
background-color: #282c34;
margin-top:100px;
height:400px;
width:70%;
padding:10px;
color: orange;
margin-bottom:100px;


`
function About() {
  return (
    <AboutStyle>
      <div
      className={css`
      position: absolute;
      bottom:0;
      top:0;
      left:-100px;
      padding:20px;
      height:380px
      `}
      ><img src='https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/74612378_2391304317833409_2820987578821488224_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7a1959&_nc_ohc=c6KYo63VUHoAX_tJDpJ&_nc_ht=scontent.fadd2-1.fna&oh=00_AfDUJR3gcDlKVgJWdASq632gwsdLcijXy-lVKB_D9AXVYg&oe=65550031' alt='mypro' height='100%' width='100%'/></div>
      <p
      className={css`
      margin-left:200px;
     color: orange;
      padding:20px;
      
      `}
      > I'm Deribew Shimelis, a passionate Software Engineering enthusiast currently honing my skills at the esteemed Addis Ababa University. 🚀
      
      My journey into the world of technology began in the year 2000 E.C, and since then, I've been on an exhilarating learning curve, soaking in every byte of knowledge and every line of code. 💡
      
      Hailing from the picturesque village of Alemgena, my roots are deeply embedded in the simplicity and warmth of rural life. This unique background has not only enriched my perspective but also instilled in me a tenacious work ethic and an unyielding drive for excellence. 🌱
      
      Throughout my academic voyage, I've consistently achieved high grades, a testament to my unwavering commitment to mastering the intricacies of Software Engineering. Each grade is not just a mark, but a reflection of the dedication and curiosity that fuel my educational pursuits. 📚
      
      At Addis Ababa University, I've been fortunate to be part of a dynamic learning environment that's constantly pushing boundaries and setting new benchmarks in technological innovation. Here, I've had the privilege of delving into cutting-edge topics and collaborating with fellow enthusiasts who share the same passion for software engineering. 💻
      
      Beyond the classroom, I'm always on the lookout for the latest trends and breakthroughs in the tech world. Whether it's exploring new programming languages or delving into emerging technologies, my curiosity knows no bounds. 🌐
      
      In the grand tapestry of technology, I see myself as a thread, weaving together ideas, solutions, and innovations. With each project, I aim not just to write code, but to craft experiences that make a difference. 🌟
      
      As I continue on this thrilling journey, I'm excited about the challenges and opportunities that lie ahead. Every line of code is a step towards a future where technology not only solves problems but creates a better world. And I can't wait to be a part of that transformation. Let's build the future together! 🌈🚀g</p>
    </AboutStyle>
  )
}

export default About
