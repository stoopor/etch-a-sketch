console.log("HI");
var mouseIsDown = false;

function fillIfMouseDown(e)
{
    switch(e.pointerType) {
        case "mouse":
            if(e.buttons == 1 || e.buttons == 3) {
                this.style.backgroundColor = 'black';
            } 
            break;
        case "touch":
        case "pen" :
            this.style.backgroundColor = 'black';
        }

      
}

function fill(e) {
    this.style.backgroundColor = 'black';
}


function createGrid(size)
{
    let drawArea = document.getElementById("drawArea");
    for(let i = 0; i < size; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add('row');
        for(let j = 0; j < size; j++) {
            let newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.addEventListener('mousedown', fill);
            newSquare.addEventListener('pointerover', fillIfMouseDown);
            newRow.appendChild(newSquare);
        }
        drawArea.appendChild(newRow);
    }
}

createGrid(64);