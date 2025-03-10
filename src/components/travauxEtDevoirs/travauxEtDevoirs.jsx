import React from 'react';
import { useState, useRef } from "react"
import { Box, Container, Typography, Tabs, Tab, Card, Button, LinearProgress, IconButton } from "@mui/material"
import { ClipboardText, DocumentUpload, CloseCircle } from "iconsax-react"
const TravauxEtDevoirs = () => {
    const [selectedAssignment, setSelectedAssignment] = useState(null)
    const [uploadedFiles, setUploadedFiles] = useState({})
    const [uploadProgress, setUploadProgress] = useState({})
    const [isUploading, setIsUploading] = useState({})
    const fileInputRef = useRef(null)
    const assignments = [
        {
            id: 1,
            title: "TP2",
            dueDate: "18/04/2025",
        },
        {
            id: 2,
            title: "TP2",
            dueDate: "18/04/2025",
        },
    ]

    const handleAssignmentClick = (assignmentId) => {
        setSelectedAssignment(selectedAssignment === assignmentId ? null : assignmentId)
    }

    const simulateUpload = (assignmentId, file) => {
        const fileId = Date.now() + Math.random().toString(36).substring(2, 9)
        setIsUploading((prev) => ({
            ...prev,
            [assignmentId]: {
                ...prev[assignmentId],
                [fileId]: true,
            },
        }))
        setUploadProgress((prev) => ({
            ...prev,
            [assignmentId]: {
                ...prev[assignmentId],
                [fileId]: 0,
            },
        }))

        const interval = setInterval(() => {
            setUploadProgress((prev) => {
                const currentProgress = prev[assignmentId]?.[fileId] || 0
                const newProgress = currentProgress + 5

                if (newProgress >= 100) {
                    clearInterval(interval)

                    // Marquer le téléchargement comme terminé
                    setIsUploading((prev) => {
                        const newState = { ...prev }
                        if (newState[assignmentId]) {
                            newState[assignmentId] = { ...newState[assignmentId] }
                            newState[assignmentId][fileId] = false
                        }
                        return newState
                    })

                    // Ajouter le fichier à la liste des fichiers téléchargés
                    setUploadedFiles((prev) => {
                        const newFiles = { ...prev }
                        if (!newFiles[assignmentId]) {
                            newFiles[assignmentId] = {}
                        }
                        newFiles[assignmentId][fileId] = {
                            id: fileId,
                            name: file.name,
                            type: file.type,
                            size: file.size,
                        }
                        return newFiles
                    })
                }

                // Mettre à jour la progression
                return {
                    ...prev,
                    [assignmentId]: {
                        ...prev[assignmentId],
                        [fileId]: newProgress,
                    },
                }
            })
        }, 100)
    }

    const handleFileInput = (e, assignmentId) => {
        if (e.target.files && e.target.files.length > 0) {
            Array.from(e.target.files).forEach((file) => {
                simulateUpload(assignmentId, file)
            })
        }
    }

    const handleDeleteFile = (e, assignmentId, fileId) => {
        e.stopPropagation()

        setUploadedFiles((prev) => {
            const newFiles = { ...prev }
            if (newFiles[assignmentId]) {
                const assignmentFiles = { ...newFiles[assignmentId] }
                delete assignmentFiles[fileId]
                newFiles[assignmentId] = assignmentFiles
            }
            return newFiles
        })

        // Supprimer également les données de progression si nécessaire
        setUploadProgress((prev) => {
            const newProgress = { ...prev }
            if (newProgress[assignmentId]) {
                const assignmentProgress = { ...newProgress[assignmentId] }
                delete assignmentProgress[fileId]
                newProgress[assignmentId] = assignmentProgress
            }
            return newProgress
        })
    }

    const handleSubmit = (assignmentId) => {
        setSelectedAssignment(null)
    }

    const getAssignmentFiles = (assignmentId) => {
        return uploadedFiles[assignmentId] || {}
    }

    const isAssignmentUploading = (assignmentId) => {
        const uploadingState = isUploading[assignmentId] || {}
        return Object.values(uploadingState).some((state) => state === true)
    }
    return (
        <Box
            sx={{
                maxHeight: "calc(100vh - 300px)",
                overflowY: "auto",
                pr: 2,
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
            {assignments.map((assignment) => (
                <Card
                    key={assignment.id}
                    sx={{
                        p: 3,
                        borderRadius: "16px",
                        mb: 2,
                        cursor: "pointer",
                        
                    }}
                    onClick={() => handleAssignmentClick(assignment.id)}
                >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <ClipboardText size="32" color="#666"/>
                            <Typography variant="h6">{assignment.title}</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Date limit : {assignment.dueDate}
                        </Typography>
                    </Box>

                    {selectedAssignment === assignment.id && (
                        <Box sx={{ mt: 3 }} onClick={(e) => e.stopPropagation()}>
                            {/* Zone de dépôt */}
                            <Box
                                sx={{
                                    border: "1px dashed #ccc",
                                    borderRadius: "8px",
                                    p: 3,
                                    textAlign: "center",
                                    bgcolor: "background.paper",
                                    position: "relative",
                                    mb: 2,
                                }}
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={(e) => handleFileInput(e, assignment.id)}
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        opacity: 0,
                                        cursor: "pointer",
                                    }}
                                    accept=".pdf,.doc,.docx"
                                    multiple
                                />
                                <DocumentUpload size={32} variant="Bold" color="#666" />
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Déposez vos fichiers ici ou cliquez pour parcourir
                                </Typography>
                            </Box>

                            {/* Liste des fichiers */}
                            {Object.entries(getAssignmentFiles(assignment.id)).length > 0 && (
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                                        Fichiers téléchargés:
                                    </Typography>
                                    <Box
                                        sx={{
                                            border: "1px solid #e0e0e0",
                                            borderRadius: "8px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {Object.entries(getAssignmentFiles(assignment.id)).map(([fileId, file]) => (
                                            <Box
                                                key={fileId}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    p: 1.5,
                                                    borderBottom: "1px solid #e0e0e0",
                                                    "&:last-child": {
                                                        borderBottom: "none",
                                                    },
                                                }}
                                            >
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                                    <ClipboardText size={20} color="#666" />
                                                    <Typography variant="body2">{file.name}</Typography>
                                                </Box>
                                                <IconButton
                                                    size="small"
                                                    onClick={(e) => handleDeleteFile(e, assignment.id, fileId)}
                                                    sx={{ color: "#f44336" }}
                                                >
                                                    <CloseCircle size={24} color="#666" />
                                                </IconButton>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            )}

                            {/* Fichiers en cours de téléchargement */}
                            {isAssignmentUploading(assignment.id) && (
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                                        Téléchargement en cours:
                                    </Typography>
                                    <Box
                                        sx={{
                                            border: "1px solid #e0e0e0",
                                            borderRadius: "8px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {Object.entries(uploadProgress[assignment.id] || {}).map(([fileId, progress]) => {
                                            // Ne montrer que les fichiers en cours de téléchargement
                                            if (!isUploading[assignment.id]?.[fileId]) return null

                                            return (
                                                <Box
                                                    key={fileId}
                                                    sx={{
                                                        p: 1.5,
                                                        borderBottom: "1px solid #e0e0e0",
                                                        "&:last-child": {
                                                            borderBottom: "none",
                                                        },
                                                    }}
                                                >
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                                                        <ClipboardText size={20} color="#666" />
                                                        <Typography variant="body2">Téléchargement...</Typography>
                                                    </Box>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={progress}
                                                        sx={{
                                                            height: 6,
                                                            borderRadius: 3,
                                                            bgcolor: "#e0e0e0",
                                                            "& .MuiLinearProgress-bar": {
                                                                bgcolor: "#4caf50",
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                            )
                                        })}
                                    </Box>
                                </Box>
                            )}

                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                                <Button
                                    variant="contained"
                                    onClick={(e) => handleSubmit(assignment.id)}
                                    sx={{
                                        bgcolor: "#0a2472",
                                        color: "white",
                                        "&:hover": {
                                            bgcolor: "#081b58",
                                        },
                                    }}
                                >
                                    Marquer comme terminé
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Card>
            ))}
        </Box>
    );
}
export default TravauxEtDevoirs;
