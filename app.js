// app.js

document.getElementById('board').innerHTML = drawBoard();
document.getElementById('newGame').addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('board').innerHTML = drawBoard();
});


function drawBoard() {
  var board = "<table border='1'";

  for(var i=0; i<8; i++) {
    board += "<tr>"
    for(var j=0; j<8; j++) {

      var currentBox = (i*8 + j);

      if( j%2 === 0) {
        board += "<td class='white' ondrop='drop(event)' ondragover='allowDrop(event)'></td>";
      } else {
        if( currentBox < 24) {
          board += "<td class='black' ondrop='drop(event)' ondragover='allowDrop(event)'><img id='" + currentBox + "' draggable='true' ondragstart='drag(event)' src='./img/black.png'></td>";
        } else if(currentBox > 40) {
          board += "<td class='black' ondrop='drop(event)' ondragover='allowDrop(event)'><img id='" + currentBox + "' draggable='true' ondragstart='drag(event)' src='./img/red.png'></td>";
        } else {
          board += "<td class='black' ondrop='drop(event)' ondragover='allowDrop(event)'></td>";
        }
   
      }
        
    }
    board += "</tr>";
  }

  board += "</table>";

  return board;
};

function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");

  this.move(e);
  e.target.appendChild(document.getElementById(data));
}

function move(e) {
  console.log(e);
  fetch('http://127.0.0.1:3000/move', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify({
      'test': 'test',
      'test2': 'test2'
    })
  })
  .then(function(data) {
    return data.json();
  })
  .then(function(json) {
    console.log(json);
  })
  .catch(function(err) {
    console.log(err);
  }); 
};

function clearAlert(){
  document.getElementById('alert').innerHTML = '';
}