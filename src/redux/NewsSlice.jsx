import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const BASE_URL = `https://newsapi.org/v2/top-headlines`;
const BASE_URL = `https://newsapi.org/v2/everything`;
const API_KEY = `apiKey=51003ed9f93f4abca6a97248915311ff`;

export const fetchBreakingNews = createAsyncThunk(
  "news/breakingnews",
  async () => {
    const response = await fetch(`${BASE_URL}?q=breaking&${API_KEY}`).then(
      (response) => response.json()
    );
    if (response.status == "error") {
      alert("API limit Exceeded! Please try again after 24 Hours.");
      console.log("API limit Exceeded! Please try again after 24 Hours.");
    } else {
      return response;
    }
  }
);
export const fetchSportsNews = createAsyncThunk("news/sportsnews", async () => {
  const response = await fetch(`${BASE_URL}?q=sports&${API_KEY}`).then(
    (response) => response.json()
  );
  return response;
});
export const fetchBusinessNews = createAsyncThunk(
  "news/businessnews",
  async () => {
    const response = await fetch(`${BASE_URL}?q=business&${API_KEY}`).then(
      (response) => response.json()
    );
    return response;
  }
);
export const fetchEnvironmentNews = createAsyncThunk(
  "news/environmentnews",
  async () => {
    const response = await fetch(`${BASE_URL}?q=recycle&${API_KEY}`).then(
      (response) => response.json()
    );
    return response;
  }
);
export const fetchIndiaNews = createAsyncThunk("news/indianews", async () => {
  const response = await fetch(`${BASE_URL}?q=india&${API_KEY}`).then(
    (response) => response.json()
  );
  return response;
});
export const fetchCultureNews = createAsyncThunk(
  "news/culturenews",
  async () => {
    const response = await fetch(`${BASE_URL}?q=culture&${API_KEY}`).then(
      (response) => response.json()
    );
    return response;
  }
);
export const fetchEntertainmentNews = createAsyncThunk(
  "news/entertainmentnews",
  async () => {
    const response = await fetch(`${BASE_URL}?q=environment&${API_KEY}`).then(
      (response) => response.json()
    );
    return response;
  }
);
export const fetchSpaceNews = createAsyncThunk("news/spacenews", async () => {
  const response = await fetch(`${BASE_URL}?q=space&${API_KEY}`).then(
    (response) => response.json()
  );
  return response;
});
export const fetchMoviesNews = createAsyncThunk("news/movienews", async () => {
  const response = await fetch(`${BASE_URL}?q=movie&${API_KEY}`).then(
    (response) => response.json()
  );
  return response;
});
export const fetchPoliticsNews = createAsyncThunk(
  "news/politicsnews",
  async () => {
    const response = await fetch(`${BASE_URL}?q=politics&${API_KEY}`).then(
      (response) => response.json()
    );
    return response;
  }
);
export const fetchFashionNews = createAsyncThunk(
  "news/fashionnews",
  async () => {
    const response = await fetch(`${BASE_URL}?q=fashion&${API_KEY}`).then(
      (response) => response.json()
    );
    return response;
  }
);
export const fetchShareMarketNews = createAsyncThunk(
  "news/sharemarketnews",
  async () => {
    const response = await fetch(`${BASE_URL}?q=market&${API_KEY}`).then(
      (response) => response.json()
    );
    return response;
  }
);
export const fetchTravelNews = createAsyncThunk("news/travelnews", async () => {
  const response = await fetch(`${BASE_URL}?q=travel&${API_KEY}`).then(
    (response) => response.json()
  );
  return response;
});
export const fetchWeatherNews = createAsyncThunk(
  "news/weathernews",
  async () => {
    const response = await fetch(`${BASE_URL}?q=weather&${API_KEY}`).then(
      (response) => response.json()
    );
    return response;
  }
);
export const fetchByKeyword = createAsyncThunk(
  "news/keyword",
  async (query) => {
    const response = await fetch(`${BASE_URL}?q=${query}&${API_KEY}`).then(
      (response) => response.json()
    );
    return response;
  }
);

let initialState = {
  breaking: [],
  sports: [],
  business: [],
  environment: [],
  india: [],
  culture: [],
  entertainment: [],
  space: [],
  movies: [],
  politics: [],
  fashion: [],
  shareMarket: [],
  travel: [],
  weather: [],
  query: [],
  inputQuery: "",
};
const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newQuery: (state, { payload }) => {
      state.inputQuery = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreakingNews.fulfilled, (state, { payload }) => {
        state.breaking = payload?.articles;
      })
      .addCase(fetchSportsNews.fulfilled, (state, { payload }) => {
        state.sports = payload.articles;
      })
      .addCase(fetchBusinessNews.fulfilled, (state, { payload }) => {
        state.business = payload.articles;
      })
      .addCase(fetchEnvironmentNews.fulfilled, (state, { payload }) => {
        state.environment = payload.articles;
      })
      .addCase(fetchIndiaNews.fulfilled, (state, { payload }) => {
        state.india = payload.articles;
      })
      .addCase(fetchCultureNews.fulfilled, (state, { payload }) => {
        state.culture = payload.articles;
      })
      .addCase(fetchEntertainmentNews.fulfilled, (state, { payload }) => {
        state.entertainment = payload.articles;
      })
      .addCase(fetchSpaceNews.fulfilled, (state, { payload }) => {
        state.space = payload.articles;
      })
      .addCase(fetchMoviesNews.fulfilled, (state, { payload }) => {
        state.movies = payload.articles;
      })
      .addCase(fetchPoliticsNews.fulfilled, (state, { payload }) => {
        state.politics = payload.articles;
      })
      .addCase(fetchFashionNews.fulfilled, (state, { payload }) => {
        state.fashion = payload.articles;
      })
      .addCase(fetchShareMarketNews.fulfilled, (state, { payload }) => {
        state.shareMarket = payload.articles;
      })
      .addCase(fetchTravelNews.fulfilled, (state, { payload }) => {
        state.travel = payload.articles;
      })
      .addCase(fetchWeatherNews.fulfilled, (state, { payload }) => {
        state.weather = payload.articles;
      })
      .addCase(fetchByKeyword.fulfilled, (state, { payload }) => {
        state.query = payload.articles;
      });
  },
});

export default NewsSlice.reducer;
export const { newQuery } = NewsSlice.actions;
