import { Avatar, Divider, List, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroll-component";
import TrackCard from "./TrackCard";

function MusicLibrary({
  music,
  setCurrentmusic,
  setIsplaying,
  setMusic,
  librarystatus,
}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }

    setLoading(true);
    setData(music);
    // fetch(
    //   "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo",
    // )
    //   .then((res) => res.json())
    //   .then((body) => {
    //     setData([...data, ...body.results]);
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
  };

  useEffect(() => {
    loadMoreData();
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <div
      id="scrollableDiv"
      style={{
        maxHeight: 400,
        overflow: "auto",
        width: "100%",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        // loader={
        //   <Skeleton
        //     avatar
        //     paragraph={{
        //       rows: 1,
        //     }}
        //     active
        //   />
        // }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={music}
          renderItem={(track) => (
            <TrackCard
              key={music._id}
              setCurrentmusic={setCurrentmusic}
              track={track}
              music={music}
              setMusic={setMusic}
              setIsplaying={setIsplaying}
            />
          )}
        />
      </InfiniteScroll>
    </div>
  );
}

export default MusicLibrary;
