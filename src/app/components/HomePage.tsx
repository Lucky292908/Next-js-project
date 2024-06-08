
"use client";
import React from 'react';
import styled from 'styled-components';
import styles from '../styles/Trynow.module.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: white; // Set background color to white
  min-height: 100vh; // Ensure it takes the full height of the viewport
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 20px 0;
  font-weight: bold;
  color: 
#6F6E6E; // Change the text color to gray (#888)
`;

const SubTitle = styled.h2`
  font-size: 28px;
  color: #000; // Ensure the text color is black
  margin: 10px 0;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #f8a836;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px 0;
  white-space: nowrap;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.9;
  }
`;

const ActionButton = styled(Button)`
  background-color: white;
  color: black; // Set the text color to black
  border: 1px solid #ccc;
`;

const HomePage: React.FC = () => {
  return (
    <Container className={styles.txt3}>
      <Title>Build AI Calling Agent that can do</Title>
      <SubTitle>Sales Call</SubTitle>
      <Button>
        Build your own voice agent
       <br></br> <span style={{ color: 'black' }}>‘It’s free!’</span>
      </Button>
      <ActionButton>Hear it in action</ActionButton>
    </Container>
  );
};

export default HomePage;
