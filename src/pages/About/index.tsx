import { Box, Text } from "@chakra-ui/react";
import "./index.css";

const About = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Text
        textAlign="center"
        h={100}
        w={500}
        bg="#C5FFF8"
        borderRadius="1xl"
        mt="2rem"
        p="1rem"
      >
        Developed with modern technologies, this system ensures accuracy,
        security, and efficiency in handling payroll tasks, freeing up time for
        HR professionals to focus on other strategic initiatives.
      </Text>
    </Box>
  );
};

export default About;
