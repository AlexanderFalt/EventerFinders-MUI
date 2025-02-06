import { Box, Card, CardContent, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie,
} from 'recharts';
import theme from '../../../styles.js';

const eventData = [
  { name: 'Jan', Events: 5 },
  { name: 'Feb', Events: 8 },
  { name: 'Mar', Events: 2 },
  { name: 'Apr', Events: 7 },
  { name: 'May', Events: 10 },
  { name: 'Jun', Events: 4 },
  { name: 'Jul', Events: 6 },
  { name: 'Aug', Events: 9 },
  { name: 'Sep', Events: 3 },
  { name: 'Oct', Events: 11 },
  { name: 'Nov', Events: 5 },
  { name: 'Dec', Events: 12 }
];

const categoryData = [
    { name: 'Tech', value: 40 },
    { name: 'Business', value: 30 },
    { name: 'Health', value: 20 },
    { name: 'Education', value: 10 },
];

export default function EventsLargeContent() {
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));

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
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: '1200px', width: '100%', height: "100%" }}>
          {/* Stats Cards */}
          <Grid item size={{ xs: 12, md: 4 }}>
              <Card sx={{ borderRadius: "10px", height: '100%' }}>
                  <CardContent>
                      <Typography variant="h6" color={theme.palette.text.primary}>
                          Total Events Attended
                      </Typography>
                      <Typography variant="h4" color={theme.palette.text.primary}>25</Typography>
                  </CardContent>
              </Card>
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
              <Card sx={{ borderRadius: "10px", height: '100%' }}>
                  <CardContent>
                      <Typography variant="h6" color={theme.palette.text.primary}>
                          Upcoming Events
                      </Typography>
                      <Typography variant="h4" color={theme.palette.text.primary}>3</Typography>
                  </CardContent>
              </Card>
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
              <Card sx={{ borderRadius: "10px", height: '100%' }}>
                  <CardContent>
                      <Typography variant="h6" color={theme.palette.text.primary}>
                          Total Time Spent at events
                      </Typography>
                      <Typography variant="h4" color={theme.palette.text.primary}>48 hours</Typography>
                  </CardContent>
              </Card>
          </Grid>

          {/* Conditionally render only on screen size md and up */}
          {!isBelowMd && (
            <>
              {/* Bar Chart for Events by Month */}
              <Grid item size={{ xs: 12, md: 6 }}>
               <Card sx={{ borderRadius: "10px", height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                        Events Attended Per Month
                    </Typography>
                    <Box sx={{ width: '100%', height: 300 }}>
                        <BarChart
                            width={500}
                            height={300}
                            data={eventData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name"  tick={{ fontSize: 12 }} />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="Events" fill={theme.palette.primary.main} />
                        </BarChart>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Pie Chart for Event Categories */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <Card sx={{ borderRadius: "10px", height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                        Event Categories
                    </Typography>
                    <Box sx={{ width: '100%', height: 300 }}>
                        <PieChart width={400} height={400}>
                            <Pie
                                data={categoryData}
                                cx={200}
                                cy={200}
                                outerRadius={100}
                                fill={theme.palette.secondary.main}
                                dataKey="value"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Two Additional Stats Cards to Fill the Remaining Space */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <Card sx={{ borderRadius: "10px", height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" color={theme.palette.text.primary}>
                        Total Participants
                    </Typography>
                    <Typography variant="h4" color={theme.palette.text.primary}>150</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item size={{ xs: 12, md: 6 }}>
                <Card sx={{ borderRadius: "10px", height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" color={theme.palette.text.primary}>
                        Average Feedback Score
                    </Typography>
                    <Typography variant="h4" color={theme.palette.text.primary}>4.5</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </>
          )}
      </Grid>
    </Box>
  );
}