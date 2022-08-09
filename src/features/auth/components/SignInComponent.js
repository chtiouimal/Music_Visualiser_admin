import { Button } from "antd";
import React from "react";
import { MvInput } from "../../../components";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function SignInComponent() {
  return (
    <form>
      <MvInput placeholder="Email" prefix={<UserOutlined />} />
      <MvInput
        placeholder="Password"
        type="password"
        prefix={<LockOutlined />}
      />
      <Button type="primary" ghost>
        Login
      </Button>
    </form>
  );
}

export default SignInComponent;
