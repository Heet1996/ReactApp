import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import { connect } from 'react-redux';

import  {Home} from './components/Home/Home';
import TokenValidator from './containers/TokenValidator/TokenValidation';


import './App.css';



class App extends Component {
    render() {

        return ( <div className = "App" >
            <BrowserRouter >
                <Switch >

                    <Route path = "/token"
                    component = { TokenValidator }
                    /> 
                    <Route path = "/"
                    component = { Home }
                    />
                </Switch> 
            </BrowserRouter> 
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        token: state.tokenValidator.token
    }
}
export default connect(mapStateToProps)(App);