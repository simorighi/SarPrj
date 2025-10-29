import React from "react";
import myVideo from "../../assets/myVideo.mp4";
import "./video.css";

export default function VideoComponent() {
  return (
    <>
      <div className="container-fluid p-0 d-flex justify-content-center">
        <video src={myVideo} autoPlay loop muted playsInline className="position-absolute top-0 start-0 w-100 h-100 z-n1"
        />
      </div>
      

    </>
  );
}
