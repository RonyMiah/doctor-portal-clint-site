import { Alert, Button, CircularProgress, Container, Grid,  TextField, Typography } from '@mui/material';
import React, { useState} from 'react';
import logo from '../../../images/login.png';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, loading, authError,signinUsingGoogle } = useAuth();


    // Private route aa login page aa login hower pore jeijaygay jaite chaiselam oita redirect 
    const location = useLocation();
    const history = useHistory();



    const handelOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData);
        e.preventDefault();
    }

    const handelOnSubmit = e => {
        
        loginUser(loginData.email, loginData.password ,location ,history)
        
        e.preventDefault();
    }
    
    const handleGoogleSignIn = () => {
        signinUsingGoogle(location, history);
    }


    return (
        <Container>
 <Grid container spacing={2}>
            <Grid item xs={12} md={6}  style={{marginTop:"100px"}}>
                
                    {!loading && 
                        <form onSubmit={handelOnSubmit}>
                        <Typography  sx={{ m:5}} variant="subtitle1" gutterBottom component="div">
                                          Login
                                        </Typography>
                                        
                                         {/* SucessFully Registered Aleart massage  */}
                                         {user?.email && <Alert severity="success"> Login Successfully</Alert>}
                                         {/* Error Massage Show  */}
                                          {authError &&  <Alert severity="error">{authError} </Alert>}
                
                                    <TextField
                                        sx={{width:"75%", m:2}}
                                        id="standard-basic"
                                        label="  Email"
                                        type="email"
                                        variant="standard"
                                        name="email"
                                        onBlur={handelOnChange}
                                    />
                                    <TextField
                                         sx={{width:"75%", m:2}}
                                        id="standard-basic"
                                        type="password"
                                        label=" Password"
                                        variant="standard"
                                        name="password"
                                        onBlur={handelOnChange}
                                        />
                
                                        <Button sx={{ width: "75%", m: 2 }} type="submit" variant="contained">Login</Button>
                                        
                                        <Link style={{textDecoration:'none'}} to="/register">   <Button   sx={{ width: "75%" }} variant="text" size="small">New User? Register Here</Button></Link>
                        </form> 
                    }
                    {loading && <CircularProgress color="secondary" />}
                    <p> ------------</p>
                    <Button onClick={handleGoogleSignIn} sx={{ width: "50%", backgroundColor:"#11F7DB"  }} type="submit" variant="contained">Login With Google</Button>
            </Grid>
            <Grid item xs={12} md={6} >
            <img style={{width:'90%'}} src={logo} alt="Girl in a jacket"/>
            </Grid>
            
</Grid>
        </Container>
    );
};

export default Login;