import React from 'react';

class EditDishForm extends React.Component{
 handleChange=event=>{
    const updateItem = {
        ...this.props.dish,
    [event.currentTarget.name]: event.currentTarget.value
}
this.props.updateItem(this.props.idx,updateItem);
    }
    render(){
        return(
            <div className="Add-Item-Edit">
            <input type="text" name="name"onChange={this.handleChange}value={this.props.dish.name}/>
            <input type="text" name="price"onChange={this.handleChange}value={this.props.dish.price}/>
            <select type="text" name="status"onChange={this.handleChange}value={this.props.dish.status}>
            <option value="available">Available</option>
            <option value="unavailable">Sold out</option>
            </select>
            <textarea name='desc'onChange={this.handleChange}value={this.props.dish.desc}/>
            <input name='image'onChange={this.handleChange}value={this.props.dish.image} />
            <button onClick={()=>this.props.deleteItem(this.props.idx)}>Remove Item</button>
           </div>
        )
    }
}
export default EditDishForm;