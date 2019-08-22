import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Project from './Project'
import './../css/Projects.css'

const Projects = (props) => {
  console.log(props);
  const [projects, setProjects] = useState(props.data)
  const [current, setCurrent] = useState(0);
  console.log(projects);


  const showRight = () => setCurrent(current + 1)
  const showLeft = () => setCurrent(current - 1)

  const handleClick = (index, button) => {
    console.log('clicked, returning index: ',index, button);
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
      {/*conditional rendering*/}
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
