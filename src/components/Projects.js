import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Project from './Project'
import './../css/Projects.css'

const Projects = (props) => {

  const [current, setCurrent] = useState(0);
  const numP = props.data.length - 1

  const showRight = () => setCurrent(current === numP ? 0 : current + 1)
  const showLeft = () => setCurrent(current === 0 ? numP : current - 1)

  const handleClick = (button) => {
    if (button === 'right') {
      showRight();
    } else {
      showLeft();
    }
  }

  return (
    <React.Fragment>
      <h1>PROJECTS</h1>
      <div className='carousel-wrapper'>
      {props.data.length ?
          <Project
          data={props.data[current]}
          current={current}
          handleClick={handleClick}
          /> : null }
      </div>
    </React.Fragment>
  );
}

export default Projects;
