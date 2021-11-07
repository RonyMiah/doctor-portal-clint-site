import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


const Service = (props) => {
    const {name,description,img}=props.service
    return (
        
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={{ minWidth: 275 ,border: 0,boxShadow: 0}}>

             <CardMedia
                component="img"
                    height="140"
                    style={{ width: "auto" , margin:"0 auto" ,height:"80px"}}
                image={img}
                alt="green iguana"
                />
                
            <CardContent>
                <Typography variant="h5" component="div">
                {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {description}
                </Typography>
                
            </CardContent>
      
      </Card>   
        </Grid>
    );
};

export default Service;