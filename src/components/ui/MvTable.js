import { Avatar, Space, Table, Tag } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import React from "react";

const img =
  "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Collections%2FCollection%203%2F02%2F12.png?alt=media&token=b3276df6-3280-4b1e-bb65-24f91b281822";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Avatar src={img} />
        <span className="mv-text" style={{ fontWeight: 600 }}>
          {text}
        </span>
      </div>
    ),
  },
  {
    title: "artist",
    dataIndex: "artist",
    key: "artist",
    render: (text) => (
      <span className="mv-small-text" style={{ opacity: 0.6 }}>
        {text}
      </span>
    ),
  },
  {
    title: "time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "votes",
    dataIndex: "votes",
    key: "votes",
  },
  {
    title: "date",
    key: "date",
    dataIndex: "date",
  },
  {
    title: "",
    key: "action",
    render: () => <EllipsisOutlined style={{ fontSize: 20 }} />,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    artist: "SsailsS",
    votes: 32,
    date: "12/03/2022",
    time: "03:00",
  },
  {
    key: "2",
    name: "Jim Green",
    artist: "SsailsS",
    votes: 42,
    date: "05/06/2022",
    time: "04:12",
  },
  {
    key: "3",
    name: "Joe Black",
    artist: "SsailsS",
    votes: 32,
    date: "29/04/2022",
    time: "02:54",
  },
];

function MvTable() {
  return <Table columns={columns} dataSource={data} />;
}

export default MvTable;
