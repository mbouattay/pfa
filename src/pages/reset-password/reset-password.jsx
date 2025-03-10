"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  InputAdornment,
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from "@mui/material"
import { Tag, Lock } from "@mui/icons-material"
import img4 from "../../assets/ForgetPassword.png"
import { useNavigate } from "react-router-dom"

// Création du thème personnalisé
const theme = createTheme({
  palette: {
    primary: {
      main: "#7c4dff",
    },
    background: {
      default: "#f0f4fa",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
  },
})

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    code: "",
    newPassword: "",
  })
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form data:", formData)
    // Ici vous ajouteriez la logique de réinitialisation du mot de passe
    navigate("/passwordUpdated")
  }
  const handleResendCode = (e) =>{
    e.preventDefault()
    console.log("Renvoyer le code")
    // Ici vous ajouteriez la logique pour renvoyer le code
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "background.default",
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                flex: 1,
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#f8f8f8",
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  color: "primary.main",
                }}
              >
                BrightPath
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                sx={{
                  mb: 2,
                  fontWeight: "medium",
                  textAlign: "center",
                }}
              >
                Mot de passe oublié
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  textAlign: "center",
                  color: "text.secondary",
                  maxWidth: 400,
                }}
              >
                nous avons envoyé le code à l'adresse e-mail sur votre appareil
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", maxWidth: 360 }}>
                <TextField
                  fullWidth
                  name="code"
                  margin="normal"
                  variant="outlined"
                  placeholder="Code"
                  value={formData.code}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Tag />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 3 }}
                />

                <TextField
                  fullWidth
                  name="newPassword"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  placeholder="Nouveau mot de passe"
                  value={formData.newPassword}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 3 }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    mb: 2,
                    py: 1.5,
                    backgroundColor: "primary.main",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Réinitialiser le mot de passe
                </Button>

                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Typography variant="body2">
                    Vous n'avez pas reçu votre code ?{" "}
                    <Link href="#" underline="hover" onClick={handleResendCode} sx={{ fontWeight: "medium" }}>
                      Renvoyer le code
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>

            {!isMobile && (
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                  backgroundColor: "#fff",
                }}
              >
                <Box
                  component="img"
                  src={img4}
                  alt="Réinitialisation mot de passe"
                  sx={{
                    maxWidth: "50%",
                    height: "auto",
                  }}
                />
              </Box>
            )}
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

