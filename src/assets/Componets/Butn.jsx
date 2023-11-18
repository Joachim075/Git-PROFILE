import './Buttons.css'

import React from 'react';

const Butn = (props) => {
  return (
    
    <div className='tabs'>
      <p className='item'>Location: {props.location}</p>
      <p className='item'>Followers: {props.followers}</p>
      <p className='item'>Following: {props.following}</p>
      <p className='item'>Public Repos: {props.public_repos}</p>
    </div>
  );
};

export default Butn;