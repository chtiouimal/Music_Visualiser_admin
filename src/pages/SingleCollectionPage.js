import React, { useContext, useEffect, useState } from "react";
import { SelectOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { getCollectionById } from "../services/songs";
import { MvTable } from "../components";
import { PlayerContext } from "../context/PlayerContext";

function SingleCollectionPage() {
  const params = useParams();

  const { dataContext, setDataContext } = useContext(PlayerContext);

  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/auth");
    }
    getCollectionById(params.id)
      .then((res) => {
        setSuccess(res.data.success);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mv-page-layout">
      <div className="mv-page-cta">
        <Button type="link" icon={<SelectOutlined />}>
          select
        </Button>
        <Button
          type="primary"
          icon={<PlayCircleOutlined />}
          onClick={() => setDataContext(data.songs)}
          ghost
        >
          Play
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "100%",
        }}
      >
        <span className="mv-small-text-out">Stats</span>
        <div style={{ display: "flex", gap: 16, width: "100%" }}>
          <div
            style={{
              height: 198,
              background: "red",
              width: "100%",
              borderRadius: 10,
            }}
          ></div>
          <div
            style={{
              height: 198,
              background: "red",
              width: "100%",
              borderRadius: 10,
            }}
          ></div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span className="mv-small-text-out">All tracks</span>
        <MvTable data={data.songs} loading={!success} />
      </div>
    </div>
  );
}

export default SingleCollectionPage;
