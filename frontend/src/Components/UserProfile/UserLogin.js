import axios from "axios";
import { useState, useEffect } from "react";
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Paper, TextField, Typography } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { Link,useNavigate } from "react-router-dom";

function UserLogin() {
    const [ userLogin, setUserLogin ] = useState({
        username: "",
        password: "",
        // active: false,
        showPassword: false
    });

    const handleChange = (prop) => (event) => {
        setUserLogin({ ...userLogin, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setUserLogin({
          ...userLogin,
          showPassword: !userLogin.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const API = process.env.REACT_APP_API_URL;
    let navigate = useNavigate();    

    const handleLogin = (event) => {
        event.preventDefault();
        
        let username = atob(localStorage.getItem('username').replace(/"/g, ""));
        let password = atob(localStorage.getItem('password').replace(/"/g, ""));
        
        if(!userLogin.username || !userLogin.password){
            alert("Invalid");
        } else if ((username !== userLogin.username) || (password !== userLogin.password)){
            alert("Invalid username or password. Try clicking 'Forgot Password' if you're having trouble signing in.");
            console.log(username)
            console.log(password)
            console.log(userLogin.username)
            console.log(userLogin.password)
        } else {
            axios.get(`${API}/users/login/${username}`)
                .then((res) => {
                    localStorage.setItem("id", JSON.stringify(btoa(res.data.id)));
                    navigate("/users")
                }).catch((error) => {
                    console.log(error);
                })
        }
    }

    const paperStyle = { padding: 20, width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: "#4366F5" }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LoginIcon/></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField required onChange={handleChange('username')} margin="dense" fullWidth label='Username' placeholder="Enter username"/>
                <FormControl fullWidth margin="dense" variant="outlined">
                    <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={userLogin.showPassword ? 'text' : 'password'}
                        value={userLogin.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {userLogin.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        placeholder="Enter password"
                    />
                </FormControl>
                <FormControlLabel control={
                    <Checkbox />}
                    label="Remember me"
                />
                <Button type="submit" variant="contained" size="large" color="primary" fullWidth onClick={handleLogin}>Sign in</Button>
                <Grid align="center" sx={{ marginTop:"20px" }}>
                    <Typography><Link to="#">Forgot password?</Link></Typography>
                    <Typography>Don't have an account? <Link to="/user/new">Sign up</Link></Typography>
                    <Typography><Link to="#">Privacy Policy</Link></Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default UserLogin;