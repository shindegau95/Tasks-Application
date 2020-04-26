import React from 'react';

const selectedListStyle = {
	color: 'red',
	margin: '0 10px'
};

const unSelectedListStyle = { margin: '0 10px' };

//TODO: write proptypes

const ListSelector = props => {
	const { selectedList, setselectedList, lists, activeList } = props;
	return (
		<div>
			<nav class="nav-extended indigo darken-1">
				<div class="nav-content">
					<ul class="tabs tabs-transparent">
						{lists.map(list => (
							<li
								class="tab"
								key={list.id}
								onClick={() => setselectedList(list.id)}
							>
								<a
									class={
										list.id === selectedList && selectedListStyle
											? 'active'
											: ''
									}
								>
									{list.label}
								</a>
							</li>
						))}

						<li class="right-margin tab right ">
							{activeList.length > 0 ? activeList.length + ' items left' : ''}
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

ListSelector.defaultProps = {
	lists: [],
	activeList: []
};

export default ListSelector;
