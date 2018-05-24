import React, { Component } from 'react';
import Todoitems from './Todoitems';
import './Todolist.css';

class Todolist extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			items: []
		};

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem (e) {
		//create the item
		if (this._inputElement.value !== "") {
			var newItem = {
				text: this._inputElement.value,
				key: Date.now()   //makes sure that no two values are the same (measured by seconds)
			};
			
			//add to the array
			this.setState ((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});
		}

		this._inputElement.value = "";

		//testing
		console.log(this.state.items);
		e.preventDefault();	//prevents page from refreshing when we submit the form
	}

	deleteItem (key) {
		console.log("Key in deleteItem: " + key);
		console.log("Items at delete" + this.state.items);

		var filteredItems = this.state.items.filter(function (item) {
			return (item.key !== key)	//keys shouldn't match
		});

		this.setState ({
			items: filteredItems
		});
	}

	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input ref={ (a) => this._inputElement = a} 
							   placeholder="Enter task"></input>
						<button type="submit">ADD</button>
					</form>
				</div>
				<Todoitems entries={this.state.items} 
						   delete={this.deleteItem}/>
			</div>
		);
	}
}

export default Todolist;