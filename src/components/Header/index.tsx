import React from "react";
import {
  StyledHeaderWrapper,
  StyledIconsWrapper,
  StyledSearchIcon,
  StyledWrapper,
  StyledMail,
  StyledNumber,
  StyledMailIcon,
  StyledNotification,
  StyledNotificationIcon,
  StyledMessage,
  StyledMessageIcon,
  StyledBadgeWrapper,
  StyledStatus
} from "./styles";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledIconsWrapper>
        <StyledSearchIcon />
        <StyledWrapper>
          <StyledMail>
            <StyledNumber>4</StyledNumber>
          </StyledMail>
          <StyledMailIcon />
        </StyledWrapper>
        <StyledWrapper>
          <StyledNotification>
            <StyledNumber>4</StyledNumber>
          </StyledNotification>
          <StyledNotificationIcon />
        </StyledWrapper>
        <StyledWrapper>
          <StyledMessage>
            <StyledNumber>4</StyledNumber>
          </StyledMessage>
          <StyledMessageIcon />
        </StyledWrapper>
      </StyledIconsWrapper>
      <StyledBadgeWrapper />
      <StyledStatus />
    </StyledHeaderWrapper>
  );
};

export default Header;
