import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

import './styles.css';
import ListPanel from './components/ListPanel';

const lists = [
	{
		id: 'list_all',
		label: 'All'
	},
	{
		id: 'list_active',
		label: 'Active'
	},
	{
		id: 'list_completed',
		label: 'Completed'
	}
];

const getActiveList = (list, selectedList) => {
	if (selectedList === 'list_all') {
		return list;
	} else if (selectedList === 'list_active') {
		return list.filter(item => item.active);
	} else if (selectedList === 'list_completed') {
		return list.filter(item => !item.active);
	}
	return [];
};

const Title = props => {
	return (
		<nav>
			<div class="left-margin nav-wrapper black title-bar">
				<a class="brand-logo left">
					<i class="material-icons">assignment</i>
					{props.title}
				</a>
			</div>
		</nav>
	);
};

const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [selectedList, setselectedList] = useState('list_all');
	console.log(list);
	return (
		<div className="App">
			<Title title="Tasks" />

			<ListPanel
				selectedList={selectedList}
				setselectedList={setselectedList}
				lists={lists}
				setList={setList}
				activeList={getActiveList(list, selectedList)}
			/>

			<SearchBar value={value} onChange={setValue} setList={setList} />
		</div>
	);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

/**
 * Scope:
 * TODO List Application
 * 2 Lists - 1. TODO, 2. DONE
 * Every List will hv a list item
 *
 * List
 *  List items
 *
 * List item
 *  Input Text
 *  Done / Undo - Button
 *  Edit
 *
 * Button with text
 * Input
 *
 * Search Bar
 *  Cross - clears a search text
 *
 * Components
 *  List
 *    Array<ListItems>
 *
 * List Item
 *
 * Search Bar
 *
 * No Items Found
 *
 * ------------------------------------
 *
 * todo: Array<>,
 * done: [],
 * listItem: {
 *  id: "id",
 *  name: "Name of Item",
 * }
 */
