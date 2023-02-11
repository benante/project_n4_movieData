let movies = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    year: 2007,
    rating: 7.2,
    runtime: 151,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    year: 2001,
    rating: 7.6,
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    year: 2009,
    rating: 7.9,
    runtime: 147,
  },
  "The Grand Budapest Hotel": {
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    year: 2014,
    rating: 8.1,
    runtime: 159,
  },
};

const moviesContainer = document.querySelector(".moviesContainer");

// Create array with Object keys (Movie Titles) and sort it alphabetically
let movies_title = Object.keys(movies);
movies_title = movies_title.sort();

// Get dropdown "sort by" value (alphabetical by default)
const select = document.getElementById("selector");
let sortBy = select.value;



// DISPLAY movies by alphabetical order by default
movies_title.forEach((movie) => {
  moviesContainer.append(createCard(movie));
});



// DISPLAY movies according to year, rating or back to alphabetical
select.addEventListener("change", (event) => {
  console.log(event.target.value);
  sortBy = event.target.value;
  while (moviesContainer.firstChild) {
    moviesContainer.removeChild(moviesContainer.firstChild);}
  let sorted_movies = orderBy(sortBy, movies_title, movies);
  sorted_movies.forEach(element => {
    moviesContainer.append(createCard(element))
  });
});



function orderBy(sortByValue, movies_title, movies) {
  // GET VALUES YOU NEED FROM MOVIES OBJECT AND SORT THEM
  let sorted_selected_values = [];
  let sorted_movies = [];

  // Iterate through "movies" object with titles, get the values you need ("rating" , "year"...) and
  // push them into an ordered array
  for (let i = 0; i < movies_title.length; i++) {
    if (sortByValue !== "alphabetical") {
      console.log("value: " + sortByValue);
      sorted_selected_values.push(movies[movies_title[i]][sortByValue]);
      sorted_selected_values.sort().reverse();
    } else {
      return movies_title.sort();
    }
  }
  // Iterate through each movie and compare each sortByValue (ex "rating").
  // When there's a match insert the name of the movie in the sorted_movie array that the createCard function
  // will eventually take as argument
  for (let i = 0; i < sorted_selected_values.length; i++) {
    for (let y = 0; y < movies_title.length; y++) {
      if (sorted_selected_values[i] === movies[movies_title[y]][sortByValue]) {
        sorted_movies.push(movies_title[y]);
      }
    }
  }
  return sorted_movies;
}



// Create a card movie 
function createCard(key) {
  let movieCard = document.createElement("div");
  let movieTitle = document.createElement("div");
  // lookForPic will standardize the name of the images given they are inserted
  // ḅy the user correctly and they are in jpg format
  let lookForPic = key.toLowerCase().replace(/\s/g, "");
  let pic = document.createElement("img");
  pic.src = "/static/" + lookForPic + ".jpg";
  let popUp = document.createElement("div");

  // moviesContainer.append(movieCard)
  movieCard.append(pic, movieTitle, popUp);
  // card.append(pic)
  popUp.setAttribute("id", key);
  movieTitle.innerHTML = key;

  movieCard.setAttribute("name", key);
  movieCard.classList.add("movieCard", "borders");
  movieTitle.classList.add("movietitle");
  popUp.classList.add("popup");
  fillContentPopUp(key, popUp);
  return movieCard;
}



// Create content in the pop up
function fillContentPopUp(title, selectedDiv) {
  // this accesses the Object with key = titleMovie
  let movieObject = movies[title];
  // Loop through key/value pair of the selected movie object
  let keys = Object.keys(movieObject);
  keys.forEach((key) => {
    let main = document.createElement("h2");
    main.innerHTML = key;
    let paragraph = document.createElement("p");
    paragraph.innerHTML = movieObject[key];
    selectedDiv.append(main, paragraph);
  });
}

// POP UP -------NOT WORKING VERY WELL
// Show movie pop up if movie-div is clicked.
let moviesArray = document.querySelectorAll(".movieCard");
for (let i = 0; i < moviesArray.length; i++) {
  moviesArray[i].addEventListener("click", (e) => {
    let selectedTitle = e.currentTarget.getAttribute("name");
    let popUp = document.getElementById(selectedTitle);
    popUp.classList.toggle("hide");
  });
}