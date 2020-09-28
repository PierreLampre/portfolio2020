import React from 'react'
import styled from "styled-components"
import homes from "./img/homes.jpeg"
import oth from "./img/oth.jpg"
import burger from "./img/burger.jpg"
import crystal from "./img/crystal.jpg"
import disco from "./img/disco.jpg"
import tubecast from "./img/tubecast.jpg"

const TheGrid = styled.div`
display: grid;
grid-template-rows: .1fr 1fr;
grid-template-columns: 1fr;
width: 100%;
`

const Header = styled.h1`
align-self: center;
justify-self: center;
-webkit-text-stroke: 1.4px #4C076F; 
text-shadow: 1px 1px 3px black; 
color: #9B2CD5;
font-weight: bold;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
grid-row-end: 2;
margin: 60px 0px 36px 0px;
font-size: 38px;
`

const ProjectRow = styled.div`
grid-row-start: 2;
grid-row-end: 3;
justify-self: center;
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto auto;
margin: 25px 0px 100px 0px;
grid-gap: 25px;
@media screen and (max-width: 1185px) {

  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;

}
@media screen and (max-width: 900px) {

grid-template-columns: 1fr;
grid-template-rows: auto auto auto auto auto auto;

}
@media screen and (max-width: 350px) {

width: 275px;

}
`

const Block1 = styled.div`
grid-row-start: 1;
grid-row-end: 2;
display: grid;
grid-template-rows: 150px 50px 50px auto;
border: 1px solid black;
width: 350px;
justify-self: center;
background-color: white;
justify-self: center;
`
const Block2 = styled.div`
grid-row-start: 1;
grid-row-end: 2;
display: grid;
grid-template-rows: 150px 50px 50px auto;
border: 1px solid black;
width: 350px;
justify-self: center;
background-color: white;
justify-self: center;
@media screen and (max-width: 900px) {

  grid-row-start: 2;
  grid-row-end: 3;

}
@media screen and (max-width: 350px) {

width: 275px;

}
`
const Block3 = styled.div`
grid-row-start: 1;
grid-row-end: 2;
display: grid;
grid-template-rows: 150px 50px 50px auto;
border: 1px solid black;
width: 350px;
justify-self: center;
background-color: white;
@media screen and (max-width: 1185px) {

grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 2;
grid-row-end: 3;

}
@media screen and (max-width: 900px) {

grid-row-start: 3;
grid-row-end: 4;

}
@media screen and (max-width: 350px) {

width: 275px;

}
`
const Block4 = styled.div`
grid-row-start: 2;
grid-row-end: 3;
display: grid;
grid-template-rows: 150px 50px 50px auto;
border: 1px solid black;
width: 350px;
justify-self: center;
background-color: white;
@media screen and (max-width: 1185px) {

grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 3;

}
@media screen and (max-width: 900px) {

grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 4;
grid-row-end: 5;

}
@media screen and (max-width: 350px) {

width: 275px;

}
`
const Block5 = styled.div`
grid-row-start: 2;
grid-row-end: 3;
display: grid;
grid-template-rows: 150px 50px 50px auto;
border: 1px solid black;
width: 350px;
justify-self: center;
background-color: white;
@media screen and (max-width: 1185px) {

grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 3;
grid-row-end: 4;

}
@media screen and (max-width: 900px) {

grid-row-start: 5;
grid-row-end: 6;

}
@media screen and (max-width: 350px) {

width: 275px;

}
`
const Block6 = styled.div`
grid-row-start: 2;
grid-row-end: 3;
display: grid;
grid-template-rows: 150px 50px 50px auto;
border: 1px solid black;
width: 350px;
justify-self: center;
background-color: white;
@media screen and (max-width: 1185px) {

grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 3;
grid-row-end: 4;

}
@media screen and (max-width: 900px) {

grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 6;
grid-row-end: 7;

}
@media screen and (max-width: 350px) {

  width: 275px;

}
`

const RentPic = styled.img.attrs({
  src: homes
})`
grid-row-start: 1;
grid-row-end: 2;
width: 350px;
height: 150px;
@media screen and (max-width: 350px) {

width: 275px;

}
`

const OTHPic = styled.img.attrs({
  src: oth
})`
grid-row-start: 1;
grid-row-end: 2;
width: 350px;
height: 150px;
@media screen and (max-width: 350px) {

width: 275px;

}
`

const BurgerPic = styled.img.attrs({
  src: burger
})`
grid-row-start: 1;
grid-row-end: 2;
width: 350px;
height: 150px;
@media screen and (max-width: 350px) {

width: 275px;

}
`

const CrystalPic = styled.img.attrs({
  src: crystal
})`
grid-row-start: 1;
grid-row-end: 2;
width: 350px;
height: 150px;
@media screen and (max-width: 350px) {

width: 275px;

}
`

const DiscoPic = styled.img.attrs({
  src: disco
})`
grid-row-start: 1;
grid-row-end: 2;
width: 350px;
height: 150px;
@media screen and (max-width: 350px) {

width: 275px;

}
`

const TubecastPic = styled.img.attrs({
  src: tubecast
})`
grid-row-start: 1;
grid-row-end: 2;
width: 350px;
height: 150px;
@media screen and (max-width: 350px) {

width: 275px;

}
`

const ProjectHead = styled.h1`
grid-row-start: 2;
grid-row-end: 3;
align-self: center;
justify-self: center;
-webkit-text-stroke: 1.4px #4C076F; 
text-shadow: 1px 1px 3px black; 
color: white;
font-weight: bold;
`

const ButtonBox = styled.div`
grid-row-start: 3;
grid-row-end: 4;
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 10px;
`

const ProjectButton = styled.button`
width: 100px;
height: 40px;
justify-self: center;
color: white;
background-color: #7822A3;
border-radius: 16px;
cursor: pointer;
outline: none;
`

const ProjectBlurb = styled.div`
grid-row-start: 4;
grid-row-end: 5;
padding: 15px;
`

export default function Projects() {
  return (
    <div style={{backgroundColor: "#9B2CD5"}}>
      <TheGrid>
        <Header style={{ color: "white"}}>&lt;Projects&gt;</Header>
          <ProjectRow>
          <Block1>
              <TubecastPic />
              <ProjectHead>Tubecast</ProjectHead>
              <ButtonBox>
                <a style={{justifySelf: "center"}} href="https://tubecast.netlify.app/" target="_blank" rel="noopener noreferrer"><ProjectButton>Deployed</ProjectButton></a>
                <a style={{justifySelf: "center"}} href="https://github.com/pierrelampre/tubecast" target="_blank" rel="noopener noreferrer"><ProjectButton>Repo</ProjectButton></a>
              </ButtonBox>
              <ProjectBlurb>This application gives a nod to the old school Comcast channel/on demand screen. It runs schedules for 4 channels of 24 hour programming.  Moment.js is used to run the program schedules.</ProjectBlurb>
            </Block1>
            <Block2>
              <RentPic />
              <ProjectHead>Rentable</ProjectHead>
              <ButtonBox>
                <a style={{justifySelf: "center"}} href="https://mighty-lake-82037.herokuapp.com/" target="_blank" rel="noopener noreferrer"><ProjectButton>Deployed</ProjectButton></a>
                <a style={{justifySelf: "center"}} href="https://github.com/sahasra101/project2" target="_blank" rel="noopener noreferrer"><ProjectButton>Repo</ProjectButton></a>
              </ButtonBox>
              <ProjectBlurb>An application that calculates return on investment on rental properties. Designed for beginners looking to get into the real estate market. This app leverages Zillow and Google Maps API. (You must register/login to view!)</ProjectBlurb>
            </Block2>
            <Block3>
              <OTHPic />
              <ProjectHead>Only The Hits</ProjectHead>
              <ButtonBox>
              <a style={{justifySelf: "center"}} href="https://pierrelampre.github.io/OnlyTheHits/#" target="_blank" rel="noopener noreferrer"><ProjectButton>Deployed</ProjectButton></a>
              <a style={{justifySelf: "center"}} href="https://github.com/PierreLampre/OnlyTheHits" target="_blank" rel="noopener noreferrer"><ProjectButton>Repo</ProjectButton></a>
              </ButtonBox>
              <ProjectBlurb>An application that leverages Spotify and BandsInTown API.  It generates five similar artists for the user and helps them to build a playlist of new music.  The user can also see artists tour schedules from BandsInTown.
              </ProjectBlurb>
            </Block3>
            <Block4>
              <BurgerPic />
              <ProjectHead>CRUD Burger</ProjectHead>
              <ButtonBox>
              <a style={{justifySelf: "center"}} href="https://immense-mountain-83280.herokuapp.com/" target="_blank" rel="noopener noreferrer"><ProjectButton>Deployed</ProjectButton></a>
              <a style={{justifySelf: "center"}} href="https://github.com/PierreLampre/burger" target="_blank" rel="noopener noreferrer"><ProjectButton>Repo</ProjectButton></a>
              </ButtonBox>
              <ProjectBlurb>An application that utilizes CRUD operations to simulate a simple POS system for a small burger restaurant.</ProjectBlurb>
            </Block4>
          <Block5>
              <CrystalPic />
              <ProjectHead>Crystal Collector</ProjectHead>
              <ButtonBox>
              <a style={{justifySelf: "center"}} href="https://pierrelampre.github.io/Crystal-Collector/" target="_blank" rel="noopener noreferrer"><ProjectButton>Deployed</ProjectButton></a>
              <a style={{justifySelf: "center"}} href="https://github.com/PierreLampre/Crystal-Collector/" target="_blank" rel="noopener noreferrer"><ProjectButton>Repo</ProjectButton></a>
              </ButtonBox>
              <ProjectBlurb>A simple game that assigns a random value between 1 amd 12 to four crystals.  If you can match the number displayed by clicking on the crystals, you win.</ProjectBlurb>
            </Block5>
            <Block6>
              <DiscoPic />
              <ProjectHead>Giphy API</ProjectHead>
              <ButtonBox>
              <a style={{justifySelf: "center"}} href="https://pierrelampre.github.io/Giphy-API/" target="_blank" rel="noopener noreferrer"><ProjectButton>Deployed</ProjectButton></a>
              <a style={{justifySelf: "center"}} href="https://github.com/PierreLampre/Giphy-API" target="_blank" rel="noopener noreferrer"><ProjectButton>Repo</ProjectButton></a>
              </ButtonBox>
              <ProjectBlurb>This application creates category buttons.  When the user clicks on the buttons, it generates ten gifs from GiphyhAPI based on the text value of the button.  It is styled four different ways because I like CSS.</ProjectBlurb>
            </Block6>
          </ProjectRow>
      </TheGrid>
    </div>
  )
}
