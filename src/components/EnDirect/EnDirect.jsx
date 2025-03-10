
import { useState } from "react"
import { Box, Button, Typography, Skeleton } from "@mui/material"
import { Lock, Video } from "iconsax-react"

export default function EnDirect() {
    const [isJoining, setIsJoining] = useState(false)

    const handleJoin = () => {
        setIsJoining(true)
        // Ici vous pouvez ajouter la logique pour rejoindre le cours en direct
        setTimeout(() => {
            setIsJoining(false)
        }, 2000)
    }

    return (
        <Box
            sx={{
                bgcolor: "white",
                borderRadius: "16px",
                p: 3,
                maxHeight: "calc(100vh - 100px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Zone de vidéo */}
            <Box
                sx={{
                    width: "100%",
                    aspectRatio: "16/9",
                    bgcolor: "#f5f5f5",
                    borderRadius: "12px",
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    animation="wave"
                    sx={{
                        bgcolor: "#e0e0e0",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Video size={64} color="#666" variant="Bulk" />
                    <Typography variant="h6" color="text.secondary">
                        En attente du début du cours
                    </Typography>
                </Box>
            </Box>

            {/* Bouton Participer */}
            <Button
                variant="contained"
                onClick={handleJoin}
                disabled={isJoining}
                startIcon={<Lock size={20} color="#ffff" />}
                sx={{
                    bgcolor: "#0a2472",
                    "&:hover": { bgcolor: "#083464" },
                    textTransform: "none",
                    px: 4,
                    py: 1,
                    fontSize: "16px",
                }}
            >
                {isJoining ? "Connexion..." : "Participe"}
            </Button>
        </Box>
    )
}
