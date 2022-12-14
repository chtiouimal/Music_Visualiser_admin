import React, { useEffect, useState } from "react";
import { authWallpaper } from "../utils/links.constant";
import LOGO from "../assets/files/mv_logo.svg";
import Auth from "../features/auth";
import { useNavigate } from "react-router-dom";

function AuthPage({ setLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      navigate("/app/dashboard");
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="mv-auth-layout">
      <div className="mv-auth-left">
        <div
          style={{
            height: 64,
            width: "100%",
            padding: "0px 32px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img src={LOGO} alt="mv_logo" />
        </div>
        <div className="mv-auth-content">
          <h1 className="mv-big-title">Welcome</h1>
          <p className="mv-text">
            Make your own gallery, Inspire others with your{" "}
            <span className="mv-text-highlight">Art.</span>
          </p>
          <Auth />
        </div>
        <div
          style={{
            height: 100,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="mv-small-text">Enjoy the journey</span>
        </div>
      </div>
      <div
        className="mv-auth-right"
        style={{
          background: `linear-gradient(rgba(46, 48, 58, 0.47), rgba(46, 48, 58, 0.47)),  url(${authWallpaper})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

export default AuthPage;
