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
  font-size: 5rem;
  flex: 1;
  text-align: center;
`;

export default Logo;
