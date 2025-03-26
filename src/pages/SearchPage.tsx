import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoList from "@/components/custom/VideoList";
import { addSearchQuery } from "@/redux/searchSlice"; 

const SearchPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (query) {
      const existingSearchHistory = JSON.parse(
        localStorage.getItem("search-history") || "[]"
      );

      if (!existingSearchHistory.includes(query)) {
        existingSearchHistory.push(query);
        localStorage.setItem(
          "search-history",
          JSON.stringify(existingSearchHistory)
        );
        dispatch(addSearchQuery(query));
      }
    }
  }, [dispatch, query]);

  return (
    <div className="">
      <VideoList />
    </div>
  );
};

export default SearchPage;
