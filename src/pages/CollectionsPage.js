import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { SelectOutlined, PlusOutlined } from "@ant-design/icons";
import { MvGridDisplay, MvTable } from "../components";
import { getCollections } from "../services/songs";
import { useNavigate } from "react-router-dom";

function CollectionsPage() {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [refetch, setRefetch] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/auth");
    }

    setRefetch(true);

    refetch &&
      getCollections()
        .then((res) => {
          setSuccess(res.data.success);
          setData(res.data.data);
        })
        .catch((err) => console.log(err));
  }, [refetch]);

  return (
    <div className="mv-page-layout">
      <div className="mv-page-cta">
        <Button type="primary" icon={<PlusOutlined />} ghost>
          new
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span className="mv-small-text-out">Top collections</span>
        <MvGridDisplay collections data={data} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span className="mv-small-text-out">All collections</span>
        <MvTable
          data={data}
          setData={setData}
          setLoading={setSuccess}
          loading={!success}
          collections
          setRefetch={setRefetch}
        />
      </div>
    </div>
  );
}

export default CollectionsPage;
