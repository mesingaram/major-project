import React from 'react';
import { Button } from '../../globalStyles';
import { homeObjOne, 
         homeObjTwo, 
         homeObjThree, 
         homeObjFour, 
         homeObjFive,
         homeObjSix,
         homeObjSeven } from './Data';
import { InfoSection } from '../../components';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form
} from '../../components/Footer/Footer.elements'

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

      <FooterContainer>
<FooterSubscription>
        <FooterSubHeading>
        Why Work for ATI?
        </FooterSubHeading>
        <FooterSubText>Find out why ATI is the company of choice for over 7,000 team members nationwide!         
        </FooterSubText>
        <Form>          
          <Button fontBig>Learn More</Button>
        </Form>
      </FooterSubscription>
      <FooterSubscription>
        <FooterSubHeading>
        Ready To Get Started?
        </FooterSubHeading>        
        <Form>          
          <Button fontBig>Request an appointment today!</Button>
        </Form>
      </FooterSubscription>
      </FooterContainer>    
    </>
  );
}

export default Home;
