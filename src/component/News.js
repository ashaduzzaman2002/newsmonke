import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=e7d111c6aa5044adadd68f3d41512e50";
    let data = await fetch(url);
    let parseData = await data.json();
    setData(parseData.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-3">
      <h1 className="text-center text-3xl font-bold">TOP HEADLINE</h1>
      <div className="text-gray-600 body-font">
        <div className="container lg:px-5 px-2 lg:py-24 py-4 mx-auto">
          <div className="flex flex-wrap mx-auto grid lg:grid-cols-4 md:grid-cols-3 gap-1">
            {data.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
