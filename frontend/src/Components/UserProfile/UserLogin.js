import { Avatar, Button, Checkbox, FormControl, FormControlLabel, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Paper, TextField, Typography } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useState } from "react";
import { Link } from "react-router-dom";

function UserLogin() {
    const [ userProfile, setUserProfile ] = useState({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        contact_email: "",
        active: false,
        showPassword: false
    });

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

    const paperStyle = { padding: 20, width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: "#4366F5" }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LoginIcon/></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField required onChange={null} margin="dense" fullWidth label='Username' placeholder="Enter username"/>
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
                    <Checkbox />}
                    label="Remember me"
                />
                <Button type="submit" variant="contained" size="large" color="primary" fullWidth >Sign in</Button>
                <Grid align="center" sx={{ marginTop:"20px" }}>
                    <Typography><Link to="#">Forgot password?</Link></Typography>
                    <Typography>Don't have an account? <Link to="/create-profile">Sign up</Link></Typography>
                    <Typography><Link to="#">Privacy Policy</Link></Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default UserLogin;