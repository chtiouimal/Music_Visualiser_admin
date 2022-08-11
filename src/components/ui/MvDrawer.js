import { Button, Drawer, Menu, Space } from "antd";
import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  RightOutlined,
  LeftOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import LOGO from "../../assets/files/mv_logo.svg";
import { optionNav } from "../../utils/route.constant";
import MvInput from "../form/MvInput";

function MvDrawer({ trigger }) {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();

  const showDefaultDrawer = () => {
    setSize("default");
    setVisible(true);
  };

  const showLargeDrawer = () => {
    setSize("large");
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space>
        <span className="trigger" onClick={showDefaultDrawer}>
          <MenuUnfoldOutlined />
        </span>
      </Space>
      <Drawer
        title={<img src={LOGO} alt="mv_logo" />}
        placement="left"
        width="100vw"
        onClose={onClose}
        visible={visible}
        extra={
          <div className="navigation">
            <LeftOutlined />
            <RightOutlined />
          </div>
        }
      >
        <MvInput
          placeholder="Search..."
          style={{ marginBottom: 32 }}
          prefix={<SearchOutlined />}
        />
        <Menu theme="dark" mode="inline" items={optionNav} onClick={onClose} />
      </Drawer>
    </>
  );
}

export default MvDrawer;
