import { useState } from "react";
import "./Cell.css";

function Cell(props) {
  const handleCellClick = (e) => {
    const cellData = { id: props.cell.index, cell: props.cell, event: e };
    props.onCellClick(cellData);
    renderCell();
  };

  const renderCell = () => {
    if (props.cell.visible) {
      if (props.cell.hasMine) {
        setCell("💣");
      } else if (props.cell.numberOfNeighbouringMines > 0) {
        setCell(props.cell.numberOfNeighbouringMines);
      } else {
        setCell("");
      }
    } else {
      setCell("?");
    }
  };

  const [cell, setCell] = useState("?");

  return (
    <div onClick={handleCellClick} className="cell">
      {cell}
    </div>
  );
}

export default Cell;
