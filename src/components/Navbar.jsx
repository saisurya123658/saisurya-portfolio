

import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../Data/Data";
import { MenuRounded } from "@mui/icons-material";

// Navbar Styles
const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled(LinkR)`
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  flex: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SocialButton = styled.a`
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  padding: 10px 18px;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  display: none;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + "99"};
  position: absolute;
  top: 80px;
  right: 0;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        {/* Left side */}
        <NavLogo to="/">MyPortfolio</NavLogo>

        {/* Middle Nav */}
        <NavItems>
          <NavLink href="#Home">Home</NavLink>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#CodingProfiles">CodingProfiles</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </NavItems>

        {/* Right side */}
        <RightSection>
          <SocialButton href={Bio.github} target="_blank">
            Github
          </SocialButton>
          <SocialButton href={Bio.linkedin} target="_blank">
            LinkedIn
          </SocialButton>
        </RightSection>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(false)} href="#Home">
              Home
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Education">
              Education
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#CodingProfiles">
              CodingProfiles
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Contact">
              Contact
            </NavLink>
            <SocialButton href={Bio.github} target="_blank">
              Github
            </SocialButton>
            <SocialButton href={Bio.linkedin} target="_blank">
              LinkedIn
            </SocialButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

