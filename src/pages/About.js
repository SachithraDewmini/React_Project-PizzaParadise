import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';
import videoBackground from '../videos/video.mp4'; // Adjust the path to your video file

export default function About() {
  return (
    <Layout>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          textAlign: 'center',
          p: 2,
          color: 'white', // Ensure text is readable over the video
          '& h4': {
            fontWeight: 'bold',
            my: 2,
            fontSize: '1.3rem',
          },
          '& p': {
            textAlign: 'justify',
          },
          '@media (max-width:600px)': {
            mt: 0,
            '& h4': {
              fontSize: '1.5rem',
            },
          },
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <Typography variant="h3"  color='red' fontWeight='bold'>Welcome to PIZZA PARADISE</Typography>
        <Box sx={{backgroundColor:'black', m:10}}>
        <Typography variant="body1" component="p" color='yellow'>
        At Pizza Paradise, we believe that pizza is more than just a meal – it’s an experience. 
        Our journey started with a passion for creating the perfect pizza, one that brings people 
        together with every bite. We use only the finest ingredients, from our hand-tossed dough 
        to our rich, flavorful sauces and premium toppings. Every pizza is a labor of love, carefully 
        crafted and baked to golden perfection, ensuring that each slice delivers a burst of deliciousness. 
        Whether you’re a fan of the classics or love exploring new flavors, our menu offers something 
        for everyone, making every visit to Pizza Paradise a delightful adventure..
        </Typography>
        <br />
        <br/>
        <Typography variant="body1" component="p" color='yellow'>
        But Pizza Paradise is about more than just great food – it’s about community. We’ve created a 
        welcoming space where friends and families can gather, enjoy each other’s company, and share in 
        the joy of good food. From casual dinners to special celebrations, our pizzeria is the perfect 
        spot to create memories that last. We’re committed to providing not just a meal, but an 
        experience that leaves you smiling long after the last slice is gone. At Pizza Paradise, 
        every visit is a celebration of flavor, friendship, and the love of pizza.
        </Typography>
        </Box>
      </Box>
    </Layout>
  );
}
