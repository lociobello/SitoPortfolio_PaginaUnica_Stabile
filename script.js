// --- FILTRO ELENCO --- //

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("gruppo-filtri");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// --- SCROLL ORIZZONTALE FILTRI --- //

(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('gruppo-filtri').scrollLeft -= (delta * 16); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('gruppo-filtri').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('gruppo-filtri').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('gruppo-filtri').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('gruppo-filtri').attachEvent('onmousewheel', scrollHorizontally);
    }
})();



// ---- MOSTRA-NASCONDI PAGINE ---- //

// INIZIO
$(".content-dx").hide();

//RESET SCROLL
$("#villa, #schade, #paul, #becher").click(function(){
  $("#scrollami").scrollTop(0);

});

// SOLI
$("#soli").click(function(){
  $("#soli-content").show();
  $("#inizio, #airbnb-content, #villa-content, #paul-content, #inner-content, #once-content, #schade-content, #luci-content, #becher-content").hide();
  $("#soli").addClass("attivo");
  $("#airbnb, #villa, #schade, #paul, #once, #inner, #luci, #becher").removeClass("attivo");
});

// LUCI
$("#luci").click(function(){
  $("#luci-content").show();
  $("#inizio, #airbnb-content, #villa-content, #paul-content, #inner-content, #once-content, #schade-content, #soli-content, #becher-content").hide();
  $("#luci").addClass("attivo");
  $("#airbnb, #villa, #schade, #paul, #once, #inner, #soli, #becher").removeClass("attivo");
});

// BECHER
$("#becher").click(function(){
  $("#becher-content").show();
  $("#inizio, #airbnb-content, #villa-content, #paul-content, #inner-content, #once-content, #schade-content, #soli-content, #luci-content").hide();
  $("#becher").addClass("attivo");
  $("#airbnb, #villa, #schade, #paul, #once, #inner, #soli, #luci").removeClass("attivo");
});

// SCHADENFREUDEMETERTEST
$("#schade").click(function(){
  $("#schade-content").show();
  $("#inizio, #airbnb-content, #soli-content, #paul-content, #inner-content, #once-content, #villa-content, #luci-content, #becher-content").hide();
  $("#schade").addClass("attivo");
  $("#airbnb, #soli, #villa, #paul, #once, #inner, #luci, #becher").removeClass("attivo");
});

//VILLA NECCHI
$("#villa").click(function(){
  $("#villa-content").show();
  $("#inizio, #airbnb-content, #soli-content, #paul-content, #inner-content, #once-content, #schade-content, #luci-content, #becher-content").hide();
  $("#villa").addClass("attivo");
  $("#airbnb, #soli, #schade, #paul, #once, #inner, #luci, #becher").removeClass("attivo");
});

//ONCE UPON A TIME IN THE WEB
$("#once").click(function(){
  $("#once-content").show();
  $("#inizio, #airbnb-content, #soli-content, #villa-content, #inner-content, #paul-content, #schade-content, #luci-content, #becher-content").hide();
  $("#once").addClass("attivo");
  $("#airbnb, #schade, #soli, #inner, #paul, #villa, #luci, #becher").removeClass("attivo");
});

// AIRBNB VOICE
$("#airbnb").click(function(){
  $("#airbnb-content").show();
  $("#inizio, #inner-content, #soli-content, #schade-content, #villa-content, #once-content, #paul-content, #luci-content, #becher-content").hide();
  $("#airbnb").addClass("attivo");
  $("#soli, #schade, #villa, #once, #paul, #luci, #becher, #inner").removeClass("attivo");
});

// INNER BEAUTY
$("#inner").click(function(){
  $("#inner-content").show();
  $("#inizio, #airbnb-content, #soli-content, #schade-content, #villa-content, #once-content, #paul-content, #luci-content, #becher-content").hide();
  $("#inner").addClass("attivo");
  $("#airbnb, #soli, #schade, #villa, #once, #paul, #luci, #becher").removeClass("attivo");
});

// PAUL RAND
$("#paul").click(function(){
  $("#paul-content").show();
  $("#inizio, #airbnb-content, #soli-content, #villa-content, #inner-content, #once-content, #schade-content, #luci-content, #becher-content").hide();
  $("#paul").addClass("attivo");
  $("#airbnb, #soli, #schade, #villa, #once, #inner, #luci, #becher").removeClass("attivo");
});


// ----- CURSORE PALLINO --------------//
$(".pallino").hide();

var $cursor = $('.pallino');

function moveCursor(e) {
  $cursor.addClass('is-moving');
  $cursor.css({"top": e.pageY, "left": e.pageX});

  clearTimeout(timer2);

   var timer2 = setTimeout(function() {
       $cursor.removeClass('is-moving');
   }, 300);
}

$(window).on('mousemove', moveCursor);

//mostra pallino sui link
$("a, button").hover(function hoverpallino(){
  $(".pallino").show();
  }, function(){
  $(".pallino").hide();
});

//----------LOAD IMAGES WHEN VISIBLE-------------------------//
refresh_handler = function(e) {
  var elements = document.querySelectorAll("*[realsrc]");
  for (var i = 0; i < elements.length; i++) {
          var boundingClientRect = elements[i].getBoundingClientRect();
          if (elements[i].hasAttribute("realsrc") && boundingClientRect.top < window.innerHeight) {
              elements[i].setAttribute("src", elements[i].getAttribute("realsrc"));
              elements[i].removeAttribute("realsrc");
          }
      }
  };

window.addEventListener('scroll', refresh_handler);
window.addEventListener('load', refresh_handler);
window.addEventListener('resize', refresh_handler);

//----------MOBILE-------------------------//

var x = window.matchMedia("(max-width: 768px)")
mobile(x) // Call listener function at run time
x.addListener(mobile) // Attach listener function on state changes

function mobile(x) {
  if (x.matches) { // If media query matches
    $("#mie-info").show();
    $("#home-mobile").css({"background-color":"black","color":"white"});
    $("#works-mobile").css({"background-color":"white","color":"black"});
    $("#scrollami, #gruppo-works").hide();
    $("#back").hide();
    $("#home-mobile").click(function(){
      $("#mie-info").show();
      $("#home-mobile").css({"background-color":"black","color":"white"});
      $("#works-mobile").css({"background-color":"white","color":"black"});
      $("#scrollami, #gruppo-works").hide()});
    $("#works-mobile").click(function(){
      $("#home-mobile").css({"background-color":"white","color":"black"});
      $("#works-mobile").css({"background-color":"black","color":"white"});
      $("#scrollami, #gruppo-works").show();
      $("#mie-info").hide()});
    $("#back").click(function(){
      $("#gruppo-filtri, #soli, #airbnb, #villa, #schade, #paul, #once, #inner, #luci, #becher").removeClass("hide");
      $("#gruppo-filtri, #soli, #airbnb, #villa, #schade, #paul, #once, #inner, #luci, #becher").addClass("show");
      $("#inizio, #soli-content, #airbnb-content, #soli-content, #schade-content, #villa-content, #once-content, #paul-content, #luci-content, #becher-content, #inner-content").hide();
      $("#back, #soli, #airbnb, #villa, #schade, #paul, #once, #inner, #luci, #becher").removeClass("attivo");
      $("#back").hide();
    });
    $("#soli").click(function(){
      $("#gruppo-filtri, #airbnb, #villa, #schade, #paul, #once, #inner, #luci, #becher").addClass("hide");
      $("#back").show();
    });
    $("#luci").click(function(){
      $("#gruppo-filtri, #soli, #airbnb, #villa, #schade, #paul, #once, #inner, #becher").addClass("hide");
      $("#back").show();
    });
    $("#becher").click(function(){
      $("#gruppo-filtri, #soli, #airbnb, #villa, #schade, #paul, #once, #inner, #luci").addClass("hide");
      $("#back").show();
    });
    $("#schade").click(function(){
      $("#gruppo-filtri, #soli, #airbnb, #villa, #paul, #once, #inner, #luci, #becher").addClass("hide");
      $("#back").show();
    });
    $("#villa").click(function(){
      $("#gruppo-filtri, #soli, #airbnb, #schade, #paul, #once, #inner, #luci, #becher").addClass("hide");
      $("#back").show();
    });
    $("#once").click(function(){
      $("#gruppo-filtri, #soli, #airbnb, #villa, #schade, #paul, #inner, #luci, #becher").addClass("hide");
      $("#back").show();
    });
    $("#airbnb").click(function(){
      $("#gruppo-filtri, #soli, #villa, #schade, #paul, #once, #inner, #luci, #becher").addClass("hide");
      $("#back").show();
    });
    $("#inner").click(function(){
      $("#gruppo-filtri, #soli, #airbnb, #villa, #schade, #paul, #once, #luci, #becher").addClass("hide");
      $("#back").show();
    });
    $("#paul").click(function(){
      $("#gruppo-filtri, #soli, #airbnb, #villa, #schade, #once, #inner, #luci, #becher").addClass("hide");
      $("#back").show();
    });
  } else {}
}
