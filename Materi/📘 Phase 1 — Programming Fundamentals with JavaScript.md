Halo! Saya akan jadi gurumu untuk phase ini. Kita akan bahas **14 topik fundamental** secara berurutan, dari yang paling dasar sampai konsep yang sering jadi bahan interview. Setiap topik akan ada penjelasan konsep, contoh kode, dan *common pitfalls* (kesalahan umum).

Mari kita mulai!

---

## 1️⃣ Variables & Data Types

### Cara Mendeklarasikan Variabel

```javascript
// VAR — jangan digunakan lagi (legacy). Kenapa? Kita bahas di Scope.
var namaLama = "Budi";

// LET — variabel yang nilainya BISA diubah
let umur = 25;
umur = 26; // ✅ OK

// CONST — variabel yang nilainya TIDAK BISA di-reassign
const nama = "Andi";
nama = "Budi"; // ❌ TypeError: Assignment to constant variable
```

**Best practice:** Selalu gunakan `const` secara default. Hanya gunakan `let` jika kamu benar-benar perlu mengubah nilainya.

### 7 Data Types Primitif

Primitif = nilai yang **disimpan langsung** di variabel, bersifat immutable (tidak bisa diubah langsung).

```javascript
// 1. String — teks
const nama = "JavaScript";
const quote = 'Dia bilang "halo"';

// 2. Number — angka (integer & decimal, hanya SATU tipe)
const umur = 25;
const harga = 99.99;
const negatif = -10;

// 3. Boolean — true / false
const isActive = true;

// 4. null — sengaja dikosongkan (developer yang set)
const user = null; // "memang belum ada user"

// 5. undefined — belum diberi nilai (sistem default)
let alamat; // undefined

// 6. Symbol — identifier unik (jarang dipakai di awal)
const id = Symbol("id");

// 7. BigInt — angka super besar
const big = 123456789012345678901234567890n;
```

### Reference Types (Non-Primitif)

```javascript
// Object
const person = { nama: "Andi", umur: 25 };

// Array
const angka = [1, 2, 3, 4, 5];

// Function
const sapa = function () {
  console.log("Halo!");
};
```

### Mengecek Tipe Data

```javascript
typeof "halo"      // "string"
typeof 25           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof {}           // "object"
typeof []           // "object" ⚠️ array terdeteksi object!
typeof null         // "object" ⚠️ BUG historis di JavaScript!
typeof function(){} // "function"

// Cara benar cek array:
Array.isArray([1, 2, 3]) // true
```

### Type Conversion

```javascript
// String → Number
Number("42")        // 42
parseInt("42px")    // 42
parseFloat("3.14") // 3.14
+"42"               // 42 (trik cepat)

// Number → String
String(42)         // "42"
(42).toString()     // "42"

// Ke Boolean (falsy values!)
Boolean(0)     // false
Boolean("")    // false
Boolean(null)  // false
Boolean(undefined) // false
Boolean(NaN)   // false

// ⚠️ INGAT: 6 falsy values: false, 0, "", null, undefined, NaN
// Semua selain itu adalah truthy — termasuk "0", [], {}
```

---

## 2️⃣ Operators

### Arithmetic Operators

```javascript
const a = 10, b = 3;

a + b   // 13  (penjumlahan)
a - b   // 7   (pengurangan)
a * b   // 30  (perkalian)
a / b   // 3.333... (pembagian — SELALU float!)
a % b   // 1   (modulus/sisa bagi) → berguna cek genap/ganjil
a ** b  // 1000 (pangkat)

a++     // increment (a = a + 1)
a--     // decrement (a = a - 1)
```

### Comparison Operators — ⚠️ SANGAT PENTING

```javascript
// == (loose) — melakukan type coercion (konversi otomatis)
5 == "5"      // true 😱 (string dikonversi ke number)
0 == false    // true 😱
null == undefined // true

// === (strict) — HARUS gunakan ini SELALU
5 === "5"     // false ✅ aman
0 === false   // false ✅
```

**Aturan emas: SELALU pakai `===` dan `!==`. Jangan pernah pakai `==` kecuali kamu tahu persis kenapa.**

### Logical Operators

```javascript
// && (AND) — semua harus true
true && true    // true
true && false   // false

// || (OR) — salah satu true
true || false   // true
false || false  // false

// ! (NOT) — membalik
!true           // false

// 🎯 SHORT-CIRCUIT EVALUATION (sangat berguna!):
const namaUser = userNama || "Guest";  // default value
const umurUser = user && user.umur;    // cek dulu sebelum akses
```

### Modern Operators (ES2020+)

```javascript
// ?? (Nullish Coalescing) — hanya null/undefined yang fallback
const nilai = 0;
const hasil1 = nilai || 100;  // 100 ❌ (0 dianggap falsy!)
const hasil2 = nilai ?? 100;  // 0 ✅ (0 bukan null/undefined)

// ?. (Optional Chaining) — akses property aman
const user = { alamat: { kota: "Jakarta" } };
user?.alamat?.kota      // "Jakarta"
user?.telepon?.nomor    // undefined (tidak error!)
user.telepon.nomor      // ❌ TypeError!
```

### Ternary Operator

```javascript
// kondisi ? nilaiJikaTrue : nilaiJikaFalse
const umur = 20;
const status = umur >= 17 ? "Dewasa" : "Anak-anak";
```

---

## 3️⃣ Conditionals (Percabangan)

### if / else if / else

```javascript
const skor = 85;

if (skor >= 90) {
  console.log("Grade A");
} else if (skor >= 80) {
  console.log("Grade B");
} else if (skor >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}
```

### Guard Clauses / Early Return — Best Practice! ⭐

Alih-alih nested if yang dalam, **return lebih dulu jika kondisi tidak memenuhi**:

```javascript
// ❌ Buruk — nested (callback hell untuk kondisi)
function prosesPembelian(user, produk) {
  if (user) {
    if (user.login) {
      if (produk.stock > 0) {
        if (user.saldo >= produk.harga) {
          return "Pembelian berhasil!";
        }
      }
    }
  }
  return "Pembelian gagal";
}

// ✅ Bagus — guard clauses (flat & mudah dibaca)
function prosesPembelian(user, produk) {
  if (!user) return "User tidak ditemukan";
  if (!user.login) return "Silakan login dulu";
  if (produk.stock <= 0) return "Stok habis";
  if (user.saldo < produk.harga) return "Saldo tidak cukup";
  
  return "Pembelian berhasil!";
}
```

### Switch

```javascript
const hari = "Senin";

switch (hari) {
  case "Senin":
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    console.log("Hari kerja");
    break; // ⚠️ WAJIB! Tanpa break, eksekusi lanjut ke case berikutnya
  case "Sabtu":
  case "Minggu":
    console.log("Weekend!");
    break;
  default:
    console.log("Hari tidak valid");
}
```

---

## 4️⃣ Loops (Perulangan)

### Classic `for` Loop

```javascript
// for (inisialisasi; kondisi; update)
for (let i = 0; i < 5; i++) {
  console.log(`Iterasi ke-${i}`); // 0, 1, 2, 3, 4
}

// Loop mundur
for (let i = 5; i > 0; i--) {
  console.log(i); // 5, 4, 3, 2, 1
}
```

### `while` dan `do...while`

```javascript
// while — cek kondisi DULU, baru eksekusi
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// do...while — eksekusi DULU minimal 1x, baru cek kondisi
let j = 10;
do {
  console.log(j); // 10 (dieksekusi walau kondisi false)
} while (j < 5);
```

### `for...of` — untuk Array (yang paling sering dipakai!) ⭐

```javascript
const buahan = ["Apel", "Mangga", "Jeruk"];

for (const buah of buahan) {
  console.log(buah); // Apel, Mangga, Jeruk
}
```

### `for...in` — untuk Object

```javascript
const person = { nama: "Andi", umur: 25, kota: "Bandung" };

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
  // nama: Andi
  // umur: 25
  // kota: Bandung
}
```

### `break` dan `continue`

```javascript
// break — hentikan loop total
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0,1,2,3,4
}

// continue — lewati iterasi ini, lanjut berikutnya
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0,1,3,4
}
```

### ⚠️ Pitfall Klasik: `var` dalam Loop + Async

```javascript
// ❌ Bug klasik dengan var
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100); // 4, 4, 4 😱
}

// ✅ Benar dengan let
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100); // 1, 2, 3 ✅
}
```

---

## 5️⃣ Functions

### 3 Cara Membuat Function

```javascript
// 1. Function Declaration — hoisted (bisa dipanggil sebelum didefinisikan)
sapa("Andi"); // ✅ works!
function sapa(nama) {
  return `Halo, ${nama}!`;
}

// 2. Function Expression — TIDAK hoisted
const sapa2 = function (nama) {
  return `Halo, ${nama}!`;
};

// 3. Arrow Function — sintaks modern & ringkas
const sapa3 = (nama) => `Halo, ${nama}!`;
const tambah = (a, b) => a + b; // implicit return (tanpa {})

// Multi-baris butuh {} dan return eksplisit
const hitung = (a, b) => {
  const hasil = a + b;
  return hasil * 2;
};
```

### Parameters & Default Values

```javascript
// Default parameter
function sapa(nama = "Tamu", waktu = "pagi") {
  return `Selamat ${waktu}, ${nama}!`;
}
sapa();              // "Selamat pagi, Tamu!"
sapa("Budi");        // "Selamat pagi, Budi!"
sapa("Budi", "malam"); // "Selamat malam, Budi!"

// Rest parameter — kumpulkan sisa argumen jadi array
function jumlahkan(...angka) {
  return angka.reduce((total, n) => total + n, 0);
}
jumlahkan(1, 2, 3, 4, 5); // 15
```

### Functions adalah First-Class Citizens ⭐

Function bisa disimpan di variabel, dikirim sebagai argumen, dan dikembalikan dari function lain:

```javascript
// Callback — function sebagai argumen
function prosesData(data, callback) {
  return callback(data);
}

prosesData([1, 2, 3], (arr) => arr.map(n => n * 2)); // [2, 4, 6]

// Higher-Order Function — function yang menerima/mengembalikan function
function buatPengali(faktor) {
  return (angka) => angka * faktor;
}

const kaliDua = buatPengali(2);
const kaliSepuluh = buatPengali(10);
kaliDua(5);      // 10
kaliSepuluh(5);  // 50
```

### Pure Function (Konsep Penting!)

```javascript
// ✅ Pure — output HANYA bergantung pada input, tidak mengubah apa pun di luar
function tambah(a, b) {
  return a + b;
}

// ❌ Impure — mengubah state di luar / output tidak konsisten
let total = 0;
function tambahKeTotal(n) {
  total += n; // side effect!
}
```

---

## 6️⃣ Scope

Scope = "di mana variabel bisa diakses".

```javascript
// GLOBAL SCOPE — bisa diakses di mana saja
const globalVar = "Saya global";

function luar() {
  // FUNCTION SCOPE
  const functionVar = "Saya function scope";
  
  if (true) {
    // BLOCK SCOPE (hanya let & const!)
    const blockVar = "Saya block scope";
    console.log(globalVar);      // ✅
    console.log(functionVar);    // ✅ (lexical scope — anak bisa akses parent)
    console.log(blockVar);       // ✅
  }
  
  // console.log(blockVar);     // ❌ ReferenceError!
}

// LEXICAL SCOPE — function mencari variabel dari lingkungan
// di mana ia DIDEFINISIKAN, bukan dipanggil
const pesan = "dari global";

function luar() {
  const pesan = "dari luar";
  function dalam() {
    console.log(pesan); // "dari luar" — bukan global!
  }
  dalam();
}
```

### Hoisting & TDZ

```javascript
// var — hoisted sebagai undefined
console.log(x); // undefined (tidak error!)
var x = 5;

// let/const — hoisted tapi ada Temporal Dead Zone
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10;

// Function declaration — hoisted seluruhnya
sapa(); // ✅ works
function sapa() { console.log("Halo"); }

// Kenapa hindari var:
if (true) {
  var leak = "Saya bocor!";
}
console.log(leak); // "Saya bocor!" 😱 — var tidak menghormati block scope!

if (true) {
  let aman = "Saya tidak bocor";
}
// console.log(aman); // ❌ ReferenceError — benar!
```

---

## 7️⃣ Closures ⭐ (Topik Favorit Interview!)

**Closure** = function yang "mengingat" variabel dari scope tempat ia dibuat, walau scope itu sudah selesai dieksekusi.

```javascript
function counter() {
  let count = 0; // variabel "pribadi"
  
  return function () {
    count++;
    return count;
  };
}

const increment = counter();
increment(); // 1
increment(); // 2
increment(); // 3 — count "diingat" meski function counter() sudah selesai!

// Setiap panggilan membuat closure TERPISAH:
const counterA = counter();
const counterB = counter();
counterA(); counterA(); counterA(); // 1, 2, 3
counterB();                          // 1 (independen!)
```

### Use Case Nyata: Private Data (Encapsulation)

```javascript
function buatRekening(saldoAwal) {
  let saldo = saldoAwal; // ⚠️ TIDAK bisa diakses dari luar!
  
  return {
    deposit(nominal) {
      if (nominal <= 0) return "Nominal tidak valid";
      saldo += nominal;
      return `Saldo: ${saldo}`;
    },
    tarik(nominal) {
      if (nominal > saldo) return "Saldo tidak cukup";
      saldo -= nominal;
      return `Saldo: ${saldo}`;
    },
    cekSaldo() {
      return saldo;
    }
  };
}

const rekening = buatRekening(1000);
rekening.deposit(500);  // "Saldo: 1500"
rekening.tarik(2000);   // "Saldo tidak cukup"
rekening.cekSaldo();    // 1500
// rekening.saldo        // undefined — TIDAK BISA diakses langsung! 🔒
```

Closures juga digunakan di: debounce, throttle, event handlers, dan modul — kamu akan pakai ini terus di karier.

---

## 8️⃣ Arrays

### Dasar

```javascript
const buahan = ["Apel", "Mangga", "Jeruk"];

buahan[0];              // "Apel" (index mulai dari 0!)
buahan[buahan.length - 1]; // "Jeruk" (elemen terakhir)
buahan.length;          // 3

// Mutating methods (mengubah array asli)
buahan.push("Pisang");      // tambah di akhir → ["Apel","Mangga","Jeruk","Pisang"]
buahan.pop();               // hapus dari akhir → ["Apel","Mangga","Jeruk"]
buahan.unshift("Nanas");    // tambah di awal
buahan.shift();             // hapus dari awal
```

### Metode Transformasi Penting ⭐⭐⭐

```javascript
const angka = [1, 2, 3, 4, 5, 6];

// map() — transformasi SETIAP elemen → array baru
angka.map(n => n * 2);           // [2, 4, 6, 8, 10, 12]

// filter() — ambil elemen yang lolos kondisi → array baru
angka.filter(n => n % 2 === 0);  // [2, 4, 6]

// find() — cari ELEMEN pertama yang cocok
angka.find(n => n > 3);          // 4

// findIndex() — cari INDEX pertama yang cocok
angka.findIndex(n => n > 3);    // 3

// some() — apakah ADA yang memenuhi? → boolean
angka.some(n => n > 5);          // true

// every() — apakah SEMUA memenuhi? → boolean
angka.every(n => n > 0);         // true

// reduce() — akumulasi jadi SATU nilai ⭐ (paling powerful!)
angka.reduce((total, n) => total + n, 0); // 21

// Contoh reduce untuk menghitung total harga:
const keranjang = [
  { nama: "Buku", harga: 50000 },
  { nama: "Pensil", harga: 5000 },
  { nama: "Tas", harga: 150000 },
];
const total = keranjang.reduce((sum, item) => sum + item.harga, 0); // 205000
```

### Chaining — Kombinasi Method (Sangat Umum!)

```javascript
const mahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Citra", nilai: 92 },
  { nama: "Dewi", nilai: 45 },
];

// Ambil NAMA mahasiswa yang lulus (nilai >= 70), urutkan
const lulus = mahasiswa
  .filter(m => m.nilai >= 70)   // [{Andi,85}, {Citra,92}]
  .map(m => m.nama)             // ["Andi", "Citra"]
  .sort();                      // ["Andi", "Citra"]

// Rata-rata nilai
const rataRata = mahasiswa
  .map(m => m.nilai)
  .reduce((sum, n) => sum + n, 0) / mahasiswa.length; // 70.5
```

### Slice vs Splice (Sering bikin bingung!)

```javascript
const arr = ["a", "b", "c", "d", "e"];

// slice(start, end) — TIDAK mengubah array asli, end tidak ikut
arr.slice(1, 3);   // ["b", "c"], arr tetap utuh ✅

// splice(start, deleteCount, ...items) — MENGUBAH array asli ⚠️
arr.splice(1, 2);  // mengembalikan ["b","c"], arr jadi ["a","d","e"]
```

### ⚠️ Pitfall: `sort()` Mengubah Array & Sort Angka!

```javascript
const angka = [10, 1, 5, 100];

angka.sort();        // [1, 10, 100, 5] 😱 — sort sebagai STRING!
angka.sort((a, b) => a - b); // [1, 5, 10, 100] ✅ ascending
angka.sort((a, b) => b - a); // [100, 10, 5, 1] ✅ descending

// Sort object:
const produk = [{harga: 50000}, {harga: 12000}, {harga: 90000}];
produk.sort((a, b) => a.harga - b.harga);
```

---

## 9️⃣ Objects

### Dasar

```javascript
const mahasiswa = {
  nama: "Andi Pratama",      // property
  umur: 21,
  aktif: true,
  hobi: ["coding", "gaming"],
  alamat: {
    kota: "Bandung",
    kodePos: 40123,
  },
  perkenalan() {             // method (shorthand)
    return `Halo, saya ${this.nama}`;
  },
};

// Akses property — 2 cara
mahasiswa.nama            // "Andi Pratama" (dot notation)
mahasiswa["nama"]         // "Andi Pratama" (bracket notation)
mahasiswa.alamat.kota    // "Bandung" (nested)

// Bracket WAJIB saat key dinamis:
const key = "nama";
mahasiswa[key]            // "Andi Pratama"

// ⚠️ Akses property yang tidak ada → undefined (bukan error!)
mahasiswa.telepon         // undefined
mahasiswa.telepon.nomor   // ❌ TypeError! — solusinya optional chaining:
mahasiswa.telepon?.nomor  // undefined ✅
```

### Looping Object

```javascript
const buku = { judul: "Laskar Pelangi", penulis: "Andrea Hirata", tahun: 2005 };

// 1. Object.keys() — array berisi semua key
Object.keys(buku)     // ["judul", "penulis", "tahun"]

// 2. Object.values() — array berisi semua value
Object.values(buku)   // ["Laskar Pelangi", "Andrea Hirata", 2005]

// 3. Object.entries() — array berisi pasangan [key, value]
Object.entries(buku)
// [["judul","Laskar Pelangi"], ["penulis","Andrea Hirata"], ["tahun",2005]]

// Kombinasi favorit:
for (const [key, value] of Object.entries(buku)) {
  console.log(`${key}: ${value}`);
}
```

### `this` — Sekilas

```javascript
const user = {
  nama: "Andi",
  sapa() {
    return `Halo, saya ${this.nama}`; // this = object pemanggil
  },
};
user.sapa(); // "Halo, saya Andi"

// ⚠️ Arrow function TIDAK punya this sendiri:
const user2 = {
  nama: "Andi",
  sapa: () => `Halo, saya ${this.nama}`, // ❌ this tidak mengarah ke user2
};
```

---

## 🔟 Destructuring

Cara "membongkar" nilai dari array/object ke dalam variabel.

### Array Destructuring

```javascript
const warna = ["merah", "kuning", "hijau"];

const [pertama, kedua, ketiga] = warna;
// pertama = "merah", kedua = "kuning", ketiga = "hijau"

// Skip elemen
const [satu, , tiga] = warna; // satu="merah", tiga="hijau"

// Default value
const [a = "default", b = "default"] = ["nilai"];
// a = "nilai", b = "default"

// Rest pattern — sisa elemen
const [kepala, ...ekor] = warna;
// kepala = "merah", ekor = ["kuning", "hijau"]

// Swap variables — tanpa variabel temp! 🎉
let x = 1, y = 2;
[x, y] = [y, x]; // x=2, y=1
```

### Object Destructuring

```javascript
const mahasiswa = {
  nama: "Citra",
  umur: 20,
  jurusan: "Informatika",
  alamat: { kota: "Surabaya", provinsi: "Jawa Timur" },
};

// Basic
const { nama, umur } = mahasiswa;

// Rename — namaVariabelBaru
const { nama: namaMahasiswa } = mahasiswa;

// Default value + rename
const { ipk = 0 } = mahasiswa; // ipk tidak ada → 0

// Nested destructuring
const { alamat: { kota, provinsi } } = mahasiswa;
// kota = "Surabaya", provinsi = "Jawa Timur"
```

### Destructuring di Function Parameters (SUPER berguna!) ⭐

```javascript
// ❌ Tanpa destructuring — posisi harus urut, kalau banyak param membingungkan
function buatUser(nama, umur, kota, aktif, level) { /* ... */ }

// ✅ Dengan destructuring — fleksibel & jelas
function buatUser({ nama, umur, kota = "Jakarta", aktif = true, level = 1 }) {
  return `${nama} (${umur}) dari ${kota}`;
}

buatUser({ nama: "Andi", umur: 25 }); // urutan bebas, kota & level pakai default!

// Praktik nyata (mirip yang akan kamu lihat di React nanti):
function tampilkanProduk({ nama, harga, stok = 0, diskon = 0 }) {
  const hargaAkhir = harga - (harga * diskon / 100);
  return `${nama}: Rp${hargaAkhir} (stok: ${stok})`;
}
```

---

## 1️⃣1️⃣ Error Handling

### try / catch / finally

```javascript
try {
  // Kode yang MUNGKIN error
  const data = JSON.parse('{"nama": "Andi"}');
  console.log(data.nama);
} catch (error) {
  // DIJALANKAN kalau ada error
  console.error("Terjadi error:", error.message);
} finally {
  // SELALU dijalankan, error atau tidak (untuk cleanup)
  console.log("Selesai diproses");
}
```

### throw — Melempar Error Sendiri

```javascript
function setUmur(umur) {
  if (typeof umur !== "number") {
    throw new TypeError("Umur harus berupa angka");
  }
  if (umur < 0 || umur > 150) {
    throw new RangeError("Umur harus antara 0-150");
  }
  return umur;
}

// try-catch menangkapnya:
try {
  setUmur(-5);
} catch (error) {
  console.log(error.name);    // "RangeError"
  console.log(error.message); // "Umur harus antara 0-150"
}
```

### Jenis Error Bawaan

| Error | Penyebab |
|---|---|
| `TypeError` | Operasi pada tipe yang salah, misal memanggil method di `null` |
| `ReferenceError` | Mengakses variabel yang tidak ada |
| `SyntaxError` | Kesalahan sintaks kode |
| `RangeError` | Nilai di luar jangkauan |

### Custom Error (Best Practice)

```javascript
class ValidationError extends Error {
  constructor(pesan) {
    super(pesan);
    this.name = "ValidationError";
  }
}

function validasiEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Format email tidak valid");
  }
  return true;
}

// Pattern nyata: error handling di proses dengan banyak langkah
async function prosesCheckout(items, pembeli) {
  try {
    if (items.length === 0) throw new ValidationError("Keranjang kosong");
    const total = hitungTotal(items);
    const bayar = await prosesPembayaran(total, pembeli);
    return { sukses: true, total, bayar };
  } catch (error) {
    if (error instanceof ValidationError) {
      return { sukses: false, pesan: error.message }; // error user → tampilkan
    }
    console.error("Error sistem:", error); // error teknis → log
    return { sukses: false, pesan: "Terjadi kesalahan sistem" };
  }
}
```

---

## 1️⃣2️⃣ Value vs Reference ⭐ (WAJIB PAHAM!)

Ini konsep yang membedakan junior dan mid-level developer.

```javascript
// PRIMITIF — disalin BY VALUE (copy nilainya)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 ✅ — a tidak terpengaruh

// OBJECT/ARRAY — disalin BY REFERENCE (copy alamat memorinya!)
const objA = { nama: "Andi" };
const objB = objA;      // objB menunjuk ke objek yang SAMA
objB.nama = "Budi";
console.log(objA.nama); // "Budi" 😱 — objA ikut berubah!

// Sama dengan array:
const arrA = [1, 2, 3];
const arrB = arrA;
arrB.push(4);
console.log(arrA); // [1, 2, 3, 4] 😱
```

### Pitfall di Function

```javascript
// ❌ Primitif — perubahan di dalam TIDAK memengaruhi luar
function ubahAngka(n) {
  n = 100;
}
let angka = 5;
ubahAngka(angka);
console.log(angka); // 5 — tidak berubah

// ⚠️ Object — perubahan di dalam MEMENGARUHI luar!
function ubahUser(user) {
  user.nama = "Berubah"; // mutasi object asli!
}
const user = { nama: "Andi" };
ubahUser(user);
console.log(user.nama); // "Berubah" 😱
```

### Solusi: Copy Array/Object

```javascript
const asli = [1, 2, 3];

// SHALLOW COPY (salin 1 level) — 3 cara:
const salinan1 = [...asli];
const salinan2 = asli.slice();
const salinan3 = Array.from(asli);

// ⚠️ Shallow copy TIDAK cukup untuk nested:
const nested = { a: 1, dalam: { b: 2 } };
const shallow = { ...nested };
shallow.dalam.b = 99;
console.log(nested.dalam.b); // 99 😱 — nested object masih shared!

// DEEP COPY (salin semua level):
const deep = structuredClone(nested); // ✅ cara modern
deep.dalam.b = 100;
console.log(nested.dalam.b); // 2 — aman! ✅
```

---

## 1️⃣3️⃣ Immutability

**Prinsip:** Jangan ubah data yang sudah ada — buat data baru. Ini pondasi React, Redux, dan kode yang predictable.

```javascript
// ❌ MUTATION — mengubah data asli
const angka = [1, 2, 3];
angka.push(4); // array asli berubah

const user = { nama: "Andi" };
user.nama = "Budi"; // object asli berubah

// ✅ IMMUTABLE — buat yang baru
const angkaBaru = [...angka, 4];           // tambah item
const tanpaSatu = angka.filter(n => n !== 1); // hapus item
const tanpaIndex1 = angka.filter((_, i) => i !== 1); // hapus by index
const update = angka.map(n => n === 2 ? 99 : n); // update item
```

### Immutable Pattern untuk Object

```javascript
const user = { nama: "Andi", umur: 25, kota: "Bandung" };

// ❌ Mutation
user.umur = 26;

// ✅ Immutable — spread + override
const userBaru = { ...user, umur: 26 };
// user tetap { nama: "Andi", umur: 25 } — tidak tersentuh!

// Menghapus property secara immutable:
const { kota, ...tanpaKota } = user; // rest + destructuring trick
// tanpaKota = { nama: "Andi", umur: 25 }

// Update nested secara immutable:
const produk = {
  id: 1,
  info: { harga: 50000, stok: 10 },
};
const produkUpdate = {
  ...produk,
  info: { ...produk.info, stok: 9 }, // spread di setiap level!
};
```

### Kenapa Ini Penting?

```javascript
// 1. Detectability — bisa membandingkan dengan ===
const stateLama = { counter: 0 };
const stateBaru = { ...stateLama, counter: 1 };
stateLama === stateBaru; // false → tahu ada perubahan!
// (Jika mutation: stateLama === stateBaru → true selalu, tak terdeteksi)

// 2. Safety — data lama tidak rusak oleh kode lain
// 3. Time-travel debugging — bisa simpan history semua state
```

---

## 1️⃣4️⃣ Modules

Cara memecah kode ke file terpisah — ES Modules (standar modern).

### Export & Import

```javascript
// 📄 math.js
export const PI = 3.14159;

export function tambah(a, b) {
  return a + b;
}

export function kurang(a, b) {
  return a - b;
}

// ✅ Cara lain: export di akhir
const kali = (a, b) => a * b;
export { kali };
```

```javascript
// 📄 app.js
// Named import — nama harus sama, pakai { }
import { PI, tambah, kurang as pengurangan } from "./math.js";

tambah(2, 3);      // 5
pengurangan(5, 2); // 3
```

### Default Export

```javascript
// 📄 Kalkulator.js — hanya BOLEH 1 default per file
export default class Kalkulator {
  constructor() {
    this.hasil = 0;
  }
  tambah(n) {
    this.hasil += n;
    return this;
  }
}
```

```javascript
// 📄 app.js — import default: nama bebas, tanpa { }
import Kalk from "./Kalkulator.js";
import Kalkulator from "./Kalkulator.js"; // ini juga sah

// Import default + named sekaligus:
import Kalkulator, { PI, tambah } from "./Kalkulator.js";
```

### Import Semua (Namespace)

```javascript
import * as MathUtil from "./math.js";

MathUtil.PI;      // 3.14159
MathUtil.tambah(1, 2); // 3
```

**Aturan praktis:**
- `export default` → untuk satu hal utama per file (misal: satu class/component)
- Named exports → untuk kumpulan utility/func terkait
- File HTML perlu: `<script type="module" src="app.js"></script>`

---

## 🎯 Mini Project: Sistem Manajemen Produk

Sekarang gabungkan SEMUA konsep di atas:

```javascript
// 📄 store.js
let products = [];

export function addProduct({ nama, harga, stok = 0 }) {
  if (!nama) throw new Error("Nama produk wajib diisi");
  if (typeof harga !== "number" || harga <= 0) {
    throw new Error("Harga tidak valid");
  }
  const newProduct = {
    id: Date.now(),
    nama,
    harga,
    stok,
    createdAt: new Date().toISOString(),
  };
  products = [...products, newProduct]; // immutable update!
  return newProduct;
}

export function findByNama(nama) {
  return products.filter((p) =>
    p.nama.toLowerCase().includes(nama.toLowerCase())
  );
}

export function getProductsInStock() {
  return products.filter((p) => p.stok > 0);
}

export function getTotalValue() {
  return products.reduce((total, p) => total + p.harga * p.stok, 0);
}

export function updateStok(id, delta) {
  products = products.map((p) =>
    p.id === id ? { ...p, stok: p.stok + delta } : p // immutable!
  );
}

export function removeProduct(id) {
  products = products.filter((p) => p.id !== id); // immutable delete!
}
```

```javascript
// 📄 app.js
import {
  addProduct, getProductsInStock, getTotalValue, updateStok,
} from "./store.js";

// Error handling
try {
  addProduct({ nama: "Laptop", harga: 8000000, stok: 5 });
  addProduct({ nama: "Mouse", harga: 150000, stok: 20 });
  addProduct({ nama: "Keyboard", harga: 500000, stok: 0 });
} catch (error) {
  console.error("Gagal menambah produk:", error.message);
}

const tersedia = getProductsInStock();   // destructuring
for (const { nama, harga } of tersedia) {
  console.log(`- ${nama}: Rp${harga}`);
}

console.log(`Total nilai inventori: Rp${getTotalValue()}`);
```

---

## 📝 Latihan untuk Kamu

Kerjakan ini untuk menguji pemahaman (tanpa framework, murni JS):

1. **Mudah:** Fungsi `cekGanjil(n)` yang return `"genap"` atau `"ganjil"` — pakai ternary + modulus.
2. **Mudah:** Fungsi `hitungVocal(kalimat)` — hitung huruf vokal dalam string (loop + conditionals).
3. **Menengah:** Fungsi `groupMahasiswa(arr)` — dari array nilai, kelompokkan jadi `{ lulus: [...], tidakLulus: [...] }` (nilai >= 70). Gunakan `reduce`.
4. **Menengah:** Fungsi `buatCounter()` dengan closure yang punya method `increment()`, `decrement()`, dan `reset()`.
5. **Menantang:** Buat **TODO List CLI** dengan modul terpisah (`todo.js` + `app.js`): add, remove, toggle selesai, tampilkan — semua dengan **immutability** dan **error handling**.

---

## 🗺️ Peta Belajar Lanjutan

Setelah Phase 1 ini solid, kamu siap ke:
- **ES6+ lengkap** (async/await, promises) → ini Phase berikutnya biasanya
- **DOM manipulation** — menghubungkan JS ke HTML
- **Functional programming patterns**
- Baru setelah itu → framework

---

**Pertanyaan untuk memastikan pemahamanmu:**
1. Apa beda `let` dan `const`? Apakah `const` berarti nilainya tidak bisa berubah?
2. Kenapa `[...array]` tidak cukup untuk copy array bersarang (nested)?
3. Apa itu closure dan berikan 1 contoh use case-nya?

Jawab pertanyaan di atas, kerjakan latihannya, atau bilang topik mana yang masih membingungkan — kita gali lebih dalam! 🚀