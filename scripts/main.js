const container = document.querySelector(".container");
const containerSize = 500;
initiateGrids();
const gridAdjustor = document.querySelector("#openPrompt");

gridAdjustor.addEventListener("click", () => {
    let userInput;
    while (true) {
        userInput = prompt("A number less than 100 for grid size.");
        if (userInput === "" || userInput === null) {
            alert("Input cancelled");
            // initiateGrids();
            break;
        } else if (userInput > 100) {
            alert("LESS THAN 100!");
            continue;
        } else {
            break;
        }
    }
    container.innerHTML = "";
    initiateGrids(+userInput);
});



function initiateGrids(gridNum = 16) {
    

    for (let i = 1; i <= gridNum; i++) {
        for (let j = 1; j <= gridNum; j++) {
            let grid = document.createElement("div");
            grid.style.cssText = `width: ${containerSize / (gridNum)}px; height: ${containerSize / (gridNum)}px`;
            container.appendChild(grid);
        }       
    }
    const grids = document.querySelectorAll(".container div");
    grids.forEach((aGrid)=> {
        aGrid.addEventListener("mouseover", () => {
            aGrid.style.cssText += `background-color: rgb(${rgbNoGenerator()}, ${rgbNoGenerator()}, ${rgbNoGenerator()})`;
        });
    });
    
}

function rgbNoGenerator() {
    return Math.floor(Math.random() * 256);
}
