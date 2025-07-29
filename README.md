cat <<EOF > README.md
# 🖼️ React Native: Image Bileşeni ile Görsel Gösterimi

Bu örnek proje, React Native'de `Image` bileşenini kullanarak hem yerel (local) hem de internet üzerinden alınan (remote) görsellerin nasıl gösterileceğini öğretir.

---

## 🧱 Proje Özeti

Uygulama arayüzünde iki adet görsel gösterilmektedir:

- **Birinci görsel (yerel)**: `assets/dumbell.jpg` dosyasından alınan bir dumbell resmi.
- **İkinci görsel (uzak)**: İnternetteki bir URL'den alınan spor temalı görsel.

Her iki resim de:
- 300x300 boyutundadır,
- Köşeleri `borderRadius: 40` ile yuvarlatılmıştır,
- Aralarında boşluk oluşturmak için `margin: 10` değeri verilmiştir.

Bu yapı ile `Image` bileşeninin hem `require()` yöntemiyle yerel görsel kullanımını hem de `uri` ile uzaktan görsel alma yöntemini öğrenebilirsin.

---

## 📹 Video ile Eşleşme

📌 Bu örnek, [devArdo/React Native Dersleri - Image](https://www.youtube.com/watch?v=llt-EqpcfaU&list=PLkcIcaxfjelbSrGLKY4bKh4ppHC7IusKI&index=5) videosuna karşılık gelmektedir.

---

## 🎉Sizlerle Tanışmak İsterim

### [linkedin.com/yunusemreköklü](https://www.linkedin.com/in/yunusemrek%C3%B6kl%C3%BC/)(▀̿Ĺ̯▀̿ ̿)

### (⌐■_■)[instagram.com/yunus.emrekoklu](https://www.instagram.com/yunus.emrekoklu/)

---

## 🚀 Başlangıç

Projeyi çalıştırmak için aşağıdaki adımları takip edebilirsin:

### 1. Yeni bir proje oluştur (Expo kullanarak)

> **_Terminale sırasıyla yazılacaklar_**

    npx create-expo-app my-app --template blank

### 2. Projeyi başlat

    cd my-app
    npx expo start

> Not: Bu proje Expo ile hazırlanmıştır. Bilgisayarında Expo CLI yüklü olmalıdır.  
> Ayrıca yerel resmin çalışabilmesi için `assets` klasörü içinde `dumbell.jpg` dosyasının bulunması gerekir.

---

## 🧠 Öğrenilen Konular

- React Native'de `Image` bileşeni kullanımı
- Yerel (`require`) ve uzak (`uri`) görsellerle çalışma
- Stil verme: `width`, `height`, `margin`, `borderRadius`
- Görsel hizalama ve konumlandırma

---

## 📁 Klasör Yapısı

\`\`\`
📁 Proje klasörü
├── App.js
├── assets
│   └── dumbell.jpg
├── package.json
└── ...
\`\`\`

---

## 📬 Katkı

Geliştirme önerilerin varsa veya katkı sunmak istersen PR gönderebilirsin 🙌
EOF
