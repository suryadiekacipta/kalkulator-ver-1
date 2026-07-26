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

//pop metode pembayaran//
let bor1 = document.getElementById("qris");
let bor2 = document.getElementById("dana");
let bor3 = document.getElementById("gopay");
let bor4 = document.getElementById("ovo");

//ceklis//
let check1 = document.querySelector(".checked2");
let check2 = document.querySelector(".checked3");
let check3 = document.querySelector(".checked4");
let check4 = document.querySelector(".checked5");

bor1.addEventListener("click", () => {
  bor1.classList.add("met1");
  check1.classList.add("cek1");
  bor2.classList.remove("met2");
  check2.classList.remove("cek2");
  bor3.classList.remove("met3");
  check3.classList.remove("cek3");
  bor4.classList.remove("met4");
  check4.classList.remove("cek4");
});

bor2.addEventListener("click", () => {
  bor2.classList.add("met2");
  check2.classList.add("cek2");
  bor1.classList.remove("met1");
  check1.classList.remove("cek1");
  bor3.classList.remove("met3");
  check3.classList.remove("cek3");
  bor4.classList.remove("met4");
  check4.classList.remove("cek4");
});

bor3.addEventListener("click", () => {
  bor3.classList.add("met3");
  check3.classList.add("cek3");
  bor1.classList.remove("met1");
  check1.classList.remove("cek1");
  bor2.classList.remove("met2");
  check2.classList.remove("cek2");
  bor4.classList.remove("met4");
  check4.classList.remove("cek4");
});

bor4.addEventListener("click", () => {
  bor4.classList.add("met4");
  check4.classList.add("cek4");
  bor1.classList.remove("met1");
  check1.classList.remove("cek1");
  bor2.classList.remove("met2");
  check2.classList.remove("cek2");
  bor3.classList.remove("met3");
  check3.classList.remove("cek3");
});
