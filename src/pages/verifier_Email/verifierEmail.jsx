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
import { Tag } from "@mui/icons-material"
import img3 from "../../assets/VerifyEmail.png"
import { useNavigate } from "react-router-dom"
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
export default function VerifierEmail() {
  const [verificationCode, setVerificationCode] = useState("")
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Code de vérification:", verificationCode)
    // Ici vous ajouteriez la logique de vérification du code
    navigate("/login")
  }

  const handleResendCode = (e) => {
    e.preventDefault()
    console.log("Renvoyer le code")

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
                Vérifier l'e-mail
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
                nous avons envoyé le code à l'adresse e-mail de votre appareil Veuillez vérifier votre boîte de
                réception pour vérifier votre e-mail
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", maxWidth: 360 }}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  placeholder="Code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Tag />
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
                  Vérifier
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
                  src={img3}
                  alt="Vérification email"
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

