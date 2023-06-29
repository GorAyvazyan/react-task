import styled from "styled-components";
import { Typography } from "antd";

export const StyledPaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e9e9e9;
  background: #fff;
  padding: 22px 40px 22px 22px;
  margin-top: auto;
`;

export const StyledChangerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTypography = styled(Typography)`
  color: #323332;
  font-size: 14px;
  margin-bottom: 34px;
`;
export const StyledTotalNumber = styled(Typography)`
  color: #878787;
  font-size: 18px;
  display: flex;
  margin-left: auto;
`;

export const StyledNumber = styled(Typography)`
  color: #407eff;
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;
`;
