class Drawing {
    constructor() {
        this.shapes = new Array();
    }

    getForms() {
        return this.shapes;
    }

    paint(ctx) {
        console.log(this.getForms());
        ctx.fillStyle = '#F0F0F0'; // set canvas' background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.getForms().forEach(function (eltDuTableau) {
            // now fill the canvas
            eltDuTableau.paint(ctx);
        }); 
    }

}

class Shape {

    constructor(lineWidth, color) {
        this.color = color;
        this.lineWidth = lineWidth;
    }

    paint(ctx) {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
    }
}

class Rectangle extends Shape {

    constructor(x, y, width, height, lineWidth, color) {
        super(lineWidth, color);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    getInitX() {
        return this.x;
    }

    getInitY() {
        return this.y;
    }

    getFinalX() {
        return this.x + this.width;
    }

    getFinalY() {
        return this.y + this.height;
    }

    paint(ctx) {
        super.paint(ctx);
        ctx.beginPath();
        ctx.rect(this.getInitX(), this.getInitY(), this.width, this.height);
        ctx.stroke();
    }
}

class Line extends Shape {

    constructor(x1, y1, x2, y2, lineWidth, color) {
        super(lineWidth, color);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    getInitX = function() {
        return this.x1;
    }

    getInitY = function() {
        return this.y1;
    }

    getFinalX = function() {
        return this.x2;
    }

    getFinalY = function() {
        return this.y2;
    }

    paint(ctx) {
        super.paint(ctx);
        ctx.beginPath();
        ctx.moveTo(this.getInitX(), this.getInitY());
        ctx.lineTo(this.getFinalX(), this.getFinalY());
        ctx.stroke();
    }
}


// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
