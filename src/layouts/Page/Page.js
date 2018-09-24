import React from 'react'
import PropTypes from 'prop-types';
import './Page.css'


class Page extends React.Component {
    render() {
        return (
            <div>
                <h1>Pages</h1>
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
}

Page.propTypes = {
    children: PropTypes.node,
};

export default Page