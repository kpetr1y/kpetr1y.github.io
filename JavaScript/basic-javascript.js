function tickUp() {
    let counter = document.getElementById("counter");
    let num = parseInt(counter.textContent)

    counter.textContent = num + 1;
}

function tickDown() {
    let counter = document.getElementById("counter");
    let num = parseInt(counter.textContent)
    
    counter.textContent = num - 1;
    
}

function runForLoop() {
    let counter = document.getElementById("counter");
    let num = parseInt(counter.textContent)

    let result = document.getElementById("forLoopResult");

    let current = "";
    for (let i = 0; i <= num; i++) {
        current += i + "  ";
    }
    result.textContent = current;
}

function showOddNumbers() {
    let counter = document.getElementById("counter");
    let num = parseInt(counter.textContent)

    let result = document.getElementById("oddNumberResult");

    let i = 1;
    let current = "";
    while (i <= num) {
        current += i + "  ";
        i += 2;
    }
    result.textContent = current;
}

function addMultiplesToArray() {
    let counter = document.getElementById("counter");
    let num = parseInt(counter.textContent)
    let array = [];

    let i = 5;
    while (i <= num) {
        array.push(i);
        i += 5;
    }

    console.log(array);
}

function printCarObject() {
    let carType = document.getElementById("carType").value;
    let carMPG = document.getElementById("carMPG").value;
    let carColor = document.getElementById("carColor").value;

    let newCar = {
        cType: carType,
        cMPG: carMPG,
        cColor: carColor
    }

    console.log(newCar);
}

function loadCar(num) {

    if (num == 1) {
        document.getElementById("carType").value = carObject1.cType;
        document.getElementById("carMPG").value = carObject1.cMPG;
        document.getElementById("carColor").value = carObject1.cColor;
    }
    else if (num == 2) {
        document.getElementById("carType").value = carObject2.cType;
        document.getElementById("carMPG").value = carObject2.cMPG;
        document.getElementById("carColor").value = carObject2.cColor;
    }
    else {
        document.getElementById("carType").value = carObject3.cType;
        document.getElementById("carMPG").value = carObject3.cMPG;
        document.getElementById("carColor").value = carObject3.cColor;
    }
}

function changeColor(num) {
    if (num == 1) {
        let para = document.getElementById("styleParagraph");
        para.style.color = "red";
    }        
    else if (num == 2) {
        let para = document.getElementById("styleParagraph");
        para.style.color = "green";
    }
    else {
        let para = document.getElementById("styleParagraph");
        para.style.color = "blue";
    }
}