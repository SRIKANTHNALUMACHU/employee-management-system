import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Components/Navbar";
import { Box } from "@chakra-ui/react";
import image from "./assets/employee_background.jpg";

function App() {
  return (
    <Box backgroundImage={image} h="100vh" w="100vw">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
