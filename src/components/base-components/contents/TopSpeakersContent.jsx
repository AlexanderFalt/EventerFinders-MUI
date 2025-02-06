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

export default function TopSpeakersContent() {    
  const [loading, setLoading] = useState(true);
  const [contentOpacity, setContentOpacity] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setContentOpacity(1);
    }, 1000);
  }, []);
  
  const topSpeakers = [
    {
      key: 1,
      speaker: "Simon Sinek",
      image: "https://www.speakers.ca/wp-content/uploads/2014/03/Simon_Sinek-TED2014-Photo-by-James-Duncan-Davidson.jpg",
      title: "Author & Motivational Speaker",
      discrption: "Simon Sinek is renowned for his talks on leadership and his concept of the 'Golden Circle.'",
    },
    {
      key: 2,
      speaker: "Brené Brown",
      image: "https://modernpsykologi.se/app/uploads/modernpsykologi/2020/01/Screenshot-2023-01-23-at-13.21.24.png",
      title: "Researcher & Storyteller",
      discrption: "Brené Brown is a leading expert on vulnerability, courage, and empathy.",
    },
    {
      key: 3,
      speaker: "Tony Robbins",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tony_Robbins.jpg",
      title: "Life Coach & Entrepreneur",
      discrption: "Tony Robbins is known for his motivational speeches on personal development and business strategies.",
    },
    {
      key: 4,
      speaker: "Mel Robbins",
      image: "https://cdn.prod.website-files.com/6315a752ac4ca362c35d87b2/6338687e7d3b9097a88e91dd_homepage-podcast-mob.webp",
      title: "Motivational Speaker & Author",
      discrption: "Mel Robbins is widely known for her '5 Second Rule' concept, helping people take action in their lives.",
    },
    {
      key: 5,
      speaker: "Seth Godin",
      image: "https://www.nbforum.com/wp-content/uploads/The-Brief-History-of-Seth-Godin.jpg",
      title: "Marketing Expert & Author",
      discrption: "Seth Godin is a thought leader in marketing, entrepreneurship, and the spread of ideas.",
    },
    {
      key: 6,
      speaker: "Gary Vaynerchuk",
      image: "https://vaynerspeakers.com/wp-content/uploads/Gary-Vaynerchuk-Headshot.jpg",
      title: "Entrepreneur & Media Innovator",
      discrption: "Gary Vaynerchuk is a digital marketing and social media expert, renowned for his keynote addresses.",
    },
    {
      key: 7,
      speaker: "Sheryl Sandberg",
      image: "https://talkstar-photos.s3.amazonaws.com/uploads/8b324338-3caa-4cda-af41-4a0010b2b65e/SherylSandberg_2010W-embed.jpg",
      title: "COO, Meta",
      discrption: "Sheryl Sandberg, the COO of Meta (formerly Facebook), is known for her talks on leadership and gender equality.",
    },
    {
      key: 8,
      speaker: "Elon Musk",
      image: "https://c.ndtvimg.com/2024-09/jhsp7d2_elon-musk_625x300_21_September_24.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
      title: "CEO, Tesla & SpaceX",
      discrption: "Elon Musk is known for his keynote speeches on innovation, space exploration, and renewable energy.",
    },
    {
      key: 9,
      speaker: "Malala Yousafzai",
      image: "https://images.squarespace-cdn.com/content/v1/6217070d43c3f4116edf7a21/1660686360565-UCSFR41MD3K1VUSD41A8/Knowledge-Sharing-Malala-Yousafzai.jpeg",
      title: "Nobel Peace Prize Laureate",
      discrption: "Malala is a global advocate for education and women's rights, known for her powerful storytelling.",
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
              <Typography color='text.primary' variant='h6' >Most popular speakers</Typography>
              <Typography variant='body2' >Here you can see the most in demand speakers on our website.</Typography>
            </Box>
            <Grid container spacing={4} sx={{
              width: "100%", 
              height: "100%",
              justifyContent: "space-evenly",
              }}>
            {topSpeakers.map((item, key) => {
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
                      <Typography color='text.primary' variant='body1' sx={{fontSize: "1.2rem"}}>{item.speaker}</Typography>
                      <Typography color='text.primary' variant='body2' sx={{textOverflow: "ellips", overflowX: "hidden", whiteSpace: "nowrap", fontSize: "0.7rem"}}>{item.title}</Typography>
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
                        <Typography color='text.primary' variant='body1' sx={{fontSize: "0.85rem", width: "100%", height: "100%"}}>{item.discrption}</Typography>
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