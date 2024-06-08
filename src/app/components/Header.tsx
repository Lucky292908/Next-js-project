
"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import styles from '../styles/Trynow.module.css';

const HeaderContainer = styled.header`
//   background-color: #f8d17a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const MenuIcon = styled.div`
  width: 30px;
  height: 20px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  div {
    width: 100%;
    height: 3px;
    background-color: #333;
    transition: transform 0.3s ease;
  }

  &.open div:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
`;

const Menu = styled.nav<{ isOpen: boolean }>`
  position: absolute;
  top: 60px; /* Adjust as per your design */
  right: 20px;
  background-color: #f8d17a;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
    width: 50%;

`;

const MenuItem = styled.a`
  display: block;
  text-decoration: none;
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className={styles.text}>Join our community.Explore </div>

    <HeaderContainer>
      <Logo>Toingg</Logo>
      <MenuIcon className={isMenuOpen ? 'open' : ''} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <Menu isOpen={isMenuOpen}>
        
        <MenuItem href="#">Home&nbsp; &nbsp; &nbsp; &nbsp;  <span className={styles.p}>➝</span></MenuItem>
        <MenuItem href="#">About&nbsp; &nbsp;&nbsp; &nbsp;   <span className={styles.p}>➝</span></MenuItem>
        <MenuItem href="#">Services &nbsp; <span className={styles.p}>➝</span></MenuItem>
        <MenuItem href="#">Contact&nbsp; &nbsp; <span className={styles.p}>➝</span></MenuItem>
      </Menu>
    </HeaderContainer>
    </>
  );
};

export default Header;
