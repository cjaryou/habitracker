# Habit Tracker Uygulaması - Proje Analizi ve Planlama

**Tarih:** 13 Ekim 2025  
**İlham Kaynağı:** Drynosaur (Alcohol Tracker)  
**Teknoloji:** React Native + Aseprite (Pixel Art)

---

## 📋 Proje Özeti

### Ne Yapıyoruz?
Drynosaur tarzında, **pixel art karakterli bir habit tracker uygulaması** geliştiriyoruz. Kullanıcı günlük alışkanlıklarını takip ederken, pixel art maskot karakteri de birlikte evrimleşiyor ve büyüyor.

### Temel Konsept
- **Kullanıcı başarılı olur → Karakter gelişir**
- **Streak (ardışık günler) korunur → Karakter evrimleşir**
- **Streak bozulur → Karakter güçsüzleşir/geri gider**
- Kullanıcı ile karakter arasında **duygusal bağ** kurarak motivasyon sağlamak

---

## 🎯 Drynosaur Analizi - Ne Öğrendik?

### Drynosaur'un Başarılı Özellikleri:

#### 1. **Günlük Check-In Sistemi**
- Kullanıcı her gün uygulamayı açıp durumunu işaretliyor
- Mood (ruh hali) tracking
- Craving (istek) seviyesi
- Günlük notlar ekleyebilme
- Akıllı promptlar (streak durumuna göre öneriler)

#### 2. **Evrimleşen Karakter (Core Feature)**
- Dinozor farklı "era" (çağlar) boyunca evrimleşiyor
- Her milestone'da büyük transformasyon
- Full-screen kutlamalar
- Görsel geri bildirim çok güçlü
- **Kullanıcı karakteri büyütmek için motive oluyor**

#### 3. **Ice Age Mekanizması (Reset/Setback)**
- Kullanıcı streak'i bozarsa "Buzul Çağı" başlıyor
- Karakter donuyor ❄️
- 3 günlük yeni streak ile çözülüyor
- **Önemli:** Kullanıcıyı suçlamıyor, tekrar şans veriyor
- "No judgment, no pressure" felsefesi

#### 4. **Timeline & Takvim Görünümü**
- Geçmiş günleri görebilme
- Streak sayıları
- Evrim progress'i
- Temiz, anlaşılır tasarım

#### 5. **Fossil Museum (Koleksiyon Sistemi)**
- Milestone'larda fosil unlock ediliyor
- İlk hafta, 30 gün, journal girdileri vs.
- Koleksiyon toplamanın verdiği tatmin
- **Uzun vadeli motivasyon**

#### 6. **Campfire Tools (Mini Oyunlar & Mindfulness)**
- Craving/istek geldiğinde dikkat dağıtma araçları
- Mini oyunlar:
  - Stone Shift
  - Cards
  - Serpent Run
  - Bone Assembly
- Mindfulness egzersizleri
- **Kullanıcının zor anlarında destek**

#### 7. **Savings Calculator (Para Hesaplayıcı)**
- Kullanıcı alkol almayarak ne kadar para biriktirdiğini görüyor
- Motivasyon artırıcı (somut fayda)
- Bizim uygulamamızda ne olabilir:
  - Sigara bırakma → para tasarrufu
  - Gym membership → sağlık yatırımı
  - Zaman tasarrufu göstergesi

#### 8. **Akıllı Bildirimler**
- Günlük check-in hatırlatıcıları
- Kullanıcının istediği saatte
- Opsiyonel (zorlama yok)

---

## 🚀 Bizim Uygulamamız - Farklar ve Özellikler

### ✅ Kesin Olarak Olacaklar:

1. **Cross-platform (iOS + Android)** - React Native
2. **Pixel Art Karakter** - Aseprite ile tasarım
3. **Streak Tracking** - Ardışık gün takibi
4. **Evrimleşen Maskot** - Karakterin gelişimi
5. **Streak Bozulma Mekanizması** - Karakter güçsüzleşir
6. **Multi-language Support** - İngilizce, Almanca, + daha fazla
7. **RevenueCat Entegrasyonu** - Abonelik sistemi
8. **Mini Oyunlar** - Pixel art tarzında basit oyunlar

### 💎 Monetizasyon Stratejisi:

#### iOS (Apple):
- **Paywall-First Yaklaşım**
- Reklam YOK
- Monthly/Yearly VEYA Weekly/Yearly plan
- Direkt abonelik modeli
- Premium experience

#### Android:
- **Freemium Model**
- Temel özellikler ücretsiz
- Reklamlar var (free kullanıcılar için)
- Premium özelliklere erişim için abonelik
- Monthly/Yearly plan

#### Premium vs Free Özellikler (İleride detaylandırılacak):
- Premium: Tüm karakter evrimleri, reklamsız, advanced istatistikler, tema seçenekleri, vs.
- Free: Temel tracking, sınırlı karakter evrimleri, reklamlar

---

## 🤔 Henüz Karar Verilmeyenler - Düşünmemiz Gerekenler

### 1. **TEMA SEÇİMİ** 🎨 (EN ÖNEMLİ KARAR)

Drynosaur dinozor temasını kullandı. Biz farklı olmalıyız. **Seçenekler:**

#### 🌱 **A) Bitki/Ağaç Teması - "Habitree" / "GrowBit"**
**Konsept:** Tohum → Fide → Ağaç → Büyük Ağaç → Mitolojik Ağaç
- ✅ Doğal büyüme metaforu (alışkanlıklar = köklerin derinleşmesi)
- ✅ Evrensel appeal (herkes ağaç sever)
- ✅ Sakinleştirici, pozitif
- ✅ Streak bozulunca yapraklar dökülür, yeniden yeşillenir
- ✅ Mevsim değişimleri eklenebilir
- ❌ Çok "yumuşak" olabilir, gençlere hitap etmeyebilir

**Pixel Art Zorluğu:** Kolay - orta (ağaç yapımı nispeten basit)

---

#### 🐉 **B) Ejderha Teması - "HabiDragon" / "DragonStreak"**
**Konsept:** Yumurta → Bebek Ejderha → Genç → Yetişkin → Efsanevi Ejderha
- ✅ Güçlü metafor (içimizdeki ejderhayı eğitmek)
- ✅ Fantastik ve cool (geniş yaş kitlesi)
- ✅ Farklı element ejderhaları (ateş, su, toprak, hava)
- ✅ Uçma, ateş püskürtme animasyonları eklenebilir
- ✅ Ejderhalar her kültürde popüler
- ❌ Pixel art ejderha biraz zor olabilir (detay)
- ⚠️ Dinozor'a benzer olabilir (ikisi de sürüngen/mitolojik)

**Pixel Art Zorluğu:** Orta - zor (kanatlar, detaylar)

---

#### 🦊 **C) Tilki/Kurt Teması - "HabiFox" / "WildStreak"**
**Konsept:** Yavru Tilki → Genç → Yetişkin → Alfa/Mistik Tilki
- ✅ Sevimli ve akıllı imajı (tilki = zeka)
- ✅ Kürk değişimleri, mevsimsel varyasyonlar
- ✅ Orman/doğa tematiği
- ✅ Pixel art hayvan yapmak nispeten kolay
- ✅ Farklı hayvan seçenekleri olabilir (tilki, kurt, rakun, panda)
- ❌ Çok niş olabilir
- ❌ Ejderha kadar "epic" değil

**Pixel Art Zorluğu:** Kolay - orta (dört ayaklı hayvan)

---

#### 🐙 **D) Okyanus Yaratığı - "Habitopus" / "DeepStreak"**
**Konsept:** Küçük ahtapot/denizatı → Büyük → Mitolojik Deniz Canavarı
- ✅ Çok unique (kimse yapmamış)
- ✅ Su altı ambient çok rahatlatıcı
- ✅ Rengarenk olabilir
- ✅ Derinlere inme metaforu (kendini keşfetme)
- ✅ Pixel art tentacle'lar cool
- ❌ Daha niş kitle
- ❌ Herkes deniz yaratığı sevmez

**Pixel Art Zorluğu:** Orta (ahtapot kolları animasyonlu olabilir)

---

#### 🌙 **E) Uzay Teması - "HabiNaut" / "StarStreak"**
**Konsept:** Astronot/Alien → Roket geliştirme → Gezegen keşfi
- ✅ Futuristik ve modern
- ✅ "Journey to space" metaforu güçlü
- ✅ Yıldız toplama, gezegen unlock sistemi
- ✅ Genç kitleye hitap eder
- ✅ Pixel art space çok popüler
- ❌ Karakter gelişimi yerine roket gelişimi olabilir (daha az empatik)
- ❌ Soğuk hissettirebilir

**Pixel Art Zorluğu:** Kolay (geometrik şekiller, roketler)

---

#### 🐱 **F) Kedi Teması - "HabiCat" / "PurrStreak"**
**Konsept:** Yavru Kedi → Yetişkin → Mitolojik Kedi (Maneki-neko, Baştet)
- ✅ KEDİ = İNTERNET = VIRAL POTANSİYEL 🔥
- ✅ En geniş kitle (kedi severler çok)
- ✅ Farklı ırklar (Tekir, Sibirya, Siyam, vs.)
- ✅ Sevimli ve duygusal bağ kolay
- ✅ Kedi davranışları eğlenceli (esneme, miyavlama)
- ✅ Pixel art kedi çok şirin
- ❌ Çok yapılmış olabilir (tamagotchi'ler)
- ✅ Ama habit tracker + kedi kombinasyonu nadir

**Pixel Art Zorluğu:** Kolay (basit şekiller)

---

### 2. **UYGULAMA SCOPE'U** 📱

#### Seçenek A: Tek Habit Focus
- Kullanıcı bir alışkanlık seçer (örn: spor, meditasyon, okuma)
- Uygulama o alışkanlığa özel
- Daha odaklı, daha basit
- **Örnek:** "Meditation Buddy" → sadece meditasyon tracking

#### Seçenek B: Multi-Habit Tracker
- Kullanıcı birden fazla alışkanlık takip eder
- Daha karmaşık ama daha geniş kullanım
- Bir karakter tüm alışkanlıkları temsil eder
- **Örnek:** "Habitica" tarzı

#### Seçenek C: Belirsiz/Flexible Tracker
- Kullanıcı ne isterse takip eder
- "Günlük check-in yaptın mı?" odaklı
- Drynosaur tarzı (alkol tracking ama temel konsept günlük check-in)

**Öneri:** C seçeneği (flexible) ile başlayıp, ileride A veya B'ye pivot yapabiliriz.

---

### 3. **CHECK-IN MEKANİZMASI** ✅

Kullanıcı günlük ne yapacak?

#### Basit Versiyon:
- "Bugün başarılı mıydım?" → Evet/Hayır butonu
- Hızlı, basit, düşük sürtünme

#### Orta Versiyon:
- "Bugün başarılı mıydım?" + Mood seçimi (emoji)
- Not ekleme (opsiyonel)

#### Gelişmiş Versiyon:
- Mood tracking (5 emoji)
- Craving/İstek seviyesi (1-5)
- Günlük not
- Akıllı promptlar ("15. gününüz! Nasıl hissediyorsunuz?")

**Öneri:** Basit ile başla, ileride gelişmiş özellikleri premium yap.

---

### 4. **KARAKTER EVRİMİ** 🎨

#### Kaç Aşama?
- **3 Aşama:** Basit (Bebek → Genç → Yetişkin)
- **5 Aşama:** Orta (Drynosaur tarzı)
- **7+ Aşama:** Karmaşık

**Öneri:** 5 aşama ile başla
- Aşama 1: 0-7 gün (İlk hafta)
- Aşama 2: 8-21 gün (3 hafta)
- Aşama 3: 22-60 gün (2 ay)
- Aşama 4: 61-180 gün (6 ay)
- Aşama 5: 181+ gün (Efsanevi)

#### Animasyon:
- İlk başta **statik pozlar** (idle animation)
- İleride: Basit animasyonlar (sallanan kuyruk, göz kırpma)

---

### 5. **STREAK BOZULMA MEKANİZMASI** 💔

Ne olacak kullanıcı başarısız olursa?

#### Seçenek A: Ice Age Tarzı (Drynosaur)
- Karakter "donuyor" / uyuyor
- 3 günlük yeni streak ile "uyandırma"
- Level/evrim korunuyor (geriye gitmiyor)

#### Seçenek B: Geriye Gitme
- Karakter bir önceki evrime geri dönüyor
- Daha sert, daha demotive edici
- Bazı kullanıcılar bundan hoşlanabilir (challenge)

#### Seçenek C: Hastalık/Zayıflık
- Karakter hasta görünüyor / enerjisi düşük
- Renk solarıyor
- Yeni streak ile iyileşiyor

#### Seçenek D: Sıfırlama ama Level Puan Koruması
- Streak sıfırlanır ama "XP" birikimi korunur
- Toplam XP ile level hesaplanır

**Öneri:** Seçenek A veya C (pozitif yaklaşım, kullanıcıyı suçlamama)

---

### 6. **KOLEKSIYYON SİSTEMİ** 🏆

Ne toplayacak kullanıcı?

#### Seçenek A: Fossil Tarzı (Drynosaur)
- Milestone'larda objeler unlock
- Müze/galeri görünümü
- **Tema bağımlı:** 
  - Bitki teması → Tohumlar, çiçekler
  - Ejderha → Hazine, taçlar, zırhlar
  - Kedi → Oyuncaklar, aksesuarlar

#### Seçenek B: Achievement/Badge
- Klasik başarım sistemi
- Daha az heyecan verici

#### Seçenek C: Kostüm/Skin
- Karaktere giydirilebilir şeyler
- Şapka, atkı, vs.

**Öneri:** Seçenek A (koleksiyon) + C (kostümler) kombinasyonu

---

### 7. **MİNİ OYUNLAR** 🎮

#### Amaç:
Kullanıcı zor anda dikkatini dağıtmak (craving, stres, yalnızlık)

#### Oyun Örnekleri (Pixel Art Friendly):
1. **Snake Game** - Klasik yılan oyunu
2. **Memory Match** - Kart eşleştirme
3. **Tap Rhythm** - Ritim tutma (basit müzik oyunu)
4. **Flappy Bird Clone** - Zıplayan karakter
5. **Puzzle Slider** - Kaydırmalı puzzle
6. **Breathing Exercise** - Nefes egzersizi (animasyonlu top)

**Öneri:** 2-3 basit oyun ile başla. Pixel art tema ile uyumlu olsun.

---

### 8. **TIMELINE & JOURNAL** 📔

#### Takvim Görünümü:
- Geçmiş günleri göster
- Başarılı günler = yeşil
- Başarısız günler = gri/kırmızı
- Heatmap tarzı (GitHub contribution graph gibi)

#### Journal/Günlük:
- Her gün için not ekleyebilme
- Sadece okuma (flashback)https://app.sensortower.com/overview/6745372849?country=US
- Premium özellik olabilir

---

### 9. **İSTATİSTİKLER** 📊

- **Toplam streak:** En uzun süre
- **Current streak:** Şu anki süre
- **Total check-ins:** Toplam başarılı gün
- **Success rate:** Başarı yüzdesi
- **Grafik:** Haftalık/aylık trend

---

### 10. **REMINDER SİSTEMİ** 🔔

- Push notification
- Kullanıcı istediği saati seçer
- "Bugün check-in yapmayı unutma! [Karakter Adı] seni bekliyor!"
- Opsiyonel (zorla değil)

---

## 🎨 TEMA KARARI - Sizin Seçiminiz

Yukarıdaki 6 tema seçeneğini okuyun:
- A) Bitki/Ağaç 🌱
- B) Ejderha 🐉
- C) Tilki/Kurt 🦊
- D) Okyanus 🐙
- E) Uzay 🌙
- F) Kedi 🐱

### Karar Kriterleri:
1. **Pixel art yapımı kolay mı?** (Aseprite ilk kez kullanacaksınız)
2. **Geniş kitleye hitap eder mi?**
3. **Evrim/gelişim mantıklı mı?**
4. **Duygusal bağ kurulur mu?**
5. **Unique/farklı mı?**

---

## 💻 Teknik Stack - Kesin Kararlar

### Frontend:
- **React Native** (iOS + Android)
- **Expo** veya **React Native CLI** (Expo önerilir, daha kolay)
- **TypeScript** (Halihazırda kullanıyorsunuz)

### Pixel Art:
- **Aseprite** (Karakter tasarımı)
- Export → PNG sprite sheets
- React Native'de animasyon: `react-native-reanimated` veya basit `Image` component

### State Management:
- **React Context** veya **Zustand** (basit)
- Local storage: **AsyncStorage** veya **MMKV** (daha hızlı)

### Database:
- **Local:** SQLite (expo-sqlite) veya Realm
- **Cloud (opsiyonel):** Firebase / Supabase (kullanıcı verisini yedekleme)

### Monetization:
- **RevenueCat** (abonelik yönetimi)
- iOS: Apple In-App Purchase
- Android: Google Play Billing + AdMob (reklamlar)

### Localization:
- **i18next** veya **react-native-localize**
- İngilizce, Almanca, + eklenecek diller

### Analytics (opsiyonel):
- **Mixpanel** veya **Firebase Analytics**
- Kullanıcı davranışlarını tracking

---

## 📅 Geliştirme Aşamaları (Tahmini)

### Phase 1: MVP (Minimum Viable Product) - 4-6 hafta
- ✅ Temel check-in ekranı
- ✅ Streak tracking
- ✅ 3 aşamalı karakter evrimi (basit pixel art)
- ✅ Basit takvim görünümü
- ✅ Local storage
- ✅ Tek dil (İngilizce)

### Phase 2: Core Features - 4-6 hafta
- ✅ 5 aşamalı karakter evrimi
- ✅ Streak bozulma mekanizması
- ✅ Koleksiyon sistemi (3-5 item)
- ✅ Basit istatistikler
- ✅ Push notification
- ✅ Onboarding screens

### Phase 3: Polish & Monetization - 3-4 hafta
- ✅ RevenueCat entegrasyonu
- ✅ Paywall tasarımı
- ✅ AdMob entegrasyonu (Android)
- ✅ Premium vs Free feature split
- ✅ Multi-language support
- ✅ Sound effects & haptic feedback

### Phase 4: Advanced Features - 4-6 hafta
- ✅ 2-3 mini oyun
- ✅ Journal/günlük sistemi
- ✅ Advanced stats & graphs
- ✅ Tema/renk seçenekleri
- ✅ Cloud backup (opsiyonel)

### Phase 5: Launch - 2-3 hafta
- ✅ Beta testing (TestFlight + Google Play Beta)
- ✅ Bug fixing
- ✅ App Store listing (screenshots, description)
- ✅ Marketing materials

**Toplam:** ~17-25 hafta (4-6 ay)

---

## 🤝 Sıradaki Adımlar

1. **TEMA KARARI** - Yukarıdaki 6 seçenekten birini seçin
2. **Karakter eskizleri** - Kağıt üzerinde konsept çizimleri
3. **Aseprite öğrenme** - Basit tutorial'lar (1-2 gün)
4. **İlk pixel art** - Karakterin ilk hali (baby form)
5. **React Native setup** - Proje başlatma
6. **İlk ekran** - Check-in button ekranı

---

## 📝 Notlar & Sorular

- Tema seçimi sonrası isim brainstorm yapacağız
- App Store listing için unique isim gerekli (trademark check)
- Maskot için isim (örn: Drynosaur'da dinozorun ismi var mı?)
- Color palette seçimi (tema ile uyumlu)
- Font seçimi (pixel art ile uyumlu: "Press Start 2P" gibi)

---

## 💡 İlham Kaynakları

- **Drynosaur** - Evrim mekanizması
- **Habitica** - Gamification
- **Tamagotchi** - Pet bonding
- **Duolingo** - Daily streak, mascot (Duo)
- **Forest App** - Tree growing concept
- **Finch** - Self-care bird pet

---

**SON SÖZ:** Bu uygulama kullanıcıyla karakteri arasında duygusal bağ kurmayı hedefliyor. Drynosaur'un başarısı buradan geliyor. Pixel art + evrim + pozitif motivasyon = güçlü kombinasyon. 

Şimdi **TEMA SEÇİMİ** yapmanız gerekiyor. Yukarıdaki 6 seçeneği dikkatlice okuyun ve hangisinin sizin için en mantıklı olduğuna karar verin! 🚀
