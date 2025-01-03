// FILL CLICKED CIRCLES
const groupCircles = document.querySelectorAll(".circle");

groupCircles.forEach((groupCircle) => {
  groupCircle.addEventListener("click", () => {
    groupCircle.style.backgroundColor = "rgb(247, 140, 164)";
    groupCircle.style.boxShadow = "-5px 4px 0 rgb(205, 32, 33)";
  });
});

// RANDOM NUMBER GENERATOR
const num = document.getElementById("square");
const btn = document.getElementById("new-number");
let arrayNum = [];
let z = 0;

//fill array of numbers from 1 to 90
for (let j = 1; j < 91; j++) {
  arrayNum.push(j);
}

btn.addEventListener("click", () => {
  if (arrayNum.length < 1) {
    document.location.reload();
  }
  console.log("array length: " + arrayNum.length);
  z = Math.floor(Math.random() * arrayNum.length);
  console.log("index sorted: " + z);
  num.innerHTML = arrayNum[z];
  arrayNum.splice(z, 1);
});

// RESET PAGE
const resetBtn = document.getElementById("new-game");

resetBtn.addEventListener("click", () => {
  document.location.reload();
});
