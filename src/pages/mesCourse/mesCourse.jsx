"use client"

import { useState } from "react"
import { Box,Container,Typography,Tabs,Tab} from "@mui/material"

import img10 from "../../assets/classroom5.PNG"
import Flux from "../../components/flux/flux"
import TravauxEtDevoirs from "../../components/travauxEtDevoirs/travauxEtDevoirs"
import Personnes from "../../components/Personnes/Personnes"
import EnDirect from "../../components/EnDirect/EnDirect"

export default function CourseDetails() {
    const [selectedTab, setSelectedTab] = useState(0)

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue)
    }
    const renderContent = () => {
        switch (selectedTab) {
          case 0:
            return <Flux />
          case 1:
            return <TravauxEtDevoirs />
          case 2:
            return <Personnes/>
          case 3 :
           return <EnDirect/>  
          default:
            return <Flux />
        }
      }

    

    return (
        <Container maxWidth="lg" sx={{ mt: 8 }}>
            {/* Course Header */}
            <Box
                sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    mb: 3,
                    position: "relative",
                    bgcolor: "white",
                }}
            >
                <Box
                    sx={{
                        p: 3,
                        backgroundImage: `url(${img10})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                        },
                    }}
                >
                    <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                        <Typography variant="h4" sx={{ color: "#0a2472", fontWeight: "bold", mb: 1 }}>
                            Cours Java EE (niveau 1)
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: "#666" }}>
                            GL4 EPI (24/25)
                        </Typography>
                    </Box>
                </Box>

                {/* Tabs */}
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        "& .MuiTab-root": {
                            textTransform: "none",
                            fontSize: "16px",
                            fontWeight: "500",
                        },
                    }}
                >
                    <Tab label="Flux" />
                    <Tab label="Travaux et devoirs" />
                    <Tab label="Personnes" />
                    <Tab label="En direct" /> 
                </Tabs>
            </Box>

            {/* Course Content */
            /*<Flux/>*/}
            {renderContent()}
           
        </Container>
    )
}

