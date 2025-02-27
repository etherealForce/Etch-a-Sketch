const container = document.querySelector(".container");
const containerSize = 500;
const gridAdjustor = document.querySelector("#openPrompt");
const rainbowBtn = document.querySelector("#rainbow");
const normalBtn = document.querySelector("#normal");
const resetBtn = document.querySelector("#reset");
initiateGrids();

resetBtn.addEventListener("click", () => {
    container.innerHTML = "";
    initiateGrids();
});

gridAdjustor.addEventListener("click", () => {
    let userInput;
    while (true) {
        userInput = prompt("A number less than 100 for grid size.");
        if (userInput === "" || userInput === null) {
            alert("Input cancelled");
            break;
        } else if (userInput > 100) {
            alert("LESS THAN 100!");
            continue;
        } else {
            container.innerHTML = "";
            initiateGrids(+userInput);
            break;
        }
    }

    resetBtn.addEventListener("click", () => {
        container.innerHTML = "";
        initiateGrids(userInput);
    });
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
    normalGrids(grids);
    rainbowBtn.addEventListener("click", () => {
        rainbowGrids(grids);
    });
    
    normalBtn.addEventListener("click", () => {
        normalGrids(grids);
    });
    
}

function rgbNoGenerator() {
    return Math.floor(Math.random() * 256);
}

function rainbowGrids(grids) {
    grids.forEach((aGrid)=> {
        aGrid.addEventListener("mouseover", () => {
            aGrid.style.cssText += `background-color: rgb(${rgbNoGenerator()}, ${rgbNoGenerator()}, ${rgbNoGenerator()})`;
        });
    });
}

function normalGrids(grids, opacity) {
    grids.forEach((aGrid) => {
        aGrid.addEventListener("mouseover", function () {         
            this.style.backgroundColor = "rgba(30, 31, 34, 0.47)";
        })
    });
}
