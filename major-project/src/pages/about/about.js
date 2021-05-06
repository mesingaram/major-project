import React from 'react'
import abouttop from '../../images/abouttop.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import download from '../../images/download.jpg';
import about1 from '../../images/about1.jpg';
import about2 from '../../images/about2.jpg';

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
            <Paper className={classes.paper}>
            <img src={abouttop} alt="location" width="1500" height="350" />
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
            <p><a href="www.google.com">mission and values</a></p><br/>
            <p><a href="www.google.com">the rehab difference</a></p><br/>
            <p><a href="www.google.com">our history</a></p><br/>
            <p><a href="www.google.com">Executive leadership</a></p><br/>
            <p><a href="www.google.com">Research</a></p><br/>
            <p><a href="www.google.com">awards and accolades</a></p><br/>
            <p><a href="www.google.com">proud partnerships</a></p><br/>
            <p><a href="www.google.com">champion of our industry</a></p><br/>
            <p><a href="www.google.com">fitness centres</a></p><br/>
            <p><a href="www.google.com">compliment injury screenings</a></p><br/>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            <h1>About rehab</h1><br/>
  <p>Leading the industry, ATI has built a differentiated platform in therapy that is focused on our patients.</p><br/>
  <h2>A Progressive Vision</h2><br/>
  <p>With exceptional, patient-centered care, trusted expertise and remarkable outcomes, our goal is to exceed customers' expectations—every day, in every clinic. ATI is a nationally-recognized rehabilitation provider, specializing in research-based physical therapy, workers’ compensation rehab, employer worksite solutions, sports medicine, home health, and a variety of specialty therapies.</p><br/>
  
  <ul>
  <li>named best physical theraphy practice in the nation</li><br/>
    <li>our patient love us</li><br/>
    <li>close to home</li><br/>
    <li>dedicated to research</li><br/>
    <li>accept most insurances</li><br/>
    <li>compliment injury screenings</li><br/>
    <li>helping childrens with physical impairments</li><br/>
    
  
  </ul>
  </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
           <h2> Rehab</h2><br/>
  <p>To learn more about ATI, please contact us. We’ll do everything possible to exceed your expectations.
 </p>
  </Paper>
  <img src={download} alt="location" width="350" height="350" />
  <div>
  <h3>HAVE A PRESCRIPTION FOR THERAPY?</h3>
  Get started quickly and easily. We’ll schedule your first appointment in 24-48 hours.
      </div>
      
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
            <img src={about1} alt="location" width="1500" height="350" />
            </Paper>
          </Grid>
          
          <center> <p>       Resources of a Large Company, with a Small-Practice Feel</p><br/>

<p>Founded in 1996, ATI began with one clinic in Willowbrook, Illinois and has grown its progressive, innovative approach to reach hundreds of clinics across the United States. We have sustained a remarkable growth rate, in part, due to multi-clinic acquisitions and new clinic openings. But also due to our expert team, innovative culture, remarkable outcomes, and unique approach to patient care.
</p><br/>
<p>We are the largest physical therapy company under one brand name in the U.S., but also pride ourselves on our small-practice, family-like atmosphere. When you come in our door, you’ll be greeted by our friendly, motivating team.



</p>
</center>
<Grid item xs={12}>
            <Paper className={classes.paper}>
            <img src={about2} alt="location" width="1500" height="350" />
            </Paper>
          </Grid>


        </Grid>
      </div>
    );
  }
