const buttons = document.querySelectorAll("button");
const h1 = document.querySelector("h1");

h1.style.textAlign = "center";

function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

for(let b of buttons){
    b.addEventListener("click", function (){
        b.style.backgroundColor = randomColor();
    })
}
