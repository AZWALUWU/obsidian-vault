Halo! Senang sekali bisa menjadi guru JavaScript kamu. Mari kita mulai perjalanan kita ke dunia **Variables & Data Types** — fondasi paling penting dalam programming.

---

# 📚 Variables & Data Types dalam JavaScript

## 1. Apa itu Variable?

Bayangkan variable seperti **kotak penyimpanan** atau **label** yang kita tempelkan pada sebuah nilai (value). Ketika kita menyimpan sesuatu di dalam kotak, kita bisa mengambilnya kembali kapan saja dengan menyebut nama kotaknya.

```javascript
// Kita menyimpan nilai "Budi" ke dalam kotak bernama 'nama'
let nama = "Budi";

// Kita bisa mengambil nilainya kembali
console.log(nama); // Output: Budi
```

---

## 2. Cara Mendeklarasikan Variable (3 Keyword)

JavaScript memiliki **3 cara** untuk mendeklarasikan variable. Ini sering membingungkan pemula, jadi saya akan jelaskan perbedaannya dengan detail:

### A. `var` (Cara Lama — Hindari!)
```javascript
var umur = 25;
```
- **Function-scoped**: Hanya terbatas dalam function, tidak peduli blok `{}`.
- **Bisa di-redeclare**: Variable dengan nama sama bisa dibuat lagi (berbahaya!).
- **Hoisting**: Variable "diangkat" ke atas, tapi nilainya `undefined`.

```javascript
var x = 10;
var x = 20; // Tidak error! Nilai x menjadi 20 (berbahaya)

if (true) {
    var y = 30;
}
console.log(y); // Output: 30 (keluar dari blok if!)
```

### B. `let` (Cara Modern — Untuk Variable yang Berubah)
```javascript
let score = 0;
```
- **Block-scoped**: Hanya hidup di dalam blok `{}` tempat ia dideklarasikan.
- **Tidak bisa di-redeclare**: Error jika nama sama dideklarasikan ulang di scope yang sama.
- **Bisa di-update**: Nilainya bisa diubah.

```javascript
let score = 0;
score = 100; // ✅ Bisa diubah

if (true) {
    let level = 5;
}
console.log(level); // ❌ ReferenceError: level is not defined
```

### C. `const` (Cara Modern — Untuk Konstanta)
```javascript
const PI = 3.14;
```
- **Block-scoped**: Sama seperti `let`.
- **Tidak bisa di-reassign**: Nilainya tidak bisa diubah setelah dideklarasikan.
- **Harus diinisialisasi**: Tidak bisa dideklarasikan tanpa nilai.

```javascript
const PI = 3.14;
PI = 3.14159; // ❌ TypeError: Assignment to constant variable

const API_KEY; // ❌ SyntaxError: Missing initializer
```

> 💡 **Aturan Praktis Senior Developer**: Selalu gunakan `const` secara default. Gunakan `let` hanya jika kamu yakin nilainya akan berubah. **Jangan pernah gunakan `var`** dalam project modern!

---

## 3. Aturan Penamaan Variable (Naming Conventions)

```javascript
// ✅ Valid
let namaDepan;
let _private;
let $element;
let angka2;

// ❌ Invalid
let 2angka;        // Tidak boleh diawali angka
let nama-depan;    // Tidak boleh pakai tanda hubung (dianggap minus)
let let;           // Tidak boleh pakai reserved keyword

// 🎯 Konvensi yang disarankan:
let firstName;     // camelCase (paling populer di JavaScript)
let last_name;     // snake_case (valid tapi jarang di JS)
```

---

## 4. Data Types dalam JavaScript

JavaScript memiliki **2 kategori besar** data types:

---

### A. Primitive Types (Tipe Data Primitif)

Data sederhana yang **disimpan by value** (nilai langsung disimpan di memory).

#### 1. **String** (Teks)
```javascript
let nama = "Budi";
let pesan = 'Halo Dunia';
let template = `Halo ${nama}, selamat datang!`; // Template literal (ES6)

// Operasi String
console.log(nama.length);        // 4
console.log(nama.toUpperCase()); // "BUDI"
console.log(nama[0]);            // "B"
console.log(nama + " Santoso");  // Concatenation: "Budi Santoso"
```

#### 2. **Number** (Angka)
```javascript
let umur = 25;           // Integer
let tinggi = 175.5;      // Float
let negatif = -10;

// Perhatikan! JavaScript tidak membedakan integer dan float
console.log(typeof 25);      // "number"
console.log(typeof 25.5);    // "number"

// Special values
let infinity = Infinity;     // Hasil pembagian dengan 0
let notNumber = NaN;         // Not a Number (hasil operasi matematika yang gagal)
console.log(0.1 + 0.2);      // 0.30000000000000004 (floating point precision!)
```

#### 3. **BigInt** (Angka Besar — ES2020)
```javascript
let bigNumber = 123456789012345678901234567890n; // Tambahkan 'n' di akhir
// Digunakan ketika number biasa tidak cukup (lebih dari 2^53 - 1)
```

#### 4. **Boolean** (Benar/Salah)
```javascript
let isActive = true;
let isDeleted = false;

// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: Semua yang bukan falsy
console.log(Boolean(""));        // false
console.log(Boolean("hello"));   // true
console.log(Boolean(0));         // false
console.log(Boolean([]));        // true (array kosong adalah truthy!)
```

#### 5. **Undefined** (Belum Diberi Nilai)
```javascript
let x;
console.log(x);        // undefined
console.log(typeof x); // "undefined"
```
- Variable yang dideklarasikan tapi belum diberi nilai.
- **Jangan pernah assign `undefined` secara manual!** Biarkan JavaScript yang mengaturnya.

#### 6. **Symbol** (Identifier Unik — ES6)
```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false (selalu unik meskipun deskripsinya sama)
```
- Digunakan untuk membuat property key yang unik, biasanya dalam object.

#### 7. **Null** (Kosong/Nol)
```javascript
let data = null;
```
- **Perbedaan penting**: `undefined` berarti "belum diberi nilai", sedangkan `null` berarti "sengaja dikosongkan".

```javascript
let a;           // undefined (JavaScript yang mengatur)
let b = null;    // null (Programmer yang mengatur)

console.log(typeof null); // "object" (Ini bug terkenal di JavaScript yang tidak bisa diperbaiki!)
```

---

### B. Non-Primitive / Reference Types (Tipe Data Referensi)

Data kompleks yang **disimpan by reference** (yang disimpan adalah alamat memory, bukan nilai langsung).

#### 1. **Object** (Koleksi Key-Value)
```javascript
let user = {
    nama: "Budi",
    umur: 25,
    isActive: true,
    alamat: {
        kota: "Jakarta",
        kodePos: 12345
    },
    sapa: function() {
        return `Halo, saya ${this.nama}`;
    }
};

// Akses property
console.log(user.nama);           // Dot notation
console.log(user["alamat"]["kota"]); // Bracket notation
console.log(user.sapa());         // Memanggil method
```

#### 2. **Array** (Koleksi Terurut)
```javascript
let buah = ["Apel", "Jeruk", "Mangga"];
let campuran = [1, "dua", true, null, {nama: "Budi"}]; // Bisa campuran!

// Operasi Array
console.log(buah[0]);        // "Apel"
console.log(buah.length);    // 3
buah.push("Pisang");         // Tambah di akhir
buah.pop();                  // Hapus di akhir
```

#### 3. **Function** (Juga merupakan object!)
```javascript
function sapa() {
    return "Halo!";
}
console.log(typeof sapa); // "function" (tapi sebenarnya adalah object)
```

---

## 5. Perbedaan Penting: Primitive vs Reference

Ini adalah konsep yang **paling sering membuat bug** di JavaScript:

```javascript
// Primitive (By Value)
let a = 10;
let b = a;     // b mendapat salinan nilai 10
b = 20;
console.log(a); // 10 (tidak berubah)
console.log(b); // 20

// Reference (By Reference)
let obj1 = { nama: "Budi" };
let obj2 = obj1;  // obj2 mendapat alamat yang sama ke object yang sama
obj2.nama = "Ani";
console.log(obj1.nama); // "Ani" (obj1 juga berubah!)

// Cara menyalin object tanpa reference
let obj3 = { ...obj1 };  // Spread operator (shallow copy)
obj3.nama = "Cici";
console.log(obj1.nama); // "Ani" (aman)
```

---

## 6. Type Coercion & Conversion

JavaScript sering "memaksa" mengubah tipe data secara otomatis (coercion), yang bisa membingungkan:

```javascript
// Implicit Coercion (Otomatis — Berbahaya!)
console.log(1 + "1");      // "11" (number + string = string)
console.log("5" - 2);      // 3 (string - number = number)
console.log(true + 1);     // 2 (true = 1)
console.log([] + []);      // "" (array kosong + array kosong = string kosong)
console.log(null == undefined);  // true (loose equality)
console.log(null === undefined); // false (strict equality)

// Explicit Conversion (Manual — Disarankan!)
let str = "123";
let num = Number(str);        // 123
let str2 = String(123);       // "123"
let bool = Boolean(1);        // true

// Atau cara singkat
let num2 = +str;              // Unary plus
let str3 = num + "";          // Tambah string kosong
```

> ⚠️ **Aturan Emas**: Selalu gunakan `===` (strict equality) daripada `==` untuk menghindari bug coercion!

---

## 7. Mengcek Tipe Data

```javascript
// typeof (untuk primitive)
console.log(typeof "Budi");     // "string"
console.log(typeof 25);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof Symbol());   // "symbol"

// Tapi hati-hati dengan reference types!
console.log(typeof null);       // "object" (bug!)
console.log(typeof []);         // "object" (array adalah object)
console.log(typeof {});         // "object"

// Cara cek array dengan benar
console.log(Array.isArray([])); // true

// Cara cek null
let x = null;
console.log(x === null);        // true
```

---

## 8. Best Practices dari Senior Developer

1. **Gunakan `const` secara default**, `let` jika perlu reassign, **jangan pernah `var`**
2. **Gunakan `===`** daripada `==`
3. **Nama variable deskriptif**: `let userAge` ✅ bukan `let x` ❌
4. **Gunakan camelCase** untuk variable dan function
5. **Gunakan UPPER_SNAKE_CASE** untuk konstanta: `const MAX_RETRY = 3`
6. **Hindari global variables** sebisa mungkin
7. **Inisialisasi variable** saat deklarasi: `let count = 0` ✅ bukan `let count` ❌

---

## 🎯 Latihan Praktik

Coba kerjakan ini untuk menguji pemahamanmu:

```javascript
// 1. Apa output dari kode ini?
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);

// 2. Apa hasil dari operasi ini?
console.log(0.1 + 0.2 === 0.3);
console.log("10" + 5);
console.log("10" - 5);

// 3. Perbaiki kode ini agar best practice:
var name = "Budi";
var age = 25;
var isMarried = false;
```

---

Ada bagian yang ingin saya jelaskan lebih dalam? Atau kita bisa lanjut ke materi berikutnya seperti **Operators**, **Functions**, atau **Control Flow**? Saya juga bisa memberikan tantangan coding jika kamu sudah siap! 🚀