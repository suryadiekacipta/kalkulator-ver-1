addEventListener("load", function () {
  let waktu_aktif = document.getElementById("waktu_aktif");

  let bulan_name = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let now = new Date();

  let tanggal = now.getDate();
  let bulan = now.getMonth();
  let tahun = now.getFullYear();

  waktu_aktif.textContent = tanggal + "-" + bulan_name[bulan] + "-" + tahun;
  console.log(waktu_aktif);
});

let input1 = document.getElementById("input1");

function hitung(value) {
  cek();
  input1.value += value;
}

function hapus_semua() {
  input1.value = "";
}

function hapus() {
  input1.value = input1.value.slice(0, -1);
}

let haasil1;
let hasil_bulat;
function hasil() {
  try {
    hasil1 = eval(input1.value);
    hasil_bulat = input1.value = Math.floor(hasil1);
  } catch (error) {
    console.log("error");
    input1.value = "Error!";
  }
}

function render_history() {}

function cek() {
  if (input1.value == "undefined" || input1.value == "Error!") {
    input1.value = "";
  }
}

let lagu1 = document.getElementById("lagu1");
let audio1 = document.getElementById("audio1");
let kaset1 = document.getElementById("kaset1");
let kasetoff1;

lagu1.addEventListener("click", () => {
  audio1.currentTime = 0;
  clearTimeout(kasetoff1);
  lirik_dunia_yg_nanti();
  audio1.play();
  if (!audio1.paused) {
    kaset1.classList.add("kaseton");
  }
  kasetoff1 = setTimeout(() => {
    if (audio1.paused) {
      kaset1.classList.remove("kaseton");
    }
  }, 200000);
});

let clear_time1,
  clear_time2,
  clear_time3,
  clear_time4,
  clear_time5,
  clear_time6,
  clear_time7,
  clear_time8,
  clear_time9,
  clear_time10,
  clear_time11,
  clear_time12,
  clear_time13,
  clear_time14,
  clear_time15,
  clear_time16,
  clear_time17,
  clear_time18,
  clear_time19,
  clear_time20,
  clear_time21,
  clear_time22,
  clear_time23,
  clear_time24,
  clear_time25,
  clear_time26,
  clear_time27,
  clear_time28,
  clear_time29,
  clear_time30,
  clear_time31;

function clear_timeall() {
  clearTimeout(clear_time1);
  clearTimeout(clear_time2);
  clearTimeout(clear_time3);
  clearTimeout(clear_time4);
  clearTimeout(clear_time5);
  clearTimeout(clear_time6);
  clearTimeout(clear_time7);
  clearTimeout(clear_time8);
  clearTimeout(clear_time9);
  clearTimeout(clear_time10);
  clearTimeout(clear_time11);
  clearTimeout(clear_time12);
  clearTimeout(clear_time13);
  clearTimeout(clear_time14);
  clearTimeout(clear_time15);
  clearTimeout(clear_time16);
  clearTimeout(clear_time17);
  clearTimeout(clear_time18);
  clearTimeout(clear_time19);
  clearTimeout(clear_time20);
  clearTimeout(clear_time21);
  clearTimeout(clear_time22);
  clearTimeout(clear_time23);
  clearTimeout(clear_time24);
  clearTimeout(clear_time25);
  clearTimeout(clear_time26);
  clearTimeout(clear_time27);
  clearTimeout(clear_time28);
  clearTimeout(clear_time29);
  clearTimeout(clear_time30);
  clearTimeout(clear_time31);
}
function lirik_dunia_yg_nanti() {
  clear_timeall();

  input1.value = "🎶 Dunia Yang Nanti";

  clear_time1 = setTimeout(() => {
    input1.value = "Waktu bawa kita ke tempat tak";
  }, 12500);

  clear_time2 = setTimeout(() => {
    input1.value = "terduga, Kau hadir kembali";
  }, 18500);

  clear_time3 = setTimeout(() => {
    input1.value = "menyapa hidupku, Kau ada yang";
  }, 24000);

  clear_time4 = setTimeout(() => {
    input1.value = "miliki, Ku ada yang punyai";
  }, 30500);

  clear_time5 = setTimeout(() => {
    input1.value = "Juga ada rasa yang belum";
  }, 36000);

  clear_time6 = setTimeout(() => {
    input1.value = "sempat terucap, Tak banyak";
  }, 40500);

  clear_time7 = setTimeout(() => {
    input1.value = "inginku, tak banyak inginmu";
  }, 48000);

  clear_time8 = setTimeout(() => {
    input1.value = "Kita dua hati yang bodoh";
  }, 52500);

  clear_time9 = setTimeout(() => {
    input1.value = "berjalan pada waktu";
  }, 57000);

  clear_time10 = setTimeout(() => {
    console.log("jalanbos");
    input1.value = "Itulah kenapa jatuh cinta";
  }, 64000);

  clear_time11 = setTimeout(() => {
    input1.value = "di katakan jatuh, karena";
  }, 68900);

  clear_time12 = setTimeout(() => {
    input1.value = "sebagaimana kita jatuh";
  }, 73400);

  clear_time13 = setTimeout(() => {
    input1.value = "Kita tidak punya kuasa";
  }, 76500);

  clear_time14 = setTimeout(() => {
    input1.value = "Pilih jatuh pada hati yang mana";
  }, 80500);

  clear_time15 = setTimeout(() => {
    input1.value = "🎶";
  }, 90000);

  clear_time16 = setTimeout(() => {
    input1.value = "Mengerti, mengertilah";
  }, 102000);

  clear_time17 = setTimeout(() => {
    input1.value = "Banyak hal yang tak ku pahami";
  }, 111000);

  clear_time18 = setTimeout(() => {
    input1.value = "Kendati kau kusuka";
  }, 118800);

  clear_time19 = setTimeout(() => {
    input1.value = "Kita dua hati yang salah";
  }, 125600);

  clear_time20 = setTimeout(() => {
    input1.value = "Bodoh pada waktu";
  }, 130000);

  clear_time21 = setTimeout(() => {
    input1.value = "Itulah kenapa jatuh cinta";
  }, 137500);

  clear_time22 = setTimeout(() => {
    input1.value = "diakatakan jatuh, karena";
  }, 142500);

  clear_time23 = setTimeout(() => {
    input1.value = "sebagaimana kita jatuh";
  }, 146900);

  clear_time24 = setTimeout(() => {
    input1.value = "Kita tidak punya kuasa";
  }, 149500);

  clear_time25 = setTimeout(() => {
    input1.value = "Pilih jatuh pada hati yang mana";
  }, 153700);

  clear_time26 = setTimeout(() => {
    input1.value = "bisa kutahan senyum sederhanamu";
  }, 159200);

  clear_time27 = setTimeout(() => {
    input1.value = "Karena tidak bisa kupunyai";
  }, 165500);

  clear_time28 = setTimeout(() => {
    input1.value = "Maka kudoakan kisah";
  }, 169500);

  clear_time29 = setTimeout(() => {
    input1.value = "Kita satu di dunia yang nanti";
  }, 174000);

  clear_time30 = setTimeout(() => {
    input1.value = "🎶";
  }, 185000);

  clear_time31 = setTimeout(() => {
    input1.value = "";
  }, 200000);
}
