var circleButton = document.getElementById("circle_button");
var squareButton = document.getElementById("square_button");
var generateFigureButton = document.getElementById("generate-interface-button"); 

var circleR = document.getElementById("circle_r");
var squareA = document.getElementById("square_a");

var firstSize = document.getElementById("first_size");
var secondSize = document.getElementById("second_size");
var charactersAmount = document.getElementById("amount_characters");


var resultDiv = document.getElementById("result");


squareButton.addEventListener("click", function() {
    removeChilds(resultDiv);
    countFieldCircuitSquare(squareA.value); 
});

circleButton.addEventListener("click", function() {
    removeChilds(resultDiv);
    countFieldCircuitCirclee(circleR.value);
});

generateFigureButton.addEventListener("click", function() {
    removeChilds(resultDiv);
    generateFigure();
});


function countFieldCircuitSquare(a) {
    var field = (+a) * (+a);
    var circuit = 4 * (+a);
    
    var c = document.createElement("p");
    var f = document.createElement("p");
    
    c.innerHTML = "Obwód kwadratu wynosi: " + circuit;
    f.innerHTML = "Pole kwadratu wynosi: " + field;
    
    resultDiv.appendChild(c);
    resultDiv.appendChild(f);
}

function countFieldCircuitCirclee(r) {    
    
    var field = +r * +r * 3.14;
    var circuit = 2 * 3.14 * +r;
    
    var c = document.createElement("p");
    var f = document.createElement("p");
    
    c.innerHTML = "Obwód koła wynosi: " + circuit;
    f.innerHTML = "Pole koła wynosi: " + field;
    
    resultDiv.appendChild(c);
    resultDiv.appendChild(f);
} 

function removeChilds(node) {
    var last;
    while (last = node.lastChild) {
        node.removeChild(last);
    }
}

function generateFigure() {
    
    var type = document.querySelector('input[name = "figure_type"]:checked').value;
    
    switch (type) {
        case "full-rectangle":
            generateFullRectangle();
            break;
        case "full-empty-rectangle":
            generateFullEmptyRectangle();
            break;
        case "triangle":
            generateFullTriangle();
            break;
        default:
            alert("Nie ma");
            break;
    }
    
}


function generateFullRectangle() {
    var direction_type = document.querySelector('input[name = "direction_type"]:checked').value;
    
    switch (direction_type) {
        case "normal_direction":
            generateFullRectangleNoramlDirection();
            break;
        case "inverted_direction": 
            generateFullRectangInvertedDirection();
            break;
    }
}

function generateFullEmptyRectangle() {
    var direction_type = document.querySelector('input[name = "direction_type"]:checked').value;
    
    switch (direction_type) {
        case "normal_direction":
            generateFullEmptyRectangleNormalDirection();
            break;
        case "inverted_direction": 
            generateFullEmptyRectangInvertedDirection();
            break;
    }
}

function generateFullTriangle() {
    var direction_type = document.querySelector('input[name = "direction_type"]:checked').value;
    
    switch (direction_type) {
        case "normal_direction":
            generateTrangleeNormalDirection();
            break;
        case "inverted_direction": 
            generateFullEmptyRectangInvertedDirection();
            break;
    }
}

    
function generateFullRectangleNoramlDirection() {
    
    
    var firstSizeValue = firstSize.value;
    var secondSizeValue = secondSize.value;
    var amount = charactersAmount.value;
    
    var output;
    
    loop1:
    for (i = 0; i < firstSizeValue; i++) {
        output = "";
        var p = document.createElement("p");
        for (j = 0; j < secondSizeValue; j++) {
            output += "$";
            amount--;
            if (amount == 0) {
                p.innerHTML = output;
                resultDiv.appendChild(p);
                break loop1;
            }
            
        }
        p.innerHTML = output;
        resultDiv.appendChild(p);
    }
}

    
function generateFullRectangInvertedDirection() {
    
    
    var firstSizeValue = firstSize.value;
    var secondSizeValue = secondSize.value;
    var amount = charactersAmount.value;
    
    var outputGroup = [];
    var output;
    
    loop1:
    for (i = 0; i < firstSizeValue; i++) {
        output = "";
        for (j = 0; j < secondSizeValue; j++) {
            output += "$";
            amount--;
            if (amount == 0) {
                outputGroup.unshift(output);
                break loop1;
            }
            
        }
        outputGroup.unshift(output);
    }
    
    
    for (var x in outputGroup) {
        var p = document.createElement("p");
        p.innerHTML = outputGroup[x];
        resultDiv.appendChild(p);
    }
}

function generateFullEmptyRectangleNormalDirection() {
    var firstSizeValue = firstSize.value;
    var secondSizeValue = secondSize.value;
    var amount = charactersAmount.value;
    
    
    var output;
    
    loop1:
    for (i = 0; i < firstSizeValue; i++) {
        output = "";
        var p = document.createElement("p");
        for (j = 0; j < secondSizeValue; j++) {
            if (i === 0 || i == (firstSizeValue - 1) || (j === 0) || (j == secondSizeValue - 1)) {
                output += "$";    
                amount--;
            }
            else {
                output += "#";
            }
            if (amount == 0) {
                p.innerHTML = output;
                resultDiv.appendChild(p);
                break loop1;
            }
            
        }
        p.innerHTML = output;
        resultDiv.appendChild(p);        
            
    }
}
    

    
function generateFullEmptyRectangInvertedDirection() {
    
    var firstSizeValue = firstSize.value;
    var secondSizeValue = secondSize.value;
    var amount = charactersAmount.value;
    
    var outputGroup = [];
    var output;
    
    loop1:
    for (i = 0; i < firstSizeValue; i++) {
        output = "";
        for (j = 0; j < secondSizeValue; j++) {
            if (i === 0 || i == (firstSizeValue - 1) || (j === 0) || (j == secondSizeValue - 1)) {
                output += "$";    
                amount--;
            }
            else 
            output += "#";
            if (amount == 0) {
                outputGroup.unshift(output);
                break loop1;
            }
            
        }
        outputGroup.unshift(output);
    }
    
    
    for (var x in outputGroup) {
        var p = document.createElement("p");
        p.innerHTML = outputGroup[x];
        resultDiv.appendChild(p);
    }
}

function generateTrangleeNormalDirection() {
    var firstSizeValue = firstSize.value;
    var secondSizeValue = secondSize.value;
    var amount = charactersAmount.value;
    
    var a = secondSizeValue / firstSizeValue;
    var b = secondSizeValue - a * firstSizeValue; 
    
    var output;
    var maxY;
    
    loop1:
    for (i = 0; i <= firstSizeValue; i++) {
        output = "";
        maxY = a * i + b;
        var p = document.createElement("p");
        for (j = 0; j < maxY; j++) {
            
            output += "$";    
            amount--;
            
            if (amount == 0) {
                p.innerHTML = output;
                resultDiv.appendChild(p);
                break loop1;
            }
            
        }        
        
        p.innerHTML = output;
        resultDiv.appendChild(p);        
            
    }
}


function generateFullEmptyRectangInvertedDirection() {
    
    var firstSizeValue = firstSize.value;
    var secondSizeValue = secondSize.value;
    var amount = charactersAmount.value;
    
    var a = secondSizeValue / firstSizeValue;
    var b = secondSizeValue - a * firstSizeValue; 
    
    var maxY;
    
    var outputGroup = [];
    var output;
    
    loop1:
    for (i = 0; i <= firstSizeValue; i++) {
        output = "";
        maxY = a * i + b;
        for (j = 0; j < maxY; j++) {
            
            output += "$";    
            amount--;
            
            if (amount == 0) {
                outputGroup.unshift(output);
                break loop1;
            }
            
        }        
        
        outputGroup.unshift(output);        
    
    }
        
    for (var x in outputGroup) {
        var p = document.createElement("p");
        p.innerHTML = outputGroup[x];
        resultDiv.appendChild(p);
    }
}