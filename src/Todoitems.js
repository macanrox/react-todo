import React, { Component } from 'react';
import FlipMove from 'react-flip-move';	//library for list animation
import { FaClose, FaCheck } from 'react-icons/lib/fa';	//imports icons

class Todoitems extends Component {
	constructor (props) {
		super(props);

		this.createTasks = this.createTasks.bind(this);
	}

	createTasks (item) {
		return <li>
				    <button className="fa-check">
				    	<FaCheck />
				    </button>
				    <span className="item-text">{item.text}</span>
				   	<button className="fa-close"
				   			onClick={() => this.delete(item.key)}
				   			key={item.key}>
				   		<FaClose />
				   	</button>
				</li>
	}

	delete (key) {
		console.log("Key is " + key);
		this.props.delete(key);
	}

	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return (
			<ul className="theList">
				<FlipMove duration={250} easing="ease-out">
					{listItems}
				</FlipMove>
			</ul>
		);
	}
}

export default Todoitems;