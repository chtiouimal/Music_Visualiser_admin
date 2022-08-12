import {
  StepForwardOutlined,
  StepBackwardOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

function MusicControls({
  currentMusic,
  isplaying,
  setIsplaying,
  music,
  setMusic,
  setCurrentmusic,
}) {
  for (let e of document.querySelectorAll(
    'input[type="range"].slider-progress',
  )) {
    e.style.setProperty("--value", e.value);
    e.style.setProperty("--min", e.min === "" ? "0" : e.min);
    e.style.setProperty("--max", e.max === "" ? "100" : e.max);
    e.addEventListener("input", () => e.style.setProperty("--value", e.value));
  }

  const [mp3url, setMp3url] = useState("");

  useEffect(() => {
    const activeMusic = music.map((mus) => {
      if (mus._id === currentMusic._id) {
        return {
          ...mus,
          active: true,
        };
      } else {
        return {
          ...mus,
          active: false,
        };
      }
    });
    setMusic(activeMusic);
    getYoutubemp3(currentMusic._id);
  }, [currentMusic]);

  const [musicinfo, setMusicinfo] = useState({
    currentTime: "",
    duration: "",
  });

  const audioRef = useRef(null);
  const audioPlayHandler = () => {
    if (!isplaying) {
      audioRef.current.play();
      setIsplaying(true);
    } else {
      audioRef.current.pause();
      setIsplaying(false);
    }
  };

  const timeUpdatehandler = async (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setMusicinfo({
      ...musicinfo,
      currentTime: current,
      duration: duration,
    });
  };
  const draghandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setMusicinfo({ ...musicinfo, currentTime: e.target.value });
  };

  const timeFormat = (timestamp) => {
    const hours = Math.floor(timestamp / 60 / 60);
    const minutes = Math.floor(timestamp / 60) - hours * 60;
    const seconds = Math.floor(timestamp % 60);

    var formatted =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
    return formatted;
  };

  if (isplaying) {
    audioRef.current.play();
  }
  const trackSkippingHandler = (direction) => {
    const currentIndex = music.findIndex(
      (track) => track._id === currentMusic._id,
    );

    if (direction === "skip-back") {
      setCurrentmusic(music[(currentIndex - 1) % music.length]);
      if ((currentIndex - 1) % music.length === -1) {
        setCurrentmusic(music[music.length - 1]);
        return;
      }
    }
    if (direction === "skip-forward") {
      setCurrentmusic(music[(currentIndex + 1) % music.length]);
    }
  };

  const getYoutubemp3 = async (id) => {
    const data = music.filter((e) => e._id === id);

    setMp3url(data[0].music);
  };

  return (
    <>
      <div className="mv-controls">
        <StepBackwardOutlined
          style={{ fontSize: 25 }}
          onClick={() => trackSkippingHandler("skip-back")}
        />
        {musicinfo.duration ? (
          <span onClick={audioPlayHandler}>
            {!isplaying ? (
              <PlayCircleOutlined style={{ fontSize: 50 }} />
            ) : (
              <PauseCircleOutlined style={{ fontSize: 50 }} />
            )}
          </span>
        ) : (
          <LoadingOutlined style={{ fontSize: 50 }} />
        )}
        <StepForwardOutlined
          style={{ fontSize: 25 }}
          onClick={() => trackSkippingHandler("skip-forward")}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdatehandler}
        onLoadedMetadata={timeUpdatehandler}
        ref={audioRef}
        src={mp3url}
        onEnded={() => {
          trackSkippingHandler("skip-forward");
        }}
      ></audio>
    </>
  );
}

export default MusicControls;
