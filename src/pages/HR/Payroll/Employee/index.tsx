import { Box, HStack, Heading, Button } from "@chakra-ui/react";
import { FaUserTie } from "react-icons/fa";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { addEmployee } from "../../../../apis/resource1";
const HrEmployee = () => {
  const onClickAdd = () => {
    console.log("Add button clicked");
  };
  return (
    <Box>
      <Box display="flex">
        <HStack>
          <FaUserTie />
          <Heading> Employee Details</Heading>
          <Button
            aria-label="none"
            rightIcon={<PlusSquareIcon />}
            onClick={onClickAdd}
          >
            Add
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};
export default HrEmployee;
