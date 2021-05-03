import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import loco from '../../images/loco.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}><h1>CONTACT</h1><br/>
          Send us a message by completing the form below. Someone will be in touch within 24 hours or call at 855-MY-ATIPT (855-359-9484).</Paper>
          <Form>
              <b><h1>Send Us a Message</h1></b><br/>
              <left>
                  <div>All fields are required unless otherwise noted.</div><br/>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>NAME</Form.Label>
    <Form.Control type="email"  />
  </Form.Group><br/>
  
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>STATE</Form.Label>
    <Form.Control type="email"  />
  </Form.Group><br/>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  />
  </Form.Group><br/>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>PHONE NUMBER</Form.Label>
    <Form.Control type="email"  />
  </Form.Group><br/>


  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Whom Would you like to Contact?</Form.Label><br/>
    <Form.Control as="select">
      <option>physical theraphy</option>
      <option>sports medicine</option>
      <option>hand theraphy</option>
      <option>women's health</option>
      <option>home health</option>
      <option>fitness center</option>
      <option>speciality Theraphies</option>
      
    </Form.Control>
  </Form.Group><br/>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label><br/>
    <Form.Control as="textarea" rows={3} />
  </Form.Group><br/>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>

</left>

</Form>  
        
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}> <img src={loco} alt="location" width="350" height="350" />
          <b><h2>ATI Corporate Office</h2></b>
790 Remington Blvd<br/>
Bolingbrook, IL 60440,<br/>
 US
Driving Directions<br/>
Phone: <b> 855-MY-ATIPT (855-359-9484)</b></Paper>
<b>Customer Service & Billing</b><br/><br/>
Call <b>855-MY-ATIPT (855-359-9484)</b><br/><br/>
 email <b>PatientAdvocateEscalations@atipt.com</b><br/><br/>

<b>Questions about Your Insurance Benefits?</b><br/><br/>

Call <b>855-MY-ATIPT (855-359-9484)</b><br/><br/>

<b>Medical Records Request</b><br/>
To request patient records, please email our
Medical Records Department at <b> mwdocumentation@atipt.com.</b><br/><br/>

Please include a valid HIPAA authorization (download the PDF in our<b> New Patient Information</b> section)<br/>
 and the specific information needed for the request.<br/><br/>

Requests can also be faxed to <b>630-759-6185</b> <br/>

<b>Customer Service Hours</b>: <br/>
<b>Monday – Friday:  7:00 am – 8:30 pm CST<br/><br/>
Saturday - 8:00 am – 4:00 pm CST</b>
        </Grid>
        
      </Grid>
    </div>
  );
}
