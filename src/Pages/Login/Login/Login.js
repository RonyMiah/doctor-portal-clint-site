import { Button, Container, Grid,  TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import logo from '../../../images/login.png';
import { Link } from 'react-router-dom';


const Login = () => {
    const [loginData, setLoginData] = useState({})
    const handelOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData);
        e.preventDefault();
    }

    const handelOnSubmit = e => {
     alert('Success')
        e.preventDefault();
}


    return (
        <Container>
 <Grid container spacing={2}>
            <Grid item xs={12} md={6}  style={{marginTop:"100px"}}>
                
        <form onSubmit={handelOnSubmit}>
        <Typography  sx={{ m:5}} variant="subtitle1" gutterBottom component="div">
                          Login
                    </Typography>
                    <TextField
                        sx={{width:"75%", m:2}}
                        id="standard-basic"
                        label="  Email"
                        type="email"
                        variant="standard"
                        name="email"
                        onChange={handelOnChange}
                    />
                    <TextField
                         sx={{width:"75%", m:2}}
                        id="standard-basic"
                        type="password"
                        label=" Password"
                        variant="standard"
                        name="password"
                        onChange={handelOnChange}
                        />

                        <Button sx={{ width: "75%", m: 2 }} type="submit" variant="contained">Submit</Button>
                        
                        <Link style={{textDecoration:'none'}} to="/register">   <Button   sx={{ width: "75%" }} variant="text" size="small">New User? Register Here</Button></Link>
        </form> 
      
            </Grid>
            <Grid item xs={12} md={6} >
            <img style={{width:'90%'}} src={logo} alt="Girl in a jacket"/>
            </Grid>
            
</Grid>
        </Container>
    );
};

export default Login;