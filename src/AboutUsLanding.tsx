import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BasicGrid() {
  return (
    <container>
      <Box 
      sx={{ 
        flexGrow: 1,
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingLeft: 6,}}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Item>
            <h1 style={{ 
              color: '#000000',
              textAlign: 'left',
              marginLeft: 6,
              fontSize: '3rem',
            }}>About Us
            </h1>
            <h2 style={{
              color: '#000000',
              textAlign: 'left',
              marginLeft: 6
            }}>
              Founded in July 2022, The Barbs Bro is a neighborhood barbershop built on skill, consistency, 
              and straight-up quality service. You’ll find us at Unit F, Saranay Homes, Congressional Road 
              corner Malapitan Road, Caloocan City—serving men who take their hair seriously.
            </h2>
            <h2 style={{
              color: '#000000',
              textAlign: 'left',
              marginLeft: 6
            }}>
              Owned and managed by Mr. Carlo Glenn Yoldi, The Barbs Bro runs with a tight team: one receptionist keeping appointments in check and four experienced barbers handling the daily grind. From clean, classic cuts to bold hair color and bleaching treatments, we make sure every client walks out looking sharp and confident.
              </h2>
          </Item>
        </Grid>
        <Grid size={5}>
          <Item
          sx={{
            width: '100%',
            height: '100vh',
            paddingLeft: 14,
            backgroundImage: 'url(/AboutUs1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Box>
    </container>
  );
}