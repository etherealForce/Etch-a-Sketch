const container = document.querySelector(".container");
initiateGrids();
const grids = document.querySelectorAll(".container div");
const gridAdjustor = document.querySelector("#openPrompt");
const containerSize = 500;
gridAdjustor.addEventListener("click", (e) => {

});

grids.forEach((aGrid)=> {
    aGrid.addEventListener("mouseover", (e) => {
        aGrid.style.cssText = `background-color: rgb(${rgbNoGenerator()}, ${rgbNoGenerator()}, ${rgbNoGenerator()})`;
    });
});

function initiateGrids(gridNum = 16) {
    
    for (let i = 1; i <= gridNum; i++) {
        for (let j = 1; j <= gridNum; j++) {
            let grid = document.createElement("div");
            grid.style.cssText = `width: ${containerSize / gridNum}px; height: ${containerSize / gridNum}px`;
            container.appendChild(grid);
        }       
    }
}

function rgbNoGenerator() {
    return Math.floor(Math.random() * 256);
}
