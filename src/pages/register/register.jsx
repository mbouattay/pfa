import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link as Mlink,
  Paper,
  InputAdornment,
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from "@mui/material"
import { Person, Lock, Email } from "@mui/icons-material"
import img2 from "../../assets/RegisterAccount.png"
import { Link, useNavigate } from "react-router-dom"
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

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const navigate=useNavigate()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas")
      return
    }
    console.log("Form data:", formData)
    navigate("/verifierEmail")
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
                variant="h6"
                component="h2"
                align="center"
                sx={{
                  mb: 4,
                  fontWeight: "medium",
                }}
              >
                Créez vote compte pour accéder à nos cours en ligne
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", maxWidth: 360 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Nom d'utilisateur *
                </Typography>
                <TextField
                  fullWidth
                  name="username"
                  margin="normal"
                  variant="outlined"
                  placeholder="Votre nom d'utilisateur"
                  value={formData.username}
                  onChange={handleChange}
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
                  Adresse email *
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  margin="normal"
                  variant="outlined"
                  placeholder="exemple@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
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
                  name="password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  placeholder="Votre mot de passe"
                  value={formData.password}
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

                <Typography variant="body2" sx={{ mb: 1 }}>
                  Confirmer le mot de passe *
                </Typography>
                <TextField
                  fullWidth
                  name="confirmPassword"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  placeholder="Confirmez votre mot de passe"
                  value={formData.confirmPassword}
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
                  S'INSCRIRE
                </Button>

                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Typography variant="body1">
                    Vous avez déjà un compte ?{" "}
                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                    <Mlink  underline="hover" sx={{ fontWeight: "bold" }}>
                      Connectez-vous
                    </Mlink>
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
                  src={img2}
                  alt="Sécurité"
                  sx={{
                    maxWidth: "70%",
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

