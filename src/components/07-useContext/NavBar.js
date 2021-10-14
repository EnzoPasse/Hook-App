import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { AppRouter } from "./AppRouter";

export const NavBar = () => {
  const { Header, Content } = Layout;

  return (
   <Router >
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/" /> Home
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about" /> About
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/login" /> Login
          </Menu.Item>
        </Menu>
      </Header>
      
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <AppRouter />
        </div>
      </Content>

    </Layout>
    </Router>  
  );
};
