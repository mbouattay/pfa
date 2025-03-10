import React from 'react';
import { Dialog, DialogContent, Typography, IconButton, Box } from "@mui/material"
import { CloseCircle, TickCircle } from "iconsax-react"
const PopUpPayementStatus = ({ open, onClose,status}) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                PaperProps={{
                    sx: {
                        borderRadius: "24px",
                        maxWidth: "500px",
                        width: "100%",
                        p: 2,
                          height: "400px"
                    },
                }}
            >
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: "#666",
                    }}
                >
                    <CloseCircle size={24} color="#666"/>
                </IconButton>
                <DialogContent sx={{ textAlign: "center", py: 4 }}>
                    <Box sx={{mt:5 }}>
                    {status ? (
                        <TickCircle size={100} variant="Bulk" color="#4CAF50" />
                    ) : (
                        <CloseCircle size={100} variant="Bold" color="#f44336" />
                    )}
                    </Box>
                    <Typography variant="h6" sx={{ color: "#333", fontWeight: "500", mt:5}}>
                    {status 
                        ? "Nous vous confirmons que votre paiement a été effectué avec succès"
                        : " Nous vous informons que votre paiement n'a pas pu être effectué en raison d'une erreur"}
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}
export default PopUpPayementStatus;
