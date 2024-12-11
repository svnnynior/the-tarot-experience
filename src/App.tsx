import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import ShowcasePage from "./pages/ShowcasePage";
import ExperiencePage from "./pages/ExperiencePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
