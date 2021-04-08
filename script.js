//You can edit ALL of the code here
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

// window.onload = setup;

//calling the card image element
var img2 = document.querySelectorAll('.card-img-top')
//for loop through the image elements
for (let img = 0; img < img2.length; img++) { 
img2[img].src = "http://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg";
}

//for loop of the images that I cannot connect to the card image element
for (let img = 0; img < getAllEpisodes().length; img++) { //loop through the movie images and all to produce a new movie img everytime. 
console.log(getAllEpisodes().image.medium) //try to source the images like the dj
}

//calling the card title h5 element
var cardName = document.querySelectorAll(".card-title");
for (let i = 0; i < cardName.length; i++) {
//loop through the movie names and all to produce a new movie everytime. 
for (let i = 0; i < getAllEpisodes().length; i++) { 
  cardName[i].innerText = `${getAllEpisodes()[i].name} - S0${getAllEpisodes()[i].season}E0${getAllEpisodes()[i].number}`; //theres an error here that idk how to fix but we mooove.
}
}


