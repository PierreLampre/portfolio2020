import React from 'react'
import styled from "styled-components"
import resume from "./img/my_resume_2020.pdf"
import phoneIcon from "./img/phone.jpg"
import emailIcon from "./img/email.jpg"
import resumeIcon from "./img/resume.png"

const TheGrid = styled.div`
display: grid;
grid-template-rows: .5fr 1fr; 
grid-template-columns: 1fr 1fr 1fr;
margin-bottom: 80px;
@media screen and (max-width: 640px) {

grid-template-columns: auto;
grid-template-rows: auto auto auto auto;
grid-gap: 25px;
width: 100%;
}
`

const Header = styled.h1`
align-self: center;
justify-self: center;
-webkit-text-stroke: 1.4px #4C076F; 
text-shadow: 1px 1px 3px black; 
color: #9B2CD5;
font-weight: bold;
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 2;
grid-column-end: 3;
margin: 30px 0px 30px 0px;
font-size: 38px;
@media screen and (max-width: 1005px) {

  font-size: 28px;

}
@media screen and (max-width: 1005px) {

font-size: 24px;

}
@media screen and (max-width: 640px) {

grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 1;
grid-column-end: 2;

}
`

const Phone = styled.img.attrs({
  src: phoneIcon
})`
grid-row-start: 1;
grid-row-end: 2;
justify-self: center;
width: 100px;
height: 100px;
`

const Email = styled.img.attrs({
  src: emailIcon
})`
grid-row-start: 1;
grid-row-end: 2;
justify-self: center;
width: 100px;
height: 100px;
`

const Resume = styled.img.attrs({
  src: resumeIcon
})`
grid-row-start: 1;
grid-row-end: 2;
justify-self: center;
width: 100px;
height: 100px;
`

const MaterialsPhone = styled.div`
grid-row-start: 2;
grid-row-end: 3;
justify-self: center;
display: grid;
grid-template-rows: 1fr auto;
@media screen and (max-width: 640px) {

grid-row-start: 2;
grid-row-end: 3;
grid-column-start: 1;
grid-column-end: 2;

}
`
const MaterialsEmail = styled.div`
grid-row-start: 2;
grid-row-end: 3;
justify-self: center;
display: grid;
grid-template-rows: 1fr auto;
@media screen and (max-width: 640px) {

grid-row-start: 3;
grid-row-end: 4;
grid-column-start: 1;
grid-column-end: 2;

}
`
const MaterialsRes = styled.div`
grid-row-start: 2;
grid-row-end: 3;
justify-self: center;
display: grid;
grid-template-rows: 1fr auto;
@media screen and (max-width: 640px) {

grid-row-start: 4;
grid-row-end: 5;
grid-column-start: 1;
grid-column-end: 2;

}
`

export default function Contact() {
  return (
    <div>
      <TheGrid>
        <Header>Let's Get In Touch!</Header>
        <MaterialsPhone><Phone /><h4 style={{justifySelf: "center"}}>Phone:</h4> 856-982-3258</MaterialsPhone>
        <MaterialsEmail><Email /><h4 style={{justifySelf: "center"}}>Email:</h4><a style={{ color: "black", textDecoration: "none"}} href="mailto:pierrelampre@gmail.com"> pierrelampre@gmail.com</a></MaterialsEmail>
        <MaterialsRes><Resume /><a style={{ color: "black", textDecoration: "none"}} href={resume} download> <h4 id="my-resume">Download My Resume</h4></a></MaterialsRes>
      </TheGrid>
    </div>
  )
}
