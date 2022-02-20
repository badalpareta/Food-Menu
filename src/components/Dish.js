import React from 'react';
class Dish extends React.Component{
    handleClick=()=>{
        this.props.addToOrder(this.props.idx)
                }
    render(){
        const{name,image,price,status,desc}=this.props.details;
        const isAvailable=status==='available';

        return (
            <li className="menu-dish">
                <img src={image} alt={name} />
                <h3 className="dish-name">
                    {name}
                    <span className="price">{price}₹</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>{isAvailable?'Add To Cart':'Sold Out!'}</button>
            </li>
        )
    }
}
export default Dish