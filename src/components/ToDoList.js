import React, { Component } from 'react';
import ListView from './ListView';
import AddToList from './AddToList';
import ClearList from './ClearList';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Carson", "Brenna", "Devin", "Bruce"]
    };
  }
  
  addListItem = item => {
    const newList = this.state.list.slice();
    newList.push(item);
    
    this.setState({list: newList});
  }
  clearList = () => this.setState(this.state.list = []);
  
  render() {
    return (
      <>
      {ListView(this.state.list)}
      <AddToList addListItem={this.addListItem}/>
      {ClearList(this.clearList)}
      < />
    )
  }
}


export default ToDoList;
