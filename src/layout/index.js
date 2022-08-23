import {
  RightOutlined,
  LeftOutlined,
  SearchOutlined,
  BellOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Menu, Space } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LOGO from "../assets/files/mv_logo.svg";
import { MvDrawer, MvInput, MvSongCard } from "../components";
import { PlayerContext } from "../context/PlayerContext";
import MvPlayer from "../features/player";
import { getSelectedCollections, getSongs } from "../services/songs";
import { mainNav, optionNav } from "../utils/route.constant";
import { musicList } from "../utils/static.constants";
const { Header, Sider, Content } = Layout;

function MvLayout() {
  let selected = localStorage.getItem("selected-nav");
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [selectedKey, setSelectedKey] = useState(selected);
  const [user, setUser] = useState({});

  const [dataContext, setDataContext] = useState([]);

  const navigate = useNavigate();

  const value = useMemo(() => ({ dataContext, setDataContext }), [dataContext]);

  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/auth");
    }
    getSongs()
      .then((res) => {
        let dataList = res.data.data.map((e) => {
          return { ...e, active: false };
        });
        setSuccess(res.data.success);
        setData(dataList);
        setDataContext(dataList);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("selected-nav") === undefined) {
      localStorage.setItem("selected-nav", "1");
    }

    if (localStorage.getItem("user")) {
      let obj = JSON.parse(localStorage.getItem("user"));
      setUser(obj);
    }

    if (selected === undefined) {
      setSelectedKey("1");
      navigate("dashboard");
    }

    if (selected) {
      setSelectedKey(selected);
      let route = mainNav.filter((e) => e.key === selected)[0].path;
      navigate(
        selected.length > 1
          ? `collections/${localStorage.getItem("sub-nav")}`
          : route,
      );
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <PlayerContext.Provider value={value}>
      <Layout>
        <Sider id="mv-left-sider" trigger={null}>
          <div className="logo">
            <img src={LOGO} alt="mv_logo" />
            <div className="navigation">
              <LeftOutlined onClick={() => navigate(-1)} />
              <RightOutlined onClick={() => navigate(+1)} />
            </div>
          </div>
          <div>
            <div style={{ marginBottom: 24 }}>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[selectedKey]}
                items={optionNav}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "auto",
              alignSelf: "baseline",
            }}
          >
            <MvSongCard ele={musicList[0]} />
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
              <Dropdown
                overlay={
                  <Menu
                    items={[
                      {
                        label: (
                          <span className="mv-small-text" onClick={logout}>
                            <Space>
                              <LogoutOutlined />
                              Logout
                            </Space>
                          </span>
                        ),
                        key: "0",
                      },
                    ]}
                  />
                }
                trigger={["click"]}
              >
                <span
                  onClick={(e) => e.preventDefault()}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <Avatar
                      size={40}
                      src="https://xsgames.co/randomusers/avatar.php?g=female"
                      className="mv-user-profile"
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span className="mv-text" style={{ lineHeight: 1.2 }}>
                        {user?.username}
                      </span>
                      <span
                        className="mv-extra-small-text-out"
                        style={{ lineHeight: 1.2 }}
                      >
                        Producer
                      </span>
                    </div>
                  </div>
                </span>
              </Dropdown>
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
            <Dropdown
              overlay={
                <Menu
                  items={[
                    {
                      label: (
                        <span className="mv-small-text" onClick={logout}>
                          <Space>
                            <LogoutOutlined />
                            Logout
                          </Space>
                        </span>
                      ),
                      key: "0",
                    },
                  ]}
                />
              }
              trigger={["click"]}
            >
              <span
                onClick={(e) => e.preventDefault()}
                style={{ cursor: "pointer" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Avatar
                    size={40}
                    src="https://xsgames.co/randomusers/avatar.php?g=female"
                    className="mv-user-profile"
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="mv-text" style={{ lineHeight: 1.2 }}>
                      {user?.username}
                    </span>
                    <span
                      className="mv-extra-small-text-out"
                      style={{ lineHeight: 1.2 }}
                    >
                      Producer
                    </span>
                  </div>
                </div>
              </span>
            </Dropdown>
            <BellOutlined style={{ fontSize: 20 }} />
          </div>
          {success && <MvPlayer data={data} />}
        </Sider>
      </Layout>
    </PlayerContext.Provider>
  );
}

export default MvLayout;
