import React,{ Fragment } from 'react';

class Order extends React.Component{
    renderOrder=(key)=>{
        const dish=this.props.dishes[key];
        const count=this.props.order[key];
        if(!dish)return null;
        const isAvailable=dish&&dish.status==='available';
        if(!isAvailable)
        {
           return <li key={key}>{dish?dish.name:'dish'} No longer available</li>
        }
        return <li key={key}>
            {count}x{dish.name}
            {count*dish.price}₹
            <button onClick={()=>this.props.removeFromOrder(key)}>&times;</button>
        </li>
    }
    render(){
        const orderIds=Object.keys(this.props.order);
        const total=orderIds.reduce((prevTotal, key)=>{
            const dish=this.props.dishes[key];
            const count=this.props.order[key];
            const isAvailable=dish&&dish.status==='available';
            if(isAvailable){
                return prevTotal+(count*dish.price);
            }
            return prevTotal;
        },0);
        return(
<div className="order-wrap">
    <h2>Your Order</h2>
   <ul className="order">
        {orderIds.map(this.renderOrder)}
    </ul>
    <div className="total">
        <strong>Total:{total}₹</strong>
    </div>
</div>
        )
    }
}
export default Order;