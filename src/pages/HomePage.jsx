import React, { useEffect } from "react";
import StaticFour from "../components/StaticFour";
import Environment from "../sections/Environment";
import GridOneForThree from "../components/GridOneForThree";
import SwiperForFour from "../components/SwiperForFour";
import RowWiseNews from "../components/RowWiseNews";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchBreakingNews,
  fetchSportsNews,
  fetchBusinessNews,
  fetchCultureNews,
  fetchEntertainmentNews,
  fetchEnvironmentNews,
  fetchFashionNews,
  fetchIndiaNews,
  fetchMoviesNews,
  fetchPoliticsNews,
  fetchShareMarketNews,
  fetchSpaceNews,
  fetchTravelNews,
  fetchWeatherNews,
} from "../redux/NewsSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const breaking = useSelector((state) => state.news.breaking);
  const sports = useSelector((state) => state.news.sports);
  const culture = useSelector((state) => state.news.culture);
  const entertainment = useSelector((state) => state.news.entertainment);
  const environment = useSelector((state) => state.news.environment);
  const india = useSelector((state) => state.news.india);
  const space = useSelector((state) => state.news.space);
  const movies = useSelector((state) => state.news.movies);

  useEffect(() => {
    if (breaking.length == 0) {
      dispatch(fetchBreakingNews());
      dispatch(fetchSportsNews());
      dispatch(fetchBusinessNews());
      dispatch(fetchCultureNews());
      dispatch(fetchEntertainmentNews());
      dispatch(fetchEnvironmentNews());
      dispatch(fetchFashionNews());
      dispatch(fetchIndiaNews());
      dispatch(fetchMoviesNews());
      dispatch(fetchPoliticsNews());
      dispatch(fetchShareMarketNews());
      dispatch(fetchSpaceNews());
      dispatch(fetchTravelNews());
      dispatch(fetchWeatherNews());
      console.log("downloading");
    } else {
      console.log("already downloaded");
    }
  }, []);
  return (
    <div className="homepage">
      <SwiperForFour heading="Breaking News" data={breaking} />
      <StaticFour heading="Happening In India" data={india} />
      {culture?.length > 0 && movies?.length > 0 && (
        <div className="columns">
          <RowWiseNews heading="Cultural Happenings" data={culture} />
          <RowWiseNews heading="News For You" data={movies} />
        </div>
      )}
      <Environment data={environment} />
      <SwiperForFour heading="Sports" data={sports} />
      <GridOneForThree heading="News from Space" data={space} />
      <SwiperForFour
        heading="Entertainment You're Interested in"
        data={entertainment}
      />
    </div>
  );
};

export default HomePage;
