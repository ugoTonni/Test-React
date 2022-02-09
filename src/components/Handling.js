import React, { Component } from 'react'

export default class Handling extends Component {
    buttonClicked = () => {
        alert('Button cliked')
    }
    render() {

        
        
        return (
            <div>

                <button onClick={this.buttonClicked}>
                    Click me
                </button>

                <button onClick= {() => alert('inline clicked')}>
                    Alert inline
                </button>
                
            </div>
        )
    }
}
