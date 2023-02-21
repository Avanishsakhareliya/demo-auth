import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
    let navigate = useNavigate();

    const onLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('token');
        toast.success("user successfully logout")
        navigate("/")
    }

    return (<>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        App
                    </Typography>
                    <Button color="inherit" onClick={(e) => onLogout(e)}>LogOut</Button>
                </Toolbar>
            </AppBar>
        </Box>

    </>)
}

export default Navbar