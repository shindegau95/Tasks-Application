import React from 'react';
import PropTypes from 'prop-types';

import './InputText.css';

const InputText = props => (
	<div className="container--input-text">
		<i class="white-text material-icons prefix">add</i>
		<input class="white-text" type="text" {...props} />
	</div>
);

InputText.defaultProps = {
	placeholder: '',
	onKeyPress: () => {}
};

InputText.propTypes = {
	onChange: PropTypes.func.isRequired,
	onKeyPress: PropTypes.func,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string
};

export default InputText;
