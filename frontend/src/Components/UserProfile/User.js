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
// import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import PropTypes from 'prop-types';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import UserFavorites from "./UserFavorites";


function User() {
    const [ user, setUser] = useState({});
    const [value, setValue] = useState('1');

    const API = process.env.REACT_APP_API_URL;

    let id;
    if (localStorage.getItem('id')) {
        id = atob(localStorage.getItem('id').replace(/"/g, ""));
    }
    
    useEffect(() => {
        axios.get(`${API}/users/${id}`)
            .then((res) => {
                setUser(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                // component="div"
                // color="primary"
                position="static"
                elevation={0}
                sx={{ maxWidth: 936, margin: "auto", backgroundColor: "whitesmoke", zIndex: 0 }}
            >
                <Toolbar>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs>
                        <Typography color="black" variant="h5" component="h2" align="left">
                            Welcome {user.firstname} {user.lastname}!
                        </Typography>
                    </Grid>
                    <Grid item>
                    <Button
                        sx={{ borderColor: "#4366F5" }}
                        variant="outlined"
                        color="primary"
                        size="small"
                    >
                        Edit Profile
                    </Button>
                    </Grid>
                    <Grid item>
                    <Tooltip title="Help">
                        <IconButton color="primary">
                        <HelpIcon />
                        </IconButton>
                    </Tooltip>
                    </Grid>
                </Grid>
                </Toolbar>
            </AppBar>
            <TabContext value={value}>
                <AppBar component="div" position="static" elevation={10} sx={{ maxWidth: 936, margin: "auto", backgroundColor: "whitesmoke", zIndex: 0, borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px" }}>
                    <TabList onChange={handleChange}>
                        <Tab label="Profile Details" value='1'/>
                        <Tab label="Favorites" value='2'/>
                    </TabList>
                    {/* <Tabs value={value} onChange={handleChange} textColor="primary"> */}
                    {/* </Tabs> */}
                </AppBar>
                <TabPanel value="1">
                    <Paper sx={{ maxWidth: 936, margin: 'auto', marginTop: "10px", overflow: 'hidden' }}>
                        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                            No favorites for this profile yet
                        </Typography>
                    </Paper>
                </TabPanel>
                <TabPanel value="2">
                    <UserFavorites />
                    <Paper sx={{ maxWidth: 936, margin: 'auto', marginTop: "10px", overflow: 'hidden' }}>
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
                                placeholder="Search by title"
                                InputProps={{
                                disableUnderline: true,
                                sx: { fontSize: 'default' },
                                }}
                                variant="standard"
                            />
                            </Grid>
                            <Grid item>
                            <Button variant="contained" sx={{ mr: 1 }}>
                                Add Favorites
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
                        No favorites for this profile yet
                    </Typography>
                    </Paper>
                </TabPanel>
            </TabContext>
            </React.Fragment>
    )
}

export default User;