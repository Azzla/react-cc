import React, { Component } from 'react';

class AddToList extends Component {
	constructor(props) {
		super(props);
		this.state = {input: ''};
	}
	
	updateInput = function(e) {
		const input = e.target.value;
		this.setState({input});
	}
	
	handleClick = () => {
		this.props.addListItem(this.state.input);
	}
	
	render() {
		return (
			<>
			<input type='text' required id='listItem' onChange={(e) => this.updateInput(e)}></input>
			<button onClick={this.handleClick}>Add Item to List</button>
			< />
		)
	}
}

export default AddToList;
