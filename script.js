let input1 = document.getElementById("input1");
let sisa_token = document.querySelector(".token");
let token = 5;
let pop_token1 = document.querySelector(".div_token");
let buton1 = document.getElementById("button1");

function bersihkan() {
  if (
    input1.value == "Isi Token Dulu Yaa☺️" ||
    input1.value == "Error!" ||
    input1.value == "undefined"
  ) {
    input1.value = "";
  }
}

function hitung(data) {
  bersihkan();
  input1.value += data;
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
    input1.value = "Error!";
  }

  while (
    input1.value == "Isi Token Dulu Yaa☺️" ||
    input1.value == "Error!" ||
    input1.value == "undefined"
  ) {
    return;
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

let refill = document.querySelector(".div_add");
let iklan1 = document.querySelector(".div_iklan");
let video1 = document.getElementById("video1");
let pop_choice = document.querySelector(".div_nonton");

let buttonYes = document.getElementById("yes");
let buttonNo = document.getElementById("no");

refill.addEventListener("click", () => {
  pop_choice.classList.add("active3");
});

buttonYes.addEventListener("click", () => {
  iklan1.classList.add("active2");
  video1.play();
  if (token > 0) {
    token += 5;
  } else if (token <= 0) {
    token = 5;
  }
  sisa_token.textContent = "Token: " + token;
  setTimeout(() => {
    iklan1.classList.remove("active2");
    video1.pause();
  }, 12250);
  pop_choice.classList.remove("active3");
});

buttonNo.addEventListener("click", () => {
  pop_choice.classList.remove("active3");
});

let reg_vip = document.querySelector(".div_vip");
let ttp = document.getElementById("ttp");
let pop_reg = document.querySelector(".wadah_vip1");

reg_vip.addEventListener("click", () => {
  pop_reg.classList.add("active4");
});

ttp.addEventListener("click", () => {
  pop_reg.classList.remove("active4");
});
