import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link as Mlink,
  Divider,
  Paper,
  InputAdornment,
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from "@mui/material"
import { Person, Lock, Google } from "@mui/icons-material"
import img1 from "../../assets/image1.png"
// Création du thème personnalisé
import { Link, useNavigate } from 'react-router-dom';
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

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email:", email, "Password:", password)
    navigate("/")
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
                  mb: 4,
                  fontWeight: "bold",
                  color: "primary.main",
                }}
              >
                BrightPath
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", maxWidth: 360 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Adresse email *
                </Typography>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  placeholder="exemple@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 3 }}
                />

                <Typography variant="body2" sx={{ mb: 1 }}>
                  Mot de passe *
                </Typography>
                <TextField
                  fullWidth
                  margin="normal"
                  type="password"
                  variant="outlined"
                  placeholder="Votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  SE CONNECTER
                </Button>

                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Link to={"/resetPassword"} style={{ textDecoration: "none" }}>
                    <Mlink underline="hover" sx={{ color: "primary.main" }}>
                      Mot de passe oublié ?
                    </Mlink>
                  </Link>
                  <Typography variant="body1" sx={{ mt: 2, fontWeight: "medium" }}>
                    Pas de compte ?{" "}
                    <Link to={"/register"} style={{ textDecoration: "none" }}>
                    <Mlink underline="hover" sx={{ fontWeight: "bold" }}>
                      inscrivez-vous
                    </Mlink>
                    </Link>
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
                  <Divider sx={{ flex: 1 }} />
                  <Typography variant="body2" sx={{ mx: 2 }}>
                    Ou
                  </Typography>
                  <Divider sx={{ flex: 1 }} />
                </Box>

                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Google />}
                  sx={{
                    py: 1.5,
                    borderColor: "#ddd",
                    color: "#333",
                    "&:hover": {
                      borderColor: "#ccc",
                      backgroundColor: "#f9f9f9",
                    },
                  }}
                >
                  Continuer avec Google
                </Button>
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
                  src={img1}
                  alt="Illustration"
                  sx={{
                    maxWidth: "80%",
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

