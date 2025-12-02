export class Camera {
constructor(scene, world, x,y) {
    this.scene = scene;
    this.world = world;
    
    this.position = {x: x, y: y};
    this.isDragging = false;
    this.lastMousePosition = { x: 0, y: 0}
    this.currentMousePosition = { x: 0, y: 0}

    this.registerEvent();
}
/*turnTheWorldRed() {
this.world.style.background = "red";
}*/



registerEvent() {
    this.scene.addEventListener("mousedown", (e) => this.onMouseDown(e));
    window.addEventListener("mousemove", (e) => this.onMouseMove(e));
    window.addEventListener("mouseup", (e) => this.onMouseUp(e));

}


translateWorld() {
    this.world.style.left = `${-this.position.x}px`
    this.world.style.top = `${-this.position.y}px`
    
}

moveCamera(x,y){
    this.position = {x: x, y: y };

    this.translateWorld();
}

onMouseDown(e) {
    if(e.button === 0){
        this.isDragging = true;
        this.lastMousePosition = {x: e.clientX, y: e.clientY};
    }
}
onMouseUp(e) {
   // if(e.button === 0){ this.isDragging = false;}
this.isDragging = false

}
 
onMouseMove(e) {
if(!this.isDragging) return;
//this.currentMousePosition = {x: e.clientX, y: e.clientY};
//this.position = {x: e.clientX, y: e.clientY};
//this.translateWorld();

const currentMousePosition = {x: e.clientX, y: e.clientY} //modry vektor
const positionChange = {x: currentMousePosition.x - this.lastMousePosition.x, 
                        y: currentMousePosition.y - this.lastMousePosition.y};
this.position = { x: this.position.x + positionChange.x,
                  y: this.position.y + positionChange.y};
this.translateWorld();
this.lastMousePosition = currentMousePosition;


}



}