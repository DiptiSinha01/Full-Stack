import { useState } from 'react'
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import viteLogo from '/vite.svg'
import './App.css'

const menuItems = [
  { name: 'Butter Chicken', description: 'Creamy chicken curry with rich tomato gravy.', price: '₹350', image: 'https://th.bing.com/th/id/OIP.HhFesX2o3o6yeN9lSNpGHwHaLG?w=204&h=374&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { name: 'Paneer Tikka', description: 'Grilled cottage cheese cubes marinated in spices.', price: '₹250', image: 'https://th.bing.com/th/id/OIP.AAEh5BmBs2IZ7HQRNVG2pwHaFo?w=187&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3' },
  { name: 'Masala Dosa', description: 'Crispy dosa filled with spicy potato masala.', price: '₹150', image: 'https://th.bing.com/th/id/OIP.AAEh5BmBs2IZ7HQRNVG2pwHaFo?w=187&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3' },
  { name: 'Biryani', description: 'Aromatic rice dish cooked with spices and meat.', price: '₹300', image: 'https://th.bing.com/th/id/OIP.fDWEOEHk6trKCevpKK8-LgHaEO?w=330&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { name: 'Gulab Jamun', description: 'Soft milk-based dumplings soaked in sugar syrup.', price: '₹100', image: 'https://th.bing.com/th/id/OIP.B32bansRI7RS3yfbUSEBNwHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { name: 'Afghani Chapli Kebab', description: 'Spiced minced meat patties, a specialty from Afghanistan.', price: '₹400', image: 'https://tse3.mm.bing.net/th/id/OIP.Rw1V-_2F9VQVI4rkaodCrQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'Sushi', description: 'Japanese dish with vinegared rice and seafood.', price: '₹500', image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg' },
  // { name: 'Tacos', description: 'Mexican dish with folded tortilla and various fillings.', price: '₹200', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Tacos.jpg' },
  { name: 'Pasta Alfredo', description: 'Italian pasta with creamy Alfredo sauce.', price: '₹350', image: 'https://th.bing.com/th/id/OIP.I0pPojgROGHF7-L8iyGR7AHaKd?w=208&h=294&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { name: 'Cheesecake', description: 'Creamy dessert with a biscuit base.', price: '₹250', image: 'https://th.bing.com/th/id/OIP.HOmgCISRNoR9sHbqRWZlbgHaFl?w=286&h=216&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
];

function App() {
  return (
    <>
      <AppBar position="static" style={{ marginBottom: '20px', backgroundColor: '#ff5722' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            Indian & International Food Menu
          </Typography>
          <Button color="inherit" style={{ fontWeight: 'bold' }}>Login</Button>
        </Toolbar>
      </AppBar>
      <div style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/food.png)', backgroundSize: 'cover', backgroundColor: '#f8f9fa', padding: '20px' }}>
        <Grid container spacing={4} style={{ padding: '20px' }}>
          {menuItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', height: '400px', width: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h5" component="div" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px', textAlign: 'center' }}>
                    {item.description}
                  </Typography>
                  <Typography variant="h6" color="primary" style={{ marginTop: '15px', fontWeight: 'bold', textAlign: 'center' }}>
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default App
