import { useDispatch } from "react-redux";
import { useEffect } from "react";
import VideoList from "@/components/custom/VideoList";
import { addSearchQuery } from "@/redux/searchSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSearchQuery("trending"));
  }, [dispatch]);

  return (
    <div className="">
      <VideoList />
    </div>
  );
};

export default HomePage;
