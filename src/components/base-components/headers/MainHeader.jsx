import {
    Box,
    Typography
} from '@mui/material';
import theme from '../../../styles.js';

export default function MainHeader() {
    return(
        <Box position="static" sx={{ background: theme.palette.primary.main, height: "10vh", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Typography color='text.secondary' variant='h4' component={"h1"} sx={{
                fontWeight: "700", 
                width: "70vw", 
                fontSize: "2.5rem",  // Smaller font size compared to the original
                paddingLeft: "1%",
            }}>
                EventFinders
            </Typography>
        </Box>
    )
};