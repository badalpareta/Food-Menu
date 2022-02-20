import React,{Fragment} from 'react';
class addItem extends React.Component{
    nameRef=React.createRef();
    priceRef=React.createRef();
    statusRef=React.createRef();
    descRef=React.createRef();
    imageRef=React.createRef();
    createItem=(event)=>{
        event.preventDefault();
        const items={
            name:this.nameRef.current.value,
            price:parseInt(this.priceRef.current.value),
            status:this.statusRef.current.value,
            desc:this.descRef.current.value,
            image:this.imageRef.current.value,
        }
       this.props.addItem(items);
       event.currentTarget.reset();
    }
    render(){
        return(
            <Fragment>
<form className='Add-Item-Edit' onSubmit={this.createItem}>
<input name='name'ref={this.nameRef} type='text' placeholder='Name'/>
<input name='price'ref={this.priceRef} type='text' placeholder='Price'/>
<select name='status'ref={this.statusRef} type='text' placeholder='Status'>
    <option value="available">Available</option>
    <option value="unavailable">Sold out</option>
    </select>
<textarea name='desc'ref={this.descRef} type='text' placeholder='Desc'/>
<input name='image'ref={this.imageRef} type='text' placeholder='Image'/>
<button type="submit">+Add Item</button>
  
</form>
            </Fragment>
        )
    }
}
export default addItem;