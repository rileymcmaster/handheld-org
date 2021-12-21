import React from "react";
import styled from "styled-components";

const ShowMoreButton = ({ handleClick, showMore }) => {
  return <StyledBtn onClick={handleClick}>{!showMore ? "+" : "-"}</StyledBtn>;
};

const StyledBtn = styled.button`
  font-size: 2rem;
  border: none;
  background: transparent;
`;
export default ShowMoreButton;
