import React from 'react'
import {
  Container,
  Subscription,
  SubHeading,
  SubText,
  SubText2
} from './Disclaimer.elements'

const Disclaimer = () => {
    return (
       <Container>     
      <Subscription>
      <SubHeading>
      DISCLAIMER
      </SubHeading>
      <SubText>The contents of the ATI Physical Therapy web site, such as text, graphics, images,
         and other material contained on the ATI Physical Therapy web site ("Content") are for informational purposes only.</SubText>
         <SubText2>
         The Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
          Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.<br/><br/>
          If you think you may have a medical emergency, call your doctor or 911 immediately. Reliance on any information provided by the ATI Physical Therapy web site is solely at your own risk.<br/><br/>
          © 2015 ATI Holdings, LLC<br/><br/> 
          All rights reserved</SubText2>      
    </Subscription>
    </Container>
    )
}

export default Disclaimer
