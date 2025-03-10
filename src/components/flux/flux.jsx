import { Avatar, Box, Card, IconButton, Stack, Typography } from '@mui/material';
import { DocumentDownload, DocumentText1 } from 'iconsax-react';
import React from 'react';
import imgTeacher from '../../assets/avatarTeacher.jpg'
const Flux = () => {
    const coursePosts = [
        {
            id: 1,
            author: "Mahmoud Bouattay",
            date: "01/02/2025",
            chapter: "Chapitre 1 : les methode",
            files: [
                { name: "les_methode.pdf", type: "pdf" },
                { name: "les_methode.pdf", type: "pdf" },
            ],
        },
        {
            id: 2,
            author: "Mahmoud Bouattay",
            date: "01/02/2025",
            chapter: "Chapitre 1 : les methode",
            files: [
                { name: "les_methode.pdf", type: "pdf" },
                { name: "les_methode.pdf", type: "pdf" },
            ],
        },
        {
            id: 2,
            author: "Mahmoud Bouattay",
            date: "01/02/2025",
            chapter: "Chapitre 1 : les methode",
            files: [
                { name: "les_methode.pdf", type: "pdf" },
                { name: "les_methode.pdf", type: "pdf" },
            ],
        },
        {
            id: 2,
            author: "Mahmoud Bouattay",
            date: "01/02/2025",
            chapter: "Chapitre 1 : les methode",
            files: [
                { name: "les_methode.pdf", type: "pdf" },
                { name: "les_methode.pdf", type: "pdf" },
            ],
        },
        {
            id: 2,
            author: "Mahmoud Bouattay",
            date: "01/02/2025",
            chapter: "Chapitre 1 : les methode",
            files: [
                { name: "les_methode.pdf", type: "pdf" },
                { name: "les_methode.pdf", type: "pdf" },
            ],
        },
    ]
    return (
        <Box
        sx={{
            maxHeight: "calc(100vh - 300px)", // Ajustez cette valeur selon vos besoins
            overflowY: "auto",
            mt: 2,
            pr: 2, // Ajoute un peu d'espace à droite pour la barre de défilement
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
        <Stack spacing={2}>
            {coursePosts.map((post) => (
                <Card key={post.id} sx={{ p: 3, borderRadius: "16px" }}>
                    {/* Le contenu de la carte reste inchangé */}
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Avatar src={imgTeacher} sx={{ width: 40, height: 40, mr: 2 }} />
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                                {post.author}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#666" }}>
                                {post.date}
                            </Typography>
                        </Box>
                    </Box>

                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "500" }}>
                        {post.chapter}
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        {post.files.map((file, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    p: 1,
                                    border: "1px solid #e0e0e0",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    "&:hover": {
                                        bgcolor: "#f5f5f5",
                                    },
                                }}
                            >
                                <IconButton size="small" sx={{ color: "#f44336", mr: 1 }}>
                                <DocumentDownload size="32" color="#e54342"/>
                                </IconButton>
                                <Typography variant="body2">{file.name}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </Card>
            ))}
        </Stack>
    </Box>
    );
}

export default Flux;
