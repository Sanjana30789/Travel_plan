import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import backgroundImage from '../assets/1.jpg'; // Update the path to your image

const HomePage = () => {
  return (
    <HomePageContainer>
      <BackgroundImage />
      <motion.div
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <HeroTitle>Explore The World With Us</HeroTitle>
        <HeroDescription>
          Personalized travel itineraries to make your journey unforgettable.
        </HeroDescription>
        <ExploreButton
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Start Your Journey
        </ExploreButton>
      </motion.div>

      {/* Animating Travel Elements */}
      <TravelIcons>
        <Icon
          as={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          🌍
        </Icon>
        <Icon
          as={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          ✈️
        </Icon>
        <Icon
          as={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        >
          🧳
        </Icon>
      </TravelIcons>

      {/* Animated Scroll Down Arrow */}
      <ScrollDown
        as={motion.div}
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
      >
        ⬇️ Scroll Down
      </ScrollDown>
    </HomePageContainer>
  );
};

export default HomePage;

// Styled Components

const HomePageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  color: white;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${backgroundImage}) no-repeat center center/cover;
  filter: opacity(0.8); /* Adjust this value to control the opacity of the image */
  z-index: -1; /* Keeps the image behind the content */
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color : black;
  margin-bottom: 20px;
  z-index: 1;
`;

const HeroDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color : black;
  max-width: 500px;
  line-height: 1.6;
  z-index: 1;
`;

const ExploreButton = styled(motion.button)`
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
  z-index: 1;
`;

const TravelIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
  z-index: 1;
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  animation: ${bounceAnimation} 2s infinite;
`;

const ScrollDown = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  animation: ${bounceAnimation} 1s infinite;
  z-index: 1;
`;
