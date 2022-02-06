import React, { useEffect, useState } from "react";
import styled from "styled-components";

const randomNumber = (max) => {
  return Math.floor(Math.random() * max + 1);
};

const DeadPixel = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const top = randomNumber(window.innerWidth);
    const left = randomNumber(window.innerHeight);
    setPosition({ top, left });
  }, []);

  return <Pixel style={position}></Pixel>;
};

const Pixel = styled.div`
  width: 2px;
  height: 2px;
  background: var(--primary-colour);
  position: absolute;
  z-index: 99999;
`;
export default DeadPixel;
