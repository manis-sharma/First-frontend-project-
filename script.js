
function setProgress(element, percentage, color) {
    const progressValue = element.querySelector(".progress-value");
    let currentProgress = 0;

    const interval = setInterval(() => {
        currentProgress++;
        progressValue.textContent = `${currentProgress}%`;
        element.style.background = `conic-gradient(${color} ${
            currentProgress * 3.6
        }deg, #ededed 0deg)`;

        if (currentProgress === percentage) {
            clearInterval(interval);
        }
    }, 20);
}

// Set progress for each skill
setProgress(document.querySelector(".html-css"), 80, "#fca61f");
setProgress(document.querySelector(".javascript"), 40, "#7d2ae8");
setProgress(document.querySelector(".python"), 20, "#20c997");
setProgress(document.querySelector(".c"), 40, "#3f396d");


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});