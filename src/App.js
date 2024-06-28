import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import { Web } from './Components/Web';
import { Web2 } from './Components/Web2';

function App() {
  return (
    <>
      {/* <Web /> */}
      <Web2/>
    </>
  );
}

export default App;
