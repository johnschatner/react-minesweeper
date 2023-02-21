import React from "react";
import "./Board.css";

// Components
import createBoard from "../../assets/utils";
import Cell from "../Cell/Cell";

class Board extends React.Component {
  constructor() {
    super();
    this.handleCellCallback = this.handleCellCallback.bind(this);
    this.state = {
      gameOver: false,
      hasWon: false,
      boardSize: 25,
      mines: 1,
    };
    this.board = createBoard(this.state.boardSize, this.state.mines);
  }

  handleCellCallback(data) {
    console.log("board", this.board);
    console.log("handleCellCallback", data.cell, data.event);
    const gameCell = data.cell;
    gameCell.visible = true; // Show the cell

    // Game
    // Check if we clicked on a mine!
    if (gameCell.hasMine) {
      console.log("Game over!");
      this.setState({ gameOver: true }); // Game over!
    }

    // We haven't lost
    else {
      // Let's see if we have won!
      let visible = []; // Check if the visible cells are equal to the winnable number
      const winnableNumber = this.state.boardSize - this.state.mines; // The winnable number is boardSize - mines

      // iterate over the board state on each click
      for (let i = 0; this.board.length > i; i++) {
        let cell = {
          index: this.board[i].index,
          hasMine: this.board[i].hasMine,
          visible: this.board[i].visible,
        };
        if (!cell.hasMine && cell.visible) {
          visible.push(true);
        }
      }
      // Check if we have clicked on every cell that doesn't contain a mine (should equal the winnableNumber)
      if (visible.length === winnableNumber) {
        // We have won!
        this.setState({ gameOver: false, hasWon: true });
      }
    }
  }

  render() {
    // Render a cell component based on game settings (createBoard(x,y))
    let cells = this.board.map((cell, index) => {
      return (
        <Cell key={index} cell={cell} onCellClick={this.handleCellCallback} />
      );
    });
    return (
      <div>
        {this.state.gameOver && (
          <div>
            <span className="lost">Game over</span>
          </div>
        )}
        {this.state.hasWon && (
          <div>
            <span className="won">You won!</span>
          </div>
        )}
        <div
          style={{
            pointerEvents:
              this.state.gameOver || this.state.hasWon ? "none" : "auto",
          }}
          className="board"
        >
          {cells}
        </div>
        <div className="game-reset">
          <button onClick={() => window.location.reload(false)}>Restart</button>
        </div>
      </div>
    );
  }
}

export default Board;
