import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
	const [ savedList, setSavedList ] = useState([]);

	const addToSavedList = (movie) => {
        console.log('fired addtosave')
        return savedList.includes(movie)? '' : setSavedList([ ...savedList, movie ]);
        
    };
    console.log(savedList, 'savedList')

	const removeFromSavedList = (movie) => {
		const newList = savedList.filter((el) => {
			return el !== movie;
		});
		setSavedList(newList);
	};

	return (
		<div className='app'>
			<SavedList removeFromSavedList={removeFromSavedList} list={savedList} />
			<Route path='/' exact>
				<SearchBar />
				<MovieList />
			</Route>
			<Route path='/movies/:id'>
				<Movie addToSavedList={addToSavedList} />
			</Route>
		</div>
	);
};

export default App;
