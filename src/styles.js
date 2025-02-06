import { createTheme } from '@mui/material/styles';

// Create your global theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#070F2B', // Darkest blue
      second: '#1B1A55', // Middle dark blue
      third: '#535C91', // Light dark blue
      fourth: '#9290C3', // Light dark blue
      fifth: '#F0F0F0', // White background color
    },
    secondary: {
      main: '#00A9FF', // High contrast blue
      second: '#89CFF3', // Middle contrast blue
      third: '#A0E9FF', // Light contrast blue
      fourth: '#CDF5FD', // Lightest contrast blue
    },
    background: {
      default: '#F0F0F0', // White background color
      highlight: '#C8C8C8',
    },
    text: {
      primary: '#343131',  // Primary text color
      secondary: '#F0F0F0', 
    },
  },
  typography: {
    fontFamily: '"Montserrat", system-ui, sans-serif',
    // Customizing heading styles (make headlines bigger and thicker)
    h1: {
      fontSize: '3.5rem', // Increase size
      fontWeight: 700,    // Thicker font weight
    },
    h2: {
      fontSize: '3rem',   // Increase size
      fontWeight: 700,    // Thicker font weight
    },
    h3: {
      fontSize: '2.5rem', // Increase size
      fontWeight: 600,    // Medium thickness
    },
    h4: {
      fontSize: '2rem',   // Increase size
      fontWeight: 600,    // Medium thickness
    },
    h5: {
      fontSize: '1.75rem', // Increase size
      fontWeight: 500,     // Slightly thicker
    },
    h6: {
      fontSize: '1.5rem',  // Increase size
      fontWeight: 500,     // Slightly thicker
    },
    subtitle1: {
      fontSize: '1.65rem',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1.1rem',  // Base font size for paragraphs
      fontWeight: 400,     // Regular weight
    },
    button: {
      fontSize: '1.1rem',  // Larger button text
      fontWeight: 500,     // Thicker button text
      textTransform: 'none', // Disable uppercase transformation
    },
  },
  shape: {
    borderRadius: 10, // Custom border radius for components
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px', // Rounded corners for buttons
          padding: '1% 2%', // Custom padding for buttons
          transition: "all 0.25s",
          '&:hover': {
            backgroundColor: '#00A9FF', // Change background on hover
            color: '#F0F0F0',  // Change text color on hover
          },
          '&:focusVisible': {
            outline: '2px solid #1B1A55', // Focus ring customization
            outlineOffset: '2px',         // Offset to move it away from the button slightly
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#00A9FF', // Link color
          textDecoration: 'none', // No underline by default
          '&:hover': {
            textDecoration: 'underline', // Underline on hover
            color: '#535C91', // Change color on hover
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#F0F0F0', // Color for h1
        },
        h2: {
          color: '#F0F0F0', // Color for h2
        },
        h3: {
          color: '#F0F0F0', // Color for h3
        },
        h4: {
          color: '#F0F0F0', // Color for h2
        },
        h5: {
          color: '#F0F0F0', // Color for h3
        },
        h6: {
          color: '#F0F0F0', // Color for h2
        },
        subtitle1: {
          color: '#343131', // Color for h3
        },
        subtitle2: {
          color: '#343131', // Color for h3
        },
        paragraph: {
          color: '#343131', // Color for h3
        },
      },
    },
  },
});

export default theme;