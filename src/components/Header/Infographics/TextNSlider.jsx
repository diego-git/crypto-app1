import React from "react";
import { UNSAFE_mapRouteProperties } from "react-router";
import {
  Container,
  CoinWrapper,
  StyledDiv,
  MarketCap,
  SliderWrapper,
  Slider,
  Icon,
} from "./Infographic.styles";

export function TextNSlider(props) {
  const { text, icon, percentage } = props;

  function getIcon(icon) {
    if (icon === "bitcoin") {
      return "icons/bitcoin.svg";
    }
    return "icons/ethereum.svg";
  }

  return (
    <StyledDiv>
      {icon && <Icon src={getIcon(icon)} />}
      <span>{text}</span>
      <SliderWrapper>
        <Slider />
      </SliderWrapper>
    </StyledDiv>
  );
}