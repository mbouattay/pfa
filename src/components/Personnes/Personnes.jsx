import { useState } from "react"
import { Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider } from "@mui/material"
export default function Personnes() {
    const [teachers] = useState([
        {
            id: 1,
            name: "Mahmoud Bouattay",
            role: "Enseignant",
            avatar: "/placeholder.svg?height=50&width=50",
        },
    ])

    const [students] = useState(
        Array(48)
            .fill(null)
            .map((_, index) => ({
                id: index + 1,
                name: "chawki ben miled",
                role: "Étudiant",
                avatar: "/placeholder.svg?height=50&width=50",
            })),
    )

    return (
        <Box
            sx={{
                bgcolor: "white",
                borderRadius: "16px",
                p: 3,
                maxHeight: "calc(100vh - 300px)",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                    width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "#f1f1f1",
                    borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#888",
                    borderRadius: "10px",
                    "&:hover": {
                        backgroundColor: "#555",
                    },
                },
            }}
        >
            {/* Teachers Section */}
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "500" }}>
                Enseignants
            </Typography>
            <List>
                {teachers.map((teacher) => (
                    <ListItem key={teacher.id} sx={{ px: 0 }}>
                        <ListItemAvatar>
                            <Avatar alt={teacher.name} src={teacher.avatar} sx={{ width: 40, height: 40 }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={teacher.name}
                            sx={{
                                "& .MuiListItemText-primary": {
                                    fontWeight: 500,
                                    color: "#1a1a1a",
                                },
                            }}
                        />
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ my: 3 }} />

            {/* Students Section */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: "500" }}>
                    Autres élèves
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {students.length} élèves
                </Typography>
            </Box>

            <List>
                {students.map((student) => (
                    <ListItem key={student.id} sx={{ px: 0 }}>
                        <ListItemAvatar>
                            <Avatar alt={student.name} src={student.avatar} sx={{ width: 40, height: 40 }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={student.name}
                            sx={{
                                "& .MuiListItemText-primary": {
                                    color: "#1a1a1a",
                                },
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

