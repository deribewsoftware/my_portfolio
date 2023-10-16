import styled from '@emotion/styled'
import React from 'react'

const TitleStyle=styled.div`

font-size:50px;
padding:20px 0;
font-weight:bold;
letter-spacing:2px;
word-spacing:1px;
border-bottom:1px solid #324252
`
const Title = (props) => {
  return (
    <TitleStyle>
      {props.content}
    </TitleStyle>
  )
}

export default Title
