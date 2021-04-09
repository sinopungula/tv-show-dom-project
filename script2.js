//lets pull all the elements
var title = document.getElementsByClassName('card-title')
var thumbnail = document.getElementsByTagName('img')
var text = document.querySelectorAll('.card-text')


//lets try a function :))

function tryLooping(element) {
    for (let i = 0; i < element.length; i++) {
    console.log(i);
};
}

//lets pull from the array now. 

//name and number of episodes
var myArray = getAllEpisodes();
myArray.forEach(el => {
console.log(`${el.name} - S0${el.season}E0${el.number}`)     
});
console.log(tryLooping(text)); //seems to work, with an undefined afterwards when it calls this line, we'll see about that later

var hmm = tryLooping(text)[i].innerHTML = myArray.name
console.log(hmm)

//console.log(`${getAllEpisodes().name} - S0${getAllEpisodes().season}E0${getAllEpisodes().number}`);
// console.log(getOneEpisode().season);
// console.log(getOneEpisode().number);
