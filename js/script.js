const groupCircles = document.querySelectorAll(".circle");

groupCircles.forEach((groupCircle) => {
    groupCircle.addEventListener('click', () => {
      groupCircle.style.backgroundColor = "rgb(247, 140, 164)";
      groupCircle.style.boxShadow = "-5px 4px 0 rgb(205, 32, 33)";
    });
});