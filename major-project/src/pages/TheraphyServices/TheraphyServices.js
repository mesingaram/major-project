import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ts from '../../images/ts.jpg';
import download from '../../images/download.jpg';


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
        <img src={ts} alt="location" width="1550" height="350" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <p><a href="www.google.com">patient stories</a></p><br/>
          <p><a href="www.google.com">physical theraphy</a></p><br/>
          <p><a href="www.google.com">workers comp rehab</a></p><br/>
          <p><a href="www.google.com">sports medicine</a></p><br/>
          <p><a href="www.google.com">hand theraphy</a></p><br/>
          <p><a href="www.google.com">women's health</a></p><br/>
          <p><a href="www.google.com">speciality theraphies</a></p><br/>
          <p><a href="www.google.com">home health</a></p><br/>
          <p><a href="www.google.com">fitness centres</a></p><br/>
          <p><a href="www.google.com">compliment injury screenings</a></p><br/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <h1>THERAPY SERVICES</h1><br/>
<p>If you need therapy, choose ATI. We offer exceptional care, trusted expertise and remarkable outcomes—customized to you.</p><br/>
<h1>Physical Therapy</h1><br/>
<p>Want to start feeling better fast? With the best clinicians in the industry, 99.5% of patients recommend us to family and friends. We'll help you address chronic pain, or help you recover from an injury or surgery—expertly, quickly and conveniently. Get Back To Your Best ›
</p><br/>
<h1>Workers' Comp Rehab</h1><br/>
<p>ATI’s trademarked F.I.R.S.T.™ program uses a performance-based methodology to safely return injured workers to their workplace. Return to Work ›

Designed to increase strength, endurance and cardio function
Earned international recognition for our outcomes and results   
Conduct Functional Capacity Evaluations (FCEs)  </p><br/>
<h1>Sports Medicine</h1><br/>
<p>Our athletic training services help you get back in the game. We have hundreds of professional, collegiate, high school, middle school and club relationships nationwide. Prevent and Treat Injuries ›

Offer rehabilitative care for all types of sports injuries, including prevention, evaluation, diagnosis and treatment 
Coordinate care across multiple touch points, including physicians, parents and school/club officials</p><br/> 
<h1>Home Health</h1><br/>
<p>ATI offers home health rehabilitation in the Chicagoland area, including skilled nursing care in patients’ homes, then a smooth transition to outpatient therapy. Better Care Begins at Home ›

Streamline communication and care with doctors, nurses and therapists 
Guide patients’ return to health and independence using quality outcomes and patient satisfaction as benchmarks</p><br/>
<h1>Hand Therapy</h1><br/>
<p>Through preventative, non-operative, conservative treatment, post-operative rehab and industry consultation, our hand therapists can effectively evaluate and treat complex upper extremity cases. Healing Hands ›

Achieve faster recovery, resulting in decreased medical costs
Improve hand mobility and reduced pain</p><br/>
<h1>Women's Health</h1><br/>
<p>We offer an innovative approach that's designed by women for women. Specialized care can offer life-changing results. Improve Your Quality of Life ›

Reduce pelvic floor pain, weakness and dysfunction
Address incontinence issues
Manage prenatal/postpartum pain
Recover after a surgery</p><br/>
<h1>Specialty Therapies</h1><br/>
<p>We offer a number of specialized services to address your specific injury or needs. Specialty services are available at select ATI locations. 
  </p>            
              </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
         <h2> YOU HAVE A CHOICE</h2><br/>
<p>If you need therapy, YOU HAVE A CHOICE when selecting your provider. Explore all your options and discover how ATI will exceed your expectations. Contact us to learn more today, or call <b>855-362-9208.</b> </p>
</Paper>
<img src={download} alt="location" width="350" height="350" />
<div>
<h1>HAVE A PRESCRIPTION FOR THERAPY?</h1>
Get started quickly and easily. We’ll schedule your first appointment in 24-48 hours.
    </div>
        </Grid>
      </Grid>
    </div>
  );
}