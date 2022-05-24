import axios from "axios";
import { useState, useEffect } from "react";
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Paper, TextField, Typography } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { Link } from "react-router-dom";

function UserLogin() {
    const [ userLogin, setUserLogin ] = useState({
        username: "",
        password: "",
        active: false,
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

    const [ user, setUser] = useState({});

    const API = process.env.REACT_APP_API_URL;
    // const { id } = useParams();
    // let navigate = useNavigate();
    // const username = 
    // const usernameStr = atob(localStorage.getItem('username').replace(/"/g, ""));
    // const username = "Christina_234"
    // console.log(username)

    let username;
    if (localStorage.getItem('username')) {
        username = atob(localStorage.getItem('username').replace(/"/g, ""));
    }

    useEffect(() => {
        axios.get(`${API}/users/${username}`)
            .then((res) => {
                setUser(res.data);
                console.log(res.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

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
                <Button type="submit" variant="contained" size="large" color="primary" fullWidth >Sign in</Button>
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