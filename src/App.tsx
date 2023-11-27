import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Components/Navbar";
import { Box } from "@chakra-ui/react";
import About from "./pages/About";
import Register from "./pages/Register";
import Payroll from "./pages/HR/Payroll";
import HrEmployee from "./pages/HR/Employee";
import AddEmployee from "./pages/HR/Employee/add";
import EditEmployee from "./pages/HR/Employee/edit";
import AddPayroll from "./pages/HR/Payroll/add";
import EditPayroll from "./pages/HR/Payroll/edit";
import ViewEmployee from "./pages/Employee/view";
import AddBankAccount from "./pages/HR/BankAccount/add";
import ViewBankAccounts from "./pages/HR/BankAccount/view";
import HrDepartments from "./pages/HR/Department";
import AddDepartment from "./pages/HR/Department/add";
import HrTimeSheet from "./pages/HR/TimeSheets";

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
          <Route path="/hr-payroll" element={<Payroll />} />
          <Route path="/hr-employee" element={<HrEmployee />} />
          <Route path="/hr/add-employee" element={<AddEmployee />} />
          <Route path="/hr/edit-employee" element={<EditEmployee />} />
          <Route path="/hr/add-payroll" element={<AddPayroll />} />
          <Route path="/hr/edit-payroll" element={<EditPayroll />} />
          <Route path="/employee/view" element={<ViewEmployee />} />
          <Route path="/hr/add-bank-account" element={<AddBankAccount />} />
          <Route path="/hr/view-bank-accounts" element={<ViewBankAccounts />} />
          <Route path="/hr-departments" element={<HrDepartments />} />
          <Route path="/hr/add-department" element={<AddDepartment />} />
          <Route path="/hr-timesheet" element={<HrTimeSheet />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
