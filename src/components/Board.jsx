import React from "react";
import "./Board.css";

// Components
import createBoard from "../assets/utils";
import Cell from "./Cell";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleCellCallback = this.handleCellCallback.bind(this);
    this.board = createBoard(25, 7);
  }

  handleCellCallback(data) {
    console.log("handleCellCallback", data.cell);
    const gameCell = data.cell;

    gameCell.visible = true; // Show the cell
  }

  render() {
    // Render a cell component based on game settings (createBoard(x,y))
    let cells = this.board.map((cell, index) => {
      return (
        <Cell key={index} cell={cell} onCellClick={this.handleCellCallback} />
      );
    });
    return <div className="board">{cells}</div>;
  }
}

export default Board;
