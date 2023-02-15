import { useState } from "react";
import "./Cell.css";

function Cell(props) {
  const handleCellClick = (e) => {
    const cellData = { id: props.cell.index, cell: props.cell, event: e };
    props.onCellClick(cellData);
    renderCell(e);
  };

  const renderCell = (event) => {
    if (props.cell.visible) {
      if (props.cell.hasMine) {
        event.target.classList.add("revealed", "gameOver"); // Add a class when clicked
        setCell("💣");
      } else if (props.cell.numberOfNeighbouringMines > 0) {
        event.target.classList.add("revealed"); // Add a class when clicked
        setCell(props.cell.numberOfNeighbouringMines);
      } else {
        event.target.classList.add("revealed"); // Add a class when clicked
        setCell("");
      }
    } else {
      setCell("?");
    }
  };

  const [cell, setCell] = useState("");

  return (
    <div onClick={handleCellClick} className="cell">
      {cell}
    </div>
  );
}

export default Cell;
