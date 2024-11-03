
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
class DnD {

    constructor(canvas, interactor) {
        this.canvas = canvas;
        this.interactor = interactor;
        this.posInit = {x:0, y:0};
        this.posFin = {x:0, y:0};
        this.pressed = false;

        canvas.addEventListener('mousedown', this.mousePressed.bind(this), false);
        canvas.addEventListener('mousemove', this.mouseMoved.bind(this), false);
        canvas.addEventListener('mouseup', this.mouseReleased.bind(this), false);
    }


    mousePressed(evt) {
        this.posInit = getMousePosition(this.canvas, evt);
        this.pressed = true;
        this.interactor.onInteractionStart(this);
        console.log("Mouse pressed " + this.posInit.x + " " + this.posInit.y);
    }
    
    mouseMoved(evt) {
        if (this.pressed) {
            this.posFin = getMousePosition(this.canvas, evt);
            this.interactor.onInteractionUpdate(this);
            console.log("Mouse moved " + this.posFin.x + " " + this.posFin.y);
        }
    }
    
    mouseReleased(evt) {
        this.posFin = getMousePosition(this.canvas, evt);
        this.pressed = false;
        this.interactor.onInteractionEnd(this);
        console.log("Mouse released " + this.posFin.x + " " + this.posFin.y);
    }
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};




