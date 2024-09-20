function Drawing() {
    this.shapes = new Array();
}

function Shape(lineWidth, color) {
    this.color = color;
    this.lineWidth = lineWidth;
}

function Rectangle(x, y, width, height, lineWidth, color) {
    Shape.call(this, color, lineWidth);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

function Line(x1, y1, x2, y2, lineWidth, color) {
    Shape.call(this, color, lineWidth);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

}
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
