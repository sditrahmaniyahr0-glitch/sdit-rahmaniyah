# Website SDIT Rahmaniyah

Struktur folder:

```
├── index.html          -> halaman utama
├── css/
│   └── style.css        -> semua styling
├── js/
│   └── script.js         -> semua interaksi (navbar, marquee, rintik cahaya, tab, slider, pop up PPDB)
└── assets/
    └── logo-sdit-rahmaniyah.png   -> logo sekolah
```

## Cara pakai
Buka `index.html` langsung di browser (double click), atau upload seluruh folder ini ke hosting/domain.

## Gambar placeholder yang masih perlu diganti
Beberapa bagian masih pakai placeholder teks/warna solid sebagai pengganti foto asli. Cari komentar
`<!-- GANTI ... -->` di `index.html`, atau elemen dengan class berikut lalu ganti isinya dengan tag `<img>`:

- `.hero-photo` (di section hero) — saat ini memakai gambar placeholder online (placehold.co), ganti `src`-nya.
- `.ppdb-banner` (di pop up pengumuman) — banner poster PPDB.
- `.about-visual` (section About Us).
- `.program-photo` (8 kartu Program Unggulan).
- `.ekskul-photo` (8 kartu Ekstrakurikuler).
- `.article-thumb` (3 kartu Artikel Sekolah, saat ini masih memakai emoji).

## Yang masih perlu disesuaikan
- Nomor WhatsApp, link Facebook/Instagram/YouTube di footer (masih placeholder).
- Alamat & link Google Maps di footer.
- Isi lengkap 8 kartu Program Unggulan, Ekstrakurikuler, dan Artikel Sekolah (data nyata sekolah).
- Kartu nilai "A — [Nilai Positif]" di section RAMAH — isi dengan nilai kelima sekolah.
- Tanggal/periode PPDB pada pop up pengumuman.
