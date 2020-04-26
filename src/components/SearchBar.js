import React, { useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';

import InputText from './Common/InputText';

import './SearchBar.css';

const SearchBar = ({ value, onChange, setList }) => {
	const changeSearch = useCallback(e => onChange(e.target.value), [onChange]);
	const crossClick = useCallback(e => onChange(''), [onChange]);
	const keyPressHandler = useCallback(event => {
		if (event.key === 'Enter') {
			return addButtonClick();
		}
	});
	const addButtonClick = useCallback(() => {
		setList(list => [...list, { id: list.length, value, active: true }]);
		onChange('');
	}, [value, setList, onChange]);

	return (
		<Fragment>
			<div class=" footer item-bar indigo accent-3">
				<div class="row no-padding">
					<div class="input-field col s12">
						<InputText
							value={value}
							onChange={changeSearch}
							onKeyPress={keyPressHandler}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

SearchBar.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default SearchBar;

/**
 * index.js -> App
 *    SearchBar
 *        InputText
 *    List
 *        ListItem
 *            InputText -> onHover show Bar
 *            Button (with text or icon)
 *    List
 *        ListItem
 *
 */
