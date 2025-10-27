const custom = document.querySelector("#custom");
const container = document.querySelector("#container");
const p = document.querySelector("p");
const clear = document.querySelector("#clear")
const palette = document.querySelectorAll("#palette button");

let holding = false;
let currentSize = 16;
let defaultColor = "black";

// bagian ini adalah fungsi untuk membuat grid baru
function makeGrid(size) {
  currentSize = size;

  container.innerHTML = '';
  const total = size * size;
  // use flex-basis in percent so the squares fit exactly into each row
  // this avoids subpixel rounding gaps that cause gaps between rows
  for(let i = 0; i < total; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    // set flex-basis so each row contains exactly `size` squares
    // aspect-ratio in CSS keeps them perfectly square
    square.style.flex = `0 0 calc(100% / ${size})`;
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
// no explicit resize handler needed: flex-basis (percent) + aspect-ratio keep
// the grid responsive and avoid per-row gaps caused by pixel rounding.

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

clear.addEventListener('click', () => {
  // hentikan mode drawing jika sedang menahan klik
  holding = false;

  // pilih semua square dan reset style inline mereka —
  // ini mengosongkan warna yang sudah diterapkan tanpa perlu membuat ulang grid
  const squares = document.querySelectorAll('.square');
  squares.forEach(sq => {
    sq.style.backgroundColor = '';
    sq.style.borderColor = '';
  });

})

palette.forEach(button => {
  button.addEventListener('click', () => {
    defaultColor = button.style.backgroundColor;
  })
});


// maksud dari bagian ini itu untuk set nilai default dari size grid
makeGrid(16);
p.textContent = `${currentSize} x ${currentSize}`;  

