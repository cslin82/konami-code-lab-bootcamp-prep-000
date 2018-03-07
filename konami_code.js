const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
var index = 0;


document.body.onkeydown = function(event){
  // console.log('hello');
  // console.log(this);
  console.log(event.which);
  keyPressed = parseInt(event.which);

  if (keyPressed === code[index]) {
    index++;
    console.log(index);

    if (index === code.length) {
      alert('correct');
      index = 0;
    } 

  } else {
    index = 0;
  }
alert(';aljsk')
};


}