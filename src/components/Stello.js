import React, { Component } from 'react'

export default class Stello extends Component {
    constructor() {
        super()
        this.state = {
            Name: "Tony",
            Age: 10,
            Like: "food",
            Dislike : "pain"
        }

    }

    changeName = () => {
        this.setState ({Name: "Steve"})
    }

        
    render() {
        return (
            <div>
                <p>My name is {this.state.Name} </p>
                <p> I am {this.state.Age} </p>
                <p> I Love {this.state.Like} </p>

                <button onClick={this.changeName}>
                    Change Name
                </button>
            </div>
        )
    }
}
