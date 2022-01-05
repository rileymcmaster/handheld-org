import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import smile from "../assets/smile.jpg";

const WeatherIcon = ({ icon }) => {
  const [currentIcon, setCurrentIcon] = useState(null);
  const [enterAnimation, setEnterAnimation] = useState(true);
  const [exitAnimation, setExitAnimation] = useState(false);

  const iconObj = {
    smile: smile,
  };

  // useEffect(() => {
  //   setCurrentIcon(iconObj[icon]);
  //   // setEnterAnimation(true);
  // }, []);

  useEffect(() => {
    if (icon && !enterAnimation) {
      console.log("when does this run?");
      setExitAnimation(false);
    }
  }, [icon]);
  //   hmm might need to make an object that has all the icons and call them by their key
  //  or update the data file to include the icon src hmmmm

  const handleClick = () => {
    setExitAnimation(true);
  };
  return (
    <Wrapper
      className={exitAnimation ? "exit" : undefined}
      onAnimationEnd={() => {
        setExitAnimation(false);
        setEnterAnimation(true);
      }}
    >
      {currentIcon ? (
        <Circle />
      ) : (
        <img
          className={enterAnimation ? "enter" : undefined}
          src={smile}
          alt=""
        />
      )}
      <button onClick={handleClick}>CLICK</button>
    </Wrapper>
  );
};

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

const fadeOut = keyframes`
from {
    opacity: 1;
}
to {
    opacity: 0;
}
`;

const spin = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform:rotate(360deg)
}
`;

const Wrapper = styled.div`
  border: 2px solid red;
  mix-blend-mode: darken;

  &.exit {
    animation: ${fadeOut} 2s linear;
  }

  img {
    width: 200px;
    height: 200px;
  }
  img.enter {
    animation-name: ${spin}, ${fadeIn};
    animation-duration: 10s, 2s;
    animation-iteration-count: infinite, 1;
    animation-timing-function: steps(60, start), linear;
  }
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  background: var(--primary-colour);
  border-radius: 50%;
  filter: var(--dropshadow-desktop);

  &.enter {
    animation: ${fadeIn} 2s linear;
  }
`;

export default WeatherIcon;
