let slideIndex = -1;
let funFacts = [];

for (let i = 0; i < 10 ; i++) {
  httpGet("https://uselessfacts.jsph.pl/random.json?language=en");
}


function httpGet(theUrl) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", theUrl, false); 
  xmlHttpReq.send(null);
  let urlResponse = xmlHttpReq.responseText;
  let site = JSON.parse(urlResponse);
  funFacts.push(site.text);
  console.log(site.text);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(listIndex) {
  if (listIndex >= funFacts.length) {
    slideIndex = 0;
    listIndex = slideIndex;
  }
  if (listIndex < 0) {
    slideIndex = funFacts.length - 1;
    listIndex = slideIndex;
  }

  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[listIndex].className += " active";

  document.getElementById("numberText").innerHTML = listIndex + 1 + "/" + funFacts.length;
  document.getElementById("placeHolderText").innerHTML = funFacts[listIndex];
}