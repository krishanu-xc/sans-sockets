import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState();
  const [name, setName] = useState();


  return (
    <VStack spacing="10px">
      <FormControl id="first-name" isRequired>
       
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <Input
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={()=>{ console.log("Login clicked"); }}
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="linkedin"
        width="100%"
        onClick={() => {
          setName("Guest");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
