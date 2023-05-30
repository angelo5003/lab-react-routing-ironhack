import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Hompage/HomePage";
import About from "./pages/About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
