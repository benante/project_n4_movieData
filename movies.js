let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    }
  };




//RIGHT ONE!!!!! 
// console.log(TheGBH)
let titles = Object.keys(movieData)
// Display movies
let container = document.querySelector(".moviesContainer")
titles.forEach( key => {
  
  let movieCard = document.createElement("div")
  let card = document.createElement("div")
  let movieTitle = document.createElement("div")
  let pic = document.createElement("img")
  pic.src = "/static/video.png" 
  
  container.append(movieCard)
  movieCard.append(card)
  card.append(pic)
  movieCard.append(movieTitle)
  movieTitle.innerHTML = key;

  movieCard.setAttribute("name" , key)
  movieCard.classList.add("movieCard", "borders")
  movieTitle.classList.add("movietitle")

  
})

let moviesArray = document.querySelectorAll(".movieCard").length
for (let i = 0; i < moviesArray; i++) {
  document.querySelectorAll(".movieCard")[i].addEventListener ("mousedown", (e) => {
    let title = e.currentTarget.getAttribute("name")
    console.log(title)
    let popUp = document.createElement("div")
    let currentDiv = document.getElementsByName(title)[0]
    currentDiv.append(popUp)
  })
} 


