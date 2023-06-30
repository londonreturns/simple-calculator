let buttonKeys = ["C", "%", "M+", "M-", "7", "8", "9", "*", "4", "5", "6", "/", "1", "2", "3", "+", "0", ".", "=", "-", "(", ")"]
let keys;
let screen = document.querySelector("#screen");
let memory = "";

function clearScreen() {
    screen.innerHTML = ``;
}


function addToScreen(event){
    let userInput = event.target.textContent;
    if (userInput == "C"){
        clearScreen();
    }else if (userInput == "="){
        try{
            newNumber = eval(screen.textContent);
            newText = newNumber.toString();
            let decimal = document.querySelector(".decimal").value;
            if (decimal == ``){
                decimal = 3;
            }else{
                decimal = parseInt(decimal);
            }
            clearScreen();
            if (newText.length > 5 && newText.includes(".")){
                screen.textContent = newText.slice(0, newText.indexOf(".") + decimal + 1);
                console.log(newText);

            }else(
                screen.textContent += newNumber
            )
        }catch (error){
            screen.textContent = "Syntax Error";
        }
    } else if (userInput == "%"){
        try{
            let num = screen.textContent;
            screen.textContent = (parseFloat(num) / 100);
        }catch (error){
            screen.textContent = `error`;
        }
    } else if (userInput == "M+") {
        if (memory == ``){
            memory = screen.textContent;
            clearScreen();
        }else{
            screen.textContent += memory;
        }
    } else if (userInput == "M-"){
        if (memory != ``) {
            memory = ``; 
        }else{
            alert("Memory is empty");
        }
    }
    else{
        screen.textContent += userInput;
    }
}

function start(){
    clearScreen();
    buttonKeys.forEach((key) => {
        buttonHTML = `<button id=${key}>${key}</button>`
        keys = document.querySelector(".buttons").innerHTML += buttonHTML;

    })

    buttons = document.querySelectorAll("button")

    buttons.forEach((btn) => {
        btn.addEventListener("click", addToScreen);
    })
}
start()