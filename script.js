//You can edit ALL of the code here
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

//window.onload = setup;
const myArray = getAllEpisodes();
//calling the card image element
var img2 = document.querySelectorAll('.card-img-top')
//for loop through the image elements
for (let img = 0; img < img2.length; img++) { 
img2[img].src = "http://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg";
}
//for loop of the images that I cannot connect to the card image element
for (let img = 0; img < getAllEpisodes().length; img++) { //loop through the movie images and all to produce a new movie img everytime. 
//console.log(getAllEpisodes().image.medium) //try to source the images like the dj
}

//calling the p element
var para = document.querySelectorAll(".card-text");
//para.innerHTML = 'boohoo';
//looping through the p element
for (let p = 0; p < para.length; p++) {
  //para.innerHTML = 'boohoo';
  //console.log(para) also doing the loop of the array
  for (let s = 0; s < myArray.length; s++) {
  para[p].innerHTML = `${myArray[s].summary}`; // why won't this iterate through???
}
}
// loop through the episode summary 

//calling the card title h5 element
var cardName = document.querySelectorAll(".card-title");
//looping through all the h5 elements
for (let i = 0; i < cardName.length; i++) {
//loop through the movie names and all to produce a new movie everytime. 
for (let i = 0; i < getAllEpisodes().length; i++) { 
  cardName[i].innerHTML = `${getAllEpisodes()[i].name} - S0${getAllEpisodes()[i].season}E0${getAllEpisodes()[i].number}`; //theres an error here that idk how to fix but we mooove.
}
}




//why don't you create a function that loops through everything? that way you can loop through the elements (parameter 1) and loop through the array function (parameter 2)//
