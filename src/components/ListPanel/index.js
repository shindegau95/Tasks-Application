import React from 'react';

import ListItemsCount from './ListItemsCount';
import ListSelector from './ListSelector';
import ItemList from './ItemList';
// TODO: if list empty dont show panel

const ListPanel = props => {
	const { selectedList, setselectedList, lists } = props;
	const { activeList } = props;
	return (
		<div>
			<ListSelector
				selectedList={selectedList}
				setselectedList={setselectedList}
				lists={lists}
				activeList={activeList}
			/>
			{/* <ListItemsCount list={activeList} /> */}
			<ItemList list={activeList} />

			{/* <ClearCompleted /> */}
		</div>
	);
};

export default ListPanel;
