// import dependencies
import React from "react"
import { Switch, Route } from "react-router-dom"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

// import components
import "../Styles/Css/Main.css"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Skills from "./Skills"
import Portfolio from "./Portfolio"
import PathNotFound from "./PathNotFound"

const RoutedComponent = () => (
  <Switch>  
    <Route exact path="/" component={Home}/>
    <Route path="/about-me" component={AboutMe}/>
    <Route path="/skills" component={Skills}/>
    <Route path="/portfolio" component={Portfolio}/>
    <Route component={PathNotFound} />
  </Switch>
)

const Main = () => (
  <div className="main">
    <ReactCSSTransitionGroup
      component={RoutedComponent}
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    />
  </div>
)

export default Main