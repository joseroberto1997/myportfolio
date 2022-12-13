import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Main from "./components/Main";
import Experience from "./components/Experience";
import Repos from "./components/Repos";
import GlobalStyle from "./globalStyles";


export default function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Main />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/repos" element={<Repos />} />
      </Routes>
      </Router>
    </>
  )
}