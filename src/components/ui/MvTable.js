import { Avatar, Space, Table, Tag } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import React from "react";
import { musicList } from "../../utils/static.constants";

const colors = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

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
    title: "category",
    dataIndex: "category",
    key: "category",
    render: (_, record) => (
      <Tag color={colors[record.key * 2]} key={record.key}>
        {record.category.toUpperCase()}
      </Tag>
    ),
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
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     artist: "SsailsS",
//     votes: 32,
//     date: "12/03/2022",
//     time: "03:00",
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     artist: "SsailsS",
//     votes: 42,
//     date: "05/06/2022",
//     time: "04:12",
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     artist: "SsailsS",
//     votes: 32,
//     date: "29/04/2022",
//     time: "02:54",
//   },
// ];

function MvTable() {
  const data = musicList;
  return <Table columns={columns} dataSource={data} />;
}

export default MvTable;
