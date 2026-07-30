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
  input1.value = input.value.slice(0, -1);
}

function hasil() {
  try {
    let hasil1 = eval(input1.value);
    input1.value = hasil1;
  } catch (error) {
    console.log("error");
    input1.value = "Error!";
  }
}

function cek() {
  if (input1.value == "undefined" || input1.value == "Error!") {
    input1.value = "";
  }
}

let lagu1 = document.getElementById("lagu1");

lagu1.addEventListener("click", () => {
  lirik_dunia_yg_nanti();
});
function lirik_dunia_yg_nanti() {
  let clear_time;
  clearTimeout(clear_time);
  input1.value = "🎶 Dunia Yang Nanti";

  clear_time = setTimeout(() => {
    input1.value = "Waktu bawa kita ke tempat tak";
  }, 12500);

  clear_time = setTimeout(() => {
    input1.value = "terduga, Kau hadir kembali";
  }, 18000);

  clear_time = setTimeout(() => {
    input1.value = "menyapa hidupku, Kau ada yang";
  }, 23500);

  clear_time = setTimeout(() => {
    input1.value = "miliki, Ku ada yang punyai";
  }, 30500);

  clear_time = setTimeout(() => {
    input1.value = "Juga ada rasa yang belum";
  }, 36000);

  clear_time = setTimeout(() => {
    input1.value = "sempat terucap, Tak banyak";
  }, 40500);

  clear_time = setTimeout(() => {
    input1.value = "inginku, tak banyak inginmu";
  }, 47000);

  clear_time = setTimeout(() => {
    input1.value = "Kita dua hati yang bodoh";
  }, 51900);

  clear_time = setTimeout(() => {
    input1.value = "berjalan pada waktu";
  }, 57000);

  clear_time = setTimeout(() => {
    console.log("jalanbos");
    input1.value = "Itulah kenapa jatuh cinta";
  }, 64000);

  clear_time = setTimeout(() => {
    input1.value = "di katakan jatuh, karena";
  }, 68900);

  clear_time = setTimeout(() => {
    input1.value = "sebagaimana kita jatuh";
  }, 72500);

  clear_time = setTimeout(() => {
    input1.value = "Kita tidak punya kuasa";
  }, 76500);

  clear_time = setTimeout(() => {
    input1.value = "Pilih jatuh pada hati yang mana";
  }, 80500);

  clear_time = setTimeout(() => {
    input1.value = "🎶";
  }, 90000);
}
