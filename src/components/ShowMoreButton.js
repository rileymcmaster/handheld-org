import React from "react";
import styled from "styled-components";

const ShowMoreButton = ({ handleClick, showMore }) => {
  return <StyledBtn onClick={handleClick}>{!showMore ? "+" : "−"}</StyledBtn>;
};

const StyledBtn = styled.button`
  font-size: 1.8em;
  margin: 1em 0;
  /* margin-top: em; */
  height: 1em;
  width: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: all 0.2s;
  &:hover,
  &:focus-visible {
    background: var(--primary-colour);
    color: var(--secondary-colour);
  }
  &:active {
    background: transparent;
    border: 2px solid var(--primary-colour);
    color: var(--primary-colour);
  }
`;
export default ShowMoreButton;
