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
  // flex-basis dalam persen sehingga kotak pas di setiap baris
  // menghindari subpixel rounding yang menyebabkan celah di antara baris
  for(let i = 0; i < total; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    // mengatur flex-basis jadi setiap baris berisi tepat `size` kotak
    // aspek rasio di CSS menjaga agar mereka tetap persegi
    square.style.flex = `0 0 calc(100% / ${size})`;
    // dibawah ini fungsi untuk mengubah warna dari grid yang di hover oleh mouse
    square.addEventListener("mousedown", () => { holding = true; })
    square.addEventListener("mouseup", () => { holding = false; })

    square.addEventListener("mousemove", () => {
      if (holding) {
        square.style.backgroundColor = `${defaultColor}`;
        square.style.borderColor = `${defaultColor}`;
      }
    });

    // tambahin { passive: false } biar bisa preventDefault()
    square.addEventListener("touchstart", (e) => {
      e.preventDefault(); // mencegah halaman ikut scroll saat menyentuh
      square.style.backgroundColor = `${defaultColor}`;
      square.style.borderColor = `${defaultColor}`;
    }, { passive: false });

    square.addEventListener("touchmove", (e) => {
      e.preventDefault(); // mencegah halaman ikut geser saat menggambar
      const touch = e.touches[0];
      const elem = document.elementFromPoint(touch.clientX, touch.clientY);
      if (elem && elem.classList.contains('square')) {
        elem.style.backgroundColor = `${defaultColor}`;
        elem.style.borderColor = `${defaultColor}`;
      }
    }, { passive: false });

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

