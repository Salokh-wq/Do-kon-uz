# NOVA — onlayn do‘kon

NOVA — React va Vite yordamida yaratilgan, o‘zbek tilidagi moslashuvchan internet-do‘kon demo-loyihasi. Loyiha topshiriq talablariga muvofiq ikki asosiy bo‘limdan iborat: **Bosh sahifa** va **Mahsulotlar katalogi**.

## 1. Sahifalar va bo‘limlar ro‘yxati

### 1. Bosh sahifa (`home`)
- NOVA logotipi va navigatsiya menyusi.
- Hero blok: sarlavha, qisqa tavsif va katalogga o‘tish tugmalari.
- Do‘kon afzalliklari: yetkazib berish, ishonchlilik, qadoqlash va yordam.
- Ommabop mahsulotlar kartochkalari.
- Tanlangan kolleksiya banneri.
- Umumiy footer va obuna formasi.

### 2. Mahsulotlar (`catalog`)
- Mahsulotlarni qidirish maydoni.
- Kategoriya bo‘yicha filtrlash.
- Mahsulotlar soni.
- Mahsulot kartochkalari.
- Sevimlilarga qo‘shish va savatga qo‘shish.
- Natija topilmaganda bo‘sh holat xabari.
- Filtrlarni tozalash tugmasi.

## 2. Texnologiyalar va komponentlar

- React 18
- Vite
- Lucide React ikonkalari
- CSS Grid/Flexbox va responsive media queries

### Papkalar tuzilishi

```text
uz-shop/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── data/
    │   └── products.js
    └── components/
        └── ProductCard.jsx
```

### Takror ishlatiladigan kartochka

`src/components/ProductCard.jsx` — barcha mahsulotlar uchun yagona komponent. U quyidagi `props` qiymatlarini qabul qiladi:

- `product` — mahsulot ma’lumotlari;
- `isFavorite` — mahsulot sevimlilarda bor yoki yo‘qligi;
- `onToggleFavorite` — sevimlilar holatini o‘zgartiruvchi funksiya;
- `onAddToCart` — savatga qo‘shish funksiyasi.

Mahsulotlar `products.map(...)` orqali chiqariladi. Shuning uchun har bir mahsulot uchun alohida JSX nusxasi yozish shart emas.

## 3. Birinchi bo‘lim uchun aniq prompt

Quyidagi prompt loyiha yaratilishida ishlatilgan yoki boshqa AI kod muharririda qayta ishlatish uchun tayyorlangan.

### Prompt 1 — Bosh sahifa

**1-qism — Rol va maqsad**

> Sen tajribali frontend dasturchi va UI/UX dizaynersan. React va Vite asosida NOVA nomli zamonaviy internet-do‘kon yarat. Sayt tili o‘zbek tili, lotin yozuvi bo‘lsin. Dizayn minimalistik, sifatli va zamonaviy bo‘lsin; och fon, to‘q kulrang matn, binafsha aksent, yumaloq kartochkalar va nozik soyalar ishlat.

**2-qism — Tuzilma va funksiyalar**

> Bosh sahifada sticky header, NOVA logotipi, navigatsiya, savat va sevimlilar sonini ko‘rsat. Hero blokida “Har kuni uchun yangi ilhom.” sarlavhasi, tavsif, “Xarid qilish” va “Katalogni ko‘rish” tugmalari bo‘lsin. Keyin to‘rtta do‘kon afzalligi, to‘rtta ommabop mahsulot kartochkasi, kolleksiya banneri va footer joylashtir. Barcha tugmalar ishlasin va tegishli katalog yoki holatga olib borsin.

**3-qism — Sifat va natija**

> Layout mobil, planshet va kompyuter ekranlariga moslashsin. React komponentlarini tartibli fayllarga ajrat. Takrorlanadigan mahsulot kartochkasini alohida `ProductCard` komponenti qilib yarat va `props` orqali ma’lumot uzat. Mahsulotlarni massivdan `map()` bilan chiqar. Rasmga `alt`, tugmalarga tushunarli `aria-label` qo‘sh. Keraksiz narx tariflari yoki soxta to‘lov tizimi qo‘shma. Ishlaydigan loyiha fayllari va ishga tushirish ko‘rsatmalari bilan taqdim et.

## 4. Ikkinchi bo‘lim uchun aniq prompt

### Prompt 2 — Mahsulotlar katalogi

**1-qism — Rol va maqsad**

> Sen React dasturchisisan. NOVA internet-do‘koni uchun alohida “Mahsulotlar” katalog bo‘limini yarat. Bosh sahifa dizayniga mos tipografika, ranglar, masofalar va komponentlardan foydalan. Saytning barcha ko‘rinadigan matnlari o‘zbek tilida, lotin yozuvida bo‘lsin.

**2-qism — Tuzilma va funksiyalar**

> Katalogda breadcrumb, sarlavha, natijalar soni, qidiruv maydoni, kategoriya filtrlari va mahsulotlar grid’i bo‘lsin. Mahsulotlar nomi va kategoriyasi bo‘yicha qidirilsin. “Barchasi”, “Elektronika”, “Aksessuarlar”, “Sumkalar”, “Uy va dekor”, “Kiyim va poyabzal” hamda “Hayot tarzi” filtrlarini qo‘sh. Har bir kartochkada rasm, nom, kategoriya, reyting, narx, zarur bo‘lsa eski narx, sevimlilar tugmasi va savatga qo‘shish tugmasi bo‘lsin. Hech qanday natija bo‘lmasa, foydalanuvchiga tushunarli xabar va filtrlarni tiklash tugmasini ko‘rsat.

**3-qism — Kod talablari**

> Mahsulot ma’lumotlarini `src/data/products.js` faylida saqla. Barcha kartochkalarni alohida `ProductCard` komponenti orqali `products.map()` yordamida render qil. Komponentga `product`, `isFavorite`, `onToggleFavorite` va `onAddToCart` propslarini uzat. Qidiruv va kategoriya filtrlari birgalikda ishlasin. Sevimlilar, savat soni va xabar bildirishnomalari React state orqali yangilansin. Kodni komponentlarga ajrat, responsive CSS yoz va `npm run build` xatosiz bajarilishini tekshir.

## 5. Tuzatuvchi prompt — AI unutib qoldirgan qismlar uchun

> Mavjud loyihani boshidan qayta yozma. Avval `README.md`, `src/App.jsx`, `src/components/ProductCard.jsx`, `src/data/products.js` va `src/styles.css` fayllarini tekshir. Quyidagi mezonlarning har birini alohida tekshir:  
> 1. Bosh sahifa va mahsulotlar katalogi ikkita alohida, navigatsiya orqali ochiladigan bo‘lim bo‘lsin.  
> 2. Har ikki bo‘limda mahsulot kartochkalari bir xil `ProductCard` komponentidan foydalansin.  
> 3. Kartochkaga `product`, `isFavorite`, `onToggleFavorite`, `onAddToCart` propslari uzatilsin.  
> 4. Mahsulotlar massivdan `map()` bilan chiqarilsin va `key` berilsin.  
> 5. Qidiruv, kategoriya filtrlari, sevimlilar, savat soni va mobil menyu ishlasin.  
> 6. Barcha ko‘rinadigan matnlar o‘zbek tilida, lotin yozuvida bo‘lsin.  
> 7. Mobil ekranlarda dizayn buzilmasin, rasmlarda `alt` bo‘lsin, konsolda xatolar bo‘lmasin.  
> 8. `README.md` ichida sahifalar ro‘yxati, ikkita aniq prompt va ushbu tuzatuvchi prompt bo‘lsin.  
> Yetishmayotgan joylarni aniqlab, faqat kerakli fayllarni tuzat. So‘ng `npm run build` bilan tekshir va bajarilgan o‘zgarishlarni sanab ber. Ishlamaydigan funksiyani ishlaydi deb ko‘rsatma.

## 6. Loyihani ishga tushirish

Kompyuterda Node.js o‘rnatilgan bo‘lishi kerak. Terminalni loyiha papkasida oching va quyidagilarni bajaring:

```bash
npm install
npm run dev
```

Terminal ko‘rsatgan mahalliy manzilni brauzerda oching.

Yakuniy buildni tekshirish:

```bash
npm run build
npm run preview
```

## 7. GitHub’ga joylash

1. [GitHub](https://github.com/) saytiga kiring va hisobingizga kiring.
2. **New repository** tugmasini bosing.
3. Repository nomini `uz-shop` deb kiriting.
4. `Public` ni tanlang. README yaratish opsiyasini belgilamaslik ma’qul, chunki loyiha ichida README allaqachon bor.
5. Yangi repository yaratgach, terminalda loyiha papkasiga o‘ting va quyidagilarni bajaring:

```bash
git init
git add .
git commit -m "Create NOVA online shop"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/uz-shop.git
git push -u origin main
```

`YOUR-USERNAME` o‘rniga GitHub foydalanuvchi nomingizni yozing. Agar Git kompyuterda o‘rnatilmagan bo‘lsa, GitHub Desktop orqali ham fayllarni yuklashingiz mumkin.

### GitHub Pages orqali saytni ko‘rsatish

Bu loyiha Vite asosida. GitHub Pages’ga chiqarish uchun Vite’ning `base` sozlamasini repository nomiga moslab, GitHub Actions orqali deploy qilish kerak bo‘ladi. Oddiy repository linki kodni ko‘rsatadi; u o‘z-o‘zidan ishlaydigan sayt havolasi emas.

## 8. Tekshiruv ro‘yxati

- [x] README ichida ikki bo‘limning sahifa ro‘yxati bor.
- [x] Har bir bo‘lim uchun uch qismdan iborat aniq prompt bor.
- [x] Tuzatuvchi prompt qo‘shilgan.
- [x] Alohida `ProductCard` komponenti `props` bilan ishlatiladi.
- [x] Mahsulotlar `map()` orqali chiqariladi.
- [x] Bosh sahifa va katalog navigatsiyasi bor.
- [x] Qidiruv, kategoriya filtrlari, sevimlilar va savat soni mavjud.
- [x] Mobil moslashuv uchun CSS yozilgan.

**Eslatma:** mahsulotlar va narxlar demo ma’lumotlaridir. Haqiqiy buyurtma, to‘lov yoki ombor tizimi backend orqali alohida ulanishi kerak.
