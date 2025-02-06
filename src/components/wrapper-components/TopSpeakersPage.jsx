import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MainHeader from '../base-components/headers/MainHeader.jsx';
import TopSpeakersContent from '../base-components/contents/TopSpeakersContent.jsx';
import NavigationBarLarge from '../base-components/navigations/NavigationBarLarge.jsx';
import NavigationBarMedium from '../base-components/navigations/NavigationBarMedium.jsx';
import Box from '@mui/material/Box';

export default function EventsPage() {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('lg'));  // Trigger for medium screens

    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100vh', 
            width: '100vw', 
            overflow: 'hidden', 
            fontFamily: theme.typography.fontFamily 
        }}>
            {/* Main Header */}
            <Box sx={{ flexShrink: 0 }}>
                <MainHeader />
            </Box>

            {/* Main Content Area */}
            <Box sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'row',  // Keep row direction for all screens
                height: '100%', 
                overflow: 'hidden'
            }}>
                {/* Navigation Bar */}
                <Box sx={{ 
                    flexShrink: 0, 
                    width: '15vw',  // Always fixed width, even at small screens
                    height: '100%'     // Full height for navigation bar
                }}>
                    {isMediumScreen ? <NavigationBarMedium /> : <NavigationBarLarge />}
                </Box>

                {/* Events Content */}
                <Box sx={{ 
                    flexGrow: 1, 
                    overflowY: 'auto',   // Allow vertical scrolling
                    overflowX: 'hidden', // Avoid horizontal scrolling
                    height: '100%'       // Full height for content
                }}>
                    <TopSpeakersContent/>                   
                </Box>
            </Box>
        </Box>
    );
}