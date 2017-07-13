// import dependencies
import React from "react"

// import components
import myPhoto from "../Styles/Images/photo.png"

const AboutMe = () => (
  <div className="main-component about-me">
    <div className="about-heading">
      <h1>About/Introducing</h1>
      <img src={myPhoto} alt="Photograph of myself" />
    </div>
    <p>My name is Mateusz Mysiak and my profession is network and computer systems engineering in small to medium size businesses. However, for quite a while now, my passion has been web development. For a couple of years I"ve been doing smallish orders for websites, creating countless amounts of my own websites and coding itself, to me, is fascinating. Which is the cause I spend substantial amount of my spare time on learning how to do that. It"s mostly JavaScript and basics of node/React. I am drawn to create algorithms, functions, conditions and loops forming simple applications from scratch. I am mostly experienced with CSS3, Bootstrap/Flexbox, vanilla JS and jQuery. I know the set up process and maintanance of web servers and I am using GIT regularly for personal projects.</p>
  </div>
)

export default AboutMe