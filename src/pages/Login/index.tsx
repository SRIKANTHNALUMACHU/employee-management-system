import { Box, Input, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import image from "../../assets/employee_background.jpg";
import { Link } from "react-router-dom";
import { verification } from "../../apis/auth";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await verification({ username, password })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err is", err);
      });
    console.log("handle button clicked");
  };
  return (
    <Box backgroundImage={image} w="100vw" h="100vh">
      <Box
        p={4}
        maxW="md"
        borderWidth={1}
        borderRadius="md"
        boxShadow="2xl"
        bg="#FFFBF5"
        marginX="auto"
        marginTop="12rem"
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
