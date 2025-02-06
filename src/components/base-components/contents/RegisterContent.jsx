import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    IconButton,
    Link
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function RegisterContent() {
    return (
        <Grid container sx={{ justifyContent: "center", height: "85vh"}}>
            <Grid xs={12} md={12} lg={8}>
                <Paper elevation={3} sx={{
                    height: "75vh", 
                    width: {lg: "60vw", md: "100vw", sm: "100vw", xs: "100vw"}, 
                    marginTop: "5vh", 
                    padding: "2%",
                    marginBottom: "2%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Typography 
                        color='text.primary' 
                        variant='h3' 
                        sx={{ 
                            mb: 3,
                            fontSize: 'clamp(1rem, 2vw + 0.75rem, 2.5rem)'  
                        }}
                    >
                        Register to create your account!
                    </Typography>
                    {/* Registration Form */}
                    <Box component="form" sx={{ width: '100%', maxWidth: '400px', mb: 2 }}>
                        <TextField
                            fullWidth
                            label="Full Name"
                            margin="normal"
                            variant="outlined"
                            placeholder="Enter your full name"
                            sx={{
                                '& .MuiInputBase-input::placeholder': {
                                    color: '#343131', // Placeholder color
                                    opacity: 1,
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#343131', // Label color
                                },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            margin="normal"
                            variant="outlined"
                            placeholder="Enter your email"
                            sx={{
                                '& .MuiInputBase-input::placeholder': {
                                    color: '#343131', // Placeholder color
                                    opacity: 1,
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#343131', // Label color
                                },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            placeholder="Enter your password"
                            sx={{
                                '& .MuiInputBase-input::placeholder': {
                                    color: '#343131', // Placeholder color
                                    opacity: 1,
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#343131', // Label color
                                },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            placeholder="Confirm your password"
                            sx={{
                                '& .MuiInputBase-input::placeholder': {
                                    color: '#343131', // Placeholder color
                                    opacity: 1,
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#343131', // Label color
                                },
                            }}
                        />
                        <Button 
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            sx={{ mt: 2 }}
                            component={RouterLink}
                            to="/main-page/home"
                        >
                            Register
                        </Button>
                    </Box>

                    <Typography color='text.primary' variant='body2' sx={{ mb: 1 }}>
                        Already have an account?{' '}
                        <Link href="/sign-in" sx={{ color: 'primary.main', textDecoration: 'underline' }}>
                            Login here
                        </Link>
                    </Typography>

                    {/* Social Register */}
                    <Typography color='text.primary' variant='body2' sx={{ mb: 1 }}>
                        Or register with
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton color="primary">
                            <GoogleIcon fontSize="large" />
                        </IconButton>
                        <IconButton color="primary">
                            <FacebookIcon fontSize="large" />
                        </IconButton>
                        <IconButton color="primary">
                            <TwitterIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}