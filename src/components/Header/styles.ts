import styled from "styled-components";
import { Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ReactComponent as MailIcon } from "assets/images/mail.svg";
import { ReactComponent as NotificationIcon } from "assets/images/notification.svg";
import { ReactComponent as MessageIcon } from "assets/images/message.svg";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  border: 1px solid #e9e9e9;
  background: #fff;
  padding: 16px 50px;
`;

export const StyledIconsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledSearchIcon = styled(SearchOutlined)`
  font-size: 20px;
  & path {
    fill: #323332;
  }
  margin-right: 28px;
`;

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledMail = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #42229d;
  position: absolute;
  right: -78px;
  top: -15px;
  z-index: 1;
`;

export const StyledNumber = styled(Typography)`
  color: #fff;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledMailIcon = styled(MailIcon)`
  margin-right: 28px;
`;

export const StyledNotification = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #407eff;
  position: absolute;
  right: -13px;
  top: -10px;
`;

export const StyledNotificationIcon = styled(NotificationIcon)``;

export const StyledMessage = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffad00;
  position: absolute;
  right: 80px;
  top: -10px;
`;
export const StyledMessageIcon = styled(MessageIcon)`
  margin-left: 28px;
`;

export const StyledBadgeWrapper = styled.div`
  border-radius: 50%;
  background: #d8d8d8;
  width: 40px;
  height: 40px;
  margin-left: 60px;
`;

export const StyledStatus = styled.div`
  position: absolute;
  right: 55px;
  bottom: 15px;
  width: 9px;
  height: 9px;
  background: #7bd500;
  border: 1px solid #ffffff;
  border-radius: 50%;
`;
