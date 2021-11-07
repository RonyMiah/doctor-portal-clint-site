import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Home/Service/Service';
import img1 from '../../../images/cavity.png';
import img2 from '../../../images/fluoride.png';
import img3 from '../../../images/whitening.png';


const services = [
    {
        name: 'Cavity Filling',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis commodi modi nobis voluptas, dicta voluptatibus exercitationem quae maxime repudiandae tenetur.',
        img: img1   
    },
    {
        name: 'Fluoride Treatment',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis commodi modi nobis voluptas, dicta voluptatibus exercitationem quae maxime repudiandae tenetur.',
        img: img2        
    },
    {
        name: 'Teeth Whitening',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis commodi modi nobis voluptas, dicta voluptatibus exercitationem quae maxime repudiandae tenetur.',
        img: img3         
    }
    


]


  

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography  sx={{ fontWeight: '500',color: 'success.main',m:2  }} variant="h6" component="div">
                 OUR SERVICES
                </Typography>
            <Typography  sx={{ fontWeight: 'bold' ,m:5}} variant="h4" component="div">
                Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service =>
                            <Service key={service.name} service={service}></Service>
                            )
                        
                    }


      </Grid>
      </Container>
    </Box>
    );
};

export default Services;