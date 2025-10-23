const custom = document.querySelector("#custom");
const container = document.querySelector("#container");

// bagian ini adalah fungsi untuk membuat grid baru
function makeGrid(size) {
  container.innerHTML = '';
  const total = size * size;
  const squareSize = 640 / size;
  for(let i = 0; i < total; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    // dibawah ini fungsi untuk mengubah warna dari grid yang di hover oleh mouse
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
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
});

// maksud dari bagian ini itu untuk set nilai default dari size grid
makeGrid(16);


// custom.addEventListener('click', () => {
//   inputUser = prompt("Enter the number of grid that you want")
//   if (inputUser > 100 || inputUser <= 0){
//     return;
//   }else {
//     container.innerHTML = '';
//     for (let i = 0; i < inputUser; i++){
//       const square = document.createElement("div");
//       square.classList.add('square');
//       square.style.width = `${640 / inputUser}px`
//       square.style.height = `${640 / inputUser}px`
//       container.appendChild(square);
//       square.addEventListener("mouseover", (e) => {
//         console.log(e);
//         square.style.backgroundColor = 'black';
//       })
// }

//   }
// }) 


// for (let i = 0; i < inputUser; i++){
//   const square = document.createElement("div");
//   square.classList.add('square');
//   container.appendChild(square);
//   square.addEventListener("mouseover", (e) => {
//     console.log(e);
//     square.style.backgroundColor = 'black';
//   })
// }
