import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Tarot2DPage from "./pages/2D/2DPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2d" element={<Tarot2DPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
