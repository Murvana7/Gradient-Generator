let colorOne = document.getElementById("color-a");
let colorTwo = document.getElementById("color-b");
let currentDirection = "to bottom";
let outputCode = document.getElementById("code");

function setDirection(value, _this){
  let directions = document.querySelectorAll(".buttons button");
  for(let i of directions){
    i.classList.remove("active");
  }
  _this.classList.add("active");
  currentDirection = value;

  generateCode(); // ✅ update code when direction changes
}

function generateCode(){
  outputCode.value =
    `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`;

  // ✅ optional: live background preview
  document.body.style.background =
    `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

function copyText(){
  outputCode.select();
  outputCode.setSelectionRange(0, 99999); // ✅ mobile support
  document.execCommand("copy");
}

// ✅ update when colors change
colorOne.addEventListener("input", generateCode);
colorTwo.addEventListener("input", generateCode);

generateCode();
