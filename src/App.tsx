//import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CardList from "./components/Card-List/active-mints";

export type Monster = {
  id: string;
  name: string;
};

function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ActiveMints" element={<CardList monsters={monsters} />} />
      </Routes>
    </Router>
  );
}

export default App;
