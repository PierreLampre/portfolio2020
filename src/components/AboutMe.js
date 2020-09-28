import React from 'react'
import Me from "./img/me_simba.jpg"
import styled from "styled-components"
import bg from "./img/codingbg.jpg"
import bg2 from "./img/codingbg2.jpg"

const MeImg = styled.img.attrs({
  src: Me
})`
width: 200px;
height: 200px;
border: 1px solid blue;
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 2;
grid-column-end: 3;
border-radius: 36px;
margin-top: 125px;
align-self: center;
justify-self: center;
border: 2px solid white;
@media screen and (max-width: 620px) {

margin-top: 100px;

}
`

const TheGrid = styled.div`
display: grid;
grid-template-rows: 1fr .4fr .4fr;
grid-template-columns: .3fr 1fr .3fr;
background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
background-position: 40% 60%;
justify-self: center;
width: 100%;
@media screen and (max-width: 978px) {

  grid-template-columns: .1fr 1fr .1fr;

}
@media screen and (max-width: 736px) {

grid-template-columns: 1fr;
background-image: url(${bg2});

}
`

const Header = styled.h1`
align-self: center;
justify-self: center;
color: white;
-webkit-text-stroke: 1.4px black; 
text-shadow: 2px 3px 3px black; 
margin-bottom: 10px;
@media screen and (max-width: 620px) {

    font-size: 24px;

}
`

const MyStory = styled.div`
grid-row-start: 2;
grid-row-end: 3;
grid-column-start: 2;
grid-column-end: 3;
border: 2px solid black;
border-radius: 12px;
padding: 15px;
text-align: center;
margin: 30px 30px;
background-color: #3B3433;
color: white;
padding: 20px 10px 30px 10px;
@media screen and (max-width: 620px) {

justify-self: center;
padding: 30px 30px 30px 30px;
}
`

const ButtonBox = styled.div`
grid-row-start: 3;
grid-row-end: 4;
grid-column-start: 2;
grid-column-end: 3;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
margin-bottom: 130px;
@media screen and (max-width: 620px) {

  grid-template-columns: auto;
  margin-bottom: 65px;

}
`

const Button = styled.button`
width: 200px;
height: 40px;
justify-self: center;
background-color: #3B3433;
color: white;
border: none;
font-size: 20px;
border-radius: 16px;
cursor: pointer;
outline: none;

@media screen and (max-width: 620px) {

  margin-bottom: 10px;

}
`

export default function AboutMe() {
  return (
    <div>
      <TheGrid>
        <MeImg />
        <MyStory>
        <Header>Hi, I'm Justin. I'm a Full Stack Web Developer.</Header>
        I have a MERN stack skill set and a passion for creating beautiful UIs.  I'm in my element when I am creating something meaningful.  Some of my other interests include cooking, cats, and rock and roll.
        </MyStory>
        <ButtonBox>
          <a style={{justifySelf: "center"}} href="https://github.com/PierreLampre" target="_blank" rel="noopener noreferrer"><Button>GitHub</Button></a>
          <a style={{justifySelf: "center"}} href="https://www.linkedin.com/in/justin-mark-lampe/" target="_blank" rel="noopener noreferrer"><Button>LinkedIn</Button></a>
          <a style={{justifySelf: "center"}} href="mailto:pierrelampre@gmail.com" target="_blank" rel="noopener noreferrer"><Button>Email</Button></a>
        </ButtonBox>
      </TheGrid>
    </div>
  )
}
