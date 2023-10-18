import React, { useState } from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Button, Container, CssBaseline, Paper, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import image1 from './assets/Image1.jpg';
import image2 from './assets/Image2.jpg';
import image3 from './assets/Image3.jpg';
import image4 from './assets/Image4.jpg';
import image5 from './assets/Image5.jpg';

const images = [image1, image2, image3, image4, image5];

const aframeContainerStyle = {
  width: '100%',
  height: '500px',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  // backgroundColor: 'black',
};

const buttonStyle = {
  marginTop: '20px',
  transition: 'background-color 0.3s', // Add transition for hover effect
  '&:hover': {
    backgroundColor: 'darkblue', // Background color change on hover
  },
};

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigateToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const currentImage = images[currentImageIndex];

  return (
    <div style={containerStyle}>
      <CssBaseline />
      <Container maxWidth="md">
        <Paper elevation={3} style={{ position: 'relative', maxWidth: '100%' }}>
          <a-scene embedded style={aframeContainerStyle}>
            <a-camera fov="80"></a-camera>
            <a-sky src={currentImage} material="side: double"></a-sky>
          </a-scene>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {images.map((image, index) => (
              <IconButton key={index} onClick={() => navigateToImage(index)}>
                <img src={image} alt={`Image ${index + 1}`} style={{ width: '50px', height: '50px' }} />
              </IconButton>
            ))}
          </div>
        </Paper>
        <Button variant="contained" color="primary" onClick={() => navigateToImage((currentImageIndex + 1) % images.length)} style={buttonStyle}>
          Next Image <ArrowForwardIcon />
        </Button>
      </Container>
    </div>
  );
}

export default App;
