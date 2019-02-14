import React from 'react'
import PropTypes from 'prop-types'

import  TodoItem from './TodoItem'

class TodoList extends React.Component {
  render () {
      const {items,clearItems,deleteItems,handleEdit} = this.props
      return (
           <div>
              <ul className="list-group my-5">
                 <h3 className="text-capitalize text-center">todo list</h3>
                 {items.map(item => <TodoItem key={item.id} title={item.title} handleDelete={() => deleteItems(item.id)} handleEdit={() => handleEdit(item.id)} />)}
              </ul>
              <button type="button"  onClick={clearItems} className="btn btn-danger btn-block mt-5">clear list</button>
           </div>
      )
  }
}

export default TodoList;
