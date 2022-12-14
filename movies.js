let movieData = {
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
    }
  };


  // Get dropdown "sort by" value
let select = document.getElementById("selector")
select.addEventListener("change" , (event) => {
  console.log(event.target.value)
})
// NEED TO WORK ON THIS SORTING FUNCTION
// let variable = "rating"
// let arr = []
// function sortingBy (variable) {
//   // Create sorted(descending values) array with dropdown selected option 
//     for(let i = 0; i < titles.length; i++) {
//         arr.push(movieData[titles[i]][variable])
//     }
//     arr = arr.sort().reverse()
//     return arr 
// }
// console.log(sortingBy(variable))




// Create array with Object keys (Movie Titles)
let titles = Object.keys(movieData)
titles = titles.sort()

// Display movies by alphabetical order by defualt
let container = document.querySelector(".moviesContainer")

titles.forEach( key => {
  createCard(key)
})



// NOT WORKING VERY WELL
// Show movie pop up if movie-div is clicked.
let moviesArray = document.querySelectorAll(".movieCard")
for (let i = 0; i < moviesArray.length; i++) {
  moviesArray[i].addEventListener ("click", (e) => {
    let selectedTitle = e.currentTarget.getAttribute("name")
    let popUp = document.getElementById(selectedTitle)
    popUp.classList.toggle("hide")
  })
  
} 

// Create a card for each movie in the database 
function createCard(key) {
  let movieCard = document.createElement("div")
  let card = document.createElement("div")
  let movieTitle = document.createElement("div")
  let pic = document.createElement("img")
  pic.src = "/static/video.png"
  let popUp = document.createElement("div")
  
  container.append(movieCard)
  movieCard.append(card, movieTitle, popUp)
  card.append(pic)
  popUp.setAttribute("id" , key)
  movieTitle.innerHTML = key;

  movieCard.setAttribute("name" , key)
  movieCard.classList.add("movieCard", "borders")
  movieTitle.classList.add("movietitle")
  popUp.classList.add("popup")
  fillContentPopUp(key, popUp);
}
// Create content in the pop up
function fillContentPopUp(title, selectedDiv) {
  // this accesses the Object with key = titleMovie
  let movieObject = movieData[title] 
  // Loop through key/value pair of the selected movie object
  let keys = Object.keys(movieObject)
  keys.forEach(key => {
    let main = document.createElement("h2")
    main.innerHTML = key
    let paragraph = document.createElement("p")
    paragraph.innerHTML = movieObject[key]
    selectedDiv.append(main , paragraph)   
  })
  
  
}




