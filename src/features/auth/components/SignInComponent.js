import { Button, Form } from "antd";
import React from "react";
import { MvInput } from "../../../components";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { auth } from "../services/auth";
import { useNavigate } from "react-router-dom";

function SignInComponent() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    await auth(values)
      .then((res) => {
        localStorage.setItem("selected-nav", "1");
        let data = res.data.data;
        localStorage.setItem("auth-token", data.token);
        localStorage.setItem("user", JSON.stringify(data.userData));
        res.data.success && navigate("/app/dashboard", { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <MvInput placeholder="Email" prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <MvInput
          placeholder="Password"
          type="password"
          prefix={<LockOutlined />}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" ghost htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SignInComponent;
