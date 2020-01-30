import React from 'react';
import {NavLink} from 'react-router-dom'

const SavedList = props => (
    
  <div className="saved-list">
  {console.log(props, 'props from savedList')}
    <h3>Saved Movies:</h3>
    {console.log(props.list)}
    {props.list.map(movie => (
      <button onClick={() => props.removeFromSavedList(movie)} key={movie.id} className="saved-movie">{movie.title}</button>
    ))}
    <NavLink to="/"className="home-button">Home</NavLink>
  </div>
);

export default SavedList;
