import PayrollImage from "../../assets/payroll_image.jpg";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  HStack,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode, useEffect } from "react";
const Home = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (isLoggedIn === "false") {
      localStorage.setItem("isLoggedIn", "true");
      location.reload();
    }
  }, []);
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  return (
    <Box
      backgroundColor="#ECF8F9"
      textAlign="center"
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignContent="center"
      backgroundImage={PayrollImage}
      bgRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box
        display="flex"
        gap={5}
        color="white"
        justifyContent="center"
        alignContent="center"
        flexDir="column"
        marginTop={5}
      >
        <HStack justifyContent="center">
          <Box
            width={300}
            height={300}
            bg="#191D88"
            rounded={5}
            alignContent="center"
            boxShadow="2xl"
          >
            {" "}
            Employees
            <Text mt="1rem" color="#E7F6F2" p={2}>
              {" "}
              The Employee Table provides a comprehensive view of essential
              employee details, including their First Name, Last Name, Gender,
              Hired Date, Phone number, Designation, and Bank Details. It offers
              a structured and organized representation of employee information,
              facilitating easy access to key details for efficient management
              and reference purposes.
            </Text>
          </Box>
          <Box
            width={300}
            height={300}
            bg="#1450A3"
            rounded={5}
            p={2}
            boxShadow="2xl"
          >
            {" "}
            Payroll
            <Text color="#E7F6F2">
              The payroll table holds critical financial information for each
              employee, encompassing base pay, variable pay, tax deductions,
              total salary, and pay date. Additionally, it's designed to allow
              HR personnel the flexibility to modify and update these details as
              necessary, ensuring accuracy and adaptability in managing employee
              compensation.
            </Text>
          </Box>
        </HStack>
        <HStack justifyContent="center">
          <Box
            width={300}
            height={200}
            bg="#512B81"
            rounded={5}
            color="#E7F6F2"
            p={2}
            boxShadow="2xl"
          >
            {" "}
            TimeSheets
            <Text color="#E7F6F2">
              Effortlessly track your work hours with our Employee Payroll
              Management System. Easily log your time sheet ID, employee ID,
              date, and hours worked, ensuring accurate and efficient payroll
              management
            </Text>
          </Box>
          <Box
            width={300}
            height={200}
            bg="#4E31AA"
            rounded={5}
            p={2}
            boxShadow="2xl"
          >
            {" "}
            Departments
            <Text color="#E7F6F2">
              Explore departments seamlessly within our system. Access
              department IDs, names, and manager details for streamlined
              organizational management and efficient team coordination.
            </Text>
          </Box>
        </HStack>
      </Box>
      <Box position="fixed" bottom="0" height="4rem" width="100vw">
        {" "}
        <Box
          bg={useColorModeValue("gray.50", "gray.900")}
          color={useColorModeValue("gray.700", "gray.200")}
        >
          <Container
            as={Stack}
            maxW={"4xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text>
              © 2023 Employee Payroll Management System. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
