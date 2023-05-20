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
    }

    // longue multiplication de a et b (sans point)
    const n = stringA.length;
    const m = stringB.length;
    const product = Array(n + m).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        for (let k = m - 1; k >= 0; k--) {
                const digit = produit(parseFloat(stringA[i]), parseFloat(stringB[k]));
                const sum = product[i + k + 1] + digit;
                product[i + k] += Math.floor(sum / 10);
                product[i + k + 1] = sum % 10;
            
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
        let j = [multiply(stringX,stringY)];
        j.unshift("-");
        return j.join("")
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
        let j = [division(stringX,stringY)];
        j.unshift("-");
        return j.join("");
    }
    if (baseCondition === 0){
         return division(stringX,stringY);
    }
};



// nombres negatifs racine
function nombresNegatifsR (c,k){
    let baseCondition = 0;
    let stringC = c;
    let stringD = k;
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
        let j = [rac(stringC,stringD)];
        j.unshift("-");
        return j.join("");
    }
};



// nombres negatifs exposants
function nombresNegatifsE (c,k){
    let baseCondition = 0;
    let stringC = c;
    let stringD = k;
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
        let j = [exp(stringC,stringD)];
        j.unshift("-");
        return j.join("");
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



function pow(a,b){
    var res = 1;
    for (i = 0; i<b; i++){
      res *= a }
      return res;
}


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
    rslt = E(b * ln(a))
    return rslt
};



// fonction racine de n 
function rac(b, a){
    result = 1/b
    return E(result*ln(a));
};



//fonction sin x radiant 
function sin(x){
    const radiant = x*(Math.PI/180)
    sx = 0
    for (i=0; i<100; i+=1)
        sx += ((-1)**i)*((radiant**((2*i)+1))/(factorial((2*i)+1)))
    return sx;
};



//fonction cos x radiant
function cos(x){
    const radiant = x*(Math.PI/180)
    cosx = 0
    for(i=0; i<100; i+=1)
        cosx += ((-1)**i)*((radiant**(2*i))/(factorial(2*i)))
    return cosx;
};

function tan(x){
    return sin(x)/cos(x)
}



function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}


//priorite des operations
function parsing(terms, operateurs){
    if (operateurs.includes("(") && !operateurs.includes(")")) {
        throw new Error("Missing closing parenthesis");
    } else if (!operateurs.includes("(") && operateurs.includes(")")) {
        throw new Error("Missing opening parenthesis");
    } else if (operateurs.indexOf("(") > operateurs.lastIndexOf(")")) {
        throw new Error("Incorrect order of parenthesis");
    } else if (operateurs.includes("|")){
        throw new Error("Press x² for quadratic")
    } else if(!operateurs.includes("L") && !operateurs.includes("h") && !operateurs.includes("p") && !operateurs.includes("!") && !operateurs.includes("(") && !operateurs.includes(")")){
        if (terms.includes("")){
            throw new Error("Lost in the sauce")
        }
    } 

    while (operateurs.includes("(") && operateurs.includes(")")){
        let parenthesis = []
        for (var i = 0; i <= operateurs.length; i++){
            if(operateurs[i] == "(" || operateurs[i] == ")"){
                parenthesis.push(operateurs[i])
            }
        }
        console.log(parenthesis)
        let salut = []
        for (var i = 0; i <= parenthesis.length; i++){
            if (parenthesis[i] == "(" && parenthesis[i+1] == ")"){
                salut.push(i)
                break;
            }
        }
        let firstposition = getPosition(operateurs.toString().replaceAll(",", ""), "(", i+1)
        let secondposition = operateurs.indexOf(")")

        parenthesis = []

        let subterm = terms.slice(firstposition+1,secondposition+1)
        let subop = operateurs.slice(firstposition+1,secondposition)
        parsing(subterm,subop)
        operateurs.splice(firstposition, secondposition-firstposition+1)
        terms[firstposition] = subterm
        terms.splice(firstposition+1, secondposition-firstposition+1)
    }
    
        switch (true){
            //fonctions spéciales en premier
            case operateurs.includes("h"):
                terms[operateurs.indexOf("h")] = sin(terms[operateurs.indexOf("h")+1].toString()).toFixed(4);
                terms.splice(operateurs.indexOf("h")+1,1);
                operateurs.splice(operateurs.indexOf("h"),1);
                break;
            case operateurs.includes("p"):
                terms[operateurs.indexOf("p")] = cos(terms[operateurs.indexOf("p")+1].toString()).toFixed(4);
                terms.splice(operateurs.indexOf("p")+1,1);
                operateurs.splice(operateurs.indexOf("p"),1);
                break;
            case operateurs.includes("!"):
                terms[operateurs.indexOf("!")] = factorial(terms[operateurs.indexOf("!")].toString());
                terms.splice(operateurs.indexOf("!")+1,1);
                operateurs.splice(operateurs.indexOf("!"),1);
                break;
            case operateurs.includes("L"):
                terms[operateurs.indexOf("L")] = ln(terms[operateurs.indexOf("L")+1].toString());
                terms.splice(operateurs.indexOf("L")+1,1);
                operateurs.splice(operateurs.indexOf("L"),1);
                break;
            // PEDMAS debute ici (sans les parentheses)
            case operateurs.includes("^"):
                terms[operateurs.indexOf("^")] = parseFloat(nombresNegatifsE(terms[operateurs.indexOf("^")].toString(), terms[operateurs.indexOf("^")+1].toString())).toFixed(4);
                terms.splice(operateurs.indexOf("^")+1,1);
                operateurs.splice(operateurs.indexOf("^"),1);
                break;
            case operateurs.includes("√"):
                terms[operateurs.indexOf("√")] = parseFloat(nombresNegatifsR(terms[operateurs.indexOf("√")].toString(), terms[operateurs.indexOf("√")+1].toString())).toFixed(4);
                terms.splice(operateurs.indexOf("√")+1,1);
                operateurs.splice(operateurs.indexOf("√"),1);
                break;
            case operateurs.includes("÷"):
                terms[operateurs.indexOf("÷")] = nombresNegatifsD(terms[operateurs.indexOf("÷")].toString(), terms[operateurs.indexOf("÷")+1].toString());
                terms.splice(operateurs.indexOf("÷")+1,1);
                operateurs.splice(operateurs.indexOf("÷"),1);
                break;
            case operateurs.includes("x"):
                terms[operateurs.indexOf("x")] = nombresNegatifsM(terms[operateurs.indexOf("x")].toString(), terms[operateurs.indexOf("x")+1].toString());
                terms.splice(operateurs.indexOf("x")+1,1);
                operateurs.splice(operateurs.indexOf("x"),1);
                break;
            case operateurs.includes("−"):
                terms[operateurs.indexOf("−")] = parseFloat(terms[operateurs.indexOf("−")]) - parseFloat(terms[operateurs.indexOf("−")+1]);
                terms.splice(operateurs.indexOf("−")+1,1);
                operateurs.splice(operateurs.indexOf("−"),1);
                break;
            case operateurs.includes("+"):
                terms[operateurs.indexOf("+")] = parseFloat(terms[operateurs.indexOf("+")]) + parseFloat(terms[operateurs.indexOf("+")+1]);
                terms.splice(operateurs.indexOf("+")+1,1);
                operateurs.splice(operateurs.indexOf("+"),1);
                break;
        }
    if(operateurs.length > 0){
        parsing(terms,operateurs)
    } else {
        return terms;
    };
};

    


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





// division
function division (x,y){
    inverseY = 1/y;
    return multiply(x.toString(),inverseY.toString());
};




//Methode de Newton
function f(x) {
    return 1/x-2;
};
function fprime(x){
    return -1/(x**2);
};
let alpha = 0.1;
    for (var j = 1; j < 15; j++){
        alpha = alpha-f(alpha)/fprime(alpha);
        console.log(alpha);
    };


//division 
function div(a,b){
    result = a*exp(b,-1)
    return result;
};