import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Switch, 
  Button 
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import theme from '../../../styles.js';

export default function SettingsContent() {
    return (
      <Box 
        sx={{ 
          height: "100%", 
          width: "100%", 
          padding: '2%', 
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        {/* Profile Settings */}
        <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
          <CardContent>
            <Typography color="text.primary" variant="h6" gutterBottom>
              Profile Settings
            </Typography>
            <Typography color="text.primary" variant="body2">
              Change your profile information.
            </Typography>
            {/* Example: Username */}
            <Typography color="text.primary" sx={{ mt: 2 }} variant="body2">
              Username: john_doe
            </Typography>
            <Typography color="text.primary" sx={{ mt: 2 }} variant="body2">
              Full name: John Doe
            </Typography>
            <Typography color="text.primary" sx={{ mt: 2 }} variant="body2">
              Email: john_doe@example.com
            </Typography>
            <Typography color="text.primary" sx={{ mt: 2 }} variant="body2">
              Password: **********
            </Typography>
          </CardContent>
        </Card>

        {/* Notifications Settings */}
        <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
          <CardContent>
            <Typography color="text.primary" variant="h6" gutterBottom>
              Notifications
            </Typography>
            <Typography color="text.primary" variant="body2">
              Manage your notification preferences.
            </Typography>
            {/* Example: Notification Toggle */}
            <Grid container alignItems="center" justifyContent="space-between" sx={{ mt: 2 }}>
              <Typography color="text.primary" variant="body2">
                Enable Email Notifications
              </Typography>
              <Switch defaultChecked />
            </Grid>
          </CardContent>
        </Card>

        {/* Apperance */}
        <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
          <CardContent>
            <Typography color="text.primary" variant="h6" gutterBottom>
              Appearance Settings
            </Typography>
            <Typography color="text.primary" variant="body2">
              Control your appearance settings.
            </Typography>
            {/* Example: Slider for setting privacy level */}
            <Grid container alignItems="center" justifyContent="space-between" sx={{ mt: 2 }}>
              <Typography color="text.primary" variant="body2">
                Dark Mode
              </Typography>
              <Switch defaultChecked />
            </Grid>
          </CardContent>
        </Card>

        {/* Save/Cancel Buttons */}
        <Grid container justifyContent="flex-start" spacing={2} sx={{ mt: 3 }}>
          <Grid item size={{sx:6, sm:4, md:3, lg:2}}>
            <Button variant="contained" fullWidth color="primary">
              Save
            </Button>
          </Grid>
          <Grid item size={{sx:6, sm:4, md:3, lg:2}}>
            <Button variant="outlined" fullWidth color="primary">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
}