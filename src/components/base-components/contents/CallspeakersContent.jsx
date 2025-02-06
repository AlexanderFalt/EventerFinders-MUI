import { 
  Box, 
  TextField, 
  Button, 
  Typography,
  Paper 
} from '@mui/material';
import { useState } from 'react';
import theme from '../../../styles.js';

export default function CallSpeakersForm() {
  const [formData, setFormData] = useState({
    eventName: '',
    topic: '',
    country: '',
    city: '',
    startDate: '',
    endDate: '',
    budget: '',
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log("Form submitted with:", formData);
    // Add your form submission logic here (e.g., API call to match a speaker)
  };

  return (
    <Box 
      sx={{ 
        height: "100%", 
        width: "100%", 
        padding: '2%', 
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        gap: 3,
      }}
    >

     
     {!formSubmitted ? (
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
          <Typography variant="h4" color="text.primary" sx={{ marginBottom: '0.25rem' }}>
            Call for a Speaker
          </Typography>

          {/* Event name */}
          <TextField
            label="Name of the event"
            name="eventName"
            color='text.primary'
            value={formData.eventName}
            onChange={handleChange}
            fullWidth
            required
            sx={{
                '& .MuiInputBase-input::placeholder': {
                    color: '#343131',  // Set placeholder color
                    opacity: 1,        // Ensures full opacity for the placeholder
                },
                marginBottom: '1rem',
                '& .MuiInputLabel-root': {
                    color: '#343131',  // Set label color
                },
            }}
          />
          
          {/* Topic */}
          <TextField
            label="Topic of Interest"
            name="topic"
            color='text.primary'
            value={formData.topic}
            onChange={handleChange}
            fullWidth
            required
            sx={{
                '& .MuiInputBase-input::placeholder': {
                    color: '#343131',  // Set placeholder color
                    opacity: 1,        // Ensures full opacity for the placeholder
                },
                marginBottom: '1rem',
                '& .MuiInputLabel-root': {
                    color: '#343131',  // Set label color
                },
            }}
          />

          {/* Country */}
          <TextField
            label="Country where event is located"
            name="country"
            color='text.primary'
            value={formData.country}
            onChange={handleChange}
            fullWidth
            required
            sx={{
                '& .MuiInputBase-input::placeholder': {
                    color: '#343131',  // Set placeholder color
                    opacity: 1,        // Ensures full opacity for the placeholder
                },
                marginBottom: '1rem',
                '& .MuiInputLabel-root': {
                    color: '#343131',  // Set label color
                },
            }}
          />

          {/* City */}
          <TextField
            label="City where event is located"
            name="city"
            color='text.primary'
            value={formData.city}
            onChange={handleChange}
            fullWidth
            required
            sx={{
                '& .MuiInputBase-input::placeholder': {
                    color: '#343131',  // Set placeholder color
                    opacity: 1,        // Ensures full opacity for the placeholder
                },
                marginBottom: '1rem',
                '& .MuiInputLabel-root': {
                    color: '#343131',  // Set label color
                },
            }}
          />

          {/* Start Date */}
          <TextField
            label="Start of event"
            name="startDate"
            type="date"
            color='text.primary'
            value={formData.startDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            sx={{
                '& .MuiInputBase-input::placeholder': {
                    color: '#343131',  // Set placeholder color
                    opacity: 1,        // Ensures full opacity for the placeholder
                },
                marginBottom: '1rem',
                '& .MuiInputLabel-root': {
                    color: '#343131',  // Set label color
                },
            }}
          />

          {/* End Date */}
          <TextField
            label="End of event"
            name="endDate"
            type="date"
            color='text.primary'
            value={formData.endDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            sx={{
                '& .MuiInputBase-input::placeholder': {
                    color: '#343131',  // Set placeholder color
                    opacity: 1,        // Ensures full opacity for the placeholder
                },
                marginBottom: '1rem',
                '& .MuiInputLabel-root': {
                    color: '#343131',  // Set label color
                },
            }}
          />

          {/* Budget */}
          <TextField
            label="Budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            fullWidth
            required
            color='text.primary'
            sx={{
                '& .MuiInputBase-input::placeholder': {
                    color: '#343131',  // Set placeholder color
                    opacity: 1,        // Ensures full opacity for the placeholder
                },
                marginBottom: '1rem',
                '& .MuiInputLabel-root': {
                    color: '#343131',  // Set label color
                },
            }}
          />

          {/* Additional Notes */}
          <TextField
            label="Additional Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            color='text.primary'
            sx={{
                '& .MuiInputBase-input::placeholder': {
                    color: '#343131',  // Set placeholder color
                    opacity: 1,        // Ensures full opacity for the placeholder
                },
                marginBottom: '1rem',
                '& .MuiInputLabel-root': {
                    color: '#343131',  // Set label color
                },
            }}
          />

          {/* Submit Button */}
          <Button 
            variant="contained" 
            type="submit"
            fullWidth
          >
            Submit Request
          </Button>
        </form>
      ) : (
        <Paper elevation={3} 
          sx={{
            width: "100%",
            maxWidth: "800px",
            height: "75%",
            padding: 5,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center"
          }}>
          <Typography variant="h5" color="text.primary" >
            Thank you for using our service!
          </Typography>

          <Typography variant="body1" color="text.primary" sx={{marginBottom: '2vh'}}>
            Your event needs to be verified by our staff. Once verified, it will be added.
          </Typography>

          <Typography variant="body2" color="text.primary" sx={{marginBottom: '2vh'}}>
            The event you submitted is the following:
          </Typography>

          <Box sx={{width: '100%', display: 'grid', gap: 2, gridTemplateColumns: '1fr 1fr'}}>
            <Typography variant="body2"><strong>Event Name:</strong> {formData.eventName}</Typography>
            <Typography variant="body2"><strong>Topic:</strong> {formData.topic}</Typography>
            <Typography variant="body2"><strong>Country:</strong> {formData.country}</Typography>
            <Typography variant="body2"><strong>City:</strong> {formData.city}</Typography>
            <Typography variant="body2"><strong>Start Date:</strong> {formData.startDate}</Typography>
            <Typography variant="body2"><strong>End Date:</strong> {formData.endDate}</Typography>
            <Typography variant="body2"><strong>Budget:</strong> {formData.budget}</Typography>
            <Typography variant="body2"><strong>Notes:</strong> {formData.notes || 'No additional notes provided'}</Typography>
          </Box>

          <Button 
            variant="contained" 
            onClick={() => setFormSubmitted(false)} 
            sx={{marginTop: '2vh'}}>
            Submit Another Request
          </Button>
        </Paper>
      )}
    </Box>
  );
}