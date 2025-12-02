import { Camera } from "./camera";


const hellobutton = document.getElementById("Hellobutton");
const scene = document.getElementById("scene")
const world = document.getElementById("world")

const camera = new Camera(scene, world, 0,0)
//camera.turnTheWorldRed()
console.log("main.js")
let counter = 0
hellobutton.innerHTML = `${counter}`

let x = 0;
let y = 0;

const testDiv = document.createElement("div")
testDiv.style.border = "solid 4px"
testDiv.style.width = "100px"
testDiv.style.height = "200px"
testDiv.style.left = "200px"  //posun po ose x, .top posun po ose y
testDiv.style.position = "absolute"
world.appendChild(testDiv);


hellobutton.addEventListener("click", (e) => {
    ++counter
    hellobutton.innerHTML = `${counter}`
    hellobutton.style.background = "red"
    hellobutton.style.borderColor = "blue"
    
    if (counter % 2 ==0 ){
        hellobutton.style.background = "green"
    }


});


