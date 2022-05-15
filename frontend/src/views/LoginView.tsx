import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import { signup } from '../services/auth.service';
import { useAppStore } from '../state/state';

export const SignupView: React.FC<any> = () => {
  const setUser = useAppStore(state => state.setUser)

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const elements = e.target.elements;
    
    const email = elements['email'].value;
    const password = elements['password'].value;

    signup({
      email,
      password
    }).then(async res => {
      setUser(await res.json())
    })
  }

  return (
    <Flex width="100%" height="100%" justify="center" align="center">
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap={6} alignItems="center">
          <Heading>Sign in</Heading>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" placeholder="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" placeholder="Password" />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
