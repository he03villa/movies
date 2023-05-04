export const environment = {
  production: true,
  urlImg: 'https://image.tmdb.org/t/p/w220_and_h330_face',
  url: 'https://api.themoviedb.org/3/movie/550/',
  key: '21f658cee12cd6fbb2d5ced8d8f1a5dd',
  api: {
    list: 'movie/popular?api_key=<<api_key>>&language=es-ES&page=<<page>>',
    search: 'search/movie?api_key=<<api_key>>&language=es-ES&query=<<query>>&page=<<page>>&include_adult=false',
    detalils: 'movie/{movie_id}?api_key=<<api_key>>&language=es-ES'
  }
};
