const container = document.querySelector("#grid-container");
const gridButton = document.querySelector('#create-grid');

gridButton.addEventListener('click', () => {
    var child = container.lastElementChild; 
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    createGrid();
});

function createGrid() {
    let size = askUserForSize();


    document.getElementById('grid-container').style.gridColumnStart = 1;
    document.getElementById('grid-container').style.gridRowStart = 1;
    document.getElementById('grid-container').style.gridColumnEnd = +size+ +1;
    document.getElementById('grid-container').style.gridRowEnd = +size+ +1;

    for(let y = 0; y < size; y++) {
        let yCont = document.createElement('div');
        yCont.classList.add('y');
        yCont.setAttribute('id', y + 1);

        for(let x = 0; x < size; x++) {
            let xCont = document.createElement('div');

            xCont.classList.add('x');
            xCont.setAttribute('id', x + 1);
            xCont.style.backgroundColor = '#ffffff';
            addHoverToGrid(xCont);

            yCont.appendChild(xCont);
        }
        container.appendChild(yCont);
    }
}

function askUserForSize() {
    let s = prompt("How big do you want the grid to be?");
    while(s > 100 || s <= 0){
        s = prompt("Please keep the size between 1 and 100: ");
    } 

    return s;
}

function addHoverToGrid(_div) {
    _div.addEventListener('mouseenter', () => {
        darkenSq(_div);
    });
}

function darkenSq(_div) {
    let sqColor = _div.style.backgroundColor;
    sqColor = sqColor.replace('rgb(', '');
    sqColor = sqColor.replace(')', '');
    sqColor = sqColor.split(', ');
    
    sqColor[0] = sqColor[0] - 50 > 0 ? sqColor[0]-50 : 0;

    _div.style.backgroundColor = 'rgb(' + sqColor[0] + ',' + sqColor[0] + ',' + sqColor[0] + ')';
}