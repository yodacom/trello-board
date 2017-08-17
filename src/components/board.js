//import React, { Component } from 'react';
import React from 'react';
//import ReactDOM from 'react-dom';
// import Card from './card';
import List from './list';
import'./board.css';

export default function Board() {
    return (
        <div className="board">
            <h2>Example board</h2>
            <div className="lists">
                <List />
                <List />
                <List />
            </div>
        </div>
    );
}

// <<  ======Stateful Way Class Based Component ======== >>
// class Board extends Component {
//   render() {
//     const boards = [];
//     for (let i = 0; i < 3; i++) {
//       boards.push(<CardList />);
//     }
//     return (
//       <div className="board">
//         <div className="card-label">
//             {this.props.label}
//            {boards}
//         </div>
//       </div>
//     );
//   }
// }
// export default Board;
