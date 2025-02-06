import { 
    Box, 
    Button,
    Typography,
} from '@mui/material';
import theme from '../../../styles.js';
import { Link } from 'react-router-dom';

export default function InitalHeader() {
  return (
    <>
        <Box position="static" sx={{ background: theme.palette.primary.main, height: "15vh", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Typography color='text.secondary' variant='h2' component={"h1"} sx={{
                fontWeight: "700", 
                width: "70vw", 
                marginLeft: "2%",
                fontSize: "clamp(0.8rem, 5.5vw, 4.5rem)",
            }}>
                EventFinders
            </Typography>
            <Button 
                variant='outline' 
                component={Link}
                to="/sign-in"
                sx={{
                    width: "10vw", 
                    bgcolor: "var(--White)", 
                    marginLeft: "1vw", 
                    height: "5vh",
                    fontSize: "clamp(0.5rem, 1.2vw, 1.15rem)",
            }}>
                Sign in
            </Button>
            <Button 
                variant='outline' 
                component={Link}
                to="/register"
                sx={{
                    width: "10vw", 
                    bgcolor: "var(--White)", 
                    marginLeft: "1vw", 
                    height: "5vh",
                    fontSize: "clamp(0.5rem, 1.2vw, 1.15rem)",
            }}>
                Register
            </Button>
        </Box>
        <Box position="static" sx={{ 
            background: "transparent", 
            height: "25vh", 
            display: "flex", 
            flexDirection: "row" }}
            >
            <Box
                sx={{
                height: "100%", 
                flex: "1", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                borderRadius: "0px", 
                background: theme.palette.primary.second,
                position: "relative",
                overflow: "hidden",
                transition: "flex 0.3s ease", 
                "&:hover": {
                    flex: "4", 
                },
                "&:hover .hover-typography": {
                    fontSize: "clamp(2rem, 5vw, 4rem)",  // Clamp gör fonten responsiv
                }
                }}
            >
                <Typography 
                variant='h3' 
                className="hover-typography"  
                sx={{ 
                    color: "#F0F0F0", 
                    fontWeight: "700", 
                    transition: "font-size 0.3s ease", 
                    fontSize: "clamp(1rem, 2vw, 3rem)"  // Clamp gör fonten responsiv
                }}
                >
                    Speaker&apos;s
                </Typography>
            </Box>

            <Box 
                sx={{
                height: "100%", 
                flex: "1", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                borderRadius: "0px", 
                background: theme.palette.secondary.main,
                position: "relative",
                overflow: "hidden", 
                transition: "flex 0.3s ease", 
                "&:hover": {
                    flex: "4", 
                },
                "&:hover .hover-typography": {
                    fontSize: "clamp(2rem, 5vw, 4rem)",  // Clamp gör fonten responsiv
                }
                }}
            >
                <Typography 
                variant='h3' 
                className="hover-typography"  
                sx={{ 
                    color: "#F0F0F0", 
                    fontWeight: "700", 
                    transition: "font-size 0.3s ease", 
                    fontSize: "clamp(1rem, 2vw, 3rem)"  // Clamp gör fonten responsiv
                }}
                >
                    Event Manager&apos;s
                </Typography>
            </Box>            
        </Box>
    </>
  );
}