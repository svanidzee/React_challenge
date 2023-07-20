import { Center, Flex, Button } from '@chakra-ui/react';
import { findIconDefinition, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

// transform object to array and format
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

// add all icons
library.add(...iconList);
console.log(iconList);

const coffeeLookup = { prefix: 'fas', iconName: iconList[0].iconName };
const coffeeIconDefinition = findIconDefinition(coffeeLookup);

function App() {
  return (
    <Flex width={'100vw'} height={'100vh'} alignContent={'center'} justifyContent={'center'}>
      <Center>
        <FontAwesomeIcon icon={coffeeIconDefinition} />
        <Button>Change Icon</Button>
      </Center>
    </Flex>
  );
}

export default App;
