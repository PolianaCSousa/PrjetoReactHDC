import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Contato from "./components/pages/Contato";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/company" element={<Company/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/newproject" element={<NewProject/>}/>
          </Routes>
        </Container> 
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
