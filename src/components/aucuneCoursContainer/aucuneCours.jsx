import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import img6 from "../../assets/image5.png"
const AucuneCours = () => {
    return (
        <div>
            <Container maxWidth="lg" sx={{ mt: 4, textAlign: "center" }}>
                <Box
                    component="img"
                    src={img6}
                    alt="Sécurité"
                    sx={{
                        maxWidth: "35%",
                        height: "auto",
                    }}
                />
                <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
                    Il n&apos;y a actuellement aucune course disponible dans notre application. Veuillez revenir plus tard !
                </Typography>
            </Container>
        </div>
    );
}

export default AucuneCours;
