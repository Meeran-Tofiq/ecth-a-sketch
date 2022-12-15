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

    for(let y = 0; y < size; y++) {
        let yCont = document.createElement('div');
        yCont.classList.add('y');
        yCont.setAttribute('id', y + 1);

        for(let x = 0; x < size; x++) {
            let xCont = document.createElement('div');

            xCont.classList.add('x');
            xCont.setAttribute('id', x + 1);
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
        _div.style.backgroundColor = 'black';
    });
}