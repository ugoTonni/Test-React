// import React, { Component } from 'react'

// export default class TestClass extends Component {
//     constructor() {
//         super()
//         this.state = {
//             Name: "Emmanuella",
//             sector: "FMCG",
//             brand: "PZ & Honeywell"
//         }
//     }
    
//     clicked = () => {
//         console.log('CLicked')
//     }

//     changeName = () => {
//         this.setState({Name: "Dami"})
//     }
    
//     render() {
//         return (
//             <div>

//                 <p> my name is {this.state.Name} I work with sabi and my sector is
//                     {this.state.sector}</p>

//                 <button onClick={this.changeName}>
//                     Click me
//                 </button>
                
//             </div>
//         )
//     }
// }

import React from 'react'

const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
    ];

export default function TestClass() {

    const listItems = people.map(person => <li> { person }</li> )
    return (
        <div>
            <ul> 
                {listItems}
                
            </ul>
        </div>
    )
}
