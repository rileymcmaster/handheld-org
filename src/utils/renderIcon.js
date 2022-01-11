import React from "react";
import { ReactComponent as Sun } from "../assets/weather-icons/sun.svg";
import { ReactComponent as Rain } from "../assets/weather-icons/rain.svg";
import { ReactComponent as Snow } from "../assets/weather-icons/snow.svg";
import { ReactComponent as Clouds } from "../assets/weather-icons/clouds.svg";
import { ReactComponent as Moon } from "../assets/weather-icons/moon.svg";
import { ReactComponent as Thunder } from "../assets/weather-icons/thunder.svg";

const iconTypes = {
  sun: Sun,
  rain: Rain,
  snow: Snow,
  clouds: Clouds,
  moon: Moon,
  thunder: Thunder,
};

const RenderIcon = ({ icon, ...props }) => {
  const Icon = iconTypes[icon];
  return (
    <Icon
      {...props}
      fill="var(--primary-colour)"
      stroke="var(--primary-colour)"
    />
  );
};

export default RenderIcon;
