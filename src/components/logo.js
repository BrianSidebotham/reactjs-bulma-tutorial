import React from 'react';
import logo from '../logo.svg';

export default class Logo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                transform: 'scale(1)'
            }
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    handleMouseEnter(event) {
        this.setState((state, props) => ({
            style: {
                transform: 'scale(1.5)'
            }
        }))
    }

    handleMouseLeave() {
        this.setState((state, props) => ({
            style: {
                transform: 'scale(1)'
            }
        }))
    }

    render() {

        return (
            <img src={logo}
                className="App-logo"
                style = { this.state.style }
                alt="logo"
                onMouseLeave={this.handleMouseLeave}
                onMouseEnter={this.handleMouseEnter} />
        );
    }
}
