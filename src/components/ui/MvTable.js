import { Avatar, Dropdown, Menu, Space, Table } from "antd";
import {
  EllipsisOutlined,
  CheckCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import React, { useContext, useState } from "react";
import { selectCollection } from "../../services/songs";
import { Link, useNavigate } from "react-router-dom";
import { PlayerContext } from "../../context/PlayerContext";

function MvTable({
  data,
  loading,
  collections,
  setData,
  setLoading,
  setRefetch,
}) {
  const navigate = useNavigate();

  const { dataContext, setDataContext } = useContext(PlayerContext);

  const columns = [
    {
      title: "Track",
      dataIndex: "songName",
      key: "songName",
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Avatar src={record.coverArt} />
          <span className="mv-text" style={{ fontWeight: 600 }}>
            {record.songName}
          </span>
        </div>
      ),
    },
    {
      title: "artist",
      dataIndex: "songArtist",
      key: "songArtist",
      render: (text) => (
        <span className="mv-small-text" style={{ opacity: 0.6 }}>
          {text}
        </span>
      ),
    },
    {
      title: "date",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (date) => new Date(date).toDateString(),
    },
    {
      title: "",
      key: "action",
      render: () => (
        <Dropdown
          overlay={
            <Menu
              items={[
                {
                  label: (
                    <span className="mv-small-text">
                      <Space>
                        <EditOutlined />
                        Edit
                      </Space>
                    </span>
                  ),
                  key: "0",
                },
                {
                  label: (
                    <span className="mv-small-text">
                      <Space>
                        <DeleteOutlined />
                        Delete
                      </Space>
                    </span>
                  ),
                  key: "1",
                },
              ]}
            />
          }
          trigger={["click"]}
        >
          <span onClick={(e) => e.preventDefault()}>
            <EllipsisOutlined style={{ fontSize: 20, cursor: "pointer" }} />
          </span>
        </Dropdown>
      ),
    },
  ];

  const collColumns = [
    {
      title: "Collection",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <Link
          to={record._id}
          onClick={() => {
            localStorage.setItem("selected-nav", "3-1");
            localStorage.setItem("sub-nav", record._id);
          }}
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <div
            style={{
              height: 40,
              width: 40,
              minWidth: 40,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              overflow: "hidden",
            }}
          >
            {record.songs.map((e) => (
              <img
                src={e.coverArt}
                style={{ width: "50%", height: "50%" }}
                alt={e._id}
              />
            ))}
          </div>
          <span className="mv-text" style={{ fontWeight: 600 }}>
            {record.name}
          </span>
        </Link>
      ),
    },
    {
      title: "Tracks",
      key: "songs",
      dataIndex: "songs",
      render: (songs) => songs.length,
    },
    {
      title: "Selected",
      key: "selected",
      dataIndex: "selected",
      render: (_, record) =>
        record.selected ? (
          <CheckCircleOutlined
            style={{ fontSize: 20, color: "#598EF7", cursor: "pointer" }}
          />
        ) : (
          <div
            className="mv-unselected-icon"
            style={{ cursor: "pointer" }}
            onClick={async () => {
              await selectCollection(record._id)
                .then((res) => {
                  let arr = data.map((e) => {
                    if (e._id === record._id)
                      return { ...record, selected: true };
                    if (e._id !== record._id && e.selected === true)
                      return { ...record, selected: false };
                    return e;
                  });
                  setData(arr);
                  setRefetch(true);
                  navigate(0);
                })
                .catch((err) => console.log(err));
            }}
          />
        ),
    },
    {
      title: "date",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (date) => new Date(date).toDateString(),
    },
    {
      title: "play",
      render: (_, record) => (
        <PlayCircleOutlined
          style={{ fontSize: 20, cursor: "pointer" }}
          onClick={() => {
            let arr = record.songs.map((e) => {
              return { ...e, active: false };
            });
            setDataContext(arr);
          }}
        />
      ),
    },
    {
      title: "",
      key: "action",
      render: () => (
        <Dropdown
          overlay={
            <Menu
              items={[
                {
                  label: (
                    <span className="mv-small-text">
                      <Space>
                        <EditOutlined />
                        Edit
                      </Space>
                    </span>
                  ),
                  key: "0",
                },
                {
                  label: (
                    <span className="mv-small-text">
                      <Space>
                        <DeleteOutlined />
                        Delete
                      </Space>
                    </span>
                  ),
                  key: "1",
                },
              ]}
            />
          }
          trigger={["click"]}
        >
          <span onClick={(e) => e.preventDefault()}>
            <EllipsisOutlined style={{ fontSize: 20, cursor: "pointer" }} />
          </span>
        </Dropdown>
      ),
    },
  ];

  return (
    <Table columns={collections ? collColumns : columns} dataSource={data} />
  );
}

export default MvTable;
