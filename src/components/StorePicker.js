import React from 'react';


class StorePicker extends React.Component{
 Loc=React.createRef();
  goToStore=(event)=>{
    event.preventDefault();
   const storeName=this.Loc.current.value;
   this.props.history.push(`/store/${storeName}`);
  }
  render(){
return <form action="" className="store-selector" onSubmit={this.goToStore}>
  <h2>Enter Store Location</h2>
  <input type="text" ref={this.Loc} placeholder='Store Name' required defaultValue={"Jagatpura-Jaipur"}/>
  <button type="submit">Visit Store</button>
</form>
  }

}

export default StorePicker;
