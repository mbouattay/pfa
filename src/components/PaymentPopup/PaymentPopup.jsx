import { Dialog, DialogTitle, DialogContent, TextField, Button, IconButton, Box, Typography } from "@mui/material"
import { CloseCircle, Card } from "iconsax-react"

export default function PaymentPopup({ open, onClose,payementBtn }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "24px",
          maxWidth: "500px",
          width: "100%",
        
        },
      }}
    >
      <DialogTitle sx={{ p: 3, pb: 0 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                backgroundColor: "#f3f0ff",
                borderRadius: "12px",
                p: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card size={32} variant="Bold" color="#8b5cf6" />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Paiement par carte de crédit
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseCircle size={24} color="#666" />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField fullWidth label="Numéro de carte" variant="outlined" sx={{ mt: 1 }} />
          <TextField fullWidth label="Nom et prénom" variant="outlined" />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField fullWidth label="Date d'expiration" variant="outlined" placeholder="MM/AA" />
            <TextField fullWidth label="CVV" variant="outlined" type="password" />
          </Box>
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={payementBtn}
            sx={{
              mt: 2,
              backgroundColor: "#8b5cf6",
              borderRadius: "8px",
              textTransform: "none",
              py: 1.5,
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#7c3aed",
              },
            }}
          >
            Payer 50 TND
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

