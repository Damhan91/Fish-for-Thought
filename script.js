document.addEventListener("click", button1);

function button1() {  
document.getElementById("button1").onclick=function() {
let down = document.getElementById('texthere');
down.innerHTML = "<h3>1 Betta Fish</h3>";
document.getElementById('imagehere').innerHTML = `<img alt="betta fish" src="https://cf.ltkcdn.net/small-pets/images/std-xs/249481-340x219-do-betta-fish-need-light.jpg"></img>`
document.getElementById('videohere').innerHTML = `<iframe width="500" height="315" src="https://www.youtube.com/embed/-rA_EPvRTao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

;}}


document.addEventListener("click", button2);

function button2() {    
  document.getElementById("button2").onclick=function() {
  document.getElementById("imagehere").innerHTML= "1 Honey Gourami, 2 Panda corydoras";
;}}

document.addEventListener("click", button3);

function button3() {    
  document.getElementById("button3").onclick=function() {
  document.getElementById("imagehere").innerHTML= "1 Angelfish, 5 Neon Tetras, 5 Brone corydoras";
;}}

document.addEventListener("click", button4);

function button4() {    
  document.getElementById("button4").onclick=function() {
  document.getElementById("imagehere").innerHTML= "2 Angelfish, 8 Rummy Tetras, 6 Juli corydoras, 1 Hillstream loach";
;}}