import { Box, Text, HStack, Button, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { Icon } from "@chakra-ui/react";
const Navbar = () => {
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
            <Text>Employee Payroll Management System</Text>
          </Box>
        </Link>
        <HStack spacing={4}>
          <Link to="/login">
            <Button colorScheme="whiteAlpha">Login</Button>
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
          <Link to="/payroll">
            <Button colorScheme="whiteAlpha">Payroll</Button>
          </Link>
          <Link to="/hr-employee">
            <Button colorScheme="whiteAlpha">Employee</Button>
          </Link>
          <Link to="/about">
            <Button colorScheme="whiteAlpha">About</Button>
          </Link>
        </HStack>
        <IconButton
          display={{ base: "block", md: "none" }}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
        />
      </HStack>
    </Box>
  );
};

export default Navbar;
