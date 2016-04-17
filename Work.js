
    //function toggle_visibility(id) {
      // var e = document.getElementById(id);
       //if(e.style.display != 'none')
         // e.style.display = 'block';
       //else
         // e.style.display = 'none';
    }

window.togglevisibility = function(id) {
  var element = document.getElementById(id);

  // If the element is not hidden
  if (element.style.display != 'none') { // True if "inline", "block"
    // Hide it, using the CSS "display: none;"
    element.style.display = 'none';
  } else {
    // Otherwise, show it using the CSS "display: block;"
    element.style.display = 'block';
  }

};
