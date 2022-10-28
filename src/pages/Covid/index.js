import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/covidSlice";

import NewsItem from "../../components/NewsItem";
import { addToSaved, removeFromSaved } from "../../features/savedSlice";
import Spinners from "../../components/Spinner";

function Covid() {
  const dispatch = useDispatch();

  const allNews = useSelector((state) => state.covid.article);
  const loading = useSelector((state) => state.covid.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const savedItems = useSelector((state) => state.saved.savedItems);

  const handleAddToSaved = (item) => {
    dispatch(addToSaved(item));
  };
  const handleRemoveFromSaved = (item) => {
    dispatch(removeFromSaved(item));
  };

  return (
    <div className="container">
      <div className="row">
        {allNews.map((news, index) => (
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
  );
}

export default Covid;
