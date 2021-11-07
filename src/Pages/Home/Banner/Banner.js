import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';


const bannerBackground = {
    background: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat, repeat',
    backgroundPosition: ' center',
    height:500

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450,
    
}

const Banner = () => {
    return (
        <Container style={bannerBackground} sx={{ flexGrow: 1 ,}}>
        <Grid  style={{textAlign:'left',...verticalCenter}} container spacing={2}>
         <Grid item xs={12} md={6} >
          <Box>
         <Typography variant="h3" >
                 Your New smaile starts Here       
           </Typography>
         <Typography variant="h6" sx={{my:4,color:'gray'}} style={{fontSize:14,fontWeight:300}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate facere omnis dolorum soluta modi dicta aliquid saepe consequuntur. Saepe, odio!      
                    </Typography>
                    <Button variant="contained" style={{backgroundColor:'#17ECEF',}}>GET APOINMENT</Button>
             </Box>
          </Grid>      
       
          <Grid item  xs={12} md={6} style={verticalCenter}>
           <img style={{width:400}} src={chair} alt="" />
          </Grid>
        
        </Grid>
      </Container>
    );
};

export default Banner;