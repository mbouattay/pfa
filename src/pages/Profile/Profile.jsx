import { useState } from "react"
import { Box, Container, Typography, TextField, Button, Card, IconButton, InputAdornment, Avatar } from "@mui/material"
import { User, Calendar, Sms, Call, Lock, Eye, EyeSlash, AddCircle } from "iconsax-react"

export default function ParametresPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=120&width=120")
  const [isEditing, setIsEditing] = useState(false)
  const [isEditingPassword, setIsEditingPassword] = useState(false)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
      {/* Identity Section */}
      <Card sx={{ p: 4, mb: 3, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "500", color: "#1a1a1a" }}>
            Mon identité
          </Typography>
          <Button
            variant="contained"
            onClick={() => setIsEditing(!isEditing)}
            sx={{
              bgcolor: "#0a2472",
              "&:hover": { bgcolor: "#083464" },
              textTransform: "none",
              px: 4,
            }}
          >
            {isEditing ? "Enregistrer" : "Modifier"}
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <Box sx={{ position: "relative" }}>
            <Avatar
              src={profileImage}
              sx={{
                width: 120,
                height: 120,
                border: "4px solid #f0f0f0",
              }}
            />
            <input
              type="file"
              accept="image/*"
              id="profile-image-upload"
              style={{ display: "none" }}
              onChange={handleImageUpload}
              disabled={!isEditing}
            />
            <label htmlFor="profile-image-upload">
              <IconButton
                component="span"
                sx={{
                  position: "absolute",
                  bottom: -4,
                  right: -4,
                  bgcolor: "white",
                  border: "2px solid #e0e0e0",
                  "&:hover": { bgcolor: isEditing ? "#f5f5f5" : "white" },
                  opacity: isEditing ? 1 : 0.5,
                  pointerEvents: isEditing ? "auto" : "none",
                }}
              >
                <AddCircle size={24} color="#0a2472" />
              </IconButton>
            </label>
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "500", color: "#1a1a1a" }}>
              Photo de profile
            </Typography>
            <Typography variant="body2" color="text.secondary">
              30x30 px
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: "repeat(2, 1fr)" }}>
          <TextField
            fullWidth
            placeholder="nom et prénom"
            disabled={!isEditing}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <User size={20} color="#666" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            placeholder="Email"
            disabled={!isEditing}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Sms size={20} color="#666" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            placeholder="date de naissance"
            disabled={!isEditing}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Calendar size={20} color="#666" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            placeholder="téléphone"
            disabled={!isEditing}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Call size={20} color="#666" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Card>

      {/* Password Section */}
      <Card sx={{ p: 4, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "500", color: "#1a1a1a" }}>
            Mot de passe
          </Typography>
          <Button
            variant="contained"
            onClick={() => setIsEditingPassword(!isEditingPassword)}
            sx={{
              bgcolor: "#0a2472",
              "&:hover": { bgcolor: "#083464" },
              textTransform: "none",
              px: 4,
            }}
          >
            {isEditingPassword ? "Enregistrer" : "Modifier"}
          </Button>
        </Box>

        <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: "repeat(2, 1fr)" }}>
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            placeholder="mot de passe actuel"
            disabled={!isEditingPassword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock size={20} color="#666" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" disabled={!isEditingPassword}>
                    {showPassword ? <EyeSlash size={20} color="#666" /> : <Eye size={20} color="#666" />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            type={showNewPassword ? "text" : "password"}
            placeholder="nouveau mot de passe"
            disabled={!isEditingPassword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock size={20} color="#666" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    edge="end"
                    disabled={!isEditingPassword}
                  >
                    {showNewPassword ? <EyeSlash size={20} color="#666" /> : <Eye size={20} color="#666" />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Card>
    </Container>
  )
}

