import React, { Component } from 'react';

import { v4 as uuid } from 'uuid';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

export default class App extends Component {


    state = {
        items: [],
        id: uuid(),
        item: "",
        editItem: false,
    };

    handleChange = (e) => { 
        this.setState({
            item:e.target.value
        })
     };
    handleSubmit = (e) => {
        e.preventDefault(); 
        const newItem={
            id:this.state.id,
            title:this.state.item
        }
        const updatedItem=[...this.state.items,newItem];
        this.setState({
            items:updatedItem,
            item:"",
            id:uuid(),
            editItem:false
        })
     };
    clearList = () => { this.setState({items:[]})}
             handleDelete = (id) => {const filteredItems=this.state.items.filter(item=>item.id !==id);
            this.setState({items:filteredItems});
     };
     handleEdit = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);
        this.setState({
          items: filteredItems,
          item: selectedItem.title,
          id: id,
          editItem: true
        });
      };

    render() {
        console.log(this.state);
        return (

            <div className = "row mt-5 justify-content-center" >
            <div className="col-8" >
            <h1 className = "alert alert-primary text-center " > welcome to my TodoApp </h1>
            <h3 className="text-capitalize text-center">  Todo Input </h3>
             
            < TodoInput item={this.state.item} handleChange={this.handleChange } handleSubmit={this.handleSubmit}
            editItem={this.state.editItem } />
            <TodoList  items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
            </div>


            </div> 
           


        )
    }
}