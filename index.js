//Set the default values
let subSquares = 16;
let black = '#000000';
let rainbow = '#ff0000';
let color_schemes = [black,rainbow];
let schemePosition = 0;

//Display the colour palette and grid size next to the etch_box
function display_variables(){
    let variable_store = document.querySelector('#variable_store');
    let showSize = document.createElement('div');
    showSize.classList.add('displayText');
    showSize.setAttribute('id','showSize')
    showSize.textContent = "Grid size is currently "+subSquares+" x "+subSquares;
    let showColor = document.createElement('div');
    showColor.classList.add('displayText');
    showColor.setAttribute('id','showColor')
    showColor.textContent = "Color changer scheme is set at "+color_schemes[schemePosition];
    variable_store.appendChild(showSize);
    variable_store.appendChild(showColor);
}

//Generate the squares into the etch container
function square_generation(){
    let etch_box = document.querySelector("#etch_box");
    let subDimension = (500/subSquares)-2;

    //Generate rows
    for (let row=1; row<=subSquares; row++){
        let etch_row = document.createElement('div');
        etch_row.classList.add("etchRow");
        etch_row.setAttribute('id',"Row "+row);
        etch_row.style.width = "500px";
        etch_row.style.height = subDimension+"px";
        etch_row.style.borderColor = "#17252a";
        etch_row.style.backgroundColor = "#ffffff";
        etch_box.appendChild(etch_row);

        //Generate columns
        for (let column=1; column<=subSquares; column++){ 
            let etchSquare = document.createElement('div');
            etchSquare.classList.add("etchSquare");
            etchSquare.setAttribute('id',("("+column+","+row+")"));
            etchSquare.style.width = subDimension+"px";
            etchSquare.style.height = subDimension+"px";
            etchSquare.style.borderColor = "#17252a";
            etchSquare.style.backgroundColor = "#ffffff";
            etch_row.appendChild(etchSquare);
        }
    }
}

//Set the default etch subSquare value onto the page (with 16 squares per page)
square_generation(subSquares);

//Set the default text beside the etch_box
display_variables()

//Remove the text in order to redisplay new values
function text_removal(){
    const targetText = document.querySelector("#variable_store");
    while (targetText.lastElementChild) {
        targetText.removeChild(targetText.lastElementChild);
      }
}

//Remove the squares in order to change subSquare value
function square_removal(){
    const targetSquares = document.getElementById("etch_box");
    while (targetSquares.lastElementChild) {
        targetSquares.removeChild(targetSquares.lastElementChild);
      }
}

//Change the number of squares in the etch container
document.getElementById("grid_size").addEventListener('click', changeGrid);
function changeGrid(){
    subSquares = prompt("Number of squares per row between 1 and 100");
    subSquares = Number(subSquares);
    if (subSquares > 100 || subSquares < 1){
        alert("Please enter a number in the given range of 1 to 100");
    }
    else {
        square_removal();
        text_removal();
        square_generation(subSquares);
        display_variables();
    }
}


//Change colour scheme of 'etchSquare' background color
document.getElementById("color_changer").addEventListener('click', changeScheme);
function changeScheme(){
    if (schemePosition+=1>color_schemes.length){
        schemePosition=0;
    }
    else{
        schemePosition+=1;
    }
    text_removal();
    color_schemes[schemePosition];
    display_variables();
}

//Detect a 'mouseover' event over etch_box
let etchMouseover = document.querySelectorAll(".etchSquare");
etchMouseover.forEach(function(colorChange) {
    colorChange.addEventListener("mouseover", function() {
          colorChange.style.backgroundColor = color_schemes[schemePosition];
    });
});