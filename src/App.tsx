import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./home/Home";
import Tarot2DPage from "./2D/2DPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2D" element={<Tarot2DPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
