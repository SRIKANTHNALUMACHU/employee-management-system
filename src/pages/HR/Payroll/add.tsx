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
import { addPayroll } from "../../../apis/resource";
import { useNavigate } from "react-router-dom";

const AddPayroll = () => {
  const [data, setData] = useState({
    employeeId: "",
    basePay: "",
    variablePay: "",
    taxes: "",
    totalPaid: "",
    payDate: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPayroll(data)
      .then(() => {
        navigate("/hr-payroll");
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
        Add Payroll
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing="4" align="stretch">
          <FormControl>
            <FormLabel htmlFor="basePay">Employee ID</FormLabel>
            <Input
              type="number"
              id="employeeId"
              name="employeeId"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="basePay">Base Pay</FormLabel>
            <Input
              type="number"
              id="basePay"
              name="basePay"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="variablePay">Variable Pay</FormLabel>
            <Input
              type="number"
              id="variablePay"
              name="variablePay"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="taxAmount">Tax Amount</FormLabel>
            <Input
              type="number"
              id="taxes"
              name="taxes"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="totalPaid">Total Salary</FormLabel>
            <Input
              type="number"
              id="totalPaid"
              name="totalPaid"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="payDate">Pay Date</FormLabel>
            <Input
              type="date"
              id="payDate"
              name="payDate"
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

export default AddPayroll;
