import {
  RightOutlined,
  LeftOutlined,
  SearchOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, Menu } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import LOGO from "../assets/files/mv_logo.svg";
import { MvDrawer, MvInput, MvSongCard } from "../components";
import MvPlayer from "../features/player";
import { mainNav, optionNav } from "../utils/route.constant";
const { Header, Sider, Content } = Layout;

function MvLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const img =
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Collections%2FCollection%203%2F04%2F10.png?alt=media&token=786a23ae-45e7-4e69-b82c-93c467142c18";

  return (
    <Layout>
      <Sider
        id="mv-left-sider"
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth="0"
      >
        <div className="logo">
          <img src={LOGO} alt="mv_logo" />
          <div className="navigation">
            <LeftOutlined />
            <RightOutlined />
          </div>
        </div>
        <div>
          <div style={{ marginBottom: 24 }}>
            <Menu theme="dark" mode="inline" items={optionNav} />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "auto",
            alignSelf: "baseline",
          }}
        >
          <MvSongCard ele={img} />
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          <div className="mv-layout-header-left">
            <MvDrawer />
            <div id="menu-search-bar">
              <MvInput
                placeholder="Search..."
                style={{ maxWidth: 300 }}
                prefix={<SearchOutlined />}
              />
            </div>
          </div>
          <div className="logo mv-layout-header-right">
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Avatar
                size={40}
                src="https://xsgames.co/randomusers/avatar.php?g=female"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="mv-text" style={{ lineHeight: 1.2 }}>
                  username
                </span>
                <span
                  className="mv-extra-small-text-out"
                  style={{ lineHeight: 1.2 }}
                >
                  Producer
                </span>
              </div>
            </div>
            <BellOutlined style={{ fontSize: 20 }} />
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: "0px 24px",
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
      <Sider id="mv-right-sider">
        <div className="logo">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Avatar
              size={40}
              src="https://xsgames.co/randomusers/avatar.php?g=female"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="mv-text" style={{ lineHeight: 1.2 }}>
                username
              </span>
              <span
                className="mv-extra-small-text-out"
                style={{ lineHeight: 1.2 }}
              >
                Producer
              </span>
            </div>
          </div>
          <BellOutlined style={{ fontSize: 20 }} />
        </div>
        <MvPlayer />
      </Sider>
    </Layout>
  );
}

export default MvLayout;
