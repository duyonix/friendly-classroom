import React from "react";

function Loading() {
  return (
    <div className="loadingRoot">
      <div className="wrap">
        <div className="loading">
          <div className="bounceball" />
          <div className="text">NOW LOADING</div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
