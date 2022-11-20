let subSquares = 16;

//Function to change the number of sqaures per box
document.getElementById("grid_size").addEventListener('click', changeGrid);
function changeGrid(){
    let subSquares = prompt("Size of the grid between 1 and 100 pixels");
    subSquares = Number(subSquares);
    if (subSquares > 100 || subSquares < 1){
        alert("Please enter a size in the given range of 1 to 100");
    }
    console.log("Squares in etch container: "+subSquares);
}