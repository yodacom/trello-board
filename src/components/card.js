//import React, { Component } from 'react';
import React from 'react';
//import ReactDom from 'react-dom';
import './card.css';


//======= Functional Stateless Way =========>

export default function Card() {
    const text  = 'Example card';
    return (
        <div className="card">
            {text}
        </div>
    );
};

//<<======= Class Based component way =======>>
// class Card extends Component {
//   render() {
//     return (
//         <div className="card">
//             <div className="card-label">
//               {this.props.text}
//               </div>
//         </div>
//     );
//   }
// }
// export default Card;
