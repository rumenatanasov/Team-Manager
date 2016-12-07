import React, { Component } from 'react';

export default class greeting extends Component{
    render(){
        if(!this.props.loggedIn) return null;
        return(

            <span>
                Welcome, {this.props.username}
            </span>
        )
    }
}