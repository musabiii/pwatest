import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import One from "./components/one";
import Two from "./components/two";

function App() {
  const [page, setPage] = useState(<One />);

  const changePage = (p) => {
    if (p ===1) {
      setPage(<One/>)
    }

    if (p ===2) {
      setPage(<Two/>)
    }
  };

  return (
    <div className="App">
      <Header changePage = {changePage}/>
      {page}
    </div>
  );
}

export default App;
