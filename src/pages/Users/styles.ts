import styled from "styled-components";
import { Button, Typography } from "antd";

export const StyledContentWrapper = styled.div`
  padding: 24px 48px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const StyledUserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0 28px;
`;

export const StyledTypography = styled(Typography)`
  color: #2d3446;
  font-size: 18px;
`;

export const StyledNewUserButton = styled(Button)`
  color: #fff;
  font-size: 12px;
  border-radius: 4px;
  margin-left: auto;
`;
