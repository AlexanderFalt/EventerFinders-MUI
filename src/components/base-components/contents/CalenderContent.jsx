import { useState, useEffect } from 'react';
import { Button, Typography, Box, ToggleButton, ToggleButtonGroup, Card, CardContent, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // For the event dot

// Event data with eventStartTime property
const events = [
    {
        eventId: 0,
        eventName: "IMEX America 2024",
        eventDate: "Oct 8, 2024",
        eventLocation: "Las Vegas, USA",
        isPayed: true,
        eventEmail: "info@imexexhibitions.com",
        eventStartTime: "14:00"
    },
    {
        eventId: 1,
        eventName: "Web Summit 2024",
        eventDate: "Nov 4, 2024",
        eventLocation: "Lisbon, Portugal",
        isPayed: true,
        eventEmail: "info@websummit.com",
        eventStartTime: "10:00"
    },
    {
        eventId: 2,
        eventName: "ICCO Global Summit 2024",
        eventDate: "Oct 10, 2024",
        eventLocation: "Istanbul, Turkey",
        isPayed: true,
        eventEmail: "info@iccosummit.org",
        eventStartTime: "11:00"
    },
    {
        eventId: 3,
        eventName: "AGU24 Annual Meeting",
        eventDate: "Dec 9, 2024",
        eventLocation: "Washington, D.C., USA",
        isPayed: false,
        eventEmail: "meetinginfo@agu.org",
        eventStartTime: "09:30"
    },
    {
        eventId: 4,
        eventName: "World Business Forum 2024",
        eventDate: "Nov 13, 2024",
        eventLocation: "Sydney, Australia",
        isPayed: true,
        eventEmail: "info@wbf.com",
        eventStartTime: "15:30"
    }
];

function DailyCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState('weekly'); // Default to weekly view
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); // Detect if screen is lg or larger


    useEffect(() => {
        if (!isLargeScreen && view === 'monthly') {
            setView('weekly');
        }
    }, [isLargeScreen, view]);

    // Calculate the start of the current week
    const getStartOfWeek = (date) => {
        const startDate = new Date(date);
        const day = startDate.getDay();
        const diff = startDate.getDate() - day + (day === 0 ? -6 : 1);
        startDate.setDate(diff);
        return startDate;
    };

    const getStartOfMonth = (date) => {
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
        return startDate;
    };

    const startOfWeek = getStartOfWeek(currentDate);
    const startOfMonth = getStartOfMonth(currentDate);

    const handlePreviousWeek = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setDate(newDate.getDate() - 7);
            return newDate;
        });
    };

    const handleNextWeek = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setDate(newDate.getDate() + 7);
            return newDate;
        });
    };

    const handlePreviousMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
            return newDate;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
            return newDate;
        });
    };

    const getEventForDay = (date) => {
        return events.find(event => {
            const eventDate = new Date(event.eventDate);
            return (
                eventDate.getFullYear() === date.getFullYear() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getDate() === date.getDate()
            );
        });
    };

    const renderWeek = () => {
        const days = [];
        const current = new Date(startOfWeek);
    
        for (let i = 0; i < 7; i++) {
            const event = getEventForDay(current);
            const dayName = current.toLocaleDateString('en-US', { weekday: 'long' });
            const date = current.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            const eventName = event ? `${event.eventName} in ${event.eventLocation}` : "No Event";
            const eventStartTime = event ? event.eventStartTime : "-";
            days.push(
                <Grid item size={{xs:12}} key={i}>
                    <Card 
                        sx={{ 
                            height: '100%', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                        }}
                    >
                        <CardContent 
                            sx={{ 
                                textAlign: 'center', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            {/* If event exists, show a dot next to the day name */}
                            <Box display="flex" alignItems="center" gap={1}>
                                <Typography variant="h6" color="text.primary">
                                    {dayName}
                                </Typography>
                                {event && <FiberManualRecordIcon color="secondary" fontSize="small" />} {/* Event marker */}
                            </Box>
                            <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'normal' }}>
                                {date}
                            </Typography>
                            <Typography variant="body1" color="text.primary" sx={{ marginTop: 1 }}>
                                {eventName}
                            </Typography>
                            <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'normal' }}>
                                Starts at: {eventStartTime}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            );
    
            current.setDate(current.getDate() + 1);
        }
    
        return days;
    };

    const renderMonth = () => {
        const days = [];
        const current = new Date(startOfMonth);
        const month = current.getMonth();
    
        // Add all the days of the month
        while (current.getMonth() === month) {
            const event = getEventForDay(current);
            const dayNumber = current.getDate();
            const eventName = event ? `${event.eventName}` : "No Event";
            const currentMonth = current.toLocaleDateString('en-US', { month: 'short' }); // Get month in short format (e.g., "Oct")
    
            days.push(
                <Grid item xs={12} key={current}>
                    <Card 
                        sx={{ 
                            height: '10vh', 
                            width: "9vw",
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                        }}
                    >
                        <CardContent 
                            sx={{ 
                                textAlign: 'center', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            {/* Day number, month, and event dot in the same row */}
                            <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                                <Typography variant="h6" color="text.primary" sx={{ fontSize: "1.25rem" }}>
                                    {dayNumber} {currentMonth} {/* Day number and month */}
                                </Typography>
                                {event && <FiberManualRecordIcon color="secondary" fontSize="small" />} {/* Event dot in the same row */}
                            </Box>
    
                            <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'normal',  height: "4.5vh" }}>
                                {eventName}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            );
            
            current.setDate(current.getDate() + 1);
        }
    
        return days;
    };

    const handleViewChange = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    };

    
    return (
        <Box sx={{ padding: 2, maxWidth: '1200px', margin: '0 auto', overflowX: 'hidden' }}>
            {/* Container for the buttons on the same line */}
            <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 3 }}>
                {/* Week/Month Navigation */}
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: "100%" }}>
                    {/* Previous Week/Month Button */}
                    <Button
                        onClick={view === 'weekly' ? handlePreviousWeek : handlePreviousMonth}
                        startIcon={<ArrowBackIosIcon />}
                        sx={{
                            width: '100%',
                            border: 'none',
                            color: 'primary.main',
                        }}
                    >
                        Previous
                    </Button>
    
                    {/* Next Week/Month Button */}
                    <Button
                        onClick={view === 'weekly' ? handleNextWeek : handleNextMonth}
                        endIcon={<ArrowForwardIosIcon />}
                        sx={{
                            width: '100%',
                            marginLeft: "2%",
                            border: 'none',
                            color: 'primary.main',
                        }}
                    >
                        Next
                    </Button>
    
                    {/* Toggle Button Group, show only on lg and larger */}
                    {view === 'weekly' || view === 'monthly' ? (
                        <ToggleButtonGroup
                            value={view}
                            exclusive
                            onChange={handleViewChange}
                            aria-label="view toggle"
                            sx={{ display: { xs: 'none', md: 'none', lg: 'inline-flex' }, marginLeft: "2%" }} // Show only on lg+
                        >
                            <ToggleButton value="weekly" aria-label="weekly view">
                                Weekly
                            </ToggleButton>
                            <ToggleButton value="monthly" aria-label="monthly view">
                                Monthly
                            </ToggleButton>
                        </ToggleButtonGroup>
                    ) : null}
                </Grid>
            </Grid>
    
            {/* Weekly Calendar Content */}
            {view === 'weekly' && (
                <Grid container spacing={2} sx={{ marginTop: 3 }}>
                    {renderWeek()}
                </Grid>
            )}
    
            {/* Monthly Calendar Content (only rendered on large screens and above) */}
            {view === 'monthly' && (
                <Grid container spacing={2} sx={{ marginTop: 3, display: { xs: 'none', md: 'none', lg: 'flex' } }}>
                    {renderMonth()}
                </Grid>
            )}
        </Box>
    );
}

export default DailyCalendar;