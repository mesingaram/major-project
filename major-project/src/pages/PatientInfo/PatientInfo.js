import React from 'react'
import {Container, Subscription, SubHeading, SubText, SubHeading2, SubText2} from './PatientInfo.elements'


const PatientInfo = () => {
    return (
        <Container>
            <Subscription>
                <SubHeading>
                New Patient Information
       </SubHeading>
       <SubText>Are you a new patient? Here’s how to prepare for your first visit with us, and get started with therapy.</SubText>
       <SubHeading2><br/><br/>Getting Started Is Easy</SubHeading2>
                <SubText2>
                <br/>
                We understand you might be apprehensive about your first physical therapy appointment.
                 But from the moment you set foot in one of our clinics, you’ll feel like you belong at ATI.
                 Our welcoming front office staff members are happy to help you begin your path to recovery and answer any insurance, scheduling, or billing questions along the way. </SubText2>
                 <SubHeading2><br/><br/>New Patient Forms</SubHeading2>
                <SubText2>
                <br/>
                To save time at your first visit,
                 download and complete the following forms ahead of time, and we’ll get you started even faster.<br/><br/>
                 <li><a href='/somefile.txt' download>Notice of Privacy Practices and Consents</a></li><br/>
                 <li><a href='/somefile.txt' download>Medical History Form English</a></li><br/>
                 <li><a href='/somefile.txt' download>Medical History Form Spanish</a></li></SubText2>
                 <SubHeading2><br/><br/>When Should I Arrive?</SubHeading2>
                <SubText2>
                <br/>
                Please arrive 15 minutes before your scheduled appointment time in order to complete all necessary paperwork.
                 To save time, please complete forms ahead of time, and we’ll get you started even faster.<br/><br/>
                 </SubText2>
                 <SubHeading2><br/><br/>What Should I Wear and Bring?</SubHeading2>
                <SubText2>
                <br/>
                Please wear comfortable clothing to your appointments, such as athletic wear; please do not wear jewelry. Please bring to your appointment:<br/><br/>
                <li>Photo identification* (valid driver’s license, valid state ID, school ID card, or valid passport)</li><br/>
                <li>Prescription/doctor referral</li><br/>
                <li>Insurance card</li><br/><br/>
                *As a creditor under the Federal Trade Commission's "Red Flags Rule," we adhere to an Identity Theft Prevention Program.
                 For this reason, we ask that you present photo identification at the time of registration.
                  We appreciate your cooperation in assisting us with protecting your identity and the prevention of identity theft.
                 </SubText2>
                 <SubHeading2><br/><br/>What Will My First Appointment Include?</SubHeading2>
                <SubText2>
                <br/>
                Your first visit will last approximately one hour and will include a comprehensive evaluation and applicable treatment 
                administered by a licensed physical therapist. Your physical therapist will review your medical history,
                 diagnostic tests and any recent events that may have contributed to your current condition.
                  Your evaluation will include AN assessment of your current functional deficits, pain level and posture,
                   as well as a thorough evaluation of your flexibility, strength, balance and endurance.<br/><br/>
                   Following your evaluation, your physical therapist will thoroughly explain your personalized treatment plan and expectations for recovery,
                    as well as provide a commitment letter to you. Communication between the patient and physical therapist is of utmost importance at ATI,
                     and you are an active participant in your recovery.
                 </SubText2>
            </Subscription>
        </Container>
    )
}

export default PatientInfo
