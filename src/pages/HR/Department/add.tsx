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
import {
  addDepartment,
  addEmployee,
  getAllDepartments,
} from "../../../apis/resource";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddDepartment = () => {
  const [data, setData] = useState({
    departmentEmailId: "",
    departmentName: "",
    managerName: "",
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
    await addDepartment(data)
      .then(() => {
        console.log("added ");
        navigate("/hr-departments");
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
        Add Department
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing="4" align="stretch">
          <FormControl isRequired>
            <FormLabel htmlFor="departmentEmailId">
              Department Email ID
            </FormLabel>
            <Input
              type="text"
              id="departmentEmailId"
              name="departmentEmailId"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="lastName">Department Name</FormLabel>
            <Input
              type="text"
              id="departmentName"
              name="departmentName"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="managerName">Manager Name</FormLabel>
            <Input
              type="text"
              id="managerName"
              name="managerName"
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

export default AddDepartment;
