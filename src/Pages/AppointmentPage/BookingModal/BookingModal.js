import React , {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

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
    
  
  const { name, time } = booking
  const { user } = useAuth();
  const initialInfo = {displayName : user.displayName, email: user.email , phone : ''}
  const [bookingInfo , setBookingInfo] = useState(initialInfo);


  const handeleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...bookingInfo};
    newInfo[field] = value;
    setBookingInfo(newInfo);
    
    
  }





    const BookingModalSubmit = e => {
      //  Collect Data 
      const appoinment = {
        ...bookingInfo,
        time,
        serviceName: name,
        date:date.toLocaleDateString(),
      }
      ////// console.log(appoinment);

      // send to the Server 
      fetch('http://localhost:5000/appointment', {
        method: 'POST',
        headers: {
         'content-type' : 'application/json'
        },
        body: JSON.stringify(appoinment)
      })
        .then(res => res.json())
        .then(data => {
        console.log(data);
      })

      
          modalClose();
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
                        onBlur={handeleOnBlur}
                        name="displayName"
                        id="outlined-size-small"
                        defaultValue={user.displayName}
                        size="small"
                />
                    <TextField
                        style={{ width: '90%',margin:'15px' }}
                        name="phone"
                        onBlur={handeleOnBlur}
                        id="outlined-size-small"
                        defaultValue='Phone Number'
                        size="small"
                />
                    <TextField
                        style={{ width: '90%',margin:'15px' }}
                        name="email"
                        onBlur={handeleOnBlur}
                        id="outlined-size-small"
                        defaultValue={user.email}
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