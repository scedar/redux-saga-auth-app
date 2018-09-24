import React from 'react'
import PropTypes from 'prop-types';
import logo from '../../resources/logo.svg'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Widget Reactory</h2>
                </div>
                <section className="App-body">
                    {this.props.children}
                </section>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node,
};

export default App