const container = document.querySelector(".container");
initiateGrids();
// const grids = document.querySelectorAll(".container div");

// grids.forEach((aGrid)=> {
//     aGrid.addEventListener("mouseover", (e) => {

//     });
// });

function initiateGrids() {
    
    for (let i = 1; i <= 16; i++) {
        for (let j = 1; j <= 16; j++) {
            let grid = document.createElement("div");
         
            container.appendChild(grid);
        }       
    }
    
}
