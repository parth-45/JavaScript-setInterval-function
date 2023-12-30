function getRandomColor() {
  let redColorValue = Math.ceil(0 + Math.random() * 255);
  let greenColorValue = Math.ceil(0 + Math.random() * 255);
  let blueColorValue = Math.ceil(0 + Math.random() * 255);
  return `rgb(${redColorValue},${greenColorValue},${blueColorValue})`;
}

setInterval(() => {
    let box = document.getElementsByClassName("box");
    Array.from(box).forEach((e) => {
      e.style.backgroundColor = getRandomColor();
    });
  document.body.style.backgroundColor = getRandomColor();
}, 75);