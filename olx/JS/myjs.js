let menubtn = document.getElementById("menu-btn")
let navbar=document.getElementById("navbar")

function displaymenu(){
    if(navbar.classList.contains("active")){
        navbar.classList.remove("active")
    }
    else{
    navbar.classList.add("active")}
}

$(window).on('load', function() {
  if($(window).width() > 925) {
      $('.biggerscreen').addClass('activebar');
      $('.smallerscreen').removeClass('activebar');
  }
  if($(window).width() < 925) {
      $('.smallerscreen').addClass('activebar');
      $('.biggerscreen').removeClass('activebar');
  }
  })

$(window).on('resize', function() {
  if($(window).width() > 925) {
      $('.biggerscreen').addClass('activebar');
      $('.smallerscreen').removeClass('activebar');
  }
  if($(window).width() < 925) {
      $('.smallerscreen').addClass('activebar');
      $('.biggerscreen').removeClass('activebar');
  }
  })

let chevron = document.getElementsById('mydropdown')

function displaychevron() {
    document.getElementById("mydropdown").classList.toggle("activechevron")
  }

  window.onclick = function(event) {
    if (!event.target.matches('.fa-chevron-down')) {
      var dropdowns = document.getElementsByClassName("chevron")
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('activechevron')) {
          openDropdown.classList.remove('activechevron')
        }
      }
    }
  }

  function displayfsm() {
    document.getElementById("fullscreen").style.display = "block";
  }

  function hidefsm() {
    document.getElementById("fullscreen").style.display = "none";
  }