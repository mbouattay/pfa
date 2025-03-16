import { useState } from "react"
import { Box, Container, Typography, IconButton, Paper, Grid } from "@mui/material"
import { ArrowLeft2, ArrowRight2 } from "iconsax-react"
export default function Agenda() {
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date(2025, 1, 17)) // 17 février 2025 (lundi)

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Compte Rendu TP2",
      group: "Groupe D 5G1",
      date: new Date(2025, 1, 19), // 19 février 2025 (mercredi)
      startTime: "10:00",
      endTime: "12:00",
      color: "#8b5cf6", // Violet
    },
    {
      id: 2,
      title: "Examen Java EE",
      group: "GL4 EPI",
      date: new Date(2025, 1, 21), // 21 février 2025 (vendredi)
      startTime: "14:00",
      endTime: "16:00",
      color: "#ef4444", // Rouge
    },
    {
      id: 3,
      title: "TP3 Base de données",
      group: "Groupe A 5G1",
      date: new Date(2025, 1, 17), // 17 février 2025 (lundi)
      startTime: "08:00",
      endTime: "10:00",
      color: "#3b82f6", // Bleu
    },
  ])

  // Fonction pour générer les jours de la semaine à partir du lundi
  const getDaysOfWeek = (startDate) => {
    const days = []
    for (let i = 0; i < 7; i++) {
      const day = new Date(startDate)
      day.setDate(startDate.getDate() + i)
      days.push(day)
    }
    return days
  }

  const daysOfWeek = getDaysOfWeek(currentWeekStart)

  // Fonction pour naviguer entre les semaines
  const navigateWeek = (direction) => {
    const newDate = new Date(currentWeekStart)
    if (direction === "next") {
      newDate.setDate(currentWeekStart.getDate() + 7)
    } else {
      newDate.setDate(currentWeekStart.getDate() - 7)
    }
    setCurrentWeekStart(newDate)
  }

  // Fonction pour vérifier si deux dates sont le même jour
  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    )
  }

  // Fonction pour obtenir les événements d'un jour spécifique
  const getEventsForDay = (day) => {
    return events.filter((event) => isSameDay(event.date, day))
  }

  // Fonction pour formater les dates
  const formatDate = (date) => {
    const options = { day: "numeric", month: "short" }
    return date.toLocaleDateString("fr-FR", options)
  }

  // Fonction pour obtenir le nom du jour en français
  const getDayName = (date) => {
    const days = ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"]
    return days[date.getDay()]
  }

  // Fonction pour formater la plage de dates de la semaine
  const formatWeekRange = () => {
    const endOfWeek = new Date(currentWeekStart)
    endOfWeek.setDate(currentWeekStart.getDate() + 6)

    const startFormatted = formatDate(currentWeekStart)
    const endFormatted = endOfWeek.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })

    return `${startFormatted} - ${endFormatted}`
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
      <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <IconButton onClick={() => navigateWeek("prev")}>
            <ArrowLeft2 size={24} color="#0a2472" />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: "500" }}>
            {formatWeekRange()}
          </Typography>
          <IconButton onClick={() => navigateWeek("next")}>
            <ArrowRight2 size={24} color="#0a2472" />
          </IconButton>
        </Box>

        <Grid container sx={{ border: "1px solid #e0e0e0", borderRadius: 1, overflow: "hidden" }}>
          {/* Header row with day names and dates */}
          {daysOfWeek.map((day, index) => (
            <Grid
              item
              key={index}
              xs={12 / 7}
              sx={{
                borderRight: index < 6 ? "1px solid #e0e0e0" : "none",
                textAlign: "center",
                py: 1,
              }}
            >
              <Typography variant="subtitle2" sx={{ textTransform: "capitalize", color: "#666" }}>
                {getDayName(day)}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {day.getDate()}
              </Typography>
            </Grid>
          ))}

          {/* Calendar cells */}
          {daysOfWeek.map((day, index) => {
            const dayEvents = getEventsForDay(day)
            return (
              <Grid
                item
                key={`cell-${index}`}
                xs={12 / 7}
                sx={{
                  height: "500px",
                  borderRight: index < 6 ? "1px solid #e0e0e0" : "none",
                  borderTop: "1px solid #e0e0e0",
                  position: "relative",
                  p: 1,
                }}
              >
                {dayEvents.map((event) => (
                  <Box
                    key={event.id}
                    sx={{
                      position: "relative",
                      mb: 1,
                      p: 1,
                      borderRadius: 1,
                      backgroundColor: "white",
                      border: "1px solid #e0e0e0",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      cursor: "pointer",
                      "&:hover": {
                        boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "4px",
                        backgroundColor: event.color,
                        borderRadius: "4px 0 0 4px",
                      },
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "bold", pl: 1 }}>
                      {event.title}
                    </Typography>
                    <Typography variant="caption" sx={{ display: "block", color: "#666", pl: 1 }}>
                      {event.group}
                    </Typography>
                    <Typography variant="caption" sx={{ display: "block", color: "#666", pl: 1 }}>
                      {event.startTime} - {event.endTime}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            )
          })}
        </Grid>
      </Paper>
    </Container>
  )
}

