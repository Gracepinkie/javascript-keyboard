let marks = 88;
// >, >= , <, <=
// &&, ||, !
//let marks = 88;
// console .log(marks <= 98 && marks >=86):
// switch(true) {
//     case 100:
//         console.log("A+");
//     break;
//     case  (marks <= 98 && marks >= 85):
//         console.log("B+");
//     break;
//     case 75:
//         console.log("Distinction");
//     break;
//     case 50:
//         console.log("Pass");
//     break;
//     case 49:
//         console.log("Fail");
//     break;
//     default:
//         console.log("Out of range");
// }

// function myfunction() {
//     document.getElementById("output").innerHTML =
//     'WASSUP'
// }

const container = document.querySelector('.container');
const textarea = document.querySelector('.text');
const alphabet = document.querySelectorAll('.alpha');
const key = document.querySelectorAll('.key');
let checkCaps = false;
let checkLights = false;
//CAPSLOCK
const caps = function () {
  if (checkCaps == false) {
    for (let i = 0; i < alphabet.length; i++) {
      let getAlpha = alphabet[i].textContent;
      const up = getAlpha.toUpperCase();
      alphabet[i].textContent = up;
    }
    checkCaps = true;
  } else {
    for (let i = 0; i < alphabet.length; i++) {
      let getAlpha = alphabet[i].textContent;
      const low = getAlpha.toLowerCase();
      alphabet[i].textContent = low;
    }
    checkCaps = false;
  }
};

//Event listener
container.addEventListener('click', function (e) {
  if (e.target.classList.contains('key')) {
    if (e.target.classList.contains('spaceBar')) {
      textarea.textContent += ' ';
    }
    if (e.target.classList.contains('caps')) {
      caps();
    }
    if (e.target.classList.contains('content')) {
      const getContent = e.target.textContent;
      textarea.textContent += getContent;
    }
    if (e.target.classList.contains('backSpace')) {
      textarea.textContent = textarea.textContent.substring(
        0,
        textarea.textContent.length - 1
      );
    }
    if (e.target.classList.contains('light')) {
      blink();
    }
  } else {
    return;
  }
});
