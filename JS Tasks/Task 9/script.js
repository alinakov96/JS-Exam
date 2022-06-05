/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function Movie(title, director, budget) {
  this.title = title;
  this.director = director;
  this.budget = budget;
  this.wasExpensive = function () {
    if (this.budget > 100000000) {
      console.log(true);
    } else {
      console.log(false);
    }
  };
}

let film = new Movie("Avatar", "James Cameron", 237000000);
let film1 = new Movie("Titanic", "James Cameron", 200000000);
let film2 = new Movie("The Last Airbender", "M. Night Shyamalan", 150000000);
let film3 = new Movie("Avengers:Endgame", "Anthony & Joe Russo", 356000000);
let film4 = new Movie("The Notebook", "Nick Cassavetes", 29000000);
let film5 = new Movie("Step Up 2", "Jon M. Chu", 17500000);
let film6 = new Movie("Step Up 3", "Jon M. Chu", 30000000);

film.wasExpensive();
film1.wasExpensive();
film2.wasExpensive();
film3.wasExpensive();
film4.wasExpensive();
film5.wasExpensive();
film6.wasExpensive();

//complete
