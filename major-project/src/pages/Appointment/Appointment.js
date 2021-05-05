import React from 'react';
import { Button } from '../../globalStyles';
import {
    Container,
    Subscription,
    SubHeading,
    SubHeading2,
    SubText,
    SubText2,
    Form,
    FormInput
} from './Appointment.elements'

const Appointment = () => {
    return (
        <Container>
            <Subscription>
                <SubHeading>
                    Book Your Appointment
       </SubHeading>
                <SubText>Search for an ATI Physical Therapy location near you</SubText>
                <Form>
                    <FormInput name='email' type='text' placeholder='Enter 6 Digit Zipcode' />
                    <Button fontBig>Find Locations</Button>
                </Form>
                <SubHeading2><br/><br/>In-Clinic and Telehealth Appointments</SubHeading2>
                <SubText2>
                <br/>
                Request an appointment time that works for you.
                 If you are interested in online physical therapy, please select a clinic and we'll see if you are a candidate for online PT. </SubText2>
                 <SubHeading2><br/><br/>Physical Therapy Locations</SubHeading2>
                <SubText2>
                <br/>
                With over 850+ locations nationwide, we are the largest physical therapy company under one brand.  </SubText2>
                 <SubHeading2><br/><br/>Accepting Most Insurance</SubHeading2>
                <SubText2>
                <br/>
                We accept virtually all major insurance carriers and verify your coverage.  </SubText2>
            </Subscription>
        </Container>
    )
}

export default Appointment
