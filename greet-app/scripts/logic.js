window.addEventListener('load', bindEvent);

function bindEvent(){
var greetButton = document.getElementById("bt");
greetButton.addEventListener('click', sayWelcome);
document.getElementById('clear').addEventListener('click',clear)
}
function sayWelcome(){
    console.log("I am in Say Welcome");
    var firstName = document.getElementById("first").value;
    // firstName = initCap(firstName)
    var lastName = document.getElementById("last").value
    // lastName = initCap(lastName)
    var result = `Welcome ${initCap(firstName)} ${initCap(lastName)}`;
    var pTag = document.getElementById('output')
    pTag.innerText = result
}

function initCap(str){
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

function clear(){
    document.getElementById("first").value="";
    document.getElementById("last").value="";
    document.getElementById('output').innerText="";
    document.getElementById("first").focus();
}