import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <NavLink
        to={"/weather"}
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Weather
      </NavLink>
      <NavLink
        to={"/calendar"}
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Calendar
      </NavLink>
      <NavLink
        to={"/draw"}
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Draw
      </NavLink>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;

  margin-bottom: 1rem;
  a {
    text-decoration: none;
    width: 100%;
    padding: 1rem 0;
    text-align: center;
    outline: none;
    color: var(--primary-colour);
    border: 5px solid var(--primary-colour);
    border-radius: 0px 0px 26px 0px;
    transition: transform 0.1s ease;
  }
  a:hover,
  a:focus {
    background: var(--primary-colour);
    color: var(--secondary-colour);
  }
  a:active {
    transform: scale(0.95);
  }

  a.selected {
    background: var(--primary-colour);
    color: var(--secondary-colour);
  }
`;

export default Navbar;
