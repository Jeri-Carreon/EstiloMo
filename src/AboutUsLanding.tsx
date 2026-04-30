import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  boxShadow: 'none',
}));

export default function BasicGrid() {
  return (
    <Container>
      <Box 
      sx={{ 
        flexGrow: 1,
        backgroundColor: '#ffffff',
        paddingTop: 10,}}>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Item>
            <h1 style={{ 
              color: '#000000',
              textAlign: 'left',
              fontSize: '3rem',
            }}>About Us
            </h1>
            <h2 style={{
              color: '#000000',
              textAlign: 'justify',
              fontSize: '1.5rem',
              textIndent: '3em',
            }}>
              Founded in July 2022, The Barbs Bro is a neighborhood barbershop built on skill, consistency, 
              and straight-up quality service. You’ll find us at Unit F, Saranay Homes, Congressional Road 
              corner Malapitan Road, Caloocan City—serving men who take their hair seriously.
            </h2>
            <h2 style={{
              color: '#000000',
              textAlign: 'justify',
              fontSize: '1.5rem',
              textIndent: '3em',
            }}>
              Owned and managed by Mr. Carlo Glenn Yoldi, The Barbs Bro runs with a tight team: one receptionist 
              keeping appointments in check and four experienced barbers handling the daily grind. From clean, 
              classic cuts to bold hair color and bleaching treatments, we make sure every client walks out looking sharp and confident.
              </h2>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Item
          sx={{
            width: '100%',
            height: '80vh',
            backgroundImage: 'url(/AboutUs1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Item
          sx={{
            width: '100%',
            height: '70vh',
            backgroundImage: 'url(/AboutUs2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Item>
            <h2 style={{
              color: '#000000',
              textAlign: 'justify',
              fontSize: '1.5rem',
              textIndent: '3em',
            }}>
                        What started as a hole in the wall business with just 3 barber chairs and a cramped working 
                        area, slowly gained traction and popularity within the community. 
            </h2>
            <h2 style={{
              color: '#000000',
              textAlign: 'justify',
              fontSize: '1.5rem',
              textIndent: '3em',
            }}>
              Through the dedication and skills of our barbers the business continued to grow, and on October 7, 
              2024, The Barbs Bro relocated to a bigger space just above the old barbershop, following a relocation 
              to better serve its customers and improve the overall shop experience.
              </h2>
              <h2 style={{
              color: '#000000',
              textAlign: 'justify',
              fontSize: '1.5rem',
              textIndent: '3em',
            }}>
              At The Barbs Bro, it’s simple: good cuts, solid service, no shortcuts.
              </h2>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Item
          sx={{
            width: '100%',
            height: '100vh',
            backgroundImage: 'url(/AboutUs3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}