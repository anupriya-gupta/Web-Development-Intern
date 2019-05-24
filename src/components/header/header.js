import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import logo from 'media/logo.svg';

export function Header(props) {
    return (
        <div className="App-header" >
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>{props.content}</h2>
        </div>
    )
}

Header.propTypes = {
    content: PropTypes.string.isRequired,
}