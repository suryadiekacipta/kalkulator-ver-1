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
