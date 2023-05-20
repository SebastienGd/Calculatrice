// assigner
const numbers = document.querySelectorAll(".calc_key_num")
const display = document.querySelector(".calculator_display")

// un for loop qui permet d'afficher les nombres sur le display
for(var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(){
        const touche = event.target
        const valeurtouche = touche.textContent;
        const displayednumber = display.textContent;

        if (display.textContent !== "Missing closing parenthesis" && display.textContent !== "Missing opening parenthesis" && display.textContent !== "Incorrect order of parenthesis" && display.textContent !== "Press x² for quadratic" && display.textContent !== "Lost in the sauce" && display.textContent !== "Format: a | b | c" && display.textContent !== "no solution" ){
            if (displayednumber === "0") {
                display.textContent = valeurtouche;
            } else {
                display.textContent = displayednumber + valeurtouche;
            }
        }
    }
)};
 


// assigner
const operators = document.querySelectorAll(".calc_key_op")

// un for loop qui permet k'afficher les operators sur le display
for(var i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", function(){
        const touche = event.target;
        const valeurtouche = touche.textContent;
        const displayednumber = display.textContent;
        if (display.textContent !== "Missing closing parenthesis" && display.textContent !== "Missing opening parenthesis" && display.textContent !== "Incorrect order of parenthesis" && display.textContent !== "Press x² for quadratic" && display.textContent !== "Lost in the sauce" && display.textContent !== "Format: a | b | c" && display.textContent !== "no solution" ){
            if (displayednumber === "0") {
                display.textContent = valeurtouche;
            } else {
                display.textContent = displayednumber + valeurtouche;
            }
            }
        }
)};



// assigner
const union = document.querySelector (".calc_key_union")

// bouton |
union.addEventListener ("click", function(){
    const touche = event.target;
    const valeurtouche = touche.textContent;
    const displayednumber = display.textContent;
    if (display.textContent !== "Missing closing parenthesis" && display.textContent !== "Missing opening parenthesis" && display.textContent !== "Incorrect order of parenthesis" && display.textContent !== "Press x² for quadratic" && display.textContent !== "Lost in the sauce" && display.textContent !== "Format: a | b | c" && display.textContent !== "no solution" ){
        if (displayednumber === "0") {
            display.textContent = valeurtouche;
        } else {
            display.textContent = displayednumber + valeurtouche;
        }
    }
});



// assigner
const minus = document.querySelector (".calc_key_minus")

// bouton −
minus.addEventListener ("click", function(){
    const touche =event.target;
    const valeurtouche = touche.textContent;
    const displayednumber = display.textContent;
    if (display.textContent !== "Missing closing parenthesis" && display.textContent !== "Missing opening parenthesis" && display.textContent !== "Incorrect order of parenthesis" && display.textContent !== "Press x² for quadratic" && display.textContent !== "Lost in the sauce" && display.textContent !== "Format: a | b | c" && display.textContent !== "no solution" ){
        if (displayednumber === "0") {
            display.textContent = valeurtouche;
        } else {
            display.textContent = displayednumber + valeurtouche;
        }
    }
});
    


// assigner
const del = document.querySelector (".calc_key_del")

// la fonction delete
del.addEventListener("click", function(){
    const displayednumber = display.textContent;
    const validValues = ["0", "1", "2", "3", "4", "5", "6", "7","8","9","+","-","|","x","÷",".","(",")","e","!","^","√","−"];
    let array = displayednumber.split("");
    if(!validValues.includes(displayednumber)){
        display.textContent = array.slice(0,-1).join("");
    } else {
        display.textContent = "0";
    }
    switch(true){
        case displayednumber === "Missing closing parenthesis":
            display.textContent = "Missing closing parenthesis";
            break;
        case displayednumber === "Missing opening parenthesis":
            display.textContent = "Missing opening parenthesis";
            break;
        case displayednumber === "Incorrect order of parenthesis":
            display.textContent = "Incorrect order of parenthesis";
            break;
        case displayednumber === "Press x² for quadratic":
            display.textContent = "Press x² for quadratic";
            break;
        case displayednumber === "Lost in the sauce":
            display.textContent = "Lost in the sauce";
            break;
        case displayednumber === "Format: a | b | c":
            display.textContent = "Format: a | b | c";
            break;
        case displayednumber === "no solution":
            display.textContent = "no solution";
            break;
        case displayednumber === "sin" || displayednumber === "cos" || displayednumber === "ln":
            display.textContent = "0";
            break;
        case array[array.length-1] == "n" && array[array.length-2] == "l":
            display.textContent = array.slice(0,-2).join("");
            break;
        case array[array.length-1] == "n" || array[array.length-1] == "s":
            display.textContent = array.slice(0,-3).join("");
            break;
    }
});




// assigner
const ac = document.querySelector (".calc_key_reset")

// une fonction qui permet de remettre le display à 0
ac.addEventListener("click", function(){
    const displayednumber = display.textContent
    if (displayednumber !== "0") {
            display.textContent = "0";
        }
});



// assigner
const enter = document.querySelector (".calc_key_enter")

// touche egal
enter.addEventListener("click", function () {
    const displayednumber = display.textContent;
    let terms = displayednumber.split(/[\+\−\x÷]|ln|\!|\^|\√|sin|cos|\(|\)/);
    let nonumbers = displayednumber.replace(/[0-9-.e]/g, "");
    let operateurs = nonumbers.replace(/sin/g, "h").replace(/cos/g, "p").replace(/ln/g, "L").split("");


    for (let index = 0; index < terms.length; index++) {
        if (terms[index] === 'e') {
          terms[index] = E(1);
          break;
        };
    };
    console.log(terms)
    console.log(operateurs)



    try {
        parsing(terms,operateurs);  
        display.textContent = terms;
     }catch (error) {
        display.textContent = error.message;
      }
});







