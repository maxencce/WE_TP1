
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

canvas.width=700
canvas.height=600

// Code temporaire pour tester le DnD
//new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
// var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
// rec.paint(ctx);
// var ligne = new Line(10, 20, 50, 100, 5, '#00CCC0');
// ligne.paint(ctx);

// tester également Dessin.
//var drawing = new Drawing();
//drawing.paint(ctx, canvas);

// Code final à utiliser pour manipuler Pencil.
let drawing = new Drawing();
let pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

