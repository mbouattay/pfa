import { useState, useEffect, useCallback, useRef } from "react"
import {
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material"
import NavBar from "../../components/navBar/navBar"
import SaidBar from "../../components/saidBar/saidBar"
import Accueil from "../accueil/accueil"
import Inscrit from "../Inscrit/Inscrit"
import { Outlet } from "react-router-dom"

const theme = createTheme({
  palette: {
    primary: { main: "#0a2472" },
    secondary: { main: "#e6e6fa" },
    background: { default: "#f0f4f8", paper: "#ffffff" },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
})
export default function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", backgroundColor: "#f0f4f8" }}>
        <NavBar />
        <SaidBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: "100vh" }}>
          <Outlet/>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

