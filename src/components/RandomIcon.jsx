import React from 'react';
import { Center, Flex, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RandomIcon({ icon, onClick }) {
  return (
    <Flex width={'100vw'} height={'100vh'} alignContent={'center'} justifyContent={'center'}>
      <Center gap={10}>
        <FontAwesomeIcon icon={icon} size='2xl' />
        <Button variant='outline' onClick={onClick}>
          Change Icon
        </Button>
      </Center>
    </Flex>
  );
}
