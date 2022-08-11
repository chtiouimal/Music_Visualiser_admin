import { Button } from "antd";
import React from "react";
import { MvGridDisplay, MvTable } from "../components";
import { PlayCircleOutlined, PlusOutlined } from "@ant-design/icons";

function SongsPage() {
  return (
    <div className="mv-page-layout">
      <div className="mv-page-cta">
        <Button type="link" icon={<PlayCircleOutlined />}>
          play
        </Button>
        <Button type="primary" icon={<PlusOutlined />} ghost>
          new
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span className="mv-small-text-out">Top songs</span>
        <MvGridDisplay />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span className="mv-small-text-out">All tracks</span>
        <MvTable />
      </div>
    </div>
  );
}

export default SongsPage;
