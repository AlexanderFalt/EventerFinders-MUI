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
import LoginIcon from '@mui/icons-material/Login';
import SendIcon from '@mui/icons-material/Send';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Signincontent() {
    return (
        <Grid container sx={{ justifyContent: "center", height: "85vh"}}>
            <Grid lg={2} sx={{
                height: "70vh",
                width: "20vw",
                marginTop: "5vh", 
                padding: "2%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                display: { sx: "none", sm: "none", md: "none", lg: "flex" } 
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "23%",
                    width: "100%",
                    alignItems: "center",
                }}>
                    <LoginIcon fontSize='large' sx={{ color: "var(--MiddleDarkBlue)" }} />
                    <Typography variant='body1' sx={{ ml: 2 }}>
                        Login or create an account to view the events.
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "23%",
                    width: "100%",
                    alignItems: "center",
                    mt: 2,
                }}>
                    <SendIcon fontSize='large' sx={{ color: "var(--MiddleDarkBlue)" }} />
                    <Typography variant='body1' sx={{ ml: 2 }}>
                        Stay updated with event notifications.
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "23%",
                    width: "100%",
                    alignItems: "center",
                    mt: 2,
                }}>
                    <RecordVoiceOverIcon fontSize='large' sx={{ color: "var(--MiddleDarkBlue)" }} />
                    <Typography variant='body1' sx={{ ml: 2 }}>
                        Connect with event organizers.
                    </Typography>
                </Box>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
                <Paper elevation={3} sx={{
                    height: "70vh", 
                    width: { sx: "100vw", sm: "100vw", md: "70vw", lg: "70vw" },
                    marginTop: "5vh", 
                    padding: "2%",
                    marginBottom: "2%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Typography color='text.primary' variant='h3' sx={{ mb: 3 }}>
                        Sign in to start applying to events!
                    </Typography>
                    {/* Login Form */}
                    <Box component="form" sx={{ width: '100%', maxWidth: '600px', mb: 2 }}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            margin="normal"
                            variant="outlined"
                            placeholder="Enter your email"
                            sx={{
                                '& .MuiInputBase-input::placeholder': {
                                    color: '#343131',  // Set placeholder color
                                    opacity: 1,        // Ensures full opacity for the placeholder
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#343131',  // Set label color
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
                                    color: '#343131',  // Set placeholder color
                                    opacity: 1,        // Ensures full opacity for the placeholder
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#343131',  // Set label color
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
                            Sign in
                        </Button>
                    </Box>
                    <Typography color='text.primary' variant='body2' sx={{ mb: 1 }}>
                        Do you not have an account?{' '}
                        <Link href="/register" sx={{ color: 'primary.main', textDecoration: 'underline' }}>
                            Create an account here
                        </Link>
                    </Typography>

                     <Typography variant='body2' sx={{ mb: 1 }}>
                        Or sign in with
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