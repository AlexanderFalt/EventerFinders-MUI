import { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, Link } from '@mui/material';
import { eventsList } from '../../../listOfEvents.js'; // Replace with your correct path
import theme from '../../../styles.js';

export default function EventsLargeContent() {
  // State to keep track of the "Pending" button
  const [contactStatus, setContactStatus] = useState({});
  const [showMore, setShowMore] = useState({}); // Track which event's "View More" has been clicked

  const handleContactClick = (eventId) => {
    setContactStatus((prevState) => ({
      ...prevState,
      [eventId]: 'pending'
    }));
  };

  const handleViewMoreClick = (eventId) => {
    setShowMore((prevState) => ({
      ...prevState,
      [eventId]: !prevState[eventId] // Toggle the view more state for the event
    }));
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
        overflowY: 'scroll',
        gap: '20px'  // Add space between cards
      }}
    >
      {/* Loop through events */}
      {eventsList.map((event) => (
        <Card 
          key={event.eventId} 
          sx={{ 
            width: '100%', 
            maxWidth: '1000px',  
            minHeight: '400px',  // Set a minimum height for the cards
            display: 'flex',  // Ensure flexbox layout
            flexDirection: 'column',  // Column layout inside card
            justifyContent: 'space-between',  // Distribute content evenly
            padding: '1.5%',
            backgroundColor: theme.palette.background.paper,
            marginBottom: '20px' // Add space between cards
          }}
        >
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
              {event.eventName}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {event.eventDate}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {event.eventLocation}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {event.eventEmail}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {event.isPayed ? `Paid event` : 'Unpaid event'}
            </Typography>

            {/* Contact Button */}
            <Button 
                variant="outlined" 
            sx={{ 
                marginTop: '1rem',
                '&:hover': {
                    border: '1px solid transparent', // Remove border on hover
                }
            }}
            onClick={() => handleContactClick(event.eventId)}
            disabled={contactStatus[event.eventId] === 'pending'}
            >
                {contactStatus[event.eventId] === 'pending' ? 'Pending' : 'Contact'}
            </Button>

            {/* View More Link */}
            <Link 
              sx={{ 
                display: 'block', 
                marginTop: '1rem', 
                textDecoration: 'underline', 
                cursor: 'pointer' 
              }}
              onClick={() => handleViewMoreClick(event.eventId)}
            >
              View More
            </Link>

            <Box 
              sx={{
                marginTop: '1rem',
                width: '100%', 
                height: showMore[event.eventId] ? '100px' : '0px',  // Height animation
                backgroundColor: '#f0f0f0',  // Set background color for square
                overflow: 'hidden',  // Ensure smooth transition
                transition: 'height 0.5s ease-in-out',  // Add smooth transition effect
                borderRadius: '4px'  // Optional: make the square look nicer with rounded corners
              }}
            >
              {showMore[event.eventId] && (
                <Typography sx={{ padding: '1rem' }}>
                  Here is more information about the event!
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}