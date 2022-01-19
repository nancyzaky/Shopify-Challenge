import React, { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
const Item = ({ item, showDescription }) => {
  const alter =
    "https://apod.nasa.gov/apod/image/1501/SevenStrongSky_sergei_960.jpg";
  const [clicked, setClicked] = useState(false);
  const closeModal = () => {
    setClicked(false);
  };
  return (
    <li className="img-cont">
      <h4>{item.title}</h4>
      {clicked && (
        <span className="icon">
          <BsSuitHeartFill />
        </span>
      )}
      <img src={item.hdurl || alter} alt="pic" className="image" />
      <section
        style={{
          height: "20%",
          display: "grid",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h4>{item.date}</h4>

        <button
          className="btn"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          {clicked ? `Unlike` : `Like`}
        </button>
        <button
          className="btn"
          onClick={() => {
            showDescription(item);
          }}
        >
          More
        </button>
      </section>
    </li>
  );
};

export default Item;
