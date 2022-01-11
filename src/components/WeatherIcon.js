import React, { useState, useEffect } from "react";
import styled from "styled-components";
import smile from "../assets/smile.jpg";
import { CSSTransition } from "react-transition-group";
import ReactTooltip from "react-tooltip";

import RenderIcon from "../utils/renderIcon";

import weatherCodes from "../data/weatherCodes";

const WeatherIcon = ({ data, isDesktop }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const { isSuccess, isFetching, data: weather } = data;

  useEffect(() => {
    if (isSuccess) {
      const matchWeatherCode = weatherCodes.find(
        (code) => code.code === weather.weather.code
      );
      // pod will be "d" for day, "n" for night

      setWeatherIcon(
        weather.pod === "n"
          ? "moon"
          : matchWeatherCode.icon
          ? matchWeatherCode.icon
          : "sun"
      );
    }
    return () => setShowIcon(false);
  }, [isSuccess, isFetching, weather, isDesktop]);

  return (
    <Wrapper>
      <CSSTransition
        in={isFetching}
        appear={true}
        timeout={1000}
        classNames="fade"
        unmountOnExit
        onExited={() => setShowIcon(true)}
      >
        <img src={smile} alt="" />
      </CSSTransition>

      <CSSTransition
        in={showIcon && !isFetching}
        appear={true}
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <div data-tip={weather?.weather?.description}>
          <RenderIcon icon={weatherIcon} />
          <ReactTooltip place="bottom" />
        </div>
      </CSSTransition>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  mix-blend-mode: darken;

  width: 160px;
  height: 160px;
  margin: auto;

  img,
  svg {
    width: 160px;
    height: 160px;
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
