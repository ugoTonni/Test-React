import React, { Component } from "react";

// import React, { Component } from 'react'

class Cello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            age: "10"
        }
        
    }
    render() {
        return (
            <div>
                <h1> Welcome to a {this.state.color} class components</h1>
                <p> I am { this.state.age} years old</p>
            </div>
        )
    }
}


export default class Brother extends Component {
    render() {
        return (
            <div>
                <Cello />
                <h2> how old is my brother ?</h2>
                
        </div>
        )
        
    }
}

