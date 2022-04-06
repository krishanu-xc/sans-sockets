import { Button, FormControl, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const SignUp = () => {

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();


  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
          <Input
            type={"password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
      </FormControl>
      <FormControl id="password" isRequired>
          <Input
            type={"password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}/>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={() => {console.log("Sign up button")}}
      >
        Sign Up
      </Button>
    </VStack>
  );
}

export default SignUp