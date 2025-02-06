import {
    Box,
    Typography
} from '@mui/material';
import theme from '../../../styles.js';

export default function SigninHeader() {
    return(
        <Box position="static" sx={{ background: theme.palette.primary.main, height: "15vh", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Typography color='text.secondary' variant='h2' component={"h1"} sx={{
                fontWeight: "700", 
                width: "70vw", 
                fontSize: "clamp(0.8rem, 5.5vw, 4.5rem)",
                paddingLeft: "2%",
            }}>
                EventFinders
            </Typography>
        </Box>
    )
}