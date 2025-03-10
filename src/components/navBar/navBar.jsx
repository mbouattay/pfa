import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Courthouse, Notification } from 'iconsax-react';
import React from 'react';
import avatar from "../../assets/student.png"

const NavBar = () => {
    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: "white",
                    boxShadow: "none",
                    borderBottom: "1px solid #e0e0e0",
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, color: "#0a2472", fontWeight: "bold", display: "flex", alignItems: "center" }}
                    >
                        <Box
                            component="span"
                            sx={{ backgroundColor: "#e6f0ff", p: 1, borderRadius: 1, mr: 1, display: "inline-flex" }}
                        >
                            <Courthouse size={24} color="#0a2472" />
                        </Box>
                        BrightPath
                    </Typography>
                    <IconButton color="inherit" sx={{ mr: 2 }}>
                        <Badge badgeContent={3} color="error">
                            <Notification size={24} color="#0a2472" />
                        </Badge>
                    </IconButton>
                    <Avatar
                        alt="User Profile"
                        src={avatar}
                        sx={{ width: 40, height: 40, backgroundColor: "#f5f5f5", border: "2px solid #e0e0e0" }}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
