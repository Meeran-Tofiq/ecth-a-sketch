const container = document.querySelector("#grid-container");
const gridButton = document.querySelector('#create-grid');

gridButton.addEventListener('click', () => {
    createGrid();
});

function createGrid() {
    for(let y = 0; y < 16; y++) {
        let yCont = document.createElement('div');
        yCont.classList.add('y');
        yCont.setAttribute('id', y + 1);
        for(let x = 0; x < 16; x++) {
            let xCont = document.createElement('div');

            xCont.classList.add('x');
            xCont.setAttribute('id', x + 1)

            xCont.textContent = (x + 1);

            yCont.appendChild(xCont);
        }
        container.appendChild(yCont);
    }
}