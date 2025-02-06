import React from 'react'; 
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import theme from '../../../styles.js';

export default function NavigationBarMedium() {
    const menuItems = [
        { icon: <HomeIcon />, key: 'home', path: '/main-page/home' },
        { icon: <CalendarTodayIcon />, key: 'calendar', path: '/main-page/calender' },
        { icon: <SpeakerNotesIcon />, key: 'notes', path: '/main-page/call-speakers' },
        { icon: <AssignmentTurnedInIcon />, key: 'tasks', path: '/main-page/find-events' },
        { icon: <PersonIcon />, key: 'person', path: '/main-page/top-speakers' },
        { icon: <EventAvailableIcon />, key: 'event', path: '/main-page/top-events' },
        { icon: <DescriptionIcon />, key: 'description', path: '/main-page/documentation' },
        { icon: <SettingsIcon />, key: 'settings', path: '/main-page/settings' },
    ];

    return (
        <Box sx={{
            height: 'calc(100vh - 10vh)',  // Adjust based on header height
            backgroundColor: theme.palette.background.default,
            borderRight: `1px solid ${theme.palette.primary.second}`,
            padding: '2%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', 
            width: '100%',  // Let it fit within its container
        }}>
            {/* Menu Items */}
            <List sx={{ height: "80vh", display: 'flex', flexDirection: 'column' }}>
                {menuItems.map((item, index) => (
                    <Box key={item.key}>
                        <ListItem 
                            button
                            component={Link}
                            to={item.path}
                            sx={{
                                '&:hover': { backgroundColor: theme.palette.background.highlight },
                                borderRadius: "10px",
                                padding: '6px 12px',
                                justifyContent: 'center', // Centers the icon horizontally
                                transition: 'background-color 0.25s ease-in-out',
                                cursor: 'pointer',
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', display: 'flex', mx: 2 }}>
                                {React.cloneElement(item.icon, { sx: { color: theme.palette.primary.main, fontSize: '1.75rem' } })}
                            </ListItemIcon>
                        </ListItem>
                        {index < 7 && <Divider sx={{ backgroundColor: theme.palette.primary.main, mb: 1, mt: 1 }} />}
                    </Box>
                ))}
            </List>

            {/* Divider before Logout Button */}
            <Divider sx={{ backgroundColor: theme.palette.primary.main, mb: 1, mt: 1 }} />

            {/* Logout Button */}
            <ListItem 
                button 
                sx={{ 
                    '&:hover': { backgroundColor: theme.palette.background.highlight }, 
                    borderRadius: "10px", 
                    padding: '6px 12px', 
                    justifyContent: 'center', 
                    transition: 'background-color 0.25s ease-in-out',
                    cursor: 'pointer',
                }}
            >
                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', display: 'flex' }}>
                    <ExitToAppIcon sx={{ color: theme.palette.primary.main, fontSize: '1.75rem' }} />
                </ListItemIcon>
            </ListItem>
        </Box>
    );
}