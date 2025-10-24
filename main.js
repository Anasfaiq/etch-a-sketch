const custom = document.querySelector("#custom");
const container = document.querySelector("#container");
const p = document.querySelector("p");
const clear = document.querySelector("#clear")

let holding = false;
let currentSize = 16;
let defaultColor = "black";

// bagian ini adalah fungsi untuk membuat grid baru
function makeGrid(size) {
  currentSize = size;

  container.innerHTML = '';
  const total = size * size;
  const squareSize = 640 / size;
  for(let i = 0; i < total; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    // dibawah ini fungsi untuk mengubah warna dari grid yang di hover oleh mouse
    square.addEventListener("mousedown", () => { holding = true; })
    square.addEventListener("mouseup", () => { holding = false; })

    square.addEventListener("mousemove", () => {
      if (holding) {
        square.style.backgroundColor = `${defaultColor}`;
        square.style.borderColor = `${defaultColor}`;
      }
    })
    container.appendChild(square);
  }
}

custom.addEventListener('click', () => {
  const raw = prompt("Enter square per side (1 - 100)")
  const size = parseInt(raw, 10);

  // validasi agar input yang dimasukkan pengguna tidak melebihi 100 maupun kurang dari 1
  // berguna agar pengguna tidak memasukkan input yang berlebihan 
  // yang dapat menyebabkan lag pada perangkat pengguna
  if (!size || size < 1 || size > 100) {
    alert("Input invalid, Masukkan angka 1 - 100");
    return;
  }
  makeGrid(size);
  p.textContent = `${currentSize} x ${currentSize}`;
});



// maksud dari bagian ini itu untuk set nilai default dari size grid
makeGrid(16);
p.textContent = `${currentSize} x ${currentSize}`;  

