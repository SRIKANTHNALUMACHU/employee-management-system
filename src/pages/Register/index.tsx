import { Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import image from "../../assets/employee_background.jpg";
import { register } from "../../apis/auth";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    await register({ email: email, username: username, password: password })
      .then((res) => {
        console.log("response is", res);
      })
      .catch((err) => {
        console.log("error is", err);
      });
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
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          mb={4}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          mb={4}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleRegister}>
          Register
        </Button>
      </Box>
    </Box>
  );
};
export default Register;
