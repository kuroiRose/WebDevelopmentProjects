const btn = document.querySelector("#button");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

btn.style.marginLeft = "47%";
h1.style.textAlign = "center";
h2.style.textAlign = "center";

function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    if(r+g+b < 150){
        h2.style.color = "white";
    } else {
        h2.style.color = "black";
    }
    
    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener("click",function (){
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h2.innerText = newColor;
    h1.style.display = "none";
    
})
