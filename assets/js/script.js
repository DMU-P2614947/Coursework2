// Tab Content
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Button Mobile Menu
function MenuFunction() {
  var element = document.getElementById("mobile-menu");

  if (element.classList) { 
    element.classList.toggle("menu-click");
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf("menu-click");

    if (i >= 0) 
      classes.splice(i, 1);
    else 
      classes.push("menu-click");
      element.className = classes.join(" "); 
  }
}

// Add dropdown sub-menu for mobile
$('.menu-mobile .menu-item-has-children').append('<i class="icon-caret-down"></i>');
$('.menu-mobile .menu-item-has-children > i').on( 'click', function() {
  $(this).parent().toggleClass('active');
});
$('.menu-mobile .menu-item-has-children > a').on( 'click', function(e) {
  if($(this).attr('href') == '#') {
    e.preventDefault();
    $(this).parent().toggleClass('active');        
  }
});