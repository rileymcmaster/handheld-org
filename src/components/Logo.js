import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import styled from "styled-components";

const Logo = () => {
  return (
    <Icon>
      <FaRegHandshake />
    </Icon>
  );
};
const Icon = styled.div`
  grid-area: logo;
  font-size: 5rem;
  text-align: center;
  filter: var(--dropshadow-desktop);
  /* border: 2px solid black; */
`;

export default Logo;
