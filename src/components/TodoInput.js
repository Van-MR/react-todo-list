import React from 'react'

class TodoInput extends React.Component {

  render () {
    const { handleChange, item , handleSubmit} = this.props
    const {isEdit} = this.props
    return (
      <div className="card card-body my-3">
         <form onSubmit={handleSubmit}>
             <div className="input-group">
               <div className="input-group-prepend">
                 <div className="input-group-text bg-primary text-white">
                   <i className="fas fa-book"></i>
                 </div>
               </div>
               <input
                  className="form-control text-capitalize"
                  value={item}
                  onChange={handleChange}
                  placeholder="add a todo item"
               />
             </div>
             <button type="submit" className={!isEdit ? "btn btn-block btn-primary mt-3" : "btn btn-block btn-success mt-3"}>
               {!isEdit ? "add item" : "edit Item"}
             </button>

         </form>
      </div>
    )
  }
}

export default TodoInput;
