import {
  Box,
  Text,
  HStack,
  Button,
  IconButton,
  useDisclosure,
  VStack,
  CloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { Icon } from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
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
          <Link to="/hr-payroll">
            <Button colorScheme="whiteAlpha">Payroll</Button>
          </Link>
          <Link to="/hr-employee">
            <Button colorScheme="whiteAlpha">Employee</Button>
          </Link>
          <Link to="/about">
            <Button colorScheme="whiteAlpha">About</Button>
          </Link>
        </HStack>

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
        <VStack
          p={4}
          display={{ md: "none" }}
          spacing={4}
          alignItems="flex-start"
        >
          <CloseButton alignSelf="flex-end" onClick={onClose} />
          {/* Mobile Links */}
          <Link to="/login">
            <Button w="full" colorScheme="whiteAlpha">
              Login
            </Button>
          </Link>
          <Link to="/hr-payroll">
            <Button w="full" colorScheme="whiteAlpha">
              Payroll
            </Button>
          </Link>
          <Link to="/hr-employee">
            <Button w="full" colorScheme="whiteAlpha">
              Employee
            </Button>
          </Link>
          <Link to="/employee/view">
            <Button w="full" colorScheme="whiteAlpha">
              View
            </Button>
          </Link>
          <Link to="/about">
            <Button w="full" colorScheme="whiteAlpha">
              About
            </Button>
          </Link>
          {/* Add more links as needed */}
        </VStack>
      )}
    </Box>
  );
};

export default Navbar;
