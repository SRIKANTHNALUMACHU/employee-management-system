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
import { editEmployee } from "../../../../apis/resource";
import { useLocation, useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState({
    emailId: state?.email ? state?.email : "",
    designation: state?.designation ? state?.designation : "",
    hiredate: state?.hiredate ? state?.hiredate.split("T")[0] : "",
    gender: state?.gender ? state?.gender : "Male",
    phone: state?.phone ? state?.phone : "",
    lastName: state?.lastName ? state?.lastName : "",
    firstName: state?.firstName ? state?.firstName : "",
    ssn: state?.ssn ? state?.ssn : "",
  });

  console.log("sra", state);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(data);
    await editEmployee(data, state?.empId)
      .then(() => {
        console.log("edited ");
        navigate("/hr-employee");
      })
      .catch((err) => {
        console.log("error is", err);
      });
  };
  const onChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
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
        Edit Employee
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
              value={data.firstName}
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
              value={data.lastName}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="emailId"
              onChange={(e) => {
                onChangeInput(e);
              }}
              value={data.emailId}
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
              value={data.phone}
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
              value={data.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="hiredate">Hire Date</FormLabel>
            <Input
              type="date"
              id="hiredate"
              name="hiredate"
              onChange={(e) => {
                onChangeInput(e);
              }}
              value={data.hiredate}
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
              value={data.designation}
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

export default EditEmployee;
