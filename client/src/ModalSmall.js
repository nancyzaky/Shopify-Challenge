import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ModalSmall = ({ chosenItem, closeModal }) => {
  return (
    <div
      className="faded-cont"
      style={{ backgroundImage: `url(${chosenItem.hdurl})` }}
    >
      <aside
        style={{
          width: "500px",
          top: "10%",
          left: "33%",
          backgroundColor: "white",
          boxShadow: "0 10px 10px 4px rgb(214, 241, 240)",
          color: "black",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          display: "fixed",
          position: "fixed",
          zIndex: "99",
        }}
      >
        <span
          className="close"
          onClick={() => {
            closeModal();
          }}
        >
          <AiOutlineClose />
        </span>
        <h3>{chosenItem.date}</h3>
        <p>{chosenItem.title}</p>
        <p>{chosenItem.explanation}</p>
      </aside>
    </div>
  );
};

export default ModalSmall;
