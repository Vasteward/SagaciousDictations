//When the user scrolls the page execute scroll()

// window.onscroll = function(){
//     scroll()
// };

// Get the header
// var header = document.getElementById("header");

// Get the offset postion of the navaar
// var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

// function scroll(){
//     if(window.pageYOffset > sticky){
//         header.classList.add("sticky");
//     }else{
//         header.classList.remove("sticky");
//     }
// }

// function openPost(evt, title) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(title).style.display = "block";
//     evt.currentTarget.className += " active";
//   }





// SHOW NAV
  console.log(document.getElementById('showNav'));


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
};

var header = document.getElementById("nav-container");
var sticky = header.offsetTop;

function stickTop(){
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
