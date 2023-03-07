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

// Create array with Object keys (Movie Titles)
let movies_title = Object.keys(movies);
movies_title = movies_title.sort();

// Get dropdown "sort by" value (alphabetical by default)
const select = document.getElementById("selector");
let sortBy = select.value;

const moviesContainer = document.querySelector(".moviesContainer");

// Display movies by alphabetical order by default

movies_title.forEach((movie) => {
  moviesContainer.append(createCard(movie));
});

select.addEventListener("change", (event) => {
  console.log(event.target.value);
  sortBy = event.target.value;
  while (moviesContainer.firstChild) {
    moviesContainer.removeChild(moviesContainer.firstChild);
  }
  let sorted_movies = orderBy(sortBy, movies_title, movies);
  sorted_movies.forEach((element) => {
    moviesContainer.append(createCard(element));
  });
});

// "Create a card" takes one argument, the name of a movie (the key of the Movies object)
function createCard(key) {
  // Create a card with a title, a picture and a corresponding pop up
  let movieCard = document.createElement("div");
  let movieTitle = document.createElement("div");
  let popUp = document.createElement("div");
  let pic = document.createElement("img");

  // "lookForPic" will standardize the name of the images given they are inserted
  // ḅy the user correctly and they are in jpg format.
  // It reduces the name of the file to look for into a lower case single string with no white space
  let lookForPic = key.toLowerCase().replace(/\s/g, "");
  pic.src = "/static/" + lookForPic + ".jpg";

  // Append the inner elements of movieCard and add name attribute + css
  movieCard.append(pic, movieTitle, popUp);
  movieCard.setAttribute("name", key);
  movieCard.classList.add("movieCard", "borders");

  // Insert name of movie in movieTitle + css
  movieTitle.innerHTML = key;
  movieTitle.classList.add("movietitle");

  // Add name attribute + css and fill content
  popUp.setAttribute("id", key);
  popUp.classList.add("popup");
  fillContentPopUp(key, popUp);

  // Event listener added to each card: everytime it is clicked show pop up
  movieCard.addEventListener("click", () => {
    popUp.classList.toggle("hide");
  });

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

// Sorting function where sortByValue is "alphabetical", "year" or "rating"
function orderBy(sortByValue, moviesTitleArray, moviesObject) {
  let sorted_selected_values = [];
  let sorted_movies = [];

  // Iterate through "movies" object with titles
  for (let i = 0; i < moviesTitleArray.length; i++) {
    // If sortByValue === year or rating iterate through every movie,
    // get the values you need and push them into a (ascending) sorted array
    if (sortByValue !== "alphabetical") {
      sorted_selected_values.push(
        // example for the following line: moviesobject[moviesTitleArray["The Darjeeling Limited"]][rating]
        moviesObject[moviesTitleArray[i]][sortByValue]
      );
      sorted_selected_values.sort().reverse();
    } else {
      return moviesTitleArray.sort();
    }
  }

  // Compare each element of the sorted_selected_values array with every movie object corresponding key.
  sorted_selected_values.forEach((element) => {
    moviesTitleArray.forEach((title) => {
      if (element === moviesObject[title][sortByValue]) {
        sorted_movies.push(title);
      }
    });
  });
  console.log("SORTED MOVIES" + sorted_movies);
  return sorted_movies;
}
