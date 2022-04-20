import React, {Component} from 'react';
import Announcement from './Announcement';
import ResetButton from './resetButton';
import Tile from './tile';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ], 
      turn: 'X'
    }
  }

  updateBoard(location, player){

  }
  render(){
    return (
      <div className='container'>
        <div className='menu'>
          <h1>Tic-Tac-Toe</h1>
          <Announcement />
          <ResetButton />
        </div>
        {this.state.gameBoard.map(function(value, i){
            return(
              <Tile key={i}
              location={i}
              value={value}
              updateBoard={this.updateBoard.bind(this)}
              turn={this.state.turn} />
          )
        }.bind(this))}

      </div>
    );
  }     
}


export default App;
