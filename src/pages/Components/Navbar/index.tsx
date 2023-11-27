import {
  Box,
  Text,
  HStack,
  Button,
  IconButton,
  useDisclosure,
  VStack,
  CloseButton,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { Icon } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const [role, setRole] = useState(
    JSON.parse(localStorage.getItem("roleDetails"))?.roles[0]
  );
  const navigate = useNavigate();
  return (
    <Box as="header" bg="#363062" p={1} borderRadius={1} boxShadow="sm">
      <HStack
        justifyContent="space-between"
        h={12}
        px={12}
        textAlign="center"
        alignItems="center"
      >
        <Link to="/">
          <Box
            display="flex"
            flexDir="row"
            fontSize="2xl"
            fontWeight="semi-bold"
            color="white"
            gap={1}
          >
            <Icon as={MdOutlinePayment} textAlign="center" my="auto" />
            <Text>EPMS</Text>
          </Box>
        </Link>

        {/* Desktop Menu */}
        {isAuthenticated === "true" && role === "ROLE_HR" && (
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <Link to="/hr-timesheet">
              <Button colorScheme="whiteAlpha">Timesheets</Button>
            </Link>
            {/* <Link to="/employee">
            <Button colorScheme="whiteAlpha">Employee</Button>
          </Link>
          <Link to="/time-sheet">
            <Button colorScheme="whiteAlpha">Timesheet</Button>
          </Link>
          
          <Link to="/bank-account">
            <Button colorScheme="whiteAlpha">Bank A/C</Button>
          </Link>
          <Link to="/department">
            <Button colorScheme="whiteAlpha">Department</Button>
          </Link> */}
            <Link to="/hr-payroll">
              <Button colorScheme="whiteAlpha">Payroll</Button>
            </Link>
            <Link to="/hr-employee">
              <Button colorScheme="whiteAlpha">Employee</Button>
            </Link>
            <Link to="/hr-departments">
              <Button w="full" colorScheme="whiteAlpha">
                Departments
              </Button>
            </Link>

            <Button
              colorScheme="whiteAlpha"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              Logout
            </Button>
            {/* <Link to="/about">
            <Button colorScheme="whiteAlpha">About</Button>
          </Link> */}
          </HStack>
        )}

        {isAuthenticated === "true" && role === "ROLE_EMPLOYEE" && (
          <HStack>
            <Button
              colorScheme="whiteAlpha"
              onClick={() => {
                localStorage.clear();

                navigate("/");
              }}
            >
              Logout
            </Button>
            <Link to="/employee/view-payroll">
              <Button w="full" colorScheme="whiteAlpha">
                View Payroll
              </Button>
            </Link>
            <Link to="/employee/view-timesheet">
              <Button w="full" colorScheme="whiteAlpha">
                View Timesheets
              </Button>
            </Link>
            <Link to="/employee/view">
              <Avatar src="https://bit.ly/broken-link" size="sm" />
            </Link>
          </HStack>
        )}
        {isAuthenticated === "false" ||
          (!isAuthenticated && (
            <Link to="/login">
              <Button colorScheme="whiteAlpha">Login</Button>
            </Link>
          ))}

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
        />
      </HStack>

      {/* Mobile Menu */}
      {isOpen && (
        <VStack p={4} display={{ md: "none" }} alignItems="flex-start">
          <CloseButton alignSelf="flex-end" onClick={onClose} />
          {/* Mobile Links */}
          <Link to="/login">
            <Button w="full" colorScheme="whiteAlpha" mb="0.5rem">
              Login
            </Button>
          </Link>
          <Link to="/hr-payroll">
            <Button w="full" colorScheme="whiteAlpha" mb="0.5rem">
              Payroll
            </Button>
          </Link>
          <Link to="/hr-employee">
            <Button w="full" colorScheme="whiteAlpha" mb="0.5rem">
              Employee
            </Button>
          </Link>
          <Link to="/hr-departments">
            <Button w="full" colorScheme="whiteAlpha" mb="0.5rem">
              Departments
            </Button>
          </Link>
          <Link to="/employee/view">
            <Button w="full" colorScheme="whiteAlpha" mb="0.5rem">
              View
            </Button>
          </Link>

          {/* Add more links as needed */}
        </VStack>
      )}
    </Box>
  );
};

export default Navbar;
