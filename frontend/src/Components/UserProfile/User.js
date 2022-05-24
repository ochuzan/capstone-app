import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useNavigate, useParams } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
// import Link from '@mui/material/Link';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
function User() {
    const [ user, setUser] = useState({});

    const API = process.env.REACT_APP_API_URL;

    let id;
    if (localStorage.getItem('id')) {
        id = atob(localStorage.getItem('id').replace(/"/g, ""));
    }
    console.log(id)
    useEffect(() => {
        axios.get(`${API}/users/${id}`)
            .then((res) => {
                setUser(res.data);
                console.log(res.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        // <div>
        //     <h2>User Page</h2>
        //     <div>{user.firstname}</div>
        //     <div>{user.lastname}</div>
        //     <div>{user.username}</div>
        //     <div>{user.contact_email}</div>
        // </div>
        <React.Fragment>
            <AppBar
                component="div"
                // color="primary"
                position="static"
                elevation={0}
                sx={{ backgroundColor: "#1C1C1C", zIndex: 0, height: "100px" }}
            >
                <Toolbar>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs>
                    <Typography sx={{ backgroundColor: "#1C1C1C" }}color="inherit" variant="h5" component="h2">
                        Welcome {user.firstname} {user.lastname}!
                    </Typography>
                    </Grid>
                    <Grid item>
                    <Button
                        sx={{ borderColor: "#4366F5" }}
                        variant="outlined"
                        color="inherit"
                        size="small"
                    >
                        Edit Profile
                    </Button>
                    </Grid>
                    <Grid item>
                    <Tooltip title="Help">
                        <IconButton color="inherit">
                        <HelpIcon />
                        </IconButton>
                    </Tooltip>
                    </Grid>
                </Grid>
                </Toolbar>
            </AppBar>
            <AppBar component="div" position="static" elevation={10} sx={{ backgroundColor: "whitesmoke", zIndex: 0 }}>
                <Tabs value={0} textColor="primary">
                <Tab label="Profile Details" />
                <Tab label="Favorites" />
                {/* <Tab label="Templates" />
                <Tab label="Usage" /> */}
                </Tabs>
            </AppBar>
            <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
                <Toolbar>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                    <SearchIcon color="inherit" sx={{ display: 'block' }} />
                    </Grid>
                    <Grid item xs>
                    <TextField
                        fullWidth
                        placeholder="Search by email address, phone number, or user UID"
                        InputProps={{
                        disableUnderline: true,
                        sx: { fontSize: 'default' },
                        }}
                        variant="standard"
                    />
                    </Grid>
                    <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}>
                        Add user
                    </Button>
                    <Tooltip title="Reload">
                        <IconButton>
                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                        </IconButton>
                    </Tooltip>
                    </Grid>
                </Grid>
                </Toolbar>
            </AppBar>
            <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                No users for this project yet
            </Typography>
            </Paper>
            </React.Fragment>
    )
}

export default User;