import styled from "styled-components";
import { Button, Input, Typography } from "antd";

export const StyledContentWrapper = styled.div`
  padding: 24px 48px;
`;

export const StyledUser = styled(Typography)`
  color: #2d3446;
  font-size: 18px;
`;

export const StyledUserWrapper = styled.div`
  padding: 52px 55px 300px 55px;
  border: 1px solid #e9e9e9;
  background: #fff;
`;

export const StyledInput = styled(Input)`
  border-color: #e9e9e9;
  border-radius: 4px;
  font-size: 12px;
  height: 35px;
  color: #878787;
  margin-bottom: 16px;
  &::placeholder {
    color: #595959;
  }
`;

export const StyledTypography = styled(Typography)`
  padding-left: 10px;
  color: #407eff;
`;

export const StyledUploadButton = styled(Button)`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border-color: #407eff;
  border-radius: 4px;
  background: #fff;
  padding: 8px 18px;
  min-width: 160px;
  max-width: 160px;
  height: 100%;
`;

export const StyledSaveButton = styled(Button)`
  color: #fff;
  font-size: 12px;
  padding: 0 44px;
  margin-top: 14px;
`;
