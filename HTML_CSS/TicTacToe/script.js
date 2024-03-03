//Restart Game button
var restart = document.querySelector("#b");

//Grabs all the squares
var squares = document.querySelectorAll("td");

//Clear all the squares
function clearBoard(){
    for (var i=0; i<squares.length; i++)
    {
        squares[i].textContent='';
    }
}
restart.addEventListener('click',clearBoard)

//Game logic
function changeMarker(){
    if (this.textContent === ''){
        this.textContent = 'X';
    }
    else if (this.textContent === 'X') {
        this.textContent = 'O';
    }
    else{
        this.textContent = '';
    }
}

for (var j=0; j<squares.length; j++){
    squares[j].addEventListener('click',changeMarker)
}