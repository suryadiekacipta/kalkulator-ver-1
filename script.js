let input1 = document.getElementById("input1");
let isi1;
let sisa_token = document.querySelector(".token");
let token = 5;
let pop_token1 = document.querySelector(".div_token");
let buton1 = document.getElementById("button1");
function hitung(data) {
  isi1 = input1.value += data;
}

function clearall() {
  input1.value = "";
}

function hapus() {
  input1.value = input1.value.slice(0, -1);
}

function hasil() {
  try {
    let hasil1 = eval(input1.value);

    input1.value = hasil1;
  } catch (error) {
    console.log("error");
  }
  token--;
  sisa_token.textContent = "Token: " + token;

  if (token < 0) {
    pop_token1.classList.add("active");
    input1.value = "Isi Token Dulu Yaa☺️";
  }
  if (token < 1) {
    sisa_token.textContent = "Token Habis!";
  }
}

buton1.addEventListener("click", () => {
  pop_token1.classList.remove("active");
});
