const container = document.getElementById("container");
const squares = [];

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
    squares.push(div);
  }
}

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.classList.add('hovered');
  });
});