import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Loja from "./Pages/Loja";
import Eventos from "./Pages/Eventos";
import Parceiros from "./Pages/Parceiros";

import NavBar from "./Layout/NavBar";
import Container from "./Layout/Container";
import Footer from "./Layout/Footer";
function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height" >
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/loja" element={<Loja />}></Route>
        </Routes>
        <Routes>
          <Route path="/eventos" element={<Eventos />}></Route>
        </Routes>
        <Routes>
          <Route path="/parceiros" element={<Parceiros />}></Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
