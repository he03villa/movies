// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlImg: 'https://image.tmdb.org/t/p/w220_and_h330_face',
  url: 'https://api.themoviedb.org/3/',
  key: '21f658cee12cd6fbb2d5ced8d8f1a5dd',
  api: {
    list: 'movie/popular?api_key=<<api_key>>&language=es-ES&page=<<page>>',
    search: 'search/movie?api_key=<<api_key>>&language=es-ES&query=<<query>>&page=<<page>>&include_adult=false',
    detalils: 'movie/{movie_id}?api_key=<<api_key>>&language=es-ES'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
