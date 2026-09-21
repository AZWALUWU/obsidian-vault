// ============================================
// 🎮 PLAY WITH CONSOLE.LOG
// Jalankan: node play.js
// ============================================

// --- 1. Dasar ---
console.log("=== 1. Dasar ===")
console.log("Halo Dunia!")
console.log(123)
console.log(true)
console.log(null)

// --- 2. Variabel ---
console.log("\n=== 2. Variabel ===")
const nama = "Aza"
const umur = 20
console.log("Nama:", nama)
console.log("Umur:", umur)

// --- 3. Template Literal ---
console.log("\n=== 3. Template Literal ===")
console.log(`Halo, nama saya ${nama}, umur saya ${umur} tahun`)
console.log(`2 + 3 = ${2 + 3}`)

// --- 4. || vs ?? ---
console.log("\n=== 4. || vs ?? ===")
const a = 0
const b = ""
const c = null
const d = undefined

console.log("Nilai a:", a)
console.log("a || 100 =", a || 100, "  ← 0 dianggap falsy")
console.log("a ?? 100 =", a ?? 100, "  ← 0 tetap 0")

console.log("\nNilai b:", JSON.stringify(b))
console.log('b || "kosong" =', b || "kosong", "  ← string kosong dianggap falsy")
console.log('b ?? "kosong" =', b ?? "kosong", "  ← string kosong tetap ada")

console.log("\nNilai c:", c)
console.log("c || 999 =", c || 999, "  ← null → fallback")
console.log("c ?? 999 =", c ?? 999, "  ← null → fallback")

console.log("\nNilai d:", d)
console.log("d || 50 =", d || 50, "  ← undefined → fallback")
console.log("d ?? 50 =", d ?? 50, "  ← undefined → fallback")

// --- 5. Real Case: User Login ---
console.log("\n=== 5. Real Case: User Login ===")
const user = {
  nama: "Aza",
  email: "",
  umur: 0,
  role: null
}

// ❌ Salah dengan ||
console.log("Dengan ||:")
console.log("  Nama:", user.nama || "Guest")      // "Aza" ✅
console.log("  Email:", user.email || "no email")  // "no email" ❌ (harusnya "")
console.log("  Umur:", user.umur || "tidak tahu")  // "tidak tahu" ❌ (harusnya 0)
console.log("  Role:", user.role || "user")         // "user" ✅

// ✅ Benar dengan ??
console.log("\nDengan ??:")
console.log("  Nama:", user.nama ?? "Guest")        // "Aza" ✅
console.log("  Email:", user.email ?? "no email")   // "" ✅
console.log("  Umur:", user.umur ?? "tidak tahu")   // 0 ✅
console.log("  Role:", user.role ?? "user")          // "user" ✅

// --- 6. Fun: Tebak Angka ---
console.log("\n=== 6. Tebak Angka ===")
const tebakan = undefined
const jawaban = tebakan ?? "Belum tebak!"
console.log(`Jawaban kamu: ${jawaban}`)