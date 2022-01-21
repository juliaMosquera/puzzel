let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");


let a = document.getElementById("btnA");
let b = document.getElementById("btnB");
let c = document.getElementById("btnC");
let d = document.getElementById("btnD");
let e = document.getElementById("btnE");
let f = document.getElementById("btnF");
let g = document.getElementById("btnG");
let h = document.getElementById("btnH");
let i = document.getElementById("btnI");
let j = document.getElementById("btnJ");

const fnA = () => {
    if (letras.innerHTML == "") {
        letras.innerHTML = "A";
    } else{
        if (numeros.innerHTML == "" && letras.innerHTML == "ABCDEFGHIJ") {
            numeros.innerHTML = "1";
        }
    }
};

const fnB = () => {
    if (letras.innerHTML == "A") {
        letras.innerHTML += "B";
    } else {
        if (numeros.innerHTML == "1" && letras.innerHTML == "ABCDEFGHIJ") {
            numeros.innerHTML += "2";
        } else {
            alert("paso incorrecto");
        }
    }
};

const fnC = () => {
    if (letras.innerHTML == "AB") {
        letras.innerHTML += "C";
    } else {
        if (numeros.innerHTML == "12" && letras.innerHTML == "ABCDEFGHIJ") {
        numeros.innerHTML += "3";
    } else {
        alert("paso incorrecto");
    }
    }
};

const fnD = () => {
    if (letras.innerHTML == "ABC") {
        letras.innerHTML += "D";
    } else {
        if (numeros.innerHTML == "123" && letras.innerHTML == "ABCDEFGHIJ") {
        numeros.innerHTML += "4";
    } else {
        alert("paso incorrecto");
    }
    }
};

const fnE = () => {
    if (letras.innerHTML == "ABCD") {
        letras.innerHTML += "E";
    } else {
        if (numeros.innerHTML == "1234" && letras.innerHTML == "ABCDEFGHIJ") {
            numeros.innerHTML += "5";
        } else {
            alert("paso incorrecto");
        }
    }
};

const fnF = () => {
    if (letras.innerHTML == "ABCDE") {
        letras.innerHTML += "F";
    } else {
        if (numeros.innerHTML == "12345" && letras.innerHTML == "ABCDEFGHIJ") {
            numeros.innerHTML += "6";
        } else {
            alert("paso incorrecto");
        }
    }
};

const fnG = () => {
    if (letras.innerHTML == "ABCDEF") {
        letras.innerHTML += "G";
    } else {
        if (numeros.innerHTML == "123456" && letras.innerHTML == "ABCDEFGHIJ") {
            numeros.innerHTML += "7";
        } else {
            alert("paso incorrecto");
        }
    }
};

const fnH = () => {
    if (letras.innerHTML == "ABCDEFG") {
        letras.innerHTML += "H";
    } else {
        if (numeros.innerHTML == "1234567" && letras.innerHTML == "ABCDEFGHIJ") {
            numeros.innerHTML += "8";
        } else {
            alert("paso incorrecto");
        }
    }
};

const fnI = () => {
    if (letras.innerHTML == "ABCDEFGH") {
        letras.innerHTML += "I";
    } else {
        if (numeros.innerHTML == "12345678" && letras.innerHTML == "ABCDEFGHIJ") {
            numeros.innerHTML += "9";
        } else {
            alert("paso incorrecto");
        }
    }
};

const fnJ = () => {
    if (letras.innerHTML == "ABCDEFGHI") {
        letras.innerHTML += "J";
    } else {
        if (numeros.innerHTML == "123456789" && letras.innerHTML == "ABCDEFGHIJ") {
            numeros.innerHTML += "0";
        } else {
            alert("paso incorrecto");
        }
    }
};


a.onclick = () => {
    fnA();
};

b.onclick = () => {
    fnB();
};

c.onclick = () => {
    fnC();
};

d.onclick = () => {
    fnD();
};

e.onclick = () => {
    fnE();
};

f.onclick = () => {
    fnF();
};

g.onclick = () => {
    fnG();
};

h.onclick = () => {
    fnH();
};

i.onclick = () => {
    fnI();
};

j.onclick = () => {
    fnJ();
};