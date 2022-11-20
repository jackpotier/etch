//Set the defeault number of squares in the etch container
let subSquares = 16;

//Generate the squares into the etch container
function square_generation(subSquares){
    let etch_box = document.querySelector("#etch_box");
    let subDimension = (500/subSquares)-2;

    //Generate rows
    for (let row=1; row<=subSquares; row++){
        let etch_row = document.createElement('div');
        etch_row.classList.add("etchRow");
        etch_row.setAttribute('id',"Row "+row);
        etch_row.style.width = "500px";
        etch_row.style.height = subDimension+"px";
        etch_box.appendChild(etch_row);

        //Generate columns
        for (let column=1; column<=subSquares; column++){ 
            let etchSquare = document.createElement('div');
            etchSquare.classList.add("etchSquare");
            etchSquare.setAttribute('id',"Column "+column);
            etchSquare.style.width = subDimension+"px";
            etchSquare.style.height = subDimension+"px";
            etch_row.appendChild(etchSquare);
        }
    }
}

//Set the default etch subSqaure value onto the page (with 16 squares per page)
square_generation(subSquares);

//Change the number of sqaures in the etch container
document.getElementById("grid_size").addEventListener('click', changeGrid);
function changeGrid(){
    subSquares = 16;
    subSquares = prompt("Number of squares per row between 1 and 100");
    subSquares = Number(subSquares);
    if (subSquares > 100 || subSquares < 1){
        alert("Please enter a number in the given range of 1 to 100");
    }
    else {
        console.log("Squares in etch container: "+subSquares);
        square_generation(subSquares);  
    }
}
