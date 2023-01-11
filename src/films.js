// Exercise 1: Get the array of all directors.
// Ejercicio 1: Obtener el array de todos los directores.


// El método Array.map() te permite iterar sobre un arreglo y modificar sus elementos utilizando una función callback. La función callback se ejecutará entonces en cada uno de los elementos del arreglo.
function getAllDirectors(array) {
  let result = array.map(element =>{
    return element.director;
   } );
  //  console.log("EXERCICE 1 ->", result);
  return result;

}

// console.log(getAllDirectors(movies));  testeando



// Exercise 2: Get the films of a certain director
// Ejercicio 2: Conseguir las películas de un determinado director

// El método filter() toma una función callback y llama a esa función para cada elemento sobre el que itera dentro del arreglo de destino.
function getMoviesFromDirector(array, director) {
const moviesFromDirector = array.filter(element => {
  return element.director == director;
});
//  console.log("Exercice 2 ->", moviesFromDirector);
 return moviesFromDirector;
 
}
// console.log(getMoviesFromDirector(movies));


// Exercise 3: Calculate the average of the films of a given director.
// Ejercicio 3: Calcula la media de las películas de un director determinado.
function moviesAverage(array){
  // la función moviesAverage(), la cual repite un array de películas y devuelve la nota media, con dos decimales.
  //El método reduce() aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.
 
  const initialValue = 0;
  const noEmptyValues = array.filter(elemento => elemento.score != '');
  const moviesAverageSum = noEmptyValues.reduce((valorAcumulador, valorActual) => {
    return valorAcumulador + valorActual.score;
  }, initialValue);

  const numberOfFilms = noEmptyValues.length;
  const moviesAverageScore = parseFloat((moviesAverageSum/numberOfFilms).toFixed(2));

  return moviesAverageScore;


}


function moviesAverageOfDirector(array, director) {
  const moviesFromDirector = getMoviesFromDirector(array, director);
  const moviesAverageOfDirector = moviesAverage(moviesFromDirector);
  // console.log("Exercice 3 ->", moviesAverageOfDirector);
  return moviesAverageOfDirector;


  }
  // console.log(moviesAverageOfDirector(movies, "Steven Spielberg"));


// Exercise 4:  Alphabetic order by title 
// Ejercicio 4: Orden alfabético por título 

function orderAlphabetically(array) {
  const orderAlphabetically = array.map(element => {
    return element.title;
  });
  // metodo sort() está diseñado para ordenar los valores de la matriz como cadenas en base a la posición de cada letra
  orderAlphabetically.sort();

  // El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).
  const orderAlphabeticallyLimit = orderAlphabetically.slice(0, 20);
  // console.log("Exercice 4 ->", orderAlphabeticallyLimit);
  return orderAlphabeticallyLimit;
}


// console.log(orderAlphabetically(movies));

// Exercise 5: Order by year, ascending
// Ejercicio 5: Ordenar por año, ascendente
function orderByYear(array) {
const arrayByYear = [...array] // se utiliza para crear una copia del array existente en lugar de simplemente asignar una referencia a la misma posición de memoria.

// El método sort() ordena los elementos de un array en su lugar y devuelve el array. El orden es estable. El algoritmo de ordenación es implementado de forma nativa en cada navegador.

// arrayByYear.sort((a, b) => {
//   if (a.year > b.year) {
//     return 1;
//   } else if (a.year < b.year) {
//     return -1;
//   } else {
//     if (a.title > b.title) {
//       return 1;
//     } else if (a.title < b.title) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }
// });

arrayByYear.sort((a, b) => (a.year > b.year) ? 1 : (a.year < b.year) ? -1 : (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);

// console.log("Exercice 5 ->", arrayByYear);
return arrayByYear;
}

// console.log(orderByYear(movies))

// Exercise 6: Calculate the average of the movies in a category
// Ejercicio 6: Calcular la media de las películas de una categoría
function moviesAverageByCategory(array, category) {
  const moviesByCategory =array.filter(element => {
    return element.genre.includes(category);
  });
  const moviesAverageByCategory = moviesAverage(moviesByCategory);
  return moviesAverageByCategory;

}

// console.log(moviesAverageByCategory(movies, "Drama"));


// Exercise 7: Modify the duration of movies to minutes
  // Ejercicio 7: Modificar la duración de las películas a minutos
function hoursToMinutes(array) {

  const hoursToMinutes = array.map(element => {
    let hours = 0;
    let minutes = 0;
    if (element.duration.includes('h')) {
      hours = parseInt(element.duration.split('h')[0]);
    }
    if (element.duration.includes('min')) {
      minutes = parseInt(element.duration.split(' ')[1].split('min')[0]);
    }
    const durationInMinutes = hours * 60 + minutes;
    return {
      ...element,
      // duration: durationInMinutes +'min',
      duration: durationInMinutes,
    };
  }
  );
  // console.log("Exercice 7 ->", hoursToMinutes);
  return hoursToMinutes;
}
//  console.log(hoursToMinutes(movies));



// Exercise 8: Get the best film of a year
// Ejercicio 8: Consigue la mejor película del año
function bestFilmOfYear(array, bestyear) {

//  accepti l'any, i retorni la millor pel·lícula d'aquest any.
// 1. Filtrar per any
// 2. Ordenar per puntuació
// 3. Retornar la primera pel·lícula

  const bestFilmOfYearArray = array.filter(element => element.year == bestyear)

  const bestFilmOfYear = bestFilmOfYearArray.reduce((anterior, actual)=>{
    if (anterior.score > actual.score) {
      return anterior;
    } else {
      return actual;
    }
  });

  const resultado =[];
  resultado.push(bestFilmOfYear);
  // console.log("Exercice 8 ->", resultado);
  return resultado;
  
}
// console.log(bestFilmOfYear(movies, 2001));


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
