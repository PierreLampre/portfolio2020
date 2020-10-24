import React from 'react'
import styled from "styled-components"
import hub from "./img/hub.png"
import bash from "./img/bash.png"
import trinity from "./img/3wisemen.png"
import jquery from "./img/jquery.jpg"
import bootstrap from "./img/bootstrap.png"
import firebase from "./img/firebase.png"
import nodejs from "./img/nodejs.jpg"
import npm from "./img/npm.png"
import mysql from "./img/mysql.jpg"
import mongo from "./img/mongodb.jpg"
import react from "./img/react.png"
import devtools from "./img/devtools.jpg"

const TheGrid = styled.div`
display: grid;
grid-template-rows: .5fr 1fr;
margin-bottom: 100px;
width: 100%;
justify-self: center;
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
margin: 30px 0px 12px 0px;
font-size: 38px;
@media screen and (max-width: 1098px) {

margin-top: -35px;

}
@media screen and (max-width: 795px) {

margin-top: -65px;

}
@media screen and (max-width: 620px) {

margin-top: -165px;

}
`

const ImgRows = styled.div`
grid-row-start: 2;
grid-row-end: 3;
display: grid;
align-items: center;
justify-items: center;
justify-self: center;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: auto auto;
padding: 10px 60px 10px 60px;
grid-gap: 24px;
@media screen and (max-width: 1098px) {

grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: auto auto auto;
margin-top: -35px;

}
@media screen and (max-width: 795px) {

grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto auto auto auto;
margin-top: -85px;

}
@media screen and (max-width: 620px) {

grid-template-columns: 1fr 1fr;
grid-template-rows: auto auto auto auto auto auto;
margin-top: -200px;

}
`

const Bash = styled.img.attrs({
  src: bash
})`
  width: 150px;
  height: 150px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
@media screen and (max-width: 620px) {
  width: 100px;
  height: 100px;
  margin-top: 30px;
}
@media screen and (max-width: 410px) {
  width: 75px;
  height: 75px;
}
`

const Hub = styled.img.attrs({
  src: hub
})`
  width: 150px;
  height: 150px;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
@media screen and (max-width: 620px) {
  width: 100px;
  height: 100px;
  margin-top: 30px;
}
@media screen and (max-width: 410px) {
  width: 75px;
  height: 75px;
}
`

const Trinity = styled.img.attrs({
  src: trinity
})`
  width: 150px;
  height: 150px;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
@media screen and (max-width: 620px) {

grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 2;
grid-row-end: 3;
width: 100px;
height: 100px;

}
@media screen and (max-width: 410px) {
  width: 75px;
  height: 75px;
}

`

const Jquery = styled.img.attrs({
  src: jquery
})`
  width: 150px;
  height: 150px;
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
@media screen and (max-width: 795px) {

grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 2;
grid-row-end: 3;

}
@media screen and (max-width: 620px) {

grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 3;
width: 100px;
height: 100px;

}
@media screen and (max-width: 410px) {
  width: 75px;
  height: 75px;
}
`

const Bootstrap = styled.img.attrs({
  src: bootstrap
})`
  width: 150px;
  height: 150px;
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
@media screen and (max-width: 1098px) {

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;

}
@media screen and (max-width: 795px) {

grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 3;

}
@media screen and (max-width: 620px) {

grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 3;
grid-row-end: 4;
width: 100px;
height: 100px;

}
@media screen and (max-width: 410px) {
  width: 75px;
  height: 75px;
}
`

const Firebase = styled.img.attrs({
  src: firebase
})`
  width: 150px;
  height: 150px;
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 2;
@media screen and (max-width: 1098px) {

grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 3;

}
@media screen and (max-width: 795px) {

grid-column-start: 3;
grid-column-end: 4;
grid-row-start: 2;
grid-row-end: 3;

}
@media screen and (max-width: 620px) {

grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 3;
grid-row-end: 4;
width: 100px;
height: 100px;

}
@media screen and (max-width: 410px) {
  width: 75px;
  height: 75px;
}
`

const Nodejs = styled.img.attrs({
  src: nodejs
})`
  width: 150px;
  height: 150px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
@media screen and (max-width: 1098px) {

grid-column-start: 3;
grid-column-end: 4;
grid-row-start: 2;
grid-row-end: 3;

}
@media screen and (max-width: 795px) {

grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 3;
grid-row-end: 4;

}
@media screen and (max-width: 620px) {

grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 4;
grid-row-end: 5;
width: 100px;
height: 100px;

}
@media screen and (max-width: 410px) {
  width: 75px;
  height: 75px;
}
`

const Npm = styled.img.attrs({
  src: npm
})`
  width: 150px;
  height: 150px;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
@media screen and (max-width: 1098px) {

grid-column-start: 4;
grid-column-end: 5;
grid-row-start: 2;
grid-row-end: 3;

}
@media screen and (max-width: 795px) {

grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 3;
grid-row-end: 4;

}
@media screen and (max-width: 620px) {

grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 4;
grid-row-end: 5;
width: 100px;
height: 100px;

}
@media screen and (max-width: 410px) {
  width: 75px;
  height: 75px;
}
`

const Mysql = styled.img.attrs({
  src: mysql
})`
  width: 150px;
  height: 150px;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
@media screen and (max-width: 1098px) {

grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 3;
grid-row-end: 4;

}
@media screen and (max-width: 795px) {

grid-column-start: 3;
grid-column-end: 4;
grid-row-start: 3;
grid-row-end: 4;

}
@media screen and (max-width: 620px) {

grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 5;
grid-row-end: 6;
width: 100px;
height: 100px;

}
@media screen and (max-width: 410px) {
  width: 75px;
  height: 75px;
}
`

const Mongo = styled.img.attrs({
  src: mongo
})`
  width: 150px;
  height: 150px;
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
@media screen and (max-width: 1098px) {

grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 3;
grid-row-end: 4;

}
@media screen and (max-width: 795px) {

grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 4;
grid-row-end: 5;

}
@media screen and (max-width: 620px) {

grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 5;
grid-row-end: 6;
width: 100px;
height: 100px;

}
@media screen and (max-width: 410px) {
  width: 75px;
  height: 75px;
}
`

const Reactlogo = styled.img.attrs({
  src: react
})`
  width: 150px;
  height: 150px;
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 3;
@media screen and (max-width: 1098px) {

grid-column-start: 3;
grid-column-end: 4;
grid-row-start: 3;
grid-row-end: 4;

}
@media screen and (max-width: 795px) {

grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 4;
grid-row-end: 5;

}
@media screen and (max-width: 620px) {

grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 6;
grid-row-end: 7;

}
@media screen and (max-width: 410px) {
  width: 100px;
  height: 100px;
}
@media screen and (max-width: 410px) {
  width: 75px;
  height: 75px;
}
`

const Devtools = styled.img.attrs({
  src: devtools
})`
  width: 150px;
  height: 150px;
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 2;
  grid-row-end: 3;
@media screen and (max-width: 1098px) {

grid-column-start: 4;
grid-column-end: 5;
grid-row-start: 3;
grid-row-end: 4;

}
@media screen and (max-width: 795px) {

grid-column-start: 3;
grid-column-end: 4;
grid-row-start: 4;
grid-row-end: 5;

}
@media screen and (max-width: 620px) {

grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 6;
grid-row-end: 7;
width: 100px;
height: 100px;

}
@media screen and (max-width: 410px) {
  width: 75px;
  height: 75px;
}
`

export default function Skills() {
  return (
    <div>
      <TheGrid>
        <Header>&lt;Skills&gt;</Header>
          <ImgRows>
            <Hub /><Bash /><Trinity /><Jquery /><Bootstrap /><Firebase />
            <Nodejs /><Npm /><Mysql /><Mongo /><Reactlogo /><Devtools />
          </ImgRows>
      </TheGrid>
    </div>
  )
}
