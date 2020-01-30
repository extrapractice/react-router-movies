import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function SearchBar(props) {
    const [ title, setTitle ] = useState('');
    const [err, setErr] = useState(false)
	let history = useHistory();
	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.get(`http://localhost:5000/api/movies/search/${title}`)
            .then((res) => res.data.id ? history.push(`/movies/${res.data.id}`) : setErr(true))
			.catch((err) => console.log(err));
		
    };
	return (
        <div className="search-wrapper" >
		<form className="search-bar" onSubmit={(e) => onSubmitHandler(e)}>
			<input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title of movie' />
			<button type='submit' disabled={!title}>
				Search
            </button>
           
        </form>
         {err && <p>Sorry That Movie Doesn't Exist</p>}
         </div>
	);
}

export default SearchBar;
