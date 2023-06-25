import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import LogoutUser from '../LogOut/LogoutUser';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import DeviceUnknownOutlinedIcon from '@mui/icons-material/DeviceUnknownOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import WalletIcon from '@mui/icons-material/Wallet';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function AccountMenu() {


    const [user, setUser] = React.useState(null);
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    function handleprofile() {

        navigate("/editprofile")
    }

    const Register = () => {
        navigate("/mywallet")
    }

    const googleimg = {
        height: "25px",
        with: "25px"
    }

    const mainbox = {
        border: "1px solid red",
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        width: "180px",
        marginLeft: "10px"
    }


    return (
        <React.Fragment>
            <Box style={{ borderRadius: "50%", height: "60px", width: "60px", backgroundColor: "white" }}>
                <Badge badgeContent={5} color="primary" style={{ marginTop: "16px", marginLeft: "14px" }}>
                    <NotificationsNoneIcon />
                </Badge>
            </Box>

            <Box style={mainbox} sx={{ borderRadius: "5px", backgroundColor: "white" }} onClick={handleClick}>
                <Tooltip title="Account settings">
                    <IconButton

                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>
                            {"S"}
                            {/* <p>{}</p> */}
                            {/* <img style={googleimg} src={user ? user.photos[0].value || "H" : "asset/download.png" } /> */}

                        </Avatar>
                    </IconButton>
                </Tooltip>
                <Box>
                    <p style={{ color: "black", fontSize: "12px", fontWeight: "500", textAlign: "left", paddingTop: "7px" }}>
                        <span >Mark M</span>
                        <br />
                        <span style={{ fontSize: "10px" }} >Markm001@gmail...</span>
                    </p>

                </Box>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleprofile}>
                    <ListItemIcon>
                        <ModeEditOutlinedIcon />
                    </ListItemIcon>
                    Edit Profile
                </MenuItem>
                <MenuItem onClick={() => navigate("/portfolio")}>
                    <ListItemIcon>
                        <Avatar />
                    </ListItemIcon>
                    Porfolio
                </MenuItem>

                <MenuItem onClick={() => navigate("/mywallet")}>
                    <ListItemIcon>
                        <WalletIcon />
                    </ListItemIcon>
                    My wallet
                </MenuItem>
                <MenuItem onClick={() => navigate('/account')}>
                    <ListItemIcon>
                        <ContactsIcon fontSize="small" />
                    </ListItemIcon>
                    Account
                </MenuItem>

                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon >
                    <LogoutUser />

                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}