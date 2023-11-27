import { Box, Input, Button, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import image from "../../assets/employee_background.jpg";
import { Link, useNavigate } from "react-router-dom";
import { verification } from "../../apis/auth";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async () => {
    await verification({ username, password })
      .then((res) => {
        console.log("res", res);
        localStorage.setItem("roleDetails", JSON.stringify(res.data));
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("isLoggedIn", "false");
        toast({
          title: "Login Successful",
          status: "success",
          duration: 3500,
          isClosable: true,
        });
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log("err is", err);
        toast({
          title: "Login Failed",
          description: "Please check the credentials and try again",
          status: "error",
          duration: 3500,
          isClosable: true,
        });
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
