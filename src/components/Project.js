import React from 'react';

//need to add event listeners to the buttons and icons


const Project = (props) => {

  console.log('Project: ', props);

  const imageStyle = {
    background: `url(${props.data.fields.img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return (
    <React.Fragment>
      <div
        className={`${props.data.fields.index === `${props.current}` ? 'active-carousel' : 'inactive-carousel'}`}
        index={props.data.fields.index}>
        <div className='carousel-image'
          style={imageStyle}>
          <button className='button'
            onClick={() => props.handleClick('left')}
            ></button>
          <button className='button'
            onClick={() => props.handleClick('right')}
            ></button>
        </div>
        <div className='carousel-footer'>
          <i className='fas fa-arrow-circle-left'
          onClick={() => props.handleClick('left')}></i>
          <div className='carousel-description-wrapper'>
            <h2>{props.data.fields.title}</h2>
            <h3>{props.data.fields.description}</h3>
            <a href={`${props.data.fields.link}`}>
              <button className='link-button'>View Project</button>
            </a>
          </div>
          <i className='fas fa-arrow-circle-right'
          onClick={() => props.handleClick('right')}></i>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Project;
