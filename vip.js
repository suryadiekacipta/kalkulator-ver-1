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

let input = document.getElementById("input1");

function hitung(value) {
  cek();
  input.value += value;
}

function hapus_semua() {
  input.value = "";
}

function hapus() {
  input.value = input.value.slice(0, -1);
}

function hasil() {
  try {
    eval(input.value);
  } catch (error) {
    console.log("error");
    input.value = "Error!";
  }
}

function cek() {
  if (input.value == "undefined" || input.value == "Error!") {
    input.value = "";
  }
}
