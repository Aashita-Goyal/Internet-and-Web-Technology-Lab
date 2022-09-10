const container = document.getElementById('outerRectangle');
const box = document.getElementById('innerRectangle');




box.onclick = function (){

let t = setInterval(move, 0.5);
let pos = 1;
let run = true;
maxRight = '200px';


function move() {
  box.style.left = pos + '1.5px';
  box.style.top = pos + '1px';
  
  if (run)
    pos++; /* move down */
  else
    pos--; /* move up */
    
  /* update the direction when you reach the top or bottom limit*/  
  if (pos = 60) 
    run = false ;
 else if (pos <= 0) 
    run = true;
}

};