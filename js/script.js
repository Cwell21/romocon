// SCRIPT FOR ROMOCON
console.log("Starting Script...")


/****************************************************
GLOBAL CODE CODE
****************************************************/
setTimeout(
  () => {
    let el = document.getElementById("homeDisclaimer");
    el.style.display = "block";
  }, 500);

/****************************************************
INDEX.HTML CODE
****************************************************/
// ARRAY TO HOLD DATA FOR NEWS STORY CAROUSEL
const newsStories = [
  {
    id: 1,
    title: "Conservancy Leads Effort to Protect Wild Basin Parcel",
    image: "js/news/newsImages/wildBasin.jpg",
    text: "../js/news/wildBasin.txt"
  },
  {
    id: 2,
    title: "Cascade Cottages: Next Steps",
    image: "js/news/newsImages/casCottages.jpg",
    text: "../js/news/cascadeCottages.txt"
  },

]

let newsStory = function(story) {
  
  const xhttp = new XMLHttpRequest();
  var slideStory;

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      let elText = document.getElementById("newsText");
      elText.innerHTML = xhttp.responseText;
           
    }else {
      return "Fatal Error!"
    }    
  }
  xhttp.open("GET", story, true);
  xhttp.send();
  console.log(slideStory);
  return slideStory;
}

const newsSlide = (function() {
  console.log("IIFI function called..")
  
  //INITIALIZE SLIDE COUNTER
  let slide = 1;

  //FUNCTION TO HANDLE SLIDE SHOW DATA
  currentSlide = () => {
    let elHeadline = document.getElementById("newsHeadline");
    let elPic = document.getElementById("newsPic");
    let elText = document.getElementById("newsText");
    
    elHeadline.innerHTML = newsStories[slide].title;
    elPic.src = newsStories[slide].image;
    elPic.alt = newsStories[slide].title;
    newsStory(newsStories[slide].text)

    if (slide < newsStories.length - 1  && slide > -1) {
      slide = slide + 1;      
    }else {
      slide = 0;
    }    
  }
  //CRETE CLOSURE
  return currentSlide; 
}());


function closeBox() {
  let el = document.getElementById("homeDisclaimer")
  el.style.display = "none";
}

// TIME FUNCTIONS
setInterval(
  () => {
    newsSlide();
  }, 8000);



/****************************************************
JOIN.HTML CODE
****************************************************/
function initJoin() {
  let elBanner = document.getElementsByClassName('banner');
  elBanner[0].style.height = '0px';
}