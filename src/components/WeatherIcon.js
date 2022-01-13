import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import ReactTooltip from "react-tooltip";
import useMediaQuery from "../utils/useMediaQuery";
import RenderIcon from "../utils/renderIcon";

import smile from "../assets/smile1.png";
import weatherCodes from "../data/weatherCodes";

const WeatherIcon = ({ data }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [showIcon, setShowIcon] = useState(false);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const { isSuccess, isFetching, isError, data: weather } = data;

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
        in={isFetching || isError}
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
        <>
          <div data-tip={weather?.weather?.description}>
            <RenderIcon icon={weatherIcon} />
          </div>
          <ReactTooltip place="bottom" />
        </>
      </CSSTransition>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 20vh;
  margin: auto;
  position: relative;
  img,
  svg {
    width: 120px;
    height: 120px;
    margin: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    filter: var(--dropshadow-desktop);

    @media (min-width: 768px) {
      width: 160px;
      height: 160px;
    }
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
