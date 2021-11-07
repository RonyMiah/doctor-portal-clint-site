import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appoitmentBg = {
    background: `url(${bg})`,
    marginTop: '150px',
    backgroundColor: "rgba(49, 40, 75 ,0.9)",
    backgroundBlendMode:' darken,luminosity',

}

const Appointment = () => {
    return (
        <Box style={appoitmentBg} sx={{ flexGrow: 1  }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
                    <img
                        style={{width:400 , marginTop:-110}}
                        src={doctor} alt="" />
          </Grid>
                <Grid item xs={12} md={7} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left',
                }}>
                    <Box>
                    <Typography sx={{mb:5}} variant="h6" style={{color:'#0FECF0'}}>
                        APPOINTMENT
                    </Typography>
                    <Typography sx={{my:5}} variant="h4" style={{color:'white'}}>
                        Make An Apointment 
                    </Typography>
                    <Typography sx={{mb:5}}  variant="h6" style={{ color: 'white', fontSize: 14, fontWeight: 300,}}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident commodi excepturi ab ullam ipsam corporis fuga quod illum recusandae!
                    </Typography>
                    <Button variant="contained" style={{backgroundColor:'#0FECF0'}}>Learn More</Button>
                    </Box>
                </Grid>
                
          
        </Grid>
      </Box>
    );
};

export default Appointment;