import React, { useState, useEffect } from "react";
import styled from "styled-components";
import smile from "../assets/smile.jpg";
import { CSSTransition } from "react-transition-group";

import RenderIcon from "../utils/renderIcon";

import weatherCodes from "../data/weatherCodes";

const WeatherIcon = ({ loading, icon, weather }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    if (weather) {
      const matchWeatherCode = weatherCodes.find(
        (code) => code.code === weather.weather.code
      );

      setWeatherIcon(
        weather.pod === "n"
          ? "moon"
          : matchWeatherCode
          ? matchWeatherCode.icon
          : "sun"
      );
    }
  }, [weather]);

  return (
    <Wrapper>
      <CSSTransition
        in={loading}
        appear={true}
        timeout={1000}
        classNames="fade"
        unmountOnExit
        onExited={() => setShowIcon(true)}
      >
        <img src={smile} alt="" />
      </CSSTransition>

      <CSSTransition
        in={showIcon}
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <RenderIcon icon={weatherIcon} />
      </CSSTransition>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  mix-blend-mode: darken;

  width: 200px;
  height: 200px;
  margin: auto;

  img {
    width: 180px;
    height: 180px;
    margin: auto;
  }
  .fade-appear {
    opacity: 0;
  }
  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 1s;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: all 1s;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: all 1s;
  }
  .fade-exit-done {
    opacity: 0;
  }
`;

export default WeatherIcon;
