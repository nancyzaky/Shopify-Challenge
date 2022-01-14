import React, { useState } from "react";

const Item = ({ item }) => {
  const alter =
    "https://apod.nasa.gov/apod/image/1501/SevenStrongSky_sergei_960.jpg";
  const [clicked, setClicked] = useState(false);
  return (
    <li className="img-cont">
      <h4>{item.title}</h4>
      <img src={item.hdurl || alter} alt="pic" className="image" />
      <h4>{item.date}</h4>
      <button
        className="btn"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        {clicked ? `Unlike` : `Like`}
      </button>
    </li>
  );
};

export default Item;
