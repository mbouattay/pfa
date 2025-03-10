import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Calendar, Courthouse, Home2, User } from 'iconsax-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SaidBar = () => {
    const [selectedItem, setSelectedItem] = useState("Accueil")
    const menuItems = [
        { text: "Accueil", icon: (color) => <Home2 size={24} color={color} />,link:"/" },
        { text: "Agenda", icon: (color) => <Calendar size={24} color={color} />,link:"/agenda" },
        { text: "Inscrit", icon: (color) => <Courthouse size={24} color={color} />,link:"/inscrit" },
        { text: "Profile", icon: (color) => <User size={24} color={color} variant="Bold" />,link:"/profile"},
    ]
    const drawerWidth = 240

    return (
        <div>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        backgroundColor: "#0a2472",
                        color: "white",
                        borderRight: "none",
                        fontFamily: "Inter, sans-serif",
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto", height: "100%", display: "flex", flexDirection: "column", mt: 2 }}>
                    <List>
                        {menuItems.map((item) => (
                            <Link to={item.link} style={{ textDecoration: "none" }}>
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton
                                    onClick={() => setSelectedItem(item.text)}
                                    sx={{
                                        py: 2,
                                        backgroundColor: selectedItem === item.text ? "#e6e6fa" : "transparent",
                                        color: selectedItem === item.text ? "#0a2472" : "white",
                                        borderRadius: selectedItem === item.text ? "0 20px 20px 0" : "0",
                                        width: "90%",
                                        fontFamily: "Inter, sans-serif",
                                        "&:hover": {
                                            backgroundColor: selectedItem === item.text ? "#e6e6fa" : "rgba(255, 255, 255, 0.1)",
                                        },
                                    }}
                                >
                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                        {item.icon(selectedItem === item.text ? "#0a2472" : "white")}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        sx={{
                                            
                                            fontFamily: "Inter, sans-serif",
                                            "& .MuiListItemText-primary": {
                                                fontSize: "17px",
                                                fontWeight: "bold",
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem> </Link>
                        ))}
                    </List>
                    <Box sx={{ mt: "auto", p: 2 }}>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: "#e6e6fa",
                                color: "#0a2472",
                                textTransform: "none",
                                fontFamily: "Inter, sans-serif",

                                fontWeight: "bold",
                                "&:hover": { backgroundColor: "#d1d1f5" },
                            }}
                        >
                            Déconnexion
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </div>
    );
}

export default SaidBar;
