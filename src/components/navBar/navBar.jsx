
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Popover,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
} from "@mui/material"
import { Courthouse, Notification, DocumentText } from "iconsax-react"
import React, { useState } from "react"
import avatar from "../../assets/student.png"

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Un nouveau support de cours",
            message: "a été intégré dans Java EE.",
            icon: <DocumentText size={24} variant="Bulk" color="#0a2472" />,
            read: false,
        },
        {
            id: 2,
            title: "Un nouveau support de cours",
            message: "a été intégré dans Java EE.",
            icon: <DocumentText size={24} variant="Bulk" color="#0a2472" />,
            read: false,
        },
        {
            id: 3,
            title: "Un nouveau support de cours",
            message: "a été intégré dans Java EE.",
            icon: <DocumentText size={24} variant="Bulk" color="#0a2472" />,
            read: false,
        },
        {
            id: 4,
            title: "Un nouveau support de cours",
            message: "a été intégré dans Java EE.",
            icon: <DocumentText size={24} variant="Bulk" color="#0a2472" />,
            read: true,
        },
    ])

    const handleNotificationClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleNotificationRead = (id) => {
        setNotifications(
            notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
        )
    }

    const unreadCount = notifications.filter((notification) => !notification.read).length
    const open = Boolean(anchorEl)
    const id = open ? "notifications-popover" : undefined

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
                    <IconButton color="inherit" sx={{ mr: 2 }} onClick={handleNotificationClick} aria-describedby={id}>
                        <Badge badgeContent={unreadCount} color="error">
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

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                PaperProps={{
                    sx: {
                        width: 320,
                        borderRadius: 2,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        mt: 1,
                    },
                }}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        p: 2,
                        fontWeight: "bold",
                        borderBottom: "1px solid #e0e0e0",
                        color: "#1a1a1a",
                    }}
                >
                    Notifications
                </Typography>
                <List sx={{ p: 0, maxHeight: 400, overflow: "auto" }}>
                    {notifications.map((notification, index) => (
                        <React.Fragment key={notification.id}>
                            <ListItem
                                alignItems="flex-start"
                                sx={{
                                    p: 2,
                                    backgroundColor: notification.read ? "transparent" : "rgba(10, 36, 114, 0.05)",
                                    "&:hover": {
                                        backgroundColor: "rgba(10, 36, 114, 0.1)",
                                        cursor: "pointer",
                                    },
                                }}
                                onClick={() => handleNotificationRead(notification.id)}
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{
                                            bgcolor: "rgba(10, 36, 114, 0.1)",
                                            width: 40,
                                            height: 40,
                                        }}
                                    >
                                        {notification.icon}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={notification.title}
                                    secondary={notification.message}
                                    primaryTypographyProps={{
                                        fontWeight: notification.read ? "normal" : "bold",
                                        color: "#1a1a1a",
                                        fontSize: "0.95rem",
                                    }}
                                    secondaryTypographyProps={{
                                        color: "#666",
                                        fontSize: "0.85rem",
                                    }}
                                />
                            </ListItem>
                            {index < notifications.length - 1 && <Divider component="li" />}
                        </React.Fragment>
                    ))}
                </List>
            </Popover>
        </div>
    )
}

export default NavBar

