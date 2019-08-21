import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Project from './Project'
import './../css/Projects.css'

class Projects extends React.Component {
  state = {
    current: 0
  }



  handleClick = (index, button) => {
    console.log('clicked, returning index: ',index, button);
    //clear carousel
    //show next carousel (depending on left or right click)
    //also needs to do the same for the tracker after I render it
  }

  render () {

  /* ideally i'd like to only render the one that needs to be displayed, instead of rendering them all and displaying an active one. I could even route them each and show a URL based on the project. I'm having trouble passing from the data as props when I try it that way.*/
  
  const projects = this.props.data.map((d,i) =>  {
    return <Project
      key={i}
      data={d}
      handleClick={this.handleClick}
      current={this.state.current}
      />
  })


    return (
      <React.Fragment>
        <h1>PROJECTS</h1>
        <div className='carousel-wrapper'>
        {projects}
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
