const container = document.querySelector(".container");
initiateGrids();
const grids = document.querySelectorAll(".container div");
const gridadjustor = document.querySelector("#openPrompt");
grids.forEach((aGrid)=> {
    aGrid.addEventListener("mouseover", (e) => {
        aGrid.style.cssText = `background-color: rgb(${rgbNoGenerator()}, ${rgbNoGenerator()}, ${rgbNoGenerator()})`;
    });
});

function initiateGrids() {
    
    for (let i = 1; i <= 16; i++) {
        for (let j = 1; j <= 16; j++) {
            let grid = document.createElement("div");
            
            container.appendChild(grid);
        }       
    }
}

function rgbNoGenerator() {
    return Math.floor(Math.random() * 256);
}
