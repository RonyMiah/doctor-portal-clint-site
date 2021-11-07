import { Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00AM',
        space: ' 10 Space Available'
    },
    
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05 AM - 11:30AM',
        space: ' 10 Space Available'
    },
    
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5:00PM - 6:00AM',
        space: ' 10 Space Available'
    },
    
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7:00 AM - 830:00AM',
        space: ' 10 Space Available'
    },
    
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00AM',
        space: ' 10 Space Available'
    },
    
    {
        id: 6,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00AM',
        space: ' 10 Space Available'
    },
    

]

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <Typography variant="h4" sx={{my:3}} style={{color:'#15D6C7',fontWeight:'800'}}>
            Your selected Date is : {date.toDateString()}
            </Typography>
            

            <Grid container spacing={2}>
            {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    >      
                  </Booking>)    
                    
            }
            </Grid>
            
        </div>
    );
};

export default AvailableAppointment;