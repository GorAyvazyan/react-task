import styled from "styled-components";
import Sider from "antd/es/layout/Sider";

export const StyledMainWrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
`;

export const StyledSider = styled(Sider)`
  && {
    padding: 48px 0;
  }
`;
