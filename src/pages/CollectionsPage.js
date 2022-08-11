import { Button } from "antd";
import React from "react";
import { SelectOutlined, PlusOutlined } from "@ant-design/icons";
import { MvGridDisplay, MvTable } from "../components";

function CollectionsPage() {
  return (
    <div className="mv-page-layout">
      <div className="mv-page-cta">
        <Button type="link" icon={<SelectOutlined />}>
          select
        </Button>
        <Button type="primary" icon={<PlusOutlined />} ghost>
          new
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span className="mv-small-text-out">Top collections</span>
        <MvGridDisplay collections />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span className="mv-small-text-out">All collections</span>
        <MvTable />
      </div>
    </div>
  );
}

export default CollectionsPage;
