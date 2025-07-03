
const API_KEY = "e551342301b86735854aef8e8d0da866";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};







// const API_key = "5a17ef30";
// const API_key = "e551342301b86735854aef8e8d0da866";
// const url = "https://api.themoviedb.org/3";

// export const getPopularMovies = async () => {
//   const response = await fetch(`${url}/movie/popular?api_key=${API_key}`);
//   const data = await response.json();
//   return data.results;
// };

// export const searchMovies = async (query) => {
//   const response = await fetch(
//     `${url}/search/movie?api_key=${API_key}&query=${encodeURIComponent(
//       query
//     )}`
//   );
//   const data = await response.json();
//   return data.results;
// };

// export const getmovies = async() => {
//     const res = await fetch('${url}/movie/popular?api_key=${API_key}');
//     const data = await res.json(); 
//     return data.results;
// };

// export const searchmovis = async (query) => {
//   const res = await fetch(
//     `${url}/search/movie?api_key=${API_key}&query=${encodeURIComponent(
//       query
//     )}`
//   );
//   const data = await res.json();
//   return data.results;
// };