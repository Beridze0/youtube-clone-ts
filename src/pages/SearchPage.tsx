import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoList from "@/components/custom/VideoList";
import { addSearchQuery } from "@/redux/searchSlice"; // Action to set query in state

const SearchPage = () => {
  const { query } = useParams(); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (query) {
      dispatch(addSearchQuery(query)); 
    }
  }, [dispatch, query]);

  return (
    <div className="">
      <VideoList />
    </div>
  );
};

export default SearchPage;
