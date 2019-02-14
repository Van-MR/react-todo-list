import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
   state = {
     items:[],
     id:uuid(),
     item:'',
     editItem:false
   }

   handleChange = (e) => {
     this.setState({
       item:e.target.value
     })
   }

   handleSubmit = (e) => {
     e.preventDefault();

     const newItem = {
       id:this.state.id,
       title:this.state.item
     }

     console.log(newItem);

     const UpdateIetms = [...this.state.items,newItem]

     this.setState({
       items:UpdateIetms,
       item:'',
       id:uuid(),
       editItem:false
     })

   }

   clearItems = () => {
     this.setState({
       items:[]
     })
   }

   deleteItems = id => {
       const filterData =  this.state.items.filter(item => item.id !== id)

       this.setState({
         items:filterData
       })
   }

   handleEdit = id => {
      console.log(id);
      const filterData =  this.state.items.filter(item => item.id !== id)

      const editItem = this.state.items.find(item => item.id === id)

      console.log(editItem);

      this.setState({
        items:filterData,
        item:editItem.title,
        editItem:true,
        id:id
      })

   }

   confirmEdit = id => {

   }


  render() {
    return (
      <div  className="container">
          <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-4">
                <h3 className="text-Capital text-center">Todo Input</h3>
                <TodoInput
                  item={this.state.item}
                  isEdit={this.state.editItem}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              <TodoList items={this.state.items} clearItems={this.clearItems} deleteItems={this.deleteItems} handleEdit={this.handleEdit} />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
