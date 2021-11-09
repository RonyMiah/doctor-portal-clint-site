import { Alert, Button, CircularProgress, Container, Grid,  TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import logo from '../../../images/login.png'
import { Link ,useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {user,ragisterUser, loading,authError} = useAuth()
    const history = useHistory();

    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData);
        console.log(newLoginData);
        e.preventDefault();
    }

    const handelOnSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert('Your password did not Match ')
            return
        }
        
         ragisterUser(loginData.email, loginData.password,loginData.name, history);
        
        e.preventDefault();
}

    return (
        <Container>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}  style={{marginTop:"100px"}}>
                
         { !loading &&
                        
         <form onSubmit={handelOnSubmit}>
                             
                    <Typography  sx={{ m:5}} variant="subtitle1" gutterBottom component="div">
                                    Register
                                </Typography>

                            {/* SucessFully Registered Aleart massage  */}
                        {user?.email && <Alert severity="success"> User Crated Successfully</Alert>}
                         {/* Error Massage Show  */}
                    {authError &&  <Alert severity="error">{authError} </Alert>}
                    
                        

                                <TextField
                                    sx={{width:"75%", m:2}}
                                    type="text"
                                    id="standard-basic"
                                    label="  Name"
                                    variant="standard"
                                    name="name"
                                    onBlur={handelOnBlur}
                                />
                                <TextField
                                    sx={{width:"75%", m:2}}
                                    type="email"
                                    id="standard-basic"
                                    label="  Email"
                                    variant="standard"
                                    name="email"
                                    onBlur={handelOnBlur}
                                />
                                <TextField
                                    sx={{width:"75%", m:2}}
                                    id="standard-basic"
                                    type="password"
                                    label=" Password"
                                    variant="standard"
                                    name="password"
                                    onBlur={handelOnBlur}
                                    />
                                <TextField
                                    sx={{width:"75%", m:2}}
                                    id="standard-basic"
                                    type="password"
                                    label=" Re-type"
                                    variant="standard"
                                    name="password2"
                                    onBlur={handelOnBlur}
                                    />
            
                                    <Button sx={{ width: "75%", m: 2 }} type="submit" variant="contained">Register</Button>
                                    
                                    <Link style={{textDecoration:'none'}} to="/login">   <Button   sx={{ width: "75%" }} variant="text" size="small">Already Register? Login  Here</Button></Link>
            </form>                        
                    }
                    {loading && <CircularProgress />}

                  

                   
      
            </Grid>
            <Grid item xs={12} md={6} >
            <img style={{width:'90%'}} src={logo} alt="Girl in a jacket"/>
            </Grid>
            
</Grid>
        </Container>
    );
};

export default Login;