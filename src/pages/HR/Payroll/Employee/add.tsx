import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const AddEmployee = () => {
  const [data, setData] = useState({
    email: "",
    designation: "",
    hiredate: "",
    gender: "Male",
    phone: "",
    lastName: "",
    firstName: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("add employee");
    console.log(data);
  };
  const onChangeInput = (e) => {
    setData({ [e.target.name]: e.target.value, ...data });
  };

  return (
    <Box
      w="400px"
      marginLeft="auto"
      backgroundColor="#ECF8F9"
      marginRight="auto"
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      marginTop="3rem"
    >
      <Text fontSize="xl" mb="4" textAlign="center">
        Add Employee
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing="4" align="stretch">
          <FormControl>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              type="text"
              id="phone"
              name="phone"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <Select
              id="gender"
              name="gender"
              onChange={(e) => {
                onChangeInput(e);
              }}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="hiredate">Hire Date</FormLabel>
            <Input
              type="datetime-local"
              id="hiredate"
              name="hiredate"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="designation">Designation</FormLabel>
            <Input
              type="text"
              id="designation"
              name="designation"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AddEmployee;
