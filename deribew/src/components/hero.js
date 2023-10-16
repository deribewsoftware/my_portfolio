import {css} from '@emotion/css';
import styled from '@emotion/styled';
const HeroStyled=styled.div`
background-color: #282c34;
position: relative;
color:white;
display:flex;
height:600px;
justify-content:space-between;
flex-wrap:wrap;
`
const Hero=()=>{
return(
    <HeroStyled>
        <div className={css`
        margin-left:100px;
       
        margin-top:100px;
        `}>
            <span className={css`
            font-size:24px;
            
            font-family:Young Serif;
          
            color:orange;
            `}>Hello; I am</span>
<h1 className={css`
font-weight:800;
font-family:Roboto;
letter-spacing:2px;
font-size:48px;
`}>Deribew <br/> <span className={css`padding-left:200px;`}>Shimelis</span></h1>
<p className={css`
padding-left:20px;
            font-size:20px;
           font-family:Young Serif;
            color:orange;
            `}>Software Engineering at Addis Ababa University</p>
        </div>

        <div className={
            css`
            height:600px;
            `
        }>
        <img
        src='https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_1080,q_auto'
        alt='photo'
        height='100%'
        width='100%'
        />
        </div>
<div className={css`
position: absolute;
bottom: -50px;
width: 100%;
display:flex;
justify-content: center;
gap:20px;
flex-wrap:wrap;
`}>
<MyCard/>
<MyCard/>
<MyCard/>
</div>
    </HeroStyled>
)
}
export default Hero;










const Card=styled.div`
background-color: #ffffff;
height:100px;
color:#282c34;
box-shadow: 0 0 6px  rgba(0,0,0,0.4);
border-radius:10px;
padding:20px 0;
`
function MyCard() {
  return (
    <Card>
      <h1
      className={
        css`
        font-size:22px;
        transform:rotate(-10deg);
        color:orange;
        align-items:start;
        
        `
      }
       >I am:</h1>
      <h2
      className={
        css`
        font-size:20px;
        padding:0 10px;
        transform:rotate(-10deg);
        align-items:start;
        
        ::first-letter{
            color:orange;
            font-size:24px;
            font-weight:bold;
            font-family:Kanit;
        }
        
        `
      }
      >A Frontend Developer</h2>
    </Card>
  )
}


