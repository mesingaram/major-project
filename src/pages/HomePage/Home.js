import React from 'react';
import { homeObjOne, 
         homeObjTwo, 
         homeObjThree, 
         homeObjFour, 
         homeObjFive,
         homeObjSix,
         homeObjSeven } from './Data';
import { InfoSection } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
      <InfoSection {...homeObjSix} />
      <InfoSection {...homeObjSeven} />      
    </>
  );
}

export default Home;
