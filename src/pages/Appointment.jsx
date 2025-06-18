import React from 'react';
import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import './Appointment.css';
import { useNavigate } from 'react-router-dom';


const Appointment = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
  

      <Box className="appointment-wrapper">
        <Paper elevation={4} className="appointment-container">
          <Box className="appointment-header">
            <Typography variant="h6">Add Appointment</Typography>
            <Button sx={{ color: 'white' }} onClick={handleClose}>
              Close ✕
            </Button>
          </Box>

          <Box className="appointment-body">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <InputLabel className="input-label">Type of Pet</InputLabel>
                <Select fullWidth defaultValue="" className="tall-select">
                  <MenuItem value="">Dog</MenuItem>
                  <MenuItem value="">Cat</MenuItem>
                  <MenuItem value="">Bird</MenuItem>
                  <MenuItem value="">Fish</MenuItem>
                  <MenuItem value="">Hamster</MenuItem>
                  <MenuItem value="">Guinea Pig</MenuItem>
                  <MenuItem value="">Rat</MenuItem>
                  <MenuItem value="">Rabbit</MenuItem>
                </Select>

                <Box mt={3}>
                  <InputLabel className="input-label">For when</InputLabel>
                  <TextField type="date" fullWidth />
                </Box>

                <Box mt={3}>
                  <InputLabel className="input-label">Service</InputLabel>
                  <Select fullWidth defaultValue="">
                    <MenuItem value="">Grooming</MenuItem>
                    <MenuItem value="">Vaccination</MenuItem>
                    <MenuItem value="">Check-up</MenuItem>
                  </Select>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel className="input-label">Location</InputLabel>
                <Select fullWidth defaultValue="" className="tall-select">
                  <MenuItem value="">Choose a Location</MenuItem>
                  <MenuItem value="manila">Manila</MenuItem>
                  <MenuItem value="cebu">Cebu</MenuItem>
                  <MenuItem value="davao">Davao</MenuItem>
                </Select>

                <Box mt={3}>
                  <InputLabel className="input-label">Time</InputLabel>
                  <Select fullWidth defaultValue="">
                    <MenuItem value="10AM">10AM - 12PM</MenuItem>
                    <MenuItem value="1PM">1PM - 2PM</MenuItem>
                    <MenuItem value="2PM">2PM - 4PM</MenuItem>
                    <MenuItem value="4PM">4PM - 6PM</MenuItem>
                  </Select>
                </Box>

                <Box mt={3}>
                  <InputLabel className="input-label">Full Name</InputLabel>
                  <TextField type="text" fullWidth label="Full Name" variant="outlined" />
                </Box>
              </Grid>
            </Grid>

            <Box className="appointment-footer">
              <Button variant="outlined" color="inherit">Cancel</Button>
              <Button variant="contained" color="success">Confirm</Button>
            </Box>
          </Box>
        </Paper>
      </Box>

  );
};

export default Appointment;
