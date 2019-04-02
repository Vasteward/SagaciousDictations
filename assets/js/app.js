//When the user scrolls the page execute scroll()

// window.onscroll = function(){
//     scroll()
// };

// Get the header
// var header = document.getElementById("header");

// Get the offset postion of the navaar
// var sticky = header.offsetTop;




// Get the header
// var blogTitle = document.getElementsByClassName("blog-title");

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

function myFunction(x) {
  // x.style.transition = "all .2s";
  x.classList.toggle("change");
}


// SHOW NAV
  //object.style.transition = "property duration timing-function delay|initial|inherit"
  
function showVerticalNav(){
  var show = document.getElementById('showNav');
  var t = "width .02s ease-in-out .05s";
  // console.log(t);
  if(show.style.display === "grid"){
    
    show.style.display = "none";
    show.style.transition = t;
    console.log(t);
  } else {
    show.style.display = "grid";
    show.style.transition =t;
    console.log(t);
  }
}


// STICKY HEADER

window.onscroll = function(){
  stickTop();
  scroll();
  // shrinkTitle();
  // mediaChange(desktop_query);

};

var header = document.getElementById("nav-container");
var sticky = header.offsetTop;
var pgTitle = document.getElementsByClassName('landing');
var navBar = document.getElementById('showNav');

var len = pgTitle.length;




///
// var navLinks = x;
var firstTitle = pgTitle[0].children[0];
var secondTitle = pgTitle[0].children[0].nextElementSibling;
var textTitle = pgTitle[0].children[2];
var t = "all .5s";
///


function stickTop(){
  firstTitle.style.transition = t;
  secondTitle.style.transition = t;
  if (window.pageYOffset > sticky ) {
    header.classList.add("sticky");
    navBar.style.display = 'none';
    for(var i = 0; i < len; i++){
      pgTitle[i].style.fontSize= "10px";
      pgTitle[i].style.color= "#85114c";
    }
    if(desktop_query.matches){
      firstTitle.style.fontSize = "2em";
      textTitle.style.width = "100%";
      firstTitle.style.display = "block";
      secondTitle.style.display = "block";

    }else{
      // header.style.backgroundColor = "purple";
      firstTitle.style.fontSize = "20px";
      secondTitle.style.fontSize = "20px";
      textTitle.style.width = "50%";
      firstTitle.style.display = "inline-block";
      secondTitle.style.display = "inline-block";
      textTitle.style.display = "inline-block";

    }
  } else {
    header.classList.remove("sticky");
    for(var i = 0; i < len; i++){
      pgTitle[i].style.fontSize = "";
      pgTitle[i].style.color= "black";
    }
    if(desktop_query.matches){
      // pgTitle[0].style.textAlign = "center";
      firstTitle.fontSize = "20px";
      secondTitle.style.fontSize = "20px";
      textTitle.style.width = "50%";
      // firstTitle.style.display = "inline-block";
      // secondTitle.style.display = "inline-block";
      textTitle.style.display = "inline-block";

    }else{
      firstTitle.style.fontSize = "8vw";
      secondTitle.style.fontSize = "8vw";
      textTitle.style.width = "100%"; 
      firstTitle.style.display = "block";
      secondTitle.style.display = "block";
    }
  }
}



var desktop_query = window.matchMedia("(max-width: 600px");
