import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openModal,modalClose,booking,date}) => {
    
    const { name, time, space } = booking

    const BookingModalSubmit = e => {
        alert('Submitting Success')

        //  Collect Data  
        // send to the Server 

        modalClose()
        e.preventDefault();
    }

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={modalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
            </Typography>
                <form onSubmit={BookingModalSubmit}>

                 <TextField
                        style={{ width: '90%',margin:'15px' }}
                        disabled
                        label="Time"
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                />
                    <TextField
                        style={{ width: '90%',margin:'15px' }}
                        label="Name"
                        id="outlined-size-small"
                        defaultValue='Name'
                        size="small"
                />
                    <TextField
                        style={{ width: '90%',margin:'15px' }}
                        label="Phone Number"
                        id="outlined-size-small"
                        defaultValue='Phone Number'
                        size="small"
                />
                    <TextField
                        style={{ width: '90%',margin:'15px' }}
                        label="Emial"
                        id="outlined-size-small"
                        defaultValue='Email '
                        size="small"
                />
                    <TextField
                        style={{ width: '90%', margin: '15px' }}
                        disabled
                        label="Date"
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"
                        />
                <Button type="submit" style={{backgroundColor:'#14998F',color:'#fff'}}> SEND </Button>   
                        
                </form>
           
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;