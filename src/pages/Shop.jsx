// Shop.jsx
import React, { useState } from 'react';
import './Shop.css';
import {
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const categories = [
  'Antibiotics', 'Vitamins & Supplements', 'Flea & Worm Treatment',
  'Ear & Eye Care', 'Skin & Coat Care', 'Joint & Mobility Support',
  'Dental Care Products', 'Calming Aids',
];

const sampleProducts = [
  {
    id: 1,
    title: 'Premium Antibiotic',
    price: '$29.99',
    description: 'Natural ingredients for better health.',
    category: 'Antibiotics',
    image: 'https://place-puppy.com/300x300',
  },
  {
    id: 2,
    title: 'Vitamin Chews',
    price: '$19.99',
    description: 'Keep your pet strong and happy.',
    category: 'Vitamins & Supplements',
    image: 'https://place-puppy.com/301x301',
  },
  {
    id: 3,
    title: 'Dental Chew Pack',
    price: '$14.99',
    description: 'Cleans teeth and freshens breath.',
    category: 'Dental Care Products',
    image: 'https://place-puppy.com/302x302',
  },
  {
    id: 4,
    title: 'Coat Shine Serum',
    price: '$24.99',
    description: 'Shiny and healthy fur guaranteed.',
    category: 'Skin & Coat Care',
    image: 'https://place-puppy.com/303x303',
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const filteredProducts = selectedCategory
    ? sampleProducts.filter((p) => p.category === selectedCategory)
    : sampleProducts;

  const goTo = (route) => navigate(route);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="shop-wrapper">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <ul className="nav-links">
            <li><Button onClick={() => alert('Coming soon')} variant="text">Services</Button></li>
            <li><Button onClick={() => goTo('/')} variant="text">About</Button></li>
            <li><Button onClick={() => goTo('/')} variant="text">Contact</Button></li>
            <li><Button onClick={() => goTo('/appointment')} variant="text">Book now</Button></li>
          </ul>
          <div className="brand" onClick={() => goTo('/')} style={{ cursor: 'pointer' }}>
            <span className="brand-bold">Fetch</span>&<span className="brand-light">Fur</span>
          </div>
          <div className="nav-right">
            <input type="text" placeholder="Search" />
            <Button onClick={() => goTo('/login')} variant="outlined">Sign in</Button>
            <div className="profile-icon" onClick={() => goTo('/profile')} style={{ cursor: 'pointer' }} />
          </div>
        </nav>
      </header>

      {/* Hero Slider */}
      <Box className="carousel-section" sx={{ mt: 4 }}>
        <Container maxWidth="md">
          <Slider {...sliderSettings}>
            <div>
              <Box
                sx={{
                  height: 300,
                  background: 'url(/Pictures/1.png) center/cover',
                  borderRadius: '16px',
                }}
              />
            </div>
            <div>
              <Box
                sx={{
                  height: 300,
                  background: 'url(https://place-puppy.com/600x300) center/cover',
                  borderRadius: '16px',
                }}
              />
            </div>
          </Slider>
        </Container>
      </Box>

      {/* Categories */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h5" gutterBottom>Browse by Category</Typography>
        <Box className="category-icons">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'contained' : 'outlined'}
              sx={{ m: 1, textTransform: 'none' }}
              onClick={() => setSelectedCategory(cat)}
            >
              🐾 {cat}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Products */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2">{product.description}</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Pagination */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>Next →</Button>
      </Box>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">
          <h2><span className="brand-bold">Fetch</span>&<span className="brand-light">Fur</span></h2>
          <p>by FazCo</p>
        </div>
        <div className="footer-info">
          <p>Nuable St. Bonafide, Kal City, 4000 Cebu</p>
          <p>📞 1234-456-7890 | 📱 123-456-7890</p>
          <div className="social-icons">🌐 📘 🐦 📸</div>
        </div>
        <div className="footer-links">
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
          <a href="#">HELP</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">FAQS</a>
        </div>
        <p className="copyright">
          Copyright © 2025 Fetch & Fur
        </p>
      </footer>
    </div>
  );
};

export default Shop;
