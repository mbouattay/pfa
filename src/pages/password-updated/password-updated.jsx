import { Box, Container, Typography, Button, Paper, ThemeProvider, createTheme, CssBaseline } from "@mui/material"
import { Check, Lock, Star } from "@mui/icons-material"
import img5 from "../../assets/RsetPasswordSuccess.png"
import { useNavigate } from "react-router-dom"
// Création du thème personnalisé
const theme = createTheme({
  palette: {
    primary: {
      main: "#7c4dff",
    },
    secondary: {
      main: "#ffd700", // Couleur jaune pour le bouclier
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
  },
})

export default function PasswordUpdated() {
  const navigate=useNavigate()
  const handleLogin = () => {
    console.log("Redirection vers la page de connexion")
    navigate("/login")
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
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              textAlign: "center",
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
              }}
            >
              Mise à jour du mot de passe
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: "text.secondary",
              }}
            >
              Votre mot de passe a été mis à jour
            </Typography>

            {/* Illustration avec les icônes */}
            <Box
                              component="img"
                              src={img5}
                              alt="Réinitialisation mot de passe"
                              sx={{
                                maxWidth: "60%",
                                height: "auto",
                                mb:13
                              }}
                            />

            <Button
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{
                py: 1.5,
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              SE CONNECTER
            </Button>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

