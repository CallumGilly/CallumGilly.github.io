$("#nav-placeholder").load("/navbar.html");

function b10ToB36(b10) {
  return parseInt(b10).toString(36).toUpperCase();
}

function b36ToB10(b36) {
  return parseInt(b36, 36);
}

function updateB36() {
  $(`#b10in`).val(b36ToB10(document.getElementById(`b36in`).value));
}

function updateB10() {
  $(`#b36in`).val(b10ToB36(document.getElementById(`b10in`).value));
}