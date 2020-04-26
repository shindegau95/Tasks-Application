import React, { memo, useCallback } from 'react';

class ItemList extends React.Component {
	constructor(props) {
		super(props);
		console.log('');
	}

	handleClick(item) {
		const isActive = item.active;
		item.active = !isActive;
		this.setState({});
	}

	render() {
		return this.props.list.map((item, index) => {
			return (
				<div
					class="item-bar item-border white"
					key={`list-item-${index}`}
					onClick={() => {
						this.handleClick(item);
					}}
				>
					<label>
						<input
							id="indeterminate-checkbox"
							type="checkbox"
							checked={!item.active}
						/>
						<span>{item.value}</span>
					</label>
					<div class={item.active ? 'status orange-text' : 'status green-text'}>
						{item.active ? 'Active' : 'Completed'}
					</div>
				</div>
			);
		});
	}
}

export default ItemList;
