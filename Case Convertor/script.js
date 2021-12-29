
/*
document.getElementById('upper-case').onclick=function (){
    let upperString=document.querySelector('textarea').value.toUpperCase();
    document.querySelector('textarea').value=upperString;
}
document.getElementById('lower-case').onclick=function () {
    let lowerString=document.querySelector('textarea').value.toLowerCase();
    document.querySelector('textarea').value=lowerString;
}
*/

let textEditor = document.querySelector("textarea");

const buttonToUpperCase = document.getElementById("upper-case");
buttonToUpperCase.addEventListener('click', function () {
    textEditor.value = textEditor.value.toUpperCase();
});

const buttonToLowerCase = document.getElementById("lower-case");
buttonToLowerCase.addEventListener('click', function () {
    textEditor.value = textEditor.value.toLowerCase();
});

function upperCaseFunction(match) {
    return match.toUpperCase();
}

const buttonToProperCase = document.getElementById("proper-case");
buttonToProperCase.addEventListener('click', function () {
    textEditor.value = textEditor.value.replace(/(^\w|\s\w)/g, upperCaseFunction);
});

const buttonToSentenceCase = document.getElementById("sentence-case");
buttonToSentenceCase.addEventListener('click', function () {
    textEditor.value = textEditor.value.toLowerCase();
    textEditor.value = textEditor.value.replace(/(^\w|\.\s\w|\.\w)/g, upperCaseFunction);
});