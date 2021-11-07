import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../AppointmentPage/BookingModal/BookingModal';


const Booking = ({ booking ,date}) => {
    const { name, time, space } = booking;

    const [openModal, setOpenModal] = React.useState(false);
    const modalOpen = () => setOpenModal(true);
    const modalClose = () => setOpenModal(false);
    return (
        <>
         <Grid sx={{mt:5}} item xs={12} md={4} sm={6}>
            <Paper elevation={3}  sx={{py:5}}>
            <Typography style={{color:'#15D6C7',fontWeight:600}} variant="h5" gutterBottom component="div">
                        {name}
             </Typography>
            <Typography variant="h6" gutterBottom component="div">
                        {time}
             </Typography>
            <Typography variant="caption" gutterBottom component="div">
                        {space}
                </Typography>
                <Button onClick={modalOpen} style={{backgroundColor:'#14998F',color:'#fff'}}>BOOK APPOINTMENT</Button>
            
            </Paper>      
            </Grid>
            <BookingModal
                booking={booking}
                openModal={openModal}
                modalClose={modalClose}
                date={date}
                
            ></BookingModal>

        </>
    );
};

export default Booking;