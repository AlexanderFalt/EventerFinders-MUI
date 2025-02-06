import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import theme from '../../../styles.js';

export default function NavigationBarLarge() {
    const menuItems = [
        { icon: <HomeIcon />, label: 'Home', path: "/main-page/home" },
        { icon: <CalendarTodayIcon />, label: 'Calendar', path: "/main-page/calender" },
        { icon: <SpeakerNotesIcon />, label: 'Call Speakers', path: "/main-page/call-speakers" },
        { icon: <AssignmentTurnedInIcon />, label: 'Find events', path: "/main-page/find-events" },
        { icon: <PersonIcon />, label: 'Speakers leaderboard', path: "/main-page/top-speakers" },
        { icon: <EventAvailableIcon />, label: 'Events leaderboard', path: "/main-page/top-events" },
        { icon: <DescriptionIcon />, label: 'Docs', path: "/main-page/documentation" },
        { icon: <SettingsIcon />, label: 'Settings', path: "/main-page/settings" }
    ];

    return (
        <Box sx={{
            height: '90vh',  // Adjust based on header height
            backgroundColor: theme.palette.background.default,
            borderRight: "1px solid var(--MiddleDarkBlue)",
            color: theme.palette.text.primary,
            padding: '2%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <List sx={{ height: "80vh" }}>
                {menuItems.map((item, index) => (
                    <Box key={item.label}>
                        <ListItem 
                            button
                            component={Link}  // Use Link component from react-router-dom
                            to={item.path}     // Set the route path
                            sx={{
                                '&:hover': { backgroundColor: theme.palette.background.highlight, color: theme.palette.text.secondary },
                                borderRadius: "10px",
                                padding: '6px 16px',
                                cursor: 'pointer',  // Pointer added
                                transition: 'background-color 0.25s ease-in-out, color 0.25s ease-in-out'
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: '32px' }}>
                                {React.cloneElement(item.icon, { sx: { color: theme.palette.primary.main, fontSize: '1.2rem' } })}
                            </ListItemIcon>
                            <ListItemText primary={item.label} sx={{ color: theme.palette.text.primary, fontSize: '0.875rem' }} />
                        </ListItem>
                        {index < menuItems.length - 1 && (
                            <Divider sx={{ backgroundColor: theme.palette.primary.main, mb: 1, mt: 1 }} />
                        )}
                    </Box>
                ))}
            </List>

            <Divider sx={{ backgroundColor: theme.palette.primary.main, mb: "0.05%" }} />

            {/* Logout Button */}
            <ListItem 
                button 
                sx={{
                    '&:hover': { backgroundColor: theme.palette.background.highlight, color: theme.palette.text.secondary },
                    borderRadius: "10px",
                    padding: '6px 16px',
                    cursor: 'pointer',  // Pointer added
                    transition: 'background-color 0.25s ease-in-out, color 0.25s ease-in-out'
                }}
            >
                <ListItemIcon sx={{ minWidth: '32px' }}>
                    <ExitToAppIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ color: theme.palette.text.primary, fontSize: '0.875rem' }} />
            </ListItem>
        </Box>
    );
}