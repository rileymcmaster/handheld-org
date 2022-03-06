import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import useMediaQuery from "../../utils/useMediaQuery";
import RenderIcon from "../../utils/renderIcon";
import "../Transition/transition.css";

import smile from "../../assets/smile1.png";
import weatherCodes from "../../data/weatherCodes";
import Transition from "../Transition";

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
      <Transition
        show={isFetching || isError}
        onExited={() => setShowIcon(true)}
      >
        <img src={smile} alt="" />
      </Transition>

      <Transition show={showIcon && !isFetching}>
        <div data-tip={weather?.weather?.description}>
          <RenderIcon icon={weatherIcon} />
          <ReactTooltip type="dark" place="bottom" effect="solid" />
        </div>
      </Transition>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 100%; */
  height: 20vh;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
  }

  img,
  svg {
    width: 120px;
    height: 120px;
    filter: var(--dropshadow-desktop);

    @media (min-width: 768px) {
      width: 160px;
      height: 160px;
    }
  }
`;

export default WeatherIcon;
