import React, { useState, useEffect } from "react";
import Item from "./Item";
import Loading from "./Loading";
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://api.nasa.gov/planetary/apod?count=30&api_key=FhotbIv8fIUefVY8RpmNVvPijB3kuHk4mzJun8Ce`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className="container">
        {data.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
