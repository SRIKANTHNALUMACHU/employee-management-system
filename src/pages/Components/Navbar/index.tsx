import { Box, Text, HStack, Button, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box
      as="header"
      bg="#363062"
      p={1}
      borderRadius={1}
      w="100vw"
      boxShadow="sm"
    >
      <HStack justifyContent="space-between" h={12} pl={12} alignItems="center">
        <Box>
          <Text fontSize="2xl" fontWeight="semi-bold" color="white">
            Employee Management System
          </Text>
        </Box>
        <HStack spacing={4}>
          <Link to="/">
            <Button colorScheme="whiteAlpha" variant="link">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button colorScheme="whiteAlpha" variant="link">
              About
            </Button>
          </Link>
          <Link to="/services">
            <Button colorScheme="whiteAlpha" variant="link">
              Services
            </Button>
          </Link>
          <Link to="/login">
            <Button colorScheme="whiteAlpha" variant="link">
              Login
            </Button>
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
