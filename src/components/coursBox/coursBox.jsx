import { Avatar, Box, Button, Card, Rating, Typography } from '@mui/material';
import React from 'react';
import img10 from "../../assets/classroom5.PNG"
import avatar from "../../assets/student.png"
import { ArrowRight3 } from 'iconsax-react';
const CoursBox = (props) => {
    return (
        <div>
            <Card

                sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    position: "relative",
                    backgroundColor: "white",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    height: "190px",
                    backgroundImage: `url(${img10})`, // Assurez-vous que img1 est bien importé
                    backgroundSize: "cover", // Remplit tout le Card sans déformation
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                {/* Header section */}
                <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: "20px",
                                fontWeight: "600",
                                color: "#0a2472",
                                mb: 0.5,
                            }}
                        >
                            {props.title}
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                color: "#666",
                                fontSize: "14px",
                            }}
                        >
                            {props.level}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#666",
                                fontSize: "14px",
                                mt: 0.5
                            }}
                        >
                            {props.instructor}
                        </Typography>

                    </Box>
                    <Avatar
                        src={avatar}
                        sx={{
                            width: 48,
                            height: 48,
                            border: "2px solid white",
                            backgroundColor: "#f0f0f0",
                        }}
                    />
                </Box>

                {/* Footer section */}
                <Box
                    sx={{
                        p: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                    }}
                >
                    <Rating
                        value={props.rating}
                        readOnly
                        size="small"
                        sx={{
                            "& .MuiRating-icon": {
                                color: "#FFB800",
                            },
                        }}
                    />
                    <Button
                        variant="contained"

                        onClick={props.open}

                        sx={{
                            backgroundColor: "#8b5cf6",
                            borderRadius: "8px",
                            textTransform: "none",
                            padding: "4px 16px",
                            minWidth: "80px",
                            fontSize: "14px",
                            fontWeight: "500",
                            "&:hover": {
                                backgroundColor: "#7c3aed",
                            },
                        }}
                    >
                        {props.Abonnement ? `${props.price} TND` :(<ArrowRight3 size="22" color="#FFFF"/>)}
                    </Button>
                </Box>
            </Card>
        </div>
    );
}

export default CoursBox;
