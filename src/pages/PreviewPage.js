import React from "react";

function PreviewPage() {
  return (
    <iframe
      title="MV-Preview"
      src="http://music-visulazier.netlify.app/"
      style={{
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        border: "none",
        background: "#2E303A",
      }}
    />
  );
}

export default PreviewPage;
