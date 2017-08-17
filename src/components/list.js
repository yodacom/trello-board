// import React, { Component } from 'react';
import React from 'react';
//import ReactDOM from 'react-dom';
import Card from './card';

import './list.css';

export default function List() {
    return (
        <div className="list">
            <h3>Example list</h3>
            <Card />
            <Card />
            <Card />
        </div>
    );
}


//<<=====Class Based Stateful Component Style ==>

// class CardList extends React.Component {
// render() {
//   const cards = [];
//       for (let i = 0; i < 1; i++)
//         cards.push(<Card text="this prop"/>);
//     // getInitialState => ()
//     //     };
//     // },
//     // const onChange () => {
//     //     this.setState({

//     //     });
//     // },
//     return (
//       <div>
//         <div className="List">
//           {cards}
//         </div>

//         <form>
//           <input type="text" />
//         </form>
//       </div>
//     );
//   }
// }

// export default List;
