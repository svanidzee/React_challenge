import { useState } from 'react';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { Center, Flex, Button } from '@chakra-ui/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// transform Icons object to array and format
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

// add all icons
library.add(...iconList);
console.log(iconList);

function App() {
  const [randomIcon, setRandomIcon] = useState('0'); // "0" is first Icon in Library
  console.log(randomIcon);

  // get random icon
  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * iconList.length);
    const selectedRandomIcon = iconList[randomIndex];
    setRandomIcon(selectedRandomIcon);
  };

  return (
    <Flex width={'100vw'} height={'100vh'} alignContent={'center'} justifyContent={'center'}>
      <Center>
        <FontAwesomeIcon icon={randomIcon} size='2xl' />
        <Button onClick={getRandomItem}>Change Icon</Button>
      </Center>
    </Flex>
  );
}

export default App;
