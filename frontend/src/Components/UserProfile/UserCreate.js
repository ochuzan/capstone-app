import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Paper, TextField, Typography } from "@mui/material"
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Visibility, VisibilityOff } from "@mui/icons-material"

function UserCreate() {
    const [ userProfile, setUserProfile ] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        contact_email: "",
        active: false,
        showPassword: false
    });

    const API = 'http://localhost:3333';

    let navigate = useNavigate();

    const addUser = (newUser) => {
        axios.post(`${API}/users`, newUser)
            .then(() => {
                navigate("/users/login");
            }).catch((error) => {
                console.log(error);
            })
    };

    const handleCheckboxChange = () => {
        setUserProfile({ ...userProfile, active: !userProfile.active });
    };

    const addLocalStorageUser = () => {
        localStorage.setItem("username", JSON.stringify(btoa(userProfile.username)));
        localStorage.setItem("email", JSON.stringify(btoa(userProfile.contact_email)));
        localStorage.setItem("password", JSON.stringify(btoa(userProfile.password)));
        console.log("Added to local storage");
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        addUser(userProfile);
        addLocalStorageUser();
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

    const disableButton = () => {
        const { active, firstname, lastname, username, contact_email} = userProfile;

        if(active && firstname && lastname && username && contact_email){
            return false;
        } else {
            return true;
        }
    }


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
                    <div>
                        <Typography variant="caption">Required fields have an asterisk: *</Typography>
                    </div>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField required onChange={handleChange('firstname')} margin="dense" fullWidth label='First Name' placeholder="Enter your first name"/>
                    <TextField required onChange={handleChange('lastname')} margin="dense" fullWidth label='Last Name' placeholder="Enter your last name"/>
                    <TextField required onChange={handleChange('username')} margin="dense" fullWidth label='Username' placeholder="Enter your username"/>
                    <TextField required onChange={handleChange('contact_email')} margin="dense" fullWidth label='Email' placeholder="Enter your email address"/>
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
                            placeholder="Enter password"
                        />
                    </FormControl>
                    <FormControlLabel control={
                        <Checkbox
                            onChange={handleCheckboxChange}
                        />}
                        label="I accept the terms and conditions*"
                    />
                    <Button type="submit" variant="contained" size="large" color="primary" fullWidth disabled={disableButton()}>Create Profile</Button>
                </form>
                <Grid align="center" sx={{marginTop:"20px"}}>
                    <Typography>Already have a CryptoTalk profile? <Link to="/users/login">Log in</Link></Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default UserCreate;