import React from "react";
import { Layout } from "antd";
import Router from "./components/Router";
import Header from "./components/Header";
import MenuWrapper from "./components/Menu";
import { StyledMainWrapper, StyledSider } from "./styles";

function App() {
  return (
    <StyledMainWrapper>
      <Layout>
        <StyledSider width={240} breakpoint="lg" collapsedWidth="0">
          <MenuWrapper />
        </StyledSider>
        <Layout>
          <Header />
          <Router />
        </Layout>
      </Layout>
    </StyledMainWrapper>
  );
}

export default App;
