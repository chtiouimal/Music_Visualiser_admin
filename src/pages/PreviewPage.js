import React, { useEffect } from "react";
import { PlayCircleOutlined, GlobalOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function PreviewPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/auth");
    }
  }, []);

  return (
    <div className="mv-page-layout" style={{ height: "100%" }}>
      <div className="mv-page-cta">
        {/* <Button type="link" icon={<PlayCircleOutlined />}>
          play
        </Button> */}
        <Button type="primary" icon={<GlobalOutlined />} ghost>
          Website
        </Button>
      </div>
      <iframe
        title="MV-Preview"
        src="http://music-visulazier.netlify.app/"
        style={{
          height: "100%",
          width: "100%",
          margin: 0,
          padding: 0,
          border: "none",
          background: "#2E303A",
          borderRadius: 10,
          border: "1px solid rgba(207, 209, 222, 0.4)",
        }}
      />
    </div>
  );
}

export default PreviewPage;
