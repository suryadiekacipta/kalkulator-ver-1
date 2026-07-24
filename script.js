let input1 = document.getElementById("input1");
let sisa_token = document.querySelector(".token");
let token = 5;
let pop_token1 = document.querySelector(".div_token");
let buton1 = document.getElementById("button1");
let buton2 = document.getElementById("button2");
let nanti = document.getElementById("nanti");
let ttpx = document.getElementById("ttpx");

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

ttpx.addEventListener("click", () => {
  pop_token1.classList.remove("active");
});

nanti.addEventListener("click", () => {
  pop_token1.classList.remove("active");
});

buton1.addEventListener("click", () => {
  pop_choice.classList.add("active3");
  pop_token1.classList.remove("active");
});

buton2.addEventListener("click", () => {
  pop_reg.classList.add("active4");
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

let upvip = document.getElementById("upgrade");
let load = document.querySelector(".loading");

upvip.addEventListener("click", () => {
  load.classList.add("active5");
  pop_reg.classList.remove("active4");
  setTimeout(() => {
    load.classList.remove("active5");
  }, 3000);
  setTimeout(() => {
    div_bayr.classList.add("active6");
  }, 3050);
});

let div_bayr = document.querySelector(".div_bayar");
let ttpbyr = document.getElementById("ttpbyr");
let button_bayar = document.getElementById("bayar");
let loadbyr = document.querySelector(".loading2");
let pop_byr2 = document.querySelector(".div_bayar3");

ttpbyr.addEventListener("click", () => {
  div_bayr.classList.remove("active6");
});

button_bayar.addEventListener("click", () => {
  loadbyr.classList.add("active7");
  setTimeout(() => {
    loadbyr.classList.remove("active7");
    div_bayr.classList.remove("active6");
  }, 4000);

  setTimeout(() => {
    pop_byr2.classList.add("active8");
  }, 4050);
});

let ttp3 = document.getElementById("ttp3");
ttp3.addEventListener("click", () => {
  pop_byr2.classList.remove("active8");
});

let btl = document.getElementById("batal");
btl.addEventListener("click", () => {
  pop_byr2.classList.remove("active8");
});
