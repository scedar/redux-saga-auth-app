import React from 'react'
import PropTypes from 'prop-types';
import logo from './logo.svg'
import './App.css'

import {Link} from 'react-router-dom'
import Widgets from "./widgets";
import Login from "./login";
import Signup from "./signup";

import {
    Route,
    Switch
} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Widget Reactory</h2>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Log In</Link>
                    </li>
                </ul>
                <section className="App-body">
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/widgets" component={Widgets}/>
                    </Switch>
                </section>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node,
};

export default App