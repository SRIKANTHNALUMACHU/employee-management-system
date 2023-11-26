import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { addBankAccount } from "../../../apis/resource";
import { useNavigate, useLocation } from "react-router-dom";

const AddBankAccount = () => {
  const { state } = useLocation();
  const empId = state?.empId ? state.empId : "";
  const [data, setData] = useState({
    accountNumber: "",
    bankName: "",
    branchLocation: "",
    employeeId: empId,
    routingNumber: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("add employee");
    console.log(data);
    await addBankAccount(data)
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
      marginY="3rem"
    >
      <Text fontSize="xl" mb="4" textAlign="center">
        Add Bank Account
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing="4" align="stretch">
          <FormControl>
            <FormLabel htmlFor="accountNumber">Account Number</FormLabel>
            <Input
              type="number"
              id="accountNumber"
              name="accountNumber"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="bankName">Bank Name</FormLabel>
            <Input
              type="text"
              id="bankName"
              name="bankName"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="branchLocation">Branch Location</FormLabel>
            <Input
              type="text"
              id="branchLocation"
              name="branchLocation"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="routingNumber">Routing Number</FormLabel>
            <Input
              type="number"
              id="routingNumber"
              name="routingNumber"
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

export default AddBankAccount;
