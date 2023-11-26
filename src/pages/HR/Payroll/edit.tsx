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
import { editPayroll } from "../../../apis/resource";
import { useLocation, useNavigate } from "react-router-dom";

const EditPayroll = () => {
  const { state } = useLocation();

  const [data, setData] = useState({
    employeeId: state?.employeeId ? state.employeeId : "",
    payrollId: state?.payrollId ? state?.payrollId : "",
    basePay: state?.basePay ? state?.basePay : "",
    variablePay: state?.variablePay ? state?.variablePay : "",
    taxes: state?.taxes ? state?.taxes : "",
    totalPaid: state?.totalPaid ? state?.totalPaid : "",
    payDate: state?.payDate ? state?.payDate?.split("T")[0] : "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("add employee");
    console.log(data);
    await editPayroll(data)
      .then(() => {
        console.log("added ");
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
        Edit Payroll
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing="4" align="stretch">
          <FormControl>
            <FormLabel htmlFor="basePay">Base Pay</FormLabel>
            <Input
              type="number"
              id="basePay"
              name="basePay"
              onChange={(e) => {
                onChangeInput(e);
              }}
              value={data.basePay}
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
              value={data.variablePay}
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
              value={data.taxes}
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
              value={data.totalPaid}
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
              value={data.payDate}
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

export default EditPayroll;
