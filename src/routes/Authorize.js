import React from 'react';

import Page401 from "../containers/errors/Page401"


const Authorize = (allowRoles, allowedRoles) => {
    return (Component) => {

        return class AuthenticatedComponent extends React.Component {
            constructor(props) {
                super(props);

                //this.redirectOnAuthStatus = this.redirectOnAuthStatus.bind(this);

                //this.props.history.push("/login");
            };

            componentDidMount() {
                this.redirectOnAuthStatus()
            }

            componentDidUpdate() {
                this.redirectOnAuthStatus()
            }

            checkAuth() {
                // attempt to grab the token from localstorage
                const storedToken = localStorage.getItem('token');

                if (storedToken) {
                    // parse it down into an object
                    const token = JSON.parse(storedToken);

                    // this just all works to compare the total seconds of the created
                    // time of the token vs the ttl (time to live) seconds
                    const createdDate = new Date(token.created);
                    const created = Math.round(createdDate.getTime() / 1000);
                    const ttl = 1209600;
                    const expiry = created + ttl;

                    // if the token has expired return false
                    if (created > expiry) return false;

                    // otherwise, dispatch the token to our setClient action
                    // which will update our redux state with the token and return true
                    localStorage.removeItem('token');
                    return true
                }

                return false
            }

            redirectOnAuthStatus() {

                if (allowRoles) {
                    if (this.checkAuth() && allowedRoles.includes("USER")) {

                        this.props.history.push("/widgets");

                    }
                } else {
                    if (this.checkAuth() && allowedRoles.includes("USER")) {
                        this.props.history.push("/widgets")
                    }
                }

                console.log("I am here");
                if (localStorage.getItem('token')) {
                    localStorage.removeItem('token')
                }

                this.props.history.push("/login");
            }

            render() {
                return (
                    <div>
                        {
                            allowRoles
                                ?
                                (this.checkAuth() && allowedRoles.includes("USER") ? <Component {...this.props}/> : null)
                                :
                                (this.checkAuth() ? <Component {...this.props}/> : null)
                        }
                    </div>
                )
            }
        }

    };
};

export default Authorize;