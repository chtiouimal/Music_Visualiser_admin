import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import LOGO from "../assets/files/mv_logo.svg";
import { mainNav, optionNav } from "../utils/route.constant";
const { Header, Sider, Content } = Layout;

function MvLayout() {
  return (
    <Layout>
      <Sider trigger={null} id="mv-left-sider">
        <div className="logo">
          <img src={LOGO} alt="mv_logo" />
          <div className="navigation">
            <LeftOutlined />
            <RightOutlined />
          </div>
        </div>
        <div>
          <span className="mv-small-text-out" style={{ marginTop: 24 }}>
            Menu
          </span>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={mainNav}
          />
        </div>
        <div style={{ marginTop: 24 }}>
          <span className="mv-small-text-out" style={{ marginTop: 24 }}>
            Other
          </span>
          <Menu theme="dark" mode="inline" items={optionNav} />
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        ></Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
      <Sider id="mv-right-sider"></Sider>
    </Layout>
  );
}

export default MvLayout;
