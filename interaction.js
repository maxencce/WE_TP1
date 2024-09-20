
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    this.canvas = canvas;
    this.interactor = interactor;
    this.posInit = {x:0, y:0};
    this.posFin = {x:0, y:0};
    this.pressed = false;

	// Developper les 3 fonctions gérant les événements
    canvas.addEventListener('mousedown', this.mousePressed.bind(this), false); // Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousemove', this.mouseMoved.bind(this), false); // Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mouseup', this.mouseReleased.bind(this), false);



	// Associer les fonctions précédentes aux évènements du canvas.
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

DnD.prototype.mousePressed = function(evt) {
    this.posInit = getMousePosition(this.canvas, evt);
    this.pressed = true;
    console.log("Mouse pressed " + this.posInit.x + " " + this.posInit.y);
}

DnD.prototype.mouseMoved = function(evt) {
    if (this.pressed) {
        this.posFin = getMousePosition(this.canvas, evt);
        console.log("Mouse moved " + this.posFin.x + " " + this.posFin.y);
    }
}

DnD.prototype.mouseReleased = function(evt) {
    this.posFin = getMousePosition(this.canvas, evt);
    this.pressed = false;
    console.log("Mouse released " + this.posFin.x + " " + this.posFin.y);
}


