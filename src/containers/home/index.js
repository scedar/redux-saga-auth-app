import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
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

                <h1>Home</h1>
            </div>
        )
    }
}


export default Home