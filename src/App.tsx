import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Components/Navbar";
import { Box } from "@chakra-ui/react";
import About from "./pages/About";
import Register from "./pages/Register";
import Payroll from "./pages/HR/Payroll";
import HrEmployee from "./pages/HR/Payroll/Employee";

function App() {
  return (
    <Box h="100vh" w="100vw" display="flex" flexDir="column">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/hr-employee" element={<HrEmployee />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
