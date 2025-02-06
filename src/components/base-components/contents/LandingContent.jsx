import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import theme from '../../../styles.js';
import LandingPhotoOne from '../../../assets/landing-page-assets/Group 10.svg';
import InstructionOne from '../../../assets/landing-page-assets/instruction-first.svg';
import InstructionTwo from '../../../assets/landing-page-assets/instruction-second.svg';
import InstructionThree from '../../../assets/landing-page-assets/instruction-third.svg';


export default function LandingContent() {
    return(
        <Box>
            {/* Landing page */}
            <Grid container spacing={2} sx={{marginTop: "10vh"}}>
                <Grid item size={{ xs: 12, lg: 12}} sx={{height: {lg:"50vh", xs:"25vh"}, marginBottom: "10vh"}}>
                    <Card sx={{
                        bgcolor: theme.palette.background.default, 
                        border: "none", 
                        boxShadow: "none"
                    }}>
                    <CardMedia
                        component="img" // Important to specify it's an image
                        image={LandingPhotoOne} // The image source
                        alt="Image of how the website works" // Accessibility description
                        sx={{ height: "100%", objectFit: "cover", border: "none" }} // Ensure the image fits the card
                    />
                    </Card>
                </Grid>
                <Grid item size={{ xs: 12, lg: 4}} sx={{height: "25vh"}}>
                    <Card sx={{
                        bgcolor: theme.palette.background.default, 
                        height: "100%",  
                        boxShadow: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 2%",
                        }}>
                        <CardMedia
                            component="img"
                            image={InstructionOne}
                            alt="First image of how the website works." 
                            sx={{ height: "7.5vh", width: "7.5vh", border: "none" }}
                        />
                        <CardContent>
                            <Typography variant="subtitle2">
                                Browse through our curated list of events and choose the ones that interest you.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item size={{ xs: 12, lg: 4}} sx={{height: "25vh"}}>
                    <Card sx={{
                        bgcolor: theme.palette.background.default,
                        height: "100%", 
                        boxShadow: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 2%",
                        }}>
                        <CardMedia 
                            component="img"
                            image={InstructionTwo}
                            alt="Second image of how the website works."
                            sx={{ height: "7.5vh", width: "7.5vh", border: "none" }}
                        />
                        <CardContent>
                            <Typography variant="subtitle2">
                                EventFinders takes it from here, automatically reaching out to event organizers to see if they&apos;re interested in having you as a speaker.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item size={{ xs: 12, lg: 4}} sx={{height: "25vh"}}>
                    <Card sx={{
                        bgcolor: theme.palette.background.default,
                        height: "100%", 
                        boxShadow: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 2%",
                        }}>
                        <CardMedia
                            component="img"
                            image={InstructionThree}
                            alt="Third image of how the website works."
                            sx={{ height: "7.5vh", width: "7.5vh" }}
                        />
                        <CardContent>
                            <Typography variant="subtitle2">
                                Once everything is confirmed, we bring you the details, your speaking time and date so you&apos;re all set to take the stage.
                            </Typography>
                        </CardContent>                
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};