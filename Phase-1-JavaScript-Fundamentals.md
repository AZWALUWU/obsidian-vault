# Phase 1 — JavaScript Fundamentals

> **Target:** Mampu membuat program JavaScript murni tanpa framework.
> **Prinsip:** Pahami konsepnya, bukan hanya syntax-nya.

---

## Table of Contents

1. [Pendahuluan](#pendahuluan)
2. [1. Variables](#1-variables)
3. [2. Data Types](#2-data-types)
4. [3. Operators](#3-operators)
5. [4. Conditions](#4-conditions)
6. [5. Loops](#5-loops)
7. [6. Functions](#6-functions)
8. [7. Scope](#7-scope)
9. [8. Closures](#8-closures)
10. [9. Arrays](#9-arrays)
11. [10. Objects](#10-objects)
12. [11. Value vs Reference](#11-value-vs-reference)
13. [12. Error Handling](#12-error-handling)
14. [13. Modules](#13-modules)
15. [Ringkasan & Latihan Akhir](#ringkasan--latihan-akhir)
16. [Mini Project: Task Manager CLI](#mini-project-task-manager-cli)

---

## Pendahuluan

### Apa itu JavaScript?

JavaScript adalah **bahasa pemrograman interpretasi** yang awalnya dibuat untuk browser, tetapi sekarang juga digunakan di backend (Node.js). JavaScript menggunakan **single-threaded event loop** dan bersifat **asynchronous**.

### Cara Menjalankan JavaScript

**Cara 1: Browser Console**
Buka browser → klik kanan → Inspect → Console

**Cara 2: Node.js (recommended)**
```bash
# Install Node.js dari https://nodejs.org
node -v          # cek versi
node hello.js    # jalankan file .js
node -e "console.log('hello')"  # inline
```

**Cara 3: REPL (Interactive)**
```bash
node    # masuk ke REPL, langsung bisa ketik kode
```

### Konvensi Penamaan

| Nama | Penulisan | Contoh |
|------|-----------|--------|
| Variable, function | `camelCase` | `userName`, `getUser()` |
| Class, Component | `PascalCase` | `User`, `AppLayout` |
| Konstanta global | `SCREAMING_SNAKE` | `MAX_RETRY` |
| Private | suffix `_` | `internalData_` |

---

## 1. Variables

Variables adalah **container** untuk menyimpan nilai.

### 3 Cara Membuat Variable

```javascript
// 1. var — function-scoped, bisa di-redeclare (HINDARI)
var name = "Aza";
var name = "Budi"; // OK — ini bahaya

// 2. let — block-scoped, bisa di-reassign
let age = 25;
age = 26;     // OK — bisa diubah
// let age = 30; // ERROR — tidak bisa di-redeclare di scope yang sama

// 3. const — block-scoped, TIDAK bisa di-reassign
const PI = 3.14159;
// PI = 3; // ERROR — tidak bisa diubah
```

### Kapan Pakai `let`, `const`, `var`?

| Kata Kunci | Reassign | Redeclare | Scope | Gunakan |
|-----------|----------|-----------|-------|---------|
| `var` | ✅ | ✅ | Function | ❌ Jangan pakai |
| `let` | ✅ | ❌ | Block | Saat nilai akan berubah |
| `const` | ❌ | ❌ | Block | **Default** — pakai ini kecuali butuh reassign |

### Hoisting

JavaScript meng-"angkat" deklarasi ke atas saat kompilasi:

```javascript
console.log(x); // undefined (bukan error!)
var x = 10;

console.log(y); // ReferenceError!
let y = 20;
```

> **Aturan emas:** Selalu pakai `const` dulu. Kalau butuh diubah, baru pakai `let`. Jangan pernah pakai `var`.

### Latihan 1.1 — Variables

```javascript
// 1. Buat variable menggunakan const untuk menyimpan nama, umur, dan kota
// 2. Coba ubah nilai const — apa yang terjadi?
// 3. Buat variable dengan let untuk score. Ubah nilainya 3 kali
// 4. Buat variable dengan var, lalu coba akses dari luar block scope
```

---

## 2. Data Types

JavaScript memiliki **8 data types**, dibagi menjadi 2 kategori:

### Primitive Types (immutable, disimpan di stack)

| Type | Contoh | Keterangan |
|------|--------|------------|
| `string` | `"hello"`, `'hello'`, `` `hello` `` | Teks |
| `number` | `42`, `3.14`, `-7`, `Infinity`, `NaN` | Angka |
| `boolean` | `true`, `false` | Boolean |
| `undefined` | `undefined` | Variable tanpa nilai |
| `null` | `null` | "Sengaja kosong" |
| `symbol` | `Symbol("id")` | Identifier unik |
| `bigint` | `9007199254740991n` | Integer besar |

### Object Types (mutable, disimpan di heap)

| Type | Contoh | Keterangan |
|------|--------|------------|
| `object` | `{ name: "Aza" }` | Kumpulan key-value |
| `array` | `[1, 2, 3]` | List of values (teknisnya object) |
| `function` | `() => {}` | Function (teknisnya object) |
| `date` | `new Date()` | Object built-in |
| `regex` | `/abc/i` | Object built-in |

### Operator `typeof`

```javascript
typeof "hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" ← ini BUG di JS sejak awal!
typeof {}           // "object"
typeof []           // "object"
typeof function(){} // "function"
```

### Penjelasan Penting: `null` vs `undefined`

```javascript
// undefined = variable sudah dibuat tapi belum diisi
let nama;
console.log(nama); // undefined

// null = sengaja dikosongkan
let alamat = null;
console.log(alamat); // null
```

### String

```javascript
// String biasa
let s1 = "Hello";
let s2 = 'World';

// Template literal (backtick) — bisa interpolation
let name = "Aza";
let greeting = `Hello, ${name}!`; // "Hello, Aza!"

// Multi-line
let multi = `
  Ini baris 1
  Ini baris 2
`;

// Method
"hello".toUpperCase();        // "HELLO"
"hello".length;               // 5
"hello".includes("ell");      // true
"hello".slice(1, 4);          // "ell"
"hello world".split(" ");     // ["hello", "world"]
```

### Number

```javascript
let int = 42;
let float = 3.14;
let neg = -10;

// Operasi khusus
Infinity;       // pembagian dengan 0
-Infinity;      // negatif infinity
NaN;            // not a number (hasil operasi invalid)

// Cek valid number
Number.isNaN(NaN);          // true
Number.isFinite(Infinity);  // false

// Parsing
parseInt("42abc");   // 42
parseFloat("3.14");  // 3.14
Number("42");        // 42
+"100";              // 100 ( unary + )

// Masalah floating point
0.1 + 0.2;            // 0.30000000000000004
Math.round(0.1 + 0.2); // 0
```

### Boolean

```javascript
let isStudent = true;
let isEmployed = false;

// Falsy values (dianggap false)
false;
0;
-0;
0n;
"";
null;
undefined;
NaN;

// Truthy values (dianggap true)
// Semua value selain falsy di atas
"hello";       // true
42;            // true
[];            // true!
{};            // true!
function(){};  // true!
```

### Latihan 2.1 — Data Types

```javascript
// 1. Buat variable untuk setiap primitive type, lalu cek dengan typeof
// 2. Coba: typeof null — apa hasilnya? Kenapa?
// 3. Berapa hasil 0.1 + 0.2? Kenapa tidak tepat?
// 4. Buat variable "a" tanpa inisialisasi. Cek typeof-nya
// 5. List semua falsy values dalam JavaScript
```

---

## 3. Operators

### Arithmetic Operators

```javascript
let a = 10, b = 3;

a + b;    // 13  — penjumlahan
a - b;    // 7   — pengurangan
a * b;    // 30  — perkalian
a / b;    // 3.333... — pembagian
a % b;    // 1   — modulo (sisa bagi)
a ** b;   // 1000 — eksponen (10^3)
```

### Assignment Operators

```javascript
let x = 10;
x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x %= 4;   // x = x % 4  → 2
x **= 3;  // x = x ** 3 → 8
```

### Comparison Operators

```javascript
// Equality
5 == "5";     // true  — loose equality (type coercion!)
5 === "5";    // false — strict equality ← PAKAI INI
5 != "5";     // false
5 !== "5";    // true  ← PAKAI INI

// Comparison
5 > 3;        // true
5 < 3;        // false
5 >= 5;       // true
5 <= 4;       // false
```

> **Aturan emas:** Selalu pakai `===` dan `!==`. Jangan pernah pakai `==` atau `!=`.

### Logical Operators

```javascript
// AND (&&) — kedua-duanya harus true
true && true;    // true
true && false;   // false

// OR (||) — minimal satu harus true
true || false;   // true
false || false;  // false

// NOT (!) — membalik boolean
!true;           // false
!false;          // true

// Nullish coalescing (??)
null ?? "default";    // "default"
undefined ?? "default"; // "default"
0 ?? "default";       // 0 (karena 0 bukan null/undefined)
"" ?? "default";      // "" (karena "" bukan null/undefined)
```

### Operator Precedence (prioritas)

```
1. ()                    — grouping
2. !, typeof, +, - (unary)
3. **                    — eksponen
4. *, /, %
5. +, -
6. <, >, <=, >=
7. ==, ===, !=, !==
8. &&
9. ||
10. ?:
11. =, +=, -=, dll
```

### Latihan 3.1 — Operators

```javascript
// 1. Apa hasil dari: true + true?
// 2. Apa hasil dari: "5" - 3? "5" + 3?
// 3. Buat expression yang mengecek apakah sebuah number positif, negatif, atau nol
// 4. Gunakan || dan ?? — apa bedanya? Berikan contoh
// 5. Apa hasil dari: !!"hello"? !!"?"? !!""?
```

---

## 4. Conditions

### `if...else`

```javascript
let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("D");
}
```

### Ternary Operator

```javascript
let age = 20;
let status = age >= 18 ? "Dewasa" : "Anak-anak";
// "Dewasa"
```

### Short Circuit Evaluation

```javascript
// AND (&&) — return first falsy, or last value
let x = null && "hello";   // null
let y = "hello" && "world"; // "world"

// OR (||) — return first truthy, or last value
let a = null || "default";  // "default"
let b = "first" || "second"; // "first"
```

### Nullish Coalescing (`??`)

```javascript
// Berbeda dari || — hanya mengecek null/undefined
let input = 0;
let val1 = input || "default";  // "default" (0 dianggap falsy)
let val2 = input ?? "default";  // 0 (0 bukan null/undefined)
```

### `switch`

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Mid-week");
}
```

> **Tips:** Selalu pakai `break` di setiap case. Kalau lupa, semua case setelahnya akan dijalankan (fall-through).

### Latihan 4.1 — Conditions

```javascript
// 1. Buat program yang mengecek bilangan positif/negatif/nol
// 2. Buat program grade (A-F) dari score 0-100 dengan aturan:
//    A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: <60
// 3. Buat program yang mengecek apakah tahun kabisat atau tidak
//    Aturan: habis dibagi 4, kecuali habis dibagi 100 kecuali habis dibagi 400
// 4. Buat program konversi suhu Celsius ↔ Fahrenheit
// 5. Gunakan short circuit untuk set default value
```

---

## 5. Loops

### `for` Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// for...of — iterate values
let fruits = ["apel", "mangga", "jeruk"];
for (let fruit of fruits) {
  console.log(fruit); // "apel", "mangga", "jeruk"
}

// for...in — iterate keys/properties
let user = { name: "Aza", age: 25 };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

### `while` Loop

```javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

### `do...while` Loop

```javascript
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);
// Selalu menjalankan minimal 1x
```

### Loop Control

```javascript
// break — keluar dari loop
for (let i = 0; i < 10; i++) {
  if (i === 5) break;     // berhenti di 5
  console.log(i);
}

// continue — skip iterasi ini, lanjut ke berikutnya
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;  // skip 2
  console.log(i);         // 0, 1, 3, 4
}
```

### Nested Loop

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
```

### Latihan 5.1 — Loops

```javascript
// 1. Cetak angka 1-100. Kelipatan 3 ganti "Fizz", kelipatan 5 ganti "Buzz",
//    kelipatan 15 ganti "FizzBuzz"
// 2. Cetak pola bintang:
//    *
//    **
//    ***
//    ****
//    *****
// 3. Cetak faktor dari sebuah angka
// 4. Buat program cek bilangan prima dari 1-100
// 5. Hitung jumlah huruf vokal dalam sebuah string
```

---

## 6. Functions

Functions adalah **block kode yang bisa dipanggil ulang** (reusable).

### Function Declaration

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

greet("Aza"); // "Hello, Aza!"
```

### Function Expression

```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

### Arrow Function (preview — akan dibahas lebih detail di Phase 2)

```javascript
const greet = (name) => `Hello, ${name}!`;

// Multi-line
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};
```

### Parameters & Arguments

```javascript
// Default parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

greet();         // "Hello, Guest!"
greet("Aza");    // "Hello, Aza!"

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3);   // 6
```

### First-class Functions

Functions di JavaScript adalah **first-class citizens** — bisa disimpan di variable, dikirim sebagai argument, atau dikembalikan sebagai return value.

```javascript
// 1. Simpan di variable
const add = (a, b) => a + b;

// 2. Kirim sebagai argument (callback)
function execute(fn, a, b) {
  return fn(a, b);
}
execute(add, 2, 3); // 5

// 3. Kembalikan dari function (factory)
function createMultiplier(multiplier) {
  return (number) => number * multiplier;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
double(5);  // 10
triple(5);  // 15
```

### IIFE (Immediately Invoked Function Expression)

```javascript
(function() {
  console.log("Runs immediately!");
})();

// Arrow version
(() => {
  console.log("Runs immediately!");
})();
```

### Latihan 6.1 — Functions

```javascript
// 1. Buat function untuk menghitung luas persegi panjang (panjang, lebar)
// 2. Buat function yang menerima array angka dan mengembalikan rata-ratanya
// 3. Buat function factorial(n) — gunakan rekursi
// 4. Buat function createGreeter(greeting) yang mengembalikan function baru
// 5. Buat function yang menerima 3 angka dan mengembalikan yang terbesar
```

---

## 7. Scope

Scope menentukan **di mana** variable bisa diakses.

### 3 Jenis Scope

```javascript
// 1. Global Scope — bisa diakses dari mana saja
let globalVar = "I'm global";

function outer() {
  // 2. Function Scope — hanya bisa diakses di dalam function ini
  let localVar = "I'm local";

  if (true) {
    // 3. Block Scope — hanya bisa diakses di dalam block {} ini
    let blockVar = "I'm block-scoped";
    var notBlockScoped = "I escape block scope!";
  }

  // console.log(blockVar); // ReferenceError!
  console.log(notBlockScoped); // OK! — var ignores block scope
}
```

### Lexical Scope

```javascript
function outer() {
  const message = "Hello";

  function inner() {
    // inner bisa mengakses variabel dari outer
    // karena inner "didefinisikan" di dalam outer
    console.log(message); // "Hello"
  }

  inner();
}
```

### The Scope Chain

```javascript
const global = "global";

function level1() {
  const level1 = "level1";

  function level2() {
    const level2 = "level2";

    function level3() {
      const level3 = "level3";

      // Bisa akses semua level di atasnya
      console.log(global, level1, level2, level3);
    }

    level3();
  }

  level2();
}

level1();
```

### Shadowing

```javascript
let x = 10;

function demo() {
  let x = 20;     // ini variable TERBARU, bukan yang global
  console.log(x); // 20
}

demo();
console.log(x);    // 10 (tidak berubah)
```

### Temporal Dead Zone (TDZ)

```javascript
// let dan const ada di TDZ sebelum deklarasi
{
  // TDZ dimulai
  console.log(a); // ReferenceError!
  let a = 5;      // TDZ berakhir
  console.log(a); // 5
}
```

### Latihan 7.1 — Scope

```javascript
// 1. Apa output dari kode ini? Jelaskan kenapa
let x = 1;
function a() { let x = 2; }
function b() { console.log(x); }
a();
b();

// 2. Buat contoh shadowing dan jelaskan outputnya
// 3. Apa beda var dan let di dalam for loop?
// 4. Buat 3 level nested function, coba akses variable dari setiap level
// 5. Apa itu TDZ? Kapan ini terjadi?
```

---

## 8. Closures

**Closure** adalah function yang "mengingat" lexical scope-nya meskipun dipanggil dari tempat yang berbeda.

### Konsep Dasar

```javascript
function createCounter() {
  let count = 0;   // ← ini "tertutup" (closed over)

  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
// count tidak bisa diakses dari luar — tapi masih ada di memory!
```

### Kenapa Closures Penting?

```javascript
// 1. Data Privacy (Encapsulation)
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited: $${amount}. Balance: $${balance}`;
      }
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return `Withdrew: $${amount}. Balance: $${balance}`;
      }
      return "Insufficient funds";
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
account.deposit(50);    // "Deposited: $50. Balance: $150"
account.withdraw(30);   // "Withdrew: $30. Balance: $120"
account.getBalance();   // 120
// account.balance;     // undefined — tidak bisa diakses!
```

### Closure dalam Loop (Pitfall)

```javascript
// MASALAH: var tidak punya block scope
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (bukan 0, 1, 2!)

// SOLUSI: pakai let (atau IIFE)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2
```

### Latihan 8.1 — Closures

```javascript
// 1. Buat function createMultiplier(n) yang mengembalikan function
//    untuk mengalikan angka dengan n
// 2. Buat function createPasswordChecker(password) yang mengembalikan
//    function untuk mengecek apakah input sesuai dengan password
// 3. Buat function createTimer() yang bisa start(), stop(), dan getTime()
// 4. Kenapa output di loop menggunakan var bukan let?
// 5. Buat function createLogger(prefix) yang mengembalikan function
//    log(message) yang mencetak [prefix] message
```

---

## 9. Arrays

Array adalah **ordered list** dari values.

### Membuat Array

```javascript
let fruits = ["apel", "mangga", "jeruk"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null, { name: "Aza" }];
let empty = [];

// Array() constructor (jangan pakai ini)
let arr = new Array(5); // [empty × 5]
```

### Akses & Modifikasi

```javascript
let arr = ["a", "b", "c", "d"];

arr[0];          // "a"
arr[arr.length - 1]; // "d" — element terakhir
arr[0] = "x";   // ["x", "b", "c", "d"]
arr.at(-1);      // "d" — akses dari belakang (ES2022)
```

### Method Penting

```javascript
let arr = [1, 2, 3, 4, 5];

// Add/Remove
arr.push(6);        // [1,2,3,4,5,6] — tambah di akhir
arr.pop();          // [1,2,3,4,5] — hapus dari akhir
arr.unshift(0);     // [0,1,2,3,4,5] — tambah di awal
arr.shift();        // [1,2,3,4,5] — hapus dari awal

// Find
arr.includes(3);    // true
arr.indexOf(3);     // 2 (index)
arr.find(x => x > 3);   // 4 (pertama yang match)
arr.findIndex(x => x > 3); // 3 (index-nya)

// Transform
arr.slice(1, 3);    // [2,3] — tanpa mengubah original
arr.splice(1, 2);   // menghapus 2 element mulai dari index 1
arr.reverse();      // membalik array
arr.sort();         // mengurutkan (menurut string!)
arr.concat([6, 7]); // menggabungkan array

// Iterate
arr.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// Flat
let nested = [[1, 2], [3, 4], [5]];
nested.flat();      // [1, 2, 3, 4, 5]

// Join
["a", "b", "c"].join("-"); // "a-b-c"

// Destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]
```

### Penting: `sort()` Mengubah String

```javascript
[10, 9, 2, 1].sort();          // [1, 10, 2, 9] — salah!
[10, 9, 2, 1].sort((a, b) => a - b); // [1, 2, 9, 10] — benar!
```

### Spread Operator

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Copy array
let copy = [...arr1];
```

### Latihan 9.1 — Arrays

```javascript
// 1. Buat array angka 1-10. Filter yang genap, lalu kalikan semua dengan 3
// 2. Cari angka terbesar dan terkecil dari array [3, 7, 2, 9, 1, 5]
// 3. Buat function removeDuplicates(arr) yang menghapus duplikat
// 4. Buat function flatten(arr) yang meratakan nested array (tanpa .flat())
// 5. Buat function chunk(arr, size) yang memecah array menjadi chunk
//    chunk([1,2,3,4,5], 2) → [[1,2], [3,4], [5]]
// 6. Buat function rotate(arr, n) yang memutar array
//    rotate([1,2,3,4,5], 2) → [4, 5, 1, 2, 3]
```

---

## 10. Objects

Objects adalah **kumpulan key-value pairs**.

### Membuat Object

```javascript
// Object literal (paling umum)
let user = {
  name: "Aza",
  age: 25,
  isStudent: true,
};

// Computed property names
let prop = "email";
let obj = {
  [prop]: "aza@mail.com"
};

// Object() constructor (jangan pakai ini)
let obj2 = new Object();
```

### Akses Property

```javascript
let user = { name: "Aza", age: 25 };

// Dot notation
user.name;       // "Aza"

// Bracket notation — untuk dynamic key
user["name"];    // "Aza"
let key = "age";
user[key];       // 25

// Optional chaining
let address = user?.address?.city; // undefined (tidak error!)
```

### Menambah/Menghapus Property

```javascript
let user = { name: "Aza" };

// Tambah
user.age = 25;
user["email"] = "aza@mail.com";

// Hapus
delete user.email;

// Cek apakah property ada
"name" in user;        // true
"user" in user;        // false
user.hasOwnProperty("name"); // true
```

### Method di Object

```javascript
let calculator = {
  value: 0,

  add(n) {
    this.value += n;
    return this; // untuk chaining
  },

  subtract(n) {
    this.value -= n;
    return this;
  },

  result() {
    return this.value;
  }
};

calculator.add(5).add(3).subtract(2).result(); // 6
```

### Object Methods Lainnya

```javascript
let user = { name: "Aza", age: 25, city: "Bandung" };

Object.keys(user);    // ["name", "age", "city"]
Object.values(user);  // ["Aza", 25, "Bandung"]
Object.entries(user); // [["name", "Aza"], ["age", 25], ["city", "Bandung"]]

// Spread operator
let merged = { ...user, email: "aza@mail.com" };

// Copy object
let copy = { ...user };
```

### Nested Object

```javascript
let user = {
  name: "Aza",
  address: {
    street: "Jl. Sudirman",
    city: "Bandung",
    country: "Indonesia"
  }
};

user.address.city;           // "Bandung"
user?.address?.postalCode;   // undefined (tidak error)
```

### Destructuring Object

```javascript
let user = { name: "Aza", age: 25, city: "Bandung" };

// Basic
let { name, age } = user;
// name = "Aza", age = 25

// Rename
let { name: nama, age: umur } = user;
// nama = "Aza", umur = 25

// Default
let { name, phone = "N/A" } = user;
// phone = "N/A"

// Rest
let { name: n, ...rest } = user;
// n = "Aza", rest = { age: 25, city: "Bandung" }
```

### Latihan 10.1 — Objects

```javascript
// 1. Buat object mahasiswa dengan property: nama, npm, jurusan, grades (array angka)
//    Tambahkan method getAverage() yang menghitung rata-rata grades
// 2. Buat function mergeObjects(obj1, obj2) yang menggabungkan 2 object
//    Jika ada key yang sama, gunakan nilai dari obj2
// 3. Buat function invertObject(obj) yang membalik key-value
//    { a: 1, b: 2 } → { 1: "a", 2: "b" }
// 4. Buat function countProperties(obj) yang menghitung jumlah property
// 5. Buat function deepClone(obj) yang meng-copy object secara deep
// 6. Buat object dengan method chaining seperti calculator di atas
```

---

## 11. Value vs Reference

Ini adalah konsep **paling krusial** di JavaScript.

### Primitive = By Value

```javascript
let a = 10;
let b = a;    // b mendapat COPY dari nilai a

b = 20;
console.log(a); // 10 — TIDAK BERUBAH!
console.log(b); // 20
```

### Object/Array = By Reference

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1;    // arr2 MERUJUK array yang SAMA

arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] — BERUBAH! Karena sama!

// Sama dengan object
let obj1 = { name: "Aza" };
let obj2 = obj1;
obj2.name = "Budi";
console.log(obj1.name); // "Budi" — BERUBAH!
```

### Cara Copy

```javascript
// SHALLOW COPY (copy level pertama saja)
let arr1 = [1, [2, 3], 4];
let arr2 = [...arr1];            // spread
let arr3 = arr1.slice();          // slice
let arr4 = Array.from(arr1);      // Array.from
let arr5 = structuredClone(arr1); // structuredClone (deep!)

arr2[1].push(5);
console.log(arr1[1]); // [2, 3, 5] — ikut berubah! Karena shallow!

// DEEP COPY
let deep1 = [1, [2, 3], 4];
let deep2 = JSON.parse(JSON.stringify(deep1)); // cara lama
let deep3 = structuredClone(deep1);             // cara modern (recommended)
```

### Perbandingan

```javascript
// === membandingkan VALUE untuk primitive
let a = 5;
let b = 5;
a === b; // true

// === membandingkan REFERENCE untuk object
let obj1 = { name: "Aza" };
let obj2 = { name: "Aza" };
obj1 === obj2; // false! Karena reference beda!

let obj3 = obj1;
obj1 === obj3; // true! Karena reference sama!
```

### Latihan 11.1 — Value vs Reference

```javascript
// 1. Apa output dari kode ini? Jelaskan kenapa
let x = { a: 1 };
let y = x;
y.a = 2;
console.log(x.a);

// 2. Buat function yang menerima array, tambahkan elemen,
//    lalu cek apakah array original berubah
// 3. Buat shallow copy dan deep copy dari array nested
// 4. Apa yang terjadi jika: let a = {}; let b = a; let c = {...b};
//    a === b? a === c?
// 5. Buat function cloneObject yang bisa menangani nested object
```

---

## 12. Error Handling

Error handling memastikan program **tidak crash** saat terjadi error.

### Try...Catch

```javascript
try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  // Selalu dijalankan, mau error atau tidak
  console.log("Cleanup here");
}
```

### Jenis Error

```javascript
// Error umum
new Error("Something went wrong");
new TypeError("Not a function");       // type salah
new ReferenceError("x is not defined"); // variable tidak ditemukan
new RangeError("Number out of range");  // nilai di luar range
new SyntaxError("Unexpected token");    // syntax salah
```

### Throw Error

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero!");
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (error) {
  console.error(error.message); // "Division by zero!"
}
```

### Custom Error

```javascript
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateAge(age) {
  if (age < 0 || age > 150) {
    throw new ValidationError("age", "Age must be between 0 and 150");
  }
}

try {
  validateAge(-5);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`${error.field}: ${error.message}`);
  }
}
```

### Error Handling Pattern

```javascript
// Pattern 1: Return null
function findUser(id) {
  const users = [{ id: 1, name: "Aza" }];
  const user = users.find(u => u.id === id);
  return user || null;
}

// Pattern 2: Throw
function getUser(id) {
  const user = findUser(id);
  if (!user) throw new Error("User not found");
  return user;
}

// Pattern 3: Result object
function safeGetUser(id) {
  try {
    const user = getUser(id);
    return { ok: true, data: user };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}
```

### Latihan 12.1 — Error Handling

```javascript
// 1. Buat function parseJSON(str) yang aman dari error
// 2. Buat class AppError dengan property code dan statusCode
// 3. Buat function validateEmail(email) yang throw error jika invalid
// 4. Buat function divide(a, b) dengan proper error handling
// 5. Buat pattern "Result" yang mengembalikan { ok: true, data } atau { ok: false, error }
```

---

## 13. Modules

Modules memungkinkan kita **memecah kode** menjadi file-file terpisah.

### ES Modules (ESM) — Standard Modern

**File: math.js**
```javascript
// Named export
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;

// Default export (hanya 1 per file)
export default class Calculator {
  add(a, b) { return a + b; }
  subtract(a, b) { return a - b; }
}
```

**File: app.js**
```javascript
// Import default
import Calculator from "./math.js";

// Import named
import { add, subtract, PI } from "./math.js";

// Import dengan rename
import { add as tambah } from "./math.js";

// Import semua
import * as math from "./math.js";
math.add(1, 2);

// Dynamic import (lazy loading)
const module = await import("./heavy-module.js");
```

### CommonJS (Node.js Legacy)

```javascript
// Export
module.exports = { add, subtract };
module.exports = Calculator; // default

// Import
const { add, subtract } = require("./math");
const Calculator = require("./math");
```

### ES Modules vs CommonJS

| Fitur | ESM | CommonJS |
|-------|-----|----------|
| Syntax | `import/export` | `require/module.exports` |
| Loading | Asynchronous | Synchronous |
| Tree-shaking | ✅ | ❌ |
| Browser | ✅ Native | ❌ |
| Node.js | ✅ | ✅ |
| Phase | Modern (pakai ini) | Legacy |

### Modular Code Pattern

```javascript
// File: utils.js
export const formatDate = (date) => {
  return date.toLocaleDateString("id-ID");
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// File: app.js
import { formatDate, capitalize } from "./utils.js";

console.log(capitalize("hello")); // "Hello"
```

### Latihan 13.1 — Modules

```javascript
// 1. Buat file helpers.js dengan exports: add, multiply, isEven, factorial
// 2. Buat file main.js yang import semua functions dari helpers.js
// 3. Buat file stringUtils.js dengan exported functions: reverse, countVowels, titleCase
// 4. Coba import di Node.js — buat package.json dengan "type": "module"
// 5. Buat 3 file: types.js (mendefinisikan tipe data), 
//    validator.js (mengimport dari types.js), app.js (mengimport dari validator.js)
```

---

## Ringkasan & Latihan Akhir

### Cheat Sheet

```javascript
// Variables
const x = 10;    // default
let y = 20;      // saat perlu reassign

// Data Types
"string" | 42 | true | null | undefined | {} | [] | Symbol | 10n

// Operators
=== (strict equality) | !== | && | || | ?? | ...

// Conditions
if / else if / else | switch | ternary | short circuit

// Loops
for | for...of | for...in | while | do...while | break | continue

// Functions
function name() {} | const name = () => {} | IIFE

// Scope
Global | Function | Block

// Closures
Function remembers its lexical scope

// Arrays
push | pop | shift | unshift | splice | slice | find | filter | map | reduce

// Objects
dot notation | bracket notation | destructuring | spread | Object.keys/values/entries

// Error Handling
try / catch / finally | throw | custom errors

// Modules
import/export (ESM) | require/module.exports (CJS)
```

### Latihan Konsolidasi

```javascript
// ============================================
// LATIHAN 1: Mini Calculator
// ============================================
// Buat calculator yang bisa:
// - Menambah, mengurangi, mengalikan, membagi
// - Menyimpan history operasi
// - Mengembalikan hasil terakhir
// Gunakan closures untuk data privacy

// ============================================
// LATIHAN 2: Array Manipulation
// ============================================
// Buat functions berikut (tanpa method .flat()):
// - flatten(arr): meratakan array nested
// - groupBy(arr, fn): mengelompokkan berdasarkan return value fn
// - unique(arr): menghapus duplikat
// - zip(arr1, arr2): menggabungkan pair [[1,'a'], [2,'b']]
//   zip([1,2], ['a','b']) → [[1,'a'], [2,'b']]

// ============================================
// LATIHAN 3: Object Transformation
// ============================================
// Buat functions berikut:
// - deepMerge(obj1, obj2): merge nested objects
// - pick(obj, keys): ambil property tertentu
// - omit(obj, keys): hapus property tertentu
// - mapValues(obj, fn): transform semua values
//   mapValues({a:1, b:2}, x => x*2) → {a:2, b:4}

// ============================================
// LATIHAN 4: String Processing
// ============================================
// Buat functions berikut:
// - reverseWords(str): balik urutan kata
//   "hello world" → "world hello"
// - countChars(str): hitung frekuensi setiap karakter
//   "hello" → { h:1, e:1, l:2, o:1 }
// - longestWord(str): cari kata terpanjang
// - capitalizeEach(str): kapitalisasi huruf pertama setiap kata

// ============================================
// LATIHAN 5: Error Handling
// ============================================
// Buat system validasi data dengan:
// - Class ValidationError
// - Function validateUser(user) yang mengecek:
//   - name: string, min 2 karakter
//   - age: number, 0-150
//   - email: string, mengandung @ dan .
// - Return { ok: true, data } atau { ok: false, errors: [] }

// ============================================
// LATIHAN 6: Utility Library
// ============================================
// Buat file utils.js yang export:
// - debounce(fn, delay): delay execution
// - throttle(fn, limit): limit execution frequency
// - memoize(fn): cache results
// - pipe(...fns): compose functions left to right
//   pipe(double, addOne)(3) → 7 (3*2 + 1)
```

---

## Mini Project: Task Manager CLI

### Deskripsi

Buat program Task Manager sederhana yang berjalan di terminal.

### Fitur

```javascript
// Program harus bisa:
// 1. Add task: tambah task baru dengan title, priority (low/medium/high)
// 2. List tasks: tampilkan semua task
// 3. Complete task: tandai task selesai
// 4. Delete task: hapus task
// 5. Filter tasks: filter berdasarkan status (done/pending) atau priority
// 6. Search tasks: cari task berdasarkan keyword di title
// 7. Statistics: tampilkan jumlah total, done, pending, dan per priority
// 8. Export tasks: konversi ke format string yang rapi
```

### Struktur Data

```javascript
// Gunakan array of objects
let tasks = [
  {
    id: 1,
    title: "Belajar JavaScript",
    priority: "high",
    done: false,
    createdAt: "2025-01-15T10:00:00.000Z"
  }
];
```

### Requirements

```javascript
// 1. Gunakan closure untuk menyimpan state tasks
// 2. Gunakan function untuk setiap operasi
// 3. Gunakan error handling untuk input invalid
// 4. Gunakan modules (export/import) untuk memecah kode:
//    - taskManager.js (core logic)
//    - validator.js (validasi input)
//    - formatter.js (format output)
//    - main.js (entry point)
// 5. Gunakan loop untuk menu interaktif (atau buat function yang bisa dipanggil)
// 6. JANGAN pakai framework atau library eksternal
```

### Bonus

```javascript
// - Sorting: urutkan berdasarkan priority atau date
// - Pagination: tampilkan task per halaman
// - Data persistence: simpan ke file JSON
// - Unit tests: buat test untuk setiap function
```

### Langkah Pengerjaan

```text
1. ✅ Buat taskManager.js dengan functions:
   - addTask(title, priority)
   - getTasks(filter)
   - completeTask(id)
   - deleteTask(id)
   - getStats()

2. ✅ Buat validator.js dengan:
   - validateTaskInput(title, priority)

3. ✅ Buat formatter.js dengan:
   - formatTaskList(tasks)
   - formatStats(stats)

4. ✅ Buat main.js yang menggabungkan semua
5. ✅ Test semua functions
6. ✅ Buat minimal 5 unit tests
```

---

## Checklist Selesai Phase 1

- [ ] Bisa menjelaskan perbedaan `var`, `let`, `const`
- [ ] Bisa menjelaskan semua primitive types
- [ ] Bisa menggunakan semua operators
- [ ] Bisa menulis conditions (`if/else`, `switch`, ternary)
- [ ] Bisa menulis loops (`for`, `while`, `for...of`)
- [ ] Basa menulis functions (declaration, expression, arrow)
- [ ] Bisa menjelaskan 3 jenis scope
- [ ] Bisa menjelaskan dan menggunakan closures
- [ ] Bisa manipulasi arrays (semua methods penting)
- [ ] Bisa manipulasi objects (access, modify, spread, destructuring)
- [ ] Bisa menjelaskan value vs reference
- [ ] Bisa menulis error handling (`try/catch`, `throw`)
- [ ] Bisa menggunakan ES Modules (`import/export`)
- [ ] Bisa menyelesaikan Mini Project Task Manager

> **Setelah selesai Phase 1, lanjut ke Phase 2 — Modern JavaScript.**


opencode -s ses_f3d22f341ffe1j4OsgDeMlQ8PA