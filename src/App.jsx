import { useState } from "react";
import { ReactDOM } from "react";
import "./App.css";

// Components
import Board from "./components/Board/Board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
