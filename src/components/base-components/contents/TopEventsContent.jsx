import { 
    Box,
    Typography,
    Card,
    CardMedia, 
    CardContent,
    Badge, 
    CircularProgress
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import theme from '../../../styles.js';
import { useState, useEffect } from 'react';
  
export default function TopEventsContent() {    
  const [loading, setLoading] = useState(true);
  const [contentOpacity, setContentOpacity] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setContentOpacity(1);
    }, 1000);
  }, []);
  
  const topEvents = [
      {
          key: 1,
          eventName: "CES 2024",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZ8_ux1i1VKy3v8zCCCJ-3tulOk_yigv0vA&s",
          location: "Las Vegas, NV",
          description: "The Consumer Electronics Show (CES) is the global stage for innovation, showcasing the latest in consumer technology.",
        },
        {
          key: 2,
          eventName: "Web Summit 2024",
          image: "https://websummit.com/wp-media/2024/02/90p2rXCZ-See-you-next-year.jpg",
          location: "Lisbon, Portugal",
          description: "Web Summit is one of the largest technology conferences in the world, connecting CEOs, startups, and tech enthusiasts.",
        },
        {
          key: 3,
          eventName: "World Economic Forum 2024",
          image: "https://erc.europa.eu/sites/default/files/2024-01/WEF.jpeg",
          location: "Davos, Switzerland",
          description: "The World Economic Forum is an annual meeting where global leaders discuss economic and social challenges.",
        },
        {
          key: 4,
          eventName: "TED 2024 Conference",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzFudnXIAcFVCpQJ8OnM0Vu43AzABSGS3IQ&s",
          location: "Vancouver, Canada",
          description: "The TED Conference brings together thought leaders and innovators to share ideas worth spreading.",
        },
        {
          key: 5,
          eventName: "Startup Grind Global Conference 2024",
          image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,g_center,q_auto:good/v1/gcs/platform-data-startupgrind/events/allstage.png",
          location: "Redwood City, CA",
          description: "A major conference focused on entrepreneurship, featuring talks from top startup founders, VCs, and innovators.",
        },
        {
          key: 6,
          eventName: "SaaStr Annual 2024",
          image: "https://www.saasceo.com/wp-content/uploads/SaaStr-Annual-2024-Logo.jpg",
          location: "San Mateo, CA",
          description: "The largest gathering in the world for B2B SaaS companies, bringing together founders and executives to discuss scaling.",
        },
        {
          key: 7,
          eventName: "Gartner IT Symposium/Xpo 2024",
          image: "https://phosphorus.io/wp-content/uploads/2024/08/Gartner-SYM-2024_Site-1.png",
          location: "Orlando, FL",
          description: "This event is designed for CIOs and IT leaders to explore trends and technologies shaping the future of IT and business.",
        },
        {
          key: 8,
          eventName: "IBM Think 2024",
          image: "https://media.licdn.com/dms/image/D5612AQH8jjxV7qG1Kg/article-cover_image-shrink_720_1280/0/1716291735217?e=2147483647&v=beta&t=iXWhvwnOEVND7L_3k1cFSzMuCMtNGX3nUTETRzcYwLI",
          location: "San Francisco, CA",
          description: "IBM Think brings together IT and business professionals to discuss AI, cloud computing, and other business technologies.",
        },
        {
          key: 9,
          eventName: "TechCrunch Disrupt 2024",
          image: "https://techcrunch.com/wp-content/uploads/2024/08/GeneralArticleImageHeader_TC24redesign_V1_4x3.png?resize=1200,900",
          location: "San Francisco, CA",
          description: "One of the biggest startup conferences, where early-stage companies launch products and network with VCs.",
        },
    ];

  const badgeColor = (key) => {
    if (key === 1) {
      return "#DAA520";  // Gold
    } else if (key === 2) {
      return "#A8A9AD";  // Silver
    } else if (key === 3) {
      return "#CD7F32";  // Bronze
    } else {
      return "#1B1A55";  // Primary
    }
  };

  return (
      <Box 
        sx={{ 
          height: "100%", 
          width: "100%", 
          padding: '2%', 
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "center",
          gap: 3,
        }}
      >
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Box sx={{ opacity: contentOpacity, transition: 'opacity 0.5s ease-in-out' }}>
              <Box sx={{margin: { xs: "10vh 0 0 2.5vh", md: "6vh", lg: "0vh" }}}>
                <Typography color='text.primary' variant='h6' >Most popular events</Typography>
                <Typography variant='body2' >Here you can see the events with the most speaker applications.</Typography>
              </Box>
              <Grid container spacing={4} sx={{
                width: "100%", 
                height: "100%",
                justifyContent: "space-evenly",
                }}>
              {topEvents.map((item, key) => {
                const currentBadgeColor = badgeColor(item.key);
                return (
                <Grid 
                  item="true" 
                  key={key} 
                  size={{xs: 12, md: 6, lg: 4}}
                  sx={{
                    justifyContent: "center",
                    margin: {xs: "0 2.5vh", md: "0 0", lg: "0 0"},
                  }}>
                    <Badge
                      badgeContent={item.key}
                      sx={{
                        '& .MuiBadge-badge': {
                          color: "#FFF",
                          fontWeight: "600",
                          backgroundColor: currentBadgeColor,
                          fontSize: '1.1rem', 
                          width: '36px',
                          borderRadius: "50%", 
                          height: '36px', 
                          minWidth: 'unset', 
                          padding: '0.5rem', 
                        },
                      }}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                    <Card sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "left",
                      padding: "1.5vh",
                      width: "100%",
                      height: "100%",
                      flexDirection: "column",
                    }}> 
                      <CardContent 
                        sx={{
                          width: "100%",
                          height: "30%",
                          display: "flex",
                          alignItems: "left",
                          padding: 0,
                          justifyContent: "center",
                          flexDirection: "column",
                          marginBottom: "1%",
                      }}>
                        <Typography color='text.primary' variant='body1' sx={{fontSize: "1.2rem"}}>{item.eventName}</Typography>
                        <Typography color='text.primary' variant='body2' sx={{textOverflow: "ellips", overflowX: "hidden", whiteSpace: "nowrap", fontSize: "0.7rem"}}>{item.location}</Typography>
                      </CardContent>
                      <Box sx={{ width: "100%", height: "70%", display: "flex"}}>
                        <CardMedia 
                          component="img"
                          image={item.image}
                          sx={{
                            width: "49%",
                            maxHeight: "12.5vh",
                            minHeight: "12.5vh",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}/>
                        <CardContent sx={{
                            width: "50%",
                            height: "100%",
                            marginLeft: "1%",
                            padding: 0,
                        }}>
                          <Typography color='text.primary' variant='body1' sx={{fontSize: "0.85rem", width: "100%", height: "100%"}}>{item.description}</Typography>
                        </CardContent>
                      </Box>
                    </Card>
                  </Badge>
                </Grid>
              )})}
              </Grid>
            </Box>
          )}
      </Box>
    );
}