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
import { addTimesheet } from "../../apis/resource";
import { useNavigate } from "react-router-dom";

const PunchIn = () => {
  const roleData = localStorage.getItem("roleDetails");
  const roleDetails = roleData && JSON.parse(roleData);
  const [data, setData] = useState({
    employeeId: roleDetails.employeeId,
    date: "",
    hoursWorked: "",
    timesheet_id: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTimesheet(data)
      .then(() => {
        console.log("added ");
        navigate("/employee/view-timesheet");
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
        Add Timesheet
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing="4" align="stretch">
          {/* <FormControl isRequired>
              <FormLabel htmlFor="timesheet_id">Timesheet ID</FormLabel>
              <Input
                type="number"
                id="timesheet_id"
                name="timesheet_id"
                onChange={(e) => {
                  onChangeInput(e);
                }}
              />
            </FormControl> */}
          <FormControl isRequired>
            <FormLabel htmlFor="lastName">Date</FormLabel>
            <Input
              type="date"
              id="date"
              name="date"
              onChange={(e) => {
                onChangeInput(e);
              }}
              max={new Date().getDate()}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="hoursWorked">No of hours worked</FormLabel>
            <Input
              type="number"
              id="hoursWorked"
              name="hoursWorked"
              onChange={(e) => {
                onChangeInput(e);
              }}
              max={23}
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

export default PunchIn;
