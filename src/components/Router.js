import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import StorePicker from './StorePicker'
import Notfound from './NotFound';
import App from './App'


function Router(props){
    return(
    <BrowserRouter>
    <Switch>
        <Route exact path='/'component={StorePicker}/>
        <Route path='/store/:storeId' component={App}/>
        <Route path='*'component={Notfound}/>
    </Switch>
    </BrowserRouter>)
}
export default Router;