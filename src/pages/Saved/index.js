import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToSaved, removeFromSaved } from "../../features/savedSlice";

import NewsItem from "../../components/NewsItem";
import Spinners from "../../components/Spinner";

function Saved() {
  const dispatch = useDispatch();

  const savedItems = useSelector((state) => state.saved.savedItems);
  const loading = useSelector((state) => state.saved.loading);

  const handleAddToSaved = (item) => {
    dispatch(addToSaved(item));
  };
  const handleRemoveFromSaved = (item) => {
    dispatch(removeFromSaved(item));
  };

  return (
    <>
      {savedItems.length === 0 ? (
        <div className="container">No News Saved</div>
      ) : (
        <div className="container">
          <div className="row">
            {savedItems.map((news, index) => (
              <div className="col-md-4 py-2" key={index}>
                <NewsItem
                  url={news?.url}
                  urlToImage={news?.urlToImage}
                  key={index}
                  title={news?.title}
                  description={news?.description}
                  onClick={() => {
                    savedItems.find((item) => item.title === news.title)
                      ? handleRemoveFromSaved(news)
                      : handleAddToSaved(news);
                  }}
                  buttonName={
                    savedItems?.find((item) => item.title === news.title)
                      ? "Unsave"
                      : "Save"
                  }
                />
              </div>
            ))}
          </div>
          <div>{loading && <Spinners />}</div>
        </div>
      )}
    </>
  );
}

export default Saved;
