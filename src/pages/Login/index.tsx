import { Box, Input, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import image from "../../assets/employee_background.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fetch("8473-2600-6c5a-7f-a54c-3552-5e6c-20af-c494.ngrok-free.app/test")
      .then()
      .then((res) => {
        console.log("rea0", res);
      })
      .catch((err) => {
        console.log("erer", err);
      });
    console.log("handle button clicked");
  };
  return (
    <Box backgroundImage={image} w="100vw" h="100vh" pt="30vh">
      <Box
        p={4}
        maxW="md"
        borderWidth={1}
        borderRadius="md"
        marginLeft="35rem"
        boxShadow="2xl"
        bg="#FFFBF5"
      >
        <Input
          mb={4}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          mb={4}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
        <Link to="/register">
          <Text color="#526D82">Don't have an account? Register</Text>
        </Link>
      </Box>
    </Box>
  );
};
export default Login;
