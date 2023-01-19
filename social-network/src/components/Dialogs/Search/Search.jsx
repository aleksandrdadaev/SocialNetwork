import React from 'react';
import s from './Search.module.css';

const Search = props => {
	return (
		<div className={s.search}>
			<div className={s.inputWrapper}>
				<input type='text' className={s.input} placeholder='Поиск' />
				<button className={s.button}></button>
			</div>
		</div>
	);
};

export default Search;
