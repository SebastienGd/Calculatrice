
// assigner
const numbers = document.querySelectorAll(".calc_key_num")
const display = document.querySelector(".calculator_display")

// un for loop et une fonction qui permettent d'afficher les nombres sur le display
for(var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(){
        const touche = event.target
        const valeurtouche = touche.textContent;
        const displayednumber = display.textContent;
        if (displayednumber === "0") {
            display.textContent = valeurtouche;
        } else {
            display.textContent = displayednumber + valeurtouche;
          }
        }
)};
 


// assigner
const operators = document.querySelectorAll(".calc_key_op")

// un for loop et une fonction qui permettent d'afficher les operators sur le display
for(var i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", function(){
        const touche = event.target;
        const valeurtouche = touche.textContent;
        const displayednumber = display.textContent;
        if (displayednumber === "0") {
            display.textContent = valeurtouche;
        } else {
            display.textContent = displayednumber + valeurtouche;
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
    if (displayednumber === "0") {
        display.textContent = valeurtouche;
    } else {
        display.textContent = displayednumber + valeurtouche;
      }
});



// assigner
const minus = document.querySelector (".calc_key_minus")

// bouton −
minus.addEventListener ("click", function(){
    const touche =event.target;
    const valeurtouche = touche.textContent;
    const displayednumber = display.textContent;
    if (displayednumber === "0") {
        display.textContent = valeurtouche;
    } else {
        display.textContent = displayednumber + valeurtouche;
      }
});
    


// assigner
const del = document.querySelector (".calc_key_del")

// la fonction delete
del.addEventListener("click", function(){
    const displayednumber = display.textContent;
    const validValues = ["0", "1", "2", "3", "4", "5", "6", "7","8","9","+","-","|","x","÷",".","(",")","e","L","!","^","√","−"];
    if(!validValues.includes(displayednumber)){
        const array = displayednumber.split("");
        const newarray = array.slice(0,-1);
        display.textContent = newarray.join("");
    } else {
        display.textContent = "0";
    }
    if(displayednumber.includes("c")){
        display.textContent = "Format: a | b | c";
    }
    if(displayednumber.includes("n")){
        display.textContent = "no solution";
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

// loop utilisé dans l'algo pour la multiplication
function produit(n, m){
    var prod=0;
    for(var ii=0; ii < n; ii++){
        prod += m;
    }
    return prod;
};



// algo pour la multiplication longue 
function multiply(a, b) {
    let digitsafter = 0;

    // trouver le nombre de chiffres après le point et enlever le point du string a
    let stringA = a;
    let positionpointA = -1; 
    for (let i = stringA.length - 1; i >= 0; i--) {
      if (stringA[i] === ".") {
        positionpointA = i;
        break; 
      } 
    }
    if (positionpointA !== -1) {
      stringA = stringA.slice(0, positionpointA) + stringA.slice(positionpointA + 1);
      digitsafter += stringA.length - positionpointA;
      console.log(digitsafter);
    }
    
    // trouver le nombre de chiffres après le point et enlever le point du string b
    let stringB = b;
    let positionpointB = -1; 
    for (let ii = stringB.length - 1; ii >= 0; ii--) {
      if (stringB[ii] === ".") {
        positionpointB = ii;
        break;
      }
    }
    if (positionpointB !== -1) {
      stringB = stringB.slice(0, positionpointB) + stringB.slice(positionpointB + 1);
      digitsafter += stringB.length - positionpointB;
      console.log(digitsafter);
    }

    // longue multiplication de a et b (sans point)
    const n = stringA.length;
    const m = stringB.length;
    console.log(n)
    console.log(m)
    const product = Array(n + m).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
                const digit = produit(parseFloat(stringA[i]), parseFloat(stringB[j]));
                const sum = product[i + j + 1] + digit;
                product[i + j] += Math.floor(sum / 10);
                product[i + j + 1] = sum % 10;
            
        }
    }
    while (product.length > 1 && product[0] === 0) {
        product.shift();
    }

    // placer le point au bon endroit dans le nombre final (si il y en a un)
    let result = product.join('');
    if (digitsafter !== 0) {
        result = result/Math.pow(10,digitsafter);
    }
    return result;
};
console.log(Math.floor(4.8))


// division
function division (x,y){
    inverseY = 1/y;
    return multiply(x.toString(),inverseY.toString());
};



// nombres negatifs multiplication
function nombresNegatifsM(x,y){
    let baseCondition = 0;
    let stringX = x
    let stringY = y
    if (stringX.includes("-")){
        stringX = stringX.replace("-","");
        baseCondition += 1;
    }
    if (stringY.includes("-")){
        stringY = stringY.replace("-","");
        baseCondition += 1;
    }
    if (baseCondition === 2){
        return multiply(stringX,stringY);
    }
    if (baseCondition === 1){
        let z = [multiply(stringX,stringY)];
        z.unshift("-");
        return z.join("")
    }
    if (baseCondition === 0){
         return multiply(stringX,stringY);
    }
};



// nombres negatifs division
function nombresNegatifsD(x,y){
    let baseCondition = 0;
    let stringX = x
    let stringY = y
    if (stringX.includes("-")){
        stringX = stringX.replace("-","");
        baseCondition += 1;
    }
    if (stringY.includes("-")){
        stringY = stringY.replace("-","");
        baseCondition += 1;
    }
    if (baseCondition === 2){
        return division(stringX,stringY);
    }
    if (baseCondition === 1){
        let z = [division(stringX,stringY)];
        z.unshift("-");
        return z.join("");
    }
    if (baseCondition === 0){
         return division(stringX,stringY);
    }
};



// nombres negatifs racine
function nombresNegatifsR (c,d){
    let baseCondition = 0;
    let stringC = c;
    let stringD = d;
    if (stringD.includes("-")){
        if (stringC % 2 == 0){
            return "Domain Error"
        } else {
            stringD = stringD.replace("-","");
            baseCondition += 1;
        }
    }
    if (baseCondition === 0){
        return rac (stringC, stringD)
    }
    if (baseCondition === 1){
        let z = [rac(stringC,stringD)];
        z.unshift("-");
        return z.join("");
    }
};



// nombres negatifs exposants
function nombresNegatifsE (c,d){
    let baseCondition = 0;
    let stringC = c;
    let stringD = d;
    if (stringC.includes("-")){
        if (stringD % 2 == 0){
            stringC = stringC.replace("-","")
            baseCondition += 1
        } else {
            stringC = stringC.replace("-","");
            baseCondition += 2;
        }
    }
    if (baseCondition === 0){
        return exp (stringC, stringD)
    }
    if (baseCondition === 2){
        let z = [exp(stringC,stringD)];
        z.unshift("-");
        return z.join("");
    }
    if (baseCondition === 1){
        return exp (stringC, stringD)
    }
};



// fonction factorielle 
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
};



// fonctionn e^x séries taylor
function E(x){
    ex = 0;
    for(i = 0 ; i<155 ; i++)
        ex += Math.pow(x, i)/factorial(i);
    return ex;
};



// fonction series taylor 
function ln(x){
    x = parseFloat(x)
    lnx = 0
        for (i = 1; i<100000; i+=2) 
            lnx += 2*((1/i)*(((x-1)/(x+1))**i))
        return lnx;
};


    
//fonction exponentielle
function exp(a, b){
    a = parseFloat(a)
    b = parseFloat(b)
    rslt = E(b,ln(a))
    return rslt
};



// fonction racine de n 
function rac(b, a){
    result = 1/b
    return E(result*ln(a));
};



// parse le calc display
enter.addEventListener("click", function () {
     const displayednumber = display.textContent
     // split permet de renvoyer un array avec les nombres entre les symbols (legit une matrice)
     const terms = displayednumber.split(/\+|\−|\x|\÷|\e|\L|\!|\^|\√/);
     // /[\d\.]/g est un regex qui sélectionne tous ce qui n'est pas une lettre ou un symbole. Les éléments sélectionnés sont ensuite remplacés par un empty string ""
     const operateurs = displayednumber.replace(/[\d\.\-]/g, "").split("");
     
     // parseFloat considère les nombres commes des nombres et non comme des strings (utile pour faire des opérations)    
     let result = parseFloat(terms[0]);
     // loop pour les opérations simples
     for(var x=0; x < operateurs.length; x++){
        const op = operateurs[x];
        const secondterm = parseFloat(terms[x+1]);
        switch(op){
            case "+":
                result+=secondterm;
                break;
            case "−":
                result-=secondterm;
                break;
            case "x":
                result = nombresNegatifsM(result.toString(),secondterm.toString());
                break;
            case "÷":
                result = nombresNegatifsD(result.toString(),secondterm.toString());
                break;
            case "e":
                result = E(secondterm.toString());
                break; 
            case "L":
                result = ln(secondterm.toString());
                break;
            case "!":
                result = factorial(result.toString());
                break; 
            case "^":
                let x = nombresNegatifsE(result.toString(), secondterm.toString());
                result = parseFloat(x).toFixed(3);
                break;
            case "√":
                let z = nombresNegatifsR(result.toString(), secondterm.toString());
                if (Number.isFinite(z)){
                    result = parseFloat(z).toFixed(3);
                } else {
                    result = z;
                }
                break; 

        }}
    display.textContent = result;
    console.log(operateurs);
    console.log(terms);
});
    


// assigner
const quad = document.querySelector (".calc_key_quad")

// fonction quadratique
quad.addEventListener("click", function() {
    const displayednumber = display.textContent;
    if(displayednumber.includes("|")){
        const terms = displayednumber.split(/\|/);
        parseFloat(terms);
        const positive = eval((-terms[1]+Math.sqrt(Math.pow(terms[1],2)-4*terms[0]*terms[2])))/(2*terms[0]).toFixed(3);
        const negative = eval((-terms[1]-Math.sqrt(Math.pow(terms[1],2)-4*terms[0]*terms[2])))/(2*terms[0]).toFixed(3);
        const positiveWithThreeDigits = positive.toFixed(3);
        const negativeWithThreeDigits = negative.toFixed(3);
        const total = display.textContent = "x=" + positiveWithThreeDigits + " x=" + negativeWithThreeDigits;
        if(total === "x=NaN x=NaN"){
            display.textContent = "no solution";
        }
    } else{
        const displayednumber = display.textContent = "Format: a | b | c";
    }
});



