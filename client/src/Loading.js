import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "4rem",
      }}
    >
      <ReactLoading type="balls" color="orange" height={167} width={275} />;
    </div>
  );
};

export default Loading;
