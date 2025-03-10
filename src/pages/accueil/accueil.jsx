import {  Box,Container, InputAdornment, MenuItem, Rating, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import PaymentPopup from '../../components/PaymentPopup/PaymentPopup';
import { SearchNormal1 } from 'iconsax-react';
import CoursBox from '../../components/coursBox/coursBox';
import PopUpPayementStatus from '../../components/popUpPayementStatus/popUpPayementStatus';
const Accueil = () => {
  const [selectedLevel, setSelectedLevel] = useState("Niveau")
  const [courses, setCourses] = useState([{
    "id": "1",
    "title": "UI/UX",
    "level": "3ème Informatique",
    "instructor": "Mahmoud Bouattay",
    "rating": 4,
    "price": 40,
    "instructorAvatar": "/placeholder.svg?height=50&width=50",
  },{
    "id": "1",
    "title": "UI/UX",
    "level": "3ème Informatique",
    "instructor": "Mahmoud Bouattay",
    "rating": 4,
    "price": 40,
    "instructorAvatar": "/placeholder.svg?height=50&width=50",
  },{
    "id": "1",
    "title": "UI/UX",
    "level": "3ème Informatique",
    "instructor": "Mahmoud Bouattay",
    "rating": 4,
    "price": 40,
    "instructorAvatar": "/placeholder.svg?height=50&width=50",
  },{
    "id": "1",
    "title": "UI/UX",
    "level": "3ème Informatique",
    "instructor": "Mahmoud Bouattay",
    "rating": 4,
    "price": 40,
    "instructorAvatar": "/placeholder.svg?height=50&width=50",
  },{
    "id": "1",
    "title": "UI/UX",
    "level": "3ème Informatique",
    "instructor": "Mahmoud Bouattay",
    "rating": 4,
    "price": 40,
    "instructorAvatar": "/placeholder.svg?height=50&width=50",
  },{
    "id": "1",
    "title": "UI/UX",
    "level": "3ème Informatique",
    "instructor": "Mahmoud Bouattay",
    "rating": 4,
    "price": 40,
    "instructorAvatar": "/placeholder.svg?height=50&width=50",
  },{
    "id": "1",
    "title": "UI/UX",
    "level": "3ème Informatique",
    "instructor": "Mahmoud Bouattay",
    "rating": 4,
    "price": 40,
    "instructorAvatar": "/placeholder.svg?height=50&width=50",
  },{
    "id": "1",
    "title": "UI/UX",
    "level": "3ème Informatique",
    "instructor": "Mahmoud Bouattay",
    "rating": 4,
    "price": 40,
    "instructorAvatar": "/placeholder.svg?height=50&width=50",
  },{
    "id": "1",
    "title": "UI/UX",
    "level": "3ème Informatique",
    "instructor": "Mahmoud Bouattay",
    "rating": 4,
    "price": 40,
    "instructorAvatar": "/placeholder.svg?height=50&width=50",
  },{
    "id": "1",
    "title": "UI/UX",
    "level": "3ème Informatique",
    "instructor": "Mahmoud Bouattay",
    "rating": 4,
    "price": 40,
    "instructorAvatar": "/placeholder.svg?height=50&width=50",
  },{
    "id": "1",
    "title": "UI/UX",
    "level": "3ème Informatique",
    "instructor": "Mahmoud Bouattay",
    "rating": 4,
    "price": 40,
    "instructorAvatar": "/placeholder.svg?height=50&width=50",
  }])
  const [openPayment, setOpenPayment] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState(false)
  const [Status, setStatus] = useState(true)
  const levels = ["Débutant", "Intermédiaire", "Avancé"]
  const handelPayementBtn=()=>{
    setPaymentStatus(true)
    setOpenPayment(false)
  }
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 3, mt: 10, color: "#0a2472", fontWeight: "bold" }}>
          Développez votre créativité{" "}
          <Box component="span" sx={{ color: "#8b5cf6" }}>
            en apprenant des choses quotidiennement
          </Box>
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          <TextField
            fullWidth
            placeholder="Rechercher"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchNormal1 size={24} color="#666" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "white",
              },
            }}
          />
          <Select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            sx={{
              minWidth: 120,
              borderRadius: "12px",
              backgroundColor: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#e0e0e0",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  "& .MuiMenuItem-root": {
                    fontSize: "14px",
                    padding: "8px 16px",
                  },
                },
              },
            }}
          >
            <MenuItem value="Niveau">Niveau</MenuItem>
            {levels.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 3,
            maxHeight: "calc(100vh - 250px)",
            overflowY: "auto",
            padding: "4px",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#888",
              borderRadius: "4px",
              "&:hover": {
                background: "#555",
              },
            },
          }}
        >
          {courses.map((course, index) => (
             <CoursBox open={()=>setOpenPayment(true)} price={course.price} rating={course.rating} level={course.level} title={course.title} instructor={course.instructor} Abonnement={true}  />
          ))}
        </Box>
        <PopUpPayementStatus open={paymentStatus} onClose={() => setPaymentStatus(false)} status={Status} />
        <PaymentPopup open={openPayment} onClose={() => setOpenPayment(false)} payementBtn={handelPayementBtn} />
      </Container>
    </div>
  );
}

export default Accueil;
