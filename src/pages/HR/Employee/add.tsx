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
import { addEmployee, getAllDepartments } from "../../../apis/resource";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddEmployee = () => {
  const [data, setData] = useState({
    emailId: "",
    designation: "",
    hiredate: "",
    gender: "Male",
    phone: "",
    lastName: "",
    firstName: "",
    departmentId: "",
  });
  const [departments, SetDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      await getAllDepartments()
        .then((res) => {
          SetDepartments(res);
        })
        .catch((err) => {
          console.log("error is", err);
        });
    }
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("add employee");
    console.log(data);
    await addEmployee(data)
      .then(() => {
        console.log("added ");
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
        Add Employee
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing="4" align="stretch">
          <FormControl isRequired>
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
          <FormControl isRequired>
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
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="emailId"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              type="number"
              id="phone"
              name="phone"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl isRequired>
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
              <option value="Others">Others</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="hiredate">Hire Date</FormLabel>
            <Input
              type="date"
              id="hiredate"
              name="hiredate"
              onChange={(e) => {
                const date = new Date();
                console.log("daf", date.getDate());
                console.log(e.target.value);
                onChangeInput(e);
              }}
              max={new Date().getDate()}
            />
          </FormControl>
          <FormControl isRequired>
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
          <FormControl isRequired>
            <FormLabel htmlFor="department">Department</FormLabel>
            <Select
              id="department"
              name="departmentId"
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder="Select department"
            >
              {departments.map((item) => {
                return (
                  <option value={item?.departmentId}>
                    {item?.departmentName}
                  </option>
                );
              })}
            </Select>
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
