import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
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
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <p><a href="https://www.w3schools.com/">MAHARASHTRA</a></p><br/>
          <p><a href="https://www.w3schools.com/">BANGALORE</a></p><br/>

          <p><a href="https://www.w3schools.com/">CHENNAI</a></p><br/>

          <p><a href="https://www.w3schools.com/">GUJARAT</a></p><br/>

          <p><a href="https://www.w3schools.com/">MUMBAI</a></p><br/>
          <p><a href="https://www.w3schools.com/">RAJASTHAN</a></p><br/>
          <p><a href="https://www.w3schools.com/">DELHI</a></p><br/>
          <p><a href="https://www.w3schools.com/">GOA</a></p><br/>
          <p><a href="https://www.w3schools.com/">KOLKATA</a></p><br/>
</Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
              <h1>INSURANCE VERIFICATION</h1><br/>
<p>We’ll Verify Insurance for You. For quick and easy verification of benefits<br/>
 please call : 
<b>877-284-2455</b> <br/> <br/>
We accept virtually all major insurance carriers and
 participate with many local provider networks.
 Our friendly and helpful customer care staff will be
  happy to verify your healthcare benefits.
  Patient benefits are verified prior to the start of treatment 
  and individualized payment 
  plans are available to those without coverage;
 we'll work with you to accommodate your individual needs.</p> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><b>MEDICAL RECORDS REQUEST</b><br/><br/>

<p>To request patient records, 
please email our Medical Records Department at <b>mwdocumentation@atipt.com.</b>
 Please include a valid HIPAA authorization (download the PDF in our New Patient Information section),
  and the specific information needed for the request.
   Requests can also be faxed to<b> 630-759-6185</b></p>  

</Paper>
       FIND A LOCATION
        </Grid>
      </Grid>
    </div>
  );
}