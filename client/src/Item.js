import React from "react";

const Item = ({ item }) => {
  console.log(item.hdurl);
  return (
    <div>
      <img src={item.hdurl} alt="pic" className="image" />
    </div>
  );
};

export default Item;
