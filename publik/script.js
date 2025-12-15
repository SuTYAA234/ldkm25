function hitung() {
  const a = parseInt(document.getElementById('angka1').value);
  const b = parseInt(document.getElementById('angka2').value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById('hasil').innerText = 'Masukkan dua angka dengan benar';
    return;
  }

  const hasil = a + b;
  document.getElementById('hasil').innerText = 'Hasil penjumlahan (a + b): ' + hasil;
}