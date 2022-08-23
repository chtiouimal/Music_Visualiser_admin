import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SettingsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/auth");
    }
  }, []);

  return <div>SettingsPage</div>;
}

export default SettingsPage;
