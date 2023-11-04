import { Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("handle button clicked");
  };
  return (
    <Box>
      <Box
        p={4}
        maxW="md"
        borderWidth={1}
        borderRadius="md"
        marginLeft="35rem"
        marginTop="30vh"
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
      </Box>
    </Box>
  );
};
export default Login;
