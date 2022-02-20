import React, { Fragment } from 'react';
import Add from './AddItem';
import EditDishForm from './EditDishForm';
class Inventory extends React.Component{
    render(){
        return(
            <Fragment>
            <div className="inventory">
              <h2>Inventory</h2>
                  {Object.keys(this.props.dish).map(key=><EditDishForm key={key} idx={key}dish={this.props.dish[key]} updateItem={this.props.updateItem} deleteItem={this.props.deleteItem}/>)}
              <Add addItem={this.props.addItem}/>
             
            </div>
            </Fragment>
        )
    }
}
export default Inventory