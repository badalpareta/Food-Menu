import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Dish from './Dish';
import base from '../base';

class App extends React.Component{
constructor(props){
super(props)
this.state={
    items:{},
    order:{},
}
}

    componentDidMount()
    {const localStorageRef=localStorage.getItem(this.props.match.params.storeId);
     if(localStorageRef)
     {
         this.setState({order:JSON.parse(localStorageRef)})
     }
        this.ref=base.syncState(`${this.props.match.params.storeId}/items`,{
            context:this,
            state:'items'
        })
      
    }
    componentWillUnmount(){
        base.removeBinding(this.ref);
    }
    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))
    
    }
    addItem=(toAdd)=>{
        const dishes={...this.state.items}
        dishes[`item${Date.now()}`]=toAdd;
        this.setState({
            items:dishes
        })
    }
    updateItem=(key,updateItem)=>{
        const dishes={...this.state.items}
        dishes[key]=updateItem;
        this.setState({items:dishes})
    }
    deleteItem=(key)=>{
        const dishes={...this.state.items}
        dishes[key]=null;
        this.setState({items:dishes})
    }

addToOrder=(key)=>{
    const order={...this.state.order}
    order[key]=order[key]+1||1;
    this.setState({
        order:order
    })
}
removeFromOrder=(key)=>{
    const order={...this.state.order}
    delete order[key];
    this.setState({
        order:order
    })
}
render(){
    const { match, location, history } = this.props;
return (  <div className="catch-of-the-day">
<div className="menu">
 <Header tagline="Chatora Street"/>
 <ul className="dishes">
     {Object.keys(this.state.items).map(item=><Dish key={item} idx={item}details={this.state.items[item]} addToOrder={this.addToOrder}/>)}
 </ul>
</div>
<Order dishes={this.state.items} order={this.state.order} removeFromOrder={this.removeFromOrder}/>
<Inventory addItem={this.addItem} updateItem={this.updateItem} deleteItem={this.deleteItem}loadDefault={this.loadDefault} dish={this.state.items} />

</div>)
}
}

export default App;