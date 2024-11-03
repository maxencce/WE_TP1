
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

    // On associe les boutons aux actions correspondantes
    document.getElementById('butRect').onclick = function() {
        this.currEditingMode = editingMode.rect;
    }.bind(this)
    document.getElementById('butLine').onclick = function() {
        this.currEditingMode = editingMode.line;
    }.bind(this)
    document.getElementById('spinnerWidth').onchange = function(e) {
        this.currLineWidth = e.target.value;
    }.bind(this)
    document.getElementById('colour').onchange = function(e) {
        this.currColour = e.target.value;
    }.bind(this)

    new DnD(canvas, this);

    this.onInteractionStart = function(DnD) {
        console.log("Start");
    }.bind(this)

    // On dessine le rectangle ou la ligne en fonction du editingMode
    this.onInteractionUpdate = function(DnD) {
        console.log("Update");
        drawing.paint(ctx, canvas);
        if (this.currEditingMode == editingMode.rect) {
            this.currentShape = new Rectangle(DnD.posInit.x, DnD.posInit.y, DnD.posFin.x - DnD.posInit.x, DnD.posFin.y - DnD.posInit.y, this.currLineWidth, this.currColour);
        } else {
            this.currentShape = new Line(DnD.posInit.x, DnD.posInit.y, DnD.posFin.x, DnD.posFin.y, this.currLineWidth, this.currColour);
        }
        this.currentShape.paint(ctx);
    }.bind(this)

    // On ajoute la forme dessinée à la liste des formes dès qu'on relâche la souris
    this.onInteractionEnd = function(DnD) {
        console.log("End");
        drawing.addForm(this.currentShape);
        this.updateShapeList(drawing.getForms())
    }.bind(this)

    this.updateShapeList = function(forms) {
        let shapeList = document.getElementById('shapeList');
        shapeList.innerHTML = '';
        for (let i = forms.length -1; i >= 0; i--) {
            let shape = forms[i];
            console.log(shape);
            let li = document.createElement('li');
            li.textContent = shape instanceof Rectangle ? (i + '. Rectangle') : (i + '. Line');
            li.style.color = shape.color;
            // Bouton de suppression de forme
            let button = document.createElement('button');
            button.type = 'button';
            button.className = 'btn btn-default';
            button.value = i;

            // On supprime la forme correspondante à l'index du bouton
            button.onclick = function(e) {
                drawing.removeForm(e.target.value);
                this.updateShapeList(drawing.getForms());
            }.bind(this);

            let span = document.createElement('span');
            span.className = 'glyphicon glyphicon-remove-sign';
            button.appendChild(span);

            li.appendChild(button);
            shapeList.appendChild(li);
        }
    }

    this.removeForm = function(i) {
        drawing.removeLastForm();
        this.updateShapeList(drawing.getForms());
    }

    
};


