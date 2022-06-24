import React from 'react';

const SearchBar = () => {
	const getResults = async () => {};

	const handleInput = e => {};

	return (
		<div className="flex justify-start ">
			<input
				type="text"
				placeholder="Enter player name"
				onChange={e => {
					handleInput(e);
				}}
			/>
			<button
				onClick={() => {
					getResults();
				}}
			>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
