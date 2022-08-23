import { Space } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MvBarChart, MvCollectionCard, MvGridDisplay } from "../components";
import { getSelectedCollections } from "../services/songs";
import { arrSongs, musicList } from "../utils/static.constants";

function DashboardPage() {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/auth");
    }

    getSelectedCollections()
      .then((res) => {
        console.log(res);
        setSuccess(res.data.success);
        setData([res.data.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mv-pae-layout">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", gap: 32, marginBottom: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span className="mv-small-text-out">Top songs</span>
            <MvGridDisplay data={musicList.slice(0, 3)} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: "100%",
            }}
          >
            <span className="mv-small-text-out">Votes</span>
            <div style={{ display: "flex", gap: 16, width: "100%" }}>
              <div
                style={{
                  height: 198,
                  // background: "red",
                  minWidth: "100%",
                  borderRadius: 10,
                  padding: "8px 16px",
                  border: "1px solid rgba(207, 209, 222, 0.4)",
                }}
              >
                <div>
                  <MvBarChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 32, marginBottom: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span className="mv-small-text-out">Top collections</span>
          <MvGridDisplay collections data={data} />
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
      </div>
      <div style={{ display: "flex", gap: 32, marginBottom: 32 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            width: "100%",
          }}
        >
          <span className="mv-small-text-out">Selected Collection</span>
          <div style={{ display: "flex", gap: 16, width: "100%" }}>
            <div
              style={{
                height: 300,
                background: "red",
                width: "100%",
                borderRadius: 10,
                marginBottom: 32,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
