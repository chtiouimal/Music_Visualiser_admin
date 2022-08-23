import { Button } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { MvGridDisplay, MvTable } from "../components";
import { PlayCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { getSongs } from "../services/songs";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

function SongsPage() {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const { dataContext, setDataContext } = useContext(PlayerContext);

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
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mv-page-layout">
      <div className="mv-page-cta">
        <Button
          type="link"
          icon={<PlayCircleOutlined />}
          onClick={() => setDataContext(data)}
        >
          play
        </Button>
        <Button type="primary" icon={<PlusOutlined />} ghost>
          new
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span className="mv-small-text-out">Top songs</span>
        <MvGridDisplay data={data} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span className="mv-small-text-out">All tracks</span>
        <MvTable data={data} loading={!success} />
      </div>
    </div>
  );
}

export default SongsPage;
