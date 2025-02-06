import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import theme from '../../../styles.js';

export default function EventsContentSmall() {
  return (
    <Box 
      sx={{ 
        height: "100%", 
        width: "100%", 
        padding: '2%', 
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container direction={"column"} spacing={2} sx={{ width: '100%', height: "100%" }}>
          {/* Only the first three Stats Cards */}
          <Grid item xs={12}>
              <Card sx={{ borderRadius: "10px", width: '100%', height: "100%" }}>
                  <CardContent>
                      <Typography variant="h6" color={theme.palette.text.primary}>
                          Total Events Attended
                      </Typography>
                      <Typography variant="h4" color={theme.palette.text.primary}>25</Typography>
                  </CardContent>
              </Card>
          </Grid>
          <Grid item xs={12}>
              <Card sx={{ borderRadius: "10px", width: '100%', height: "100%" }}>
                  <CardContent>
                      <Typography variant="h6" color={theme.palette.text.primary}>
                          Upcoming Events
                      </Typography>
                      <Typography variant="h4" color={theme.palette.text.primary}>3</Typography>
                  </CardContent>
              </Card>
          </Grid>
          <Grid item xs={12}>
              <Card sx={{ borderRadius: "10px", width: '100%', height: "100%" }}>
                  <CardContent>
                      <Typography variant="h6" color={theme.palette.text.primary}>
                          Total Time Spent at events.
                      </Typography>
                      <Typography variant="h4" color={theme.palette.text.primary}>48 hours</Typography>
                  </CardContent>
              </Card>
          </Grid>
      </Grid>
    </Box>
  );
}