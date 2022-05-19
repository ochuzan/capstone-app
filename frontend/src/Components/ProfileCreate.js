import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Paper, TextField, Typography } from "@mui/material"
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Visibility, VisibilityOff } from "@mui/icons-material"

function ProfileCreate() {
    const [ userProfile, setUserProfile ] = useState({
        username: "",
        password: "",
        contact_email: "",
        active: false,
        showPassword: false
    });

    const API = process.env.REACT_APP_API_URL;

    let navigate = useNavigate();

    const addUser = (newUser) => {
        axios.post(`${API}/users`, newUser)
            .then(() => {
                navigate("/profile");
            }).catch((error) => {
                console.log(error);
            })
    };

    // const handleTextChange = (event) => {
    //     setUser({ ...user, [event.target.id]: event.target.value });
    // };

    const handleCheckboxChange = () => {
        setUserProfile({ ...userProfile, active: !userProfile.active });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser(userProfile);
    };

    const handleChange = (prop) => (event) => {
        setUserProfile({ ...userProfile, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setUserProfile({
          ...userProfile,
          showPassword: !userProfile.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const paperStyle = {padding: "30px 20px", width: 400, margin: "20px auto"}
    const headerStyle = {margin: "0", color: "#016BFD"}
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center" sx={{marginBottom:"10px"}}>
                    <Avatar sx={{backgroundColor: "#016BFD"}}>
                        <PersonAddAltOutlinedIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="caption" >Please fill this form to create a profile</Typography>
                    {/* <Typography variant="caption" fullWidth>Required fields have an asterisk: *</Typography> */}
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField required onChange={handleChange('contact_email')} margin="dense" fullWidth label='Email' placeholder="Enter your email address"/>
                    <TextField required onChange={handleChange('username')}margin="dense" fullWidth label='Username' placeholder="Enter your username"/>
                    <FormControl fullWidth margin="dense" variant="outlined">
                        <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={userProfile.showPassword ? 'text' : 'password'}
                            value={userProfile.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {userProfile.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <FormControlLabel control={
                        <Checkbox
                            onChange={handleCheckboxChange}
                        />}
                        label="I accept the terms and conditions"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>Create Profile</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default ProfileCreate;