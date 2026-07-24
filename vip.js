let input1 = document.getElementById("input1");

function bersihkan() {
  if (input1.value == "Error!" || input1.value == "undefinded") {
    input1.value = "";
  }
}

function hitung(data) {
  bersihkan();
  input1.value += data;
}

function hapus() {
  input1.value = input1.value.slice(0, -1);
}

function clearall() {
  input1.value = "";
}

function hasil() {
  try {
    input1.value = eval(input1.value);
  } catch (error) {
    input1.value = "Error!";
  }
}
