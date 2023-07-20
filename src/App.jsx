import { useState } from 'react';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import RandomIcon from './components/RandomIcon';

// transform Icons object to array and format
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

// add all icons
library.add(...iconList);

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function App() {
  const [randomIcon, setRandomIcon] = useState('0'); // "0" is first Icon in Library

  // get random icon
  async function handleClick() {
    await delay(3000);
    const randomIndex = Math.floor(Math.random() * iconList.length);
    const selectedRandomIcon = iconList[randomIndex];
    setRandomIcon(selectedRandomIcon);
  }

  return <RandomIcon icon={randomIcon} onClick={handleClick} />;
}

export default App;
