import React from 'react'

export default function Hello() {
    // const people = [
    //     'Creola Katherine Johnson: mathematician',
    //     'Mario José Molina-Pasquel Henríquez: chemist',
    //     'Mohammad Abdus Salam: physicist',
    //     'Percy Lavon Julian: chemist',
    //     'Subrahmanyan Chandrasekhar: astrophysicist'
    // ];

    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        }, {
          id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
        }, {
          id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];
    
    // const listItems = people.map(name => <li>{name}</li>)

    const chemists = people.filter(person => person.profession === "chemist")

    const listItems = chemists.map(person => <li>{ person.name }</li>)
    
    return (
        <div>
            <h1 > Welcome </h1>
            <ul>
                <b> {listItems}  </b>

            </ul>
        </div>
    )
}
