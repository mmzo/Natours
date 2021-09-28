//Store the nav in a variable
var nav_check = document.getElementById('navi-toggle')

var domClickHandler =  function(event){
    if (nav_check.checked) {
        nav_check.checked = false;
    } else {
        nav_check.checked= true;
    } 
}
document.getElementById('nav').addEventListener('click', domClickHandler)