import nasiUdukImg from '../assets/images/nasi_uduk_bowl_1793853658617.jpg';
import pecelEmpalImg from '../assets/images/pecel_madiun_empal_1793853658734.jpg';
import sopIgaImg from '../assets/images/sop_iga_sapi_1793853659998.jpg';
import paketLiwetanImg from '../assets/images/paket_liwetan_pesta_1793853660421.jpg';

export type DayId = 'senin' | 'selasa' | 'rabu' | 'kamis' | 'jumat' | 'sabtu' | 'minggu';
export type MealSession = 'sarapan' | 'siang' | 'malam' | 'spesial' | 'minuman';
export type PackagingOption = 'Paper Bowl' | 'Box Lunch';

export interface NutritionRatio {
  karbo: number;
  protein: number;
  sayur: number;
  note: string;
}

export interface MenuItem {
  id: string;
  day: DayId | 'all';
  session: MealSession;
  name: string;
  regionalOrigin?: string;
  tagline: string;
  description: string;
  price: number;
  tier: 'Reguler' | 'Premium' | 'Paket 5 Orang' | 'Minuman';
  altPrice?: {
    label: string;
    price: number;
  };
  nutrition: NutritionRatio;
  packagingDefault: PackagingOption | 'Pilihan Bowl / Box' | 'Family Pack' | 'Cup Food Grade';
  image?: string;
  ingredients: string[];
  features: string[];
  servingAdvice: string;
  targetAudience: string;
  isJumatBerkah?: boolean;
}

export interface DaySchedule {
  id: DayId;
  name: string;
  label: string;
  theme: string;
  quote: string;
}

export const DAYS_CONFIG: DaySchedule[] = [
  { id: 'senin', name: 'Senin', label: 'Senin Energik', theme: 'Komuter Cepat & Hari Awal Pekan', quote: 'Mulai pekan dengan energi prima tanpa rasa begah.' },
  { id: 'selasa', name: 'Selasa', label: 'Selasa Produktif', theme: 'Fokus Kantor & Kuliner Nusantara Legendaris', quote: 'Asupan gizi seimbang menjaga stamina kerja hingga sore.' },
  { id: 'rabu', name: 'Rabu', label: 'Rabu Dinamis', theme: 'Eksplorasi Rasa Medan & Makassar', quote: 'Cita rasa berani yang tetap ramah di lambung.' },
  { id: 'kamis', name: 'Kamis', label: 'Kamis Berenergi', theme: 'Protein Tinggi & Diet Nabati Berserat', quote: 'Tenaga ekstra untuk menyelesaikan target pekanan.' },
  { id: 'jumat', name: 'Jumat', label: 'Jumat Berkah', theme: 'Cashback Rp500/Porsi Disalurkan untuk Makan Gratis', quote: 'Makan nikmat sekaligus berbagi berkah bagi sesama.' },
  { id: 'sabtu', name: 'Sabtu', label: 'Sabtu Santai', theme: 'Rileks Akhir Pekan & Hangout Malam Minggu', quote: 'Manjakan lidah dengan hidangan khas Pulau Dewata & Madura.' },
  { id: 'minggu', name: 'Minggu', label: 'Minggu Pesta Rame', theme: 'Paket Spesial Kumpul 5 Orang Hemat & Puas', quote: 'Bancakan tradisi Indonesia mempererat kehangatan keluarga.' },
];

export const NUTRITION_STANDARDS: Record<MealSession, NutritionRatio> = {
  sarapan: {
    karbo: 60,
    protein: 20,
    sayur: 20,
    note: 'Tidak pedas & tidak berminyak jenuh. Sumber glukosa bertahap untuk energi cepat pagi hari.',
  },
  siang: {
    karbo: 50,
    protein: 30,
    sayur: 20,
    note: 'Berat & kenyang maksimal. Kaya asam amino daging/unggas, bumbu & sambal siram terpisah.',
  },
  malam: {
    karbo: 40,
    protein: 30,
    sayur: 30,
    note: 'Ringan, berkuah kaldu rempah hangat, tidak membikin perut begah menjelang tidur.',
  },
  spesial: {
    karbo: 50,
    protein: 30,
    sayur: 20,
    note: 'Komposisi gizi seimbang porsi jumbo untuk 5 orang lengkap lauk, sayur, lalap & sambal.',
  },
  minuman: {
    karbo: 20,
    protein: 0,
    sayur: 0,
    note: 'Seduhan herbal rempah alami, anti-inflamasi, melancarkan sirkulasi & metabolisme tubuh.',
  },
};

export const MENU_ITEMS: MenuItem[] = [
  // --- SENIN ---
  {
    id: 'senin-sarapan',
    day: 'senin',
    session: 'sarapan',
    name: 'Nasi Uduk Betawi + Ayam Suwir',
    regionalOrigin: 'DKI Jakarta (Betawi)',
    tagline: 'Solusi sarapan komuter cepat & bertenaga',
    description: 'Nasi uduk harum santan murni dan daun pandan, disajikan dengan suwiran ayam bumbu kuning gurih, bihun goreng kampung, dadar telur iris tipis, orek tempe manis gurih, dan kerupuk renyah. Sambal kacang disajikan terpisah agar ramah lambung pagi hari.',
    price: 20000,
    tier: 'Reguler',
    nutrition: NUTRITION_STANDARDS.sarapan,
    packagingDefault: 'Paper Bowl',
    image: nasiUdukImg,
    ingredients: ['Nasi Uduk Gurih', 'Ayam Suwir Lengkuas', 'Bihun Goreng', 'Telur Dadar Iris', 'Orek Tempe', 'Kerupuk', 'Sambal Kacang Pisah'],
    features: ['Kemasan Paper Bowl praktis langsung santap', 'Tidak berminyak & tidak memicu asam lambung', 'Sambal kacang terpisah'],
    servingAdvice: 'Tuangkan sambal kacang secukupnya sesuai selera pedas pagi Anda.',
    targetAudience: 'Komuter cepat, pekerja transit, mahasiswa pagi',
  },
  {
    id: 'senin-siang',
    day: 'senin',
    session: 'siang',
    name: 'Nasi Pecel Madiun + Empal Gepuk',
    regionalOrigin: 'Madiun, Jawa Timur',
    tagline: 'Kombinasi serat segar & protein daging sapi empuk',
    description: 'Nasi putih pulen dikelilingi sayur rebus segar renyah (kangkung, tauge, kacang panjang) dipadu empal gepuk daging sapi tebal yang dimasak lambat hingga empuk meresap. Bumbu kacang sangrai khas Madiun disajikan dalam kemasan siram terpisah bersama rempeyek kacang.',
    price: 20000,
    tier: 'Reguler',
    altPrice: {
      label: 'Upgrade Premium (Empal Jumbo + Rempeyek Dobel)',
      price: 25000,
    },
    nutrition: NUTRITION_STANDARDS.siang,
    packagingDefault: 'Box Lunch',
    image: pecelEmpalImg,
    ingredients: ['Nasi Putih Pulen', 'Empal Gepuk Sapi Rempah', 'Sayur Kangkung & Tauge Segar', 'Kacang Panjang', 'Bumbu Kacang Siram Madiun', 'Rempeyek Kacang'],
    features: ['Bumbu kacang kental siram terpisah', 'Sayuran segar higienis bebas layu', 'Tersedia varian Reguler (20K) & Premium (25K)'],
    servingAdvice: 'Siramkan bumbu kacang hangat sesaat sebelum disantap untuk sensasi gurih maksimal.',
    targetAudience: 'Makan siang karyawan, pecinta sayur & serat nabati',
  },
  {
    id: 'senin-malam',
    day: 'senin',
    session: 'malam',
    name: 'SOP Iga Sapi Kuah Rempah Bening',
    regionalOrigin: 'Nusantara',
    tagline: 'Makan malam hangat, kuah ringan berkaldu tanpa bikin begah',
    description: 'Iga sapi pilihan berkuah kaldu bening kaya rempah pala, cengkeh, dan kapulaga dengan potongan wortel manis dan kentang empuk. Disajikan bersama nasi putih terpisah, irisan jeruk nipis segar, dan sambal kecap cabai rawit.',
    price: 25000,
    tier: 'Premium',
    nutrition: NUTRITION_STANDARDS.malam,
    packagingDefault: 'Paper Bowl',
    image: sopIgaImg,
    ingredients: ['Potongan Iga Sapi Empuk', 'Kuah Kaldu Rempah Bening', 'Wortel & Kentang Segar', 'Taburan Daun Bawang & Bawang Goreng', 'Nasi Putih Terpisah', 'Sambal Kecap & Jeruk Nipis'],
    features: ['Paper Bowl anti bocor thermal grade', 'Rendah lemak jenuh, kuah segar ramah cerna', 'Jeruk nipis & sambal kecap terpisah'],
    servingAdvice: 'Beri perasan jeruk nipis pada kuah untuk kesegaran optimal.',
    targetAudience: 'Santap malam sehabis jam kantor, pemulihan stamina',
  },

  // --- SELASA ---
  {
    id: 'selasa-sarapan',
    day: 'selasa',
    session: 'sarapan',
    name: 'Bubur Ayam Buffet Hotel Bintang 5 Komplit',
    regionalOrigin: 'Artisanal Nusantara',
    tagline: 'Tekstur selembut sutra dengan kaldu ayam kampung murni',
    description: 'Bubur beras pandan lembut dengan kaldu sari ayam kampung asli tanpa pengawet. Dilengkapi suwiran ayam melimpah, potongan cakwe gurih, kacang kedelai renyah, seledri segar, emping melinjo, kerupuk, serta kuah kuning kaldu gurih terpisah.',
    price: 20000,
    tier: 'Reguler',
    nutrition: NUTRITION_STANDARDS.sarapan,
    packagingDefault: 'Paper Bowl',
    ingredients: ['Bubur Beras Halus Kaldu Ayam', 'Ayam Suwir Gurih', 'Cakwe Crispy', 'Kedelai Goreng Renyah', 'Emping & Kerupuk', 'Kuah Kuning Kaldu Pisah'],
    features: ['Kualitas rasa setara sarapan hotel berbintang', 'Kuah kaldu kuning dipisah dalam pouch higienis', 'Tekstur lembut ramah lambung'],
    servingAdvice: 'Tuang kuah kuning dan aduk perlahan (atau nikmati gaya tim bubur tidak diaduk!).',
    targetAudience: 'Sarapan pagi santai, keluarga, lansia & anak-anak',
  },
  {
    id: 'selasa-siang',
    day: 'selasa',
    session: 'siang',
    name: 'Nasi / Bubur Gudeg Krecek Yogyakarta',
    regionalOrigin: 'Yogyakarta',
    tagline: 'Gudeg legit, krecek gurih pedas & areh kental untuk kantor',
    description: 'Gudeg nangka muda manis gurih legit dimasak lambat tradisional, dipadu sambal goreng krecek pedas gurih, ayam suwir berbumbu, ½ telur pindang gurih, tahu bacem lembut, serta areh santan kental yang disiram terpisah. Pilihan karbohidrat: Nasi putih atau Bubur hangat.',
    price: 25000,
    tier: 'Premium',
    nutrition: NUTRITION_STANDARDS.siang,
    packagingDefault: 'Box Lunch',
    ingredients: ['Nasi Putih Pulen / Bubur Hangat', 'Gudeg Nangka Manis Legit', 'Sambal Goreng Krecek Sapi', 'Ayam Suwir Opor', '½ Telur Pindang', 'Tahu Bacem', 'Areh Santan Siram'],
    features: ['Lunch Box sekat higienis terpisah', 'Perpaduan manis gurih dan pedas krecek seimbang', 'Areh santan kental kemasan siram'],
    servingAdvice: 'Siram areh santan di atas gudeg dan nikmati bersama nasi hangat.',
    targetAudience: 'Karyawan kantor, meeting lunch, pecinta citarasa Jogja',
  },
  {
    id: 'selasa-malam',
    day: 'selasa',
    session: 'malam',
    name: 'Nasi Goreng Kampung Ayam Kampung + Telur',
    regionalOrigin: 'Tradisi Rumahan',
    tagline: 'Makan malam klasik harum wok tanpa minyak berlebih',
    description: 'Nasi goreng kampung otentik ditumis dengan bumbu ulek bawang merah, bawang putih, dan cabai merah tanpa saus buatan berlebihan. Disajikan dengan suwiran ayam kampung gurih, irisan telur dadar tipis, acar timun segar, dan kerupuk renyah.',
    price: 20000,
    tier: 'Reguler',
    nutrition: NUTRITION_STANDARDS.malam,
    packagingDefault: 'Paper Bowl',
    ingredients: ['Nasi Dingin Butir Lepas', 'Ayam Kampung Suwir', 'Irisan Telur Dadar Tipis', 'Bumbu Kampung Ulek Segar', 'Acar Timun Wortel', 'Kerupuk'],
    features: ['Minyak sangat minimalis (healthier wok style)', 'Tidak menyebabkan perut terasa berat di malam hari', 'Acar segar penyeimbang'],
    servingAdvice: 'Nikmati selagi hangat bersama acar timun segar.',
    targetAudience: 'Makan malam praktis, pelajar, pekerja lembur',
  },

  // --- RABU ---
  {
    id: 'rabu-sarapan',
    day: 'rabu',
    session: 'sarapan',
    name: 'Lontong Sayur Medan Komplit',
    regionalOrigin: 'Medan, Sumatera Utara',
    tagline: 'Aroma daun kari & kuah tauco harum pembakar semangat',
    description: 'Lontong padat pulen disiram gulai sayur labu siam dan kacang panjang beraroma daun kari khas Medan. Dilengkapi sambal teri kacang renyah manis, telur balado setengah butir, tahu gurih, serta kerupuk merah putih.',
    price: 20000,
    tier: 'Reguler',
    nutrition: NUTRITION_STANDARDS.sarapan,
    packagingDefault: 'Paper Bowl',
    ingredients: ['Lontong Daun Pulen', 'Sayur Gulai Labu Siam & Kacang Panjang', 'Teri Kacang Balado Renyah', '½ Butir Telur Balado', 'Tahu Gurih', 'Kerupuk Merah Putih'],
    features: ['Kuah tauco kari khas Medan terpisah', 'Kriuk teri kacang menambah tekstur istimewa', 'Porsi pas untuk pagi hari'],
    servingAdvice: 'Tuangkan kuah gulai panas dan taburkan teri kacang di atasnya.',
    targetAudience: 'Pecinta kuliner Sumatera, penggemar lontong sayur',
  },
  {
    id: 'rabu-siang',
    day: 'rabu',
    session: 'siang',
    name: 'Coto Makassar + Ketupat / Buras',
    regionalOrigin: 'Makassar, Sulawesi Selatan',
    tagline: 'Kuah kacang rempah pekat, favorit instagramable anak muda Bintaro',
    description: 'Coto daging sapi otentik Makassar dimasak dengan 40 ragam rempah kacang tanah sangrai, berpadu irisan daging sapi empuk lembut. Disajikan dengan ketupat atau buras pulen gurih santan, sambal tauco khas, perasan jeruk nipis, dan taburan daun bawang renyah.',
    price: 25000,
    tier: 'Premium',
    nutrition: NUTRITION_STANDARDS.siang,
    packagingDefault: 'Paper Bowl',
    ingredients: ['Daging Sapi Pilihan Empuk', 'Kuah Kaldu Rempah Kacang Makassar', 'Ketupat / Buras Santan', 'Sambal Tauco Pedas Asin', 'Irisan Jeruk Nipis', 'Bawang Goreng & Daun Bawang'],
    features: ['Sensasi kuah rempah gurih pekat beraroma khas', 'Buras/ketupat dibungkus higienis', 'Sambal tauco khas Makassar racikan otentik'],
    servingAdvice: 'Peras jeruk nipis ke dalam kuah coto dan cocol buras ke kuah.',
    targetAudience: 'Anak muda Bintaro, penikmat kuliner khas Nusantara',
  },
  {
    id: 'rabu-malam',
    day: 'rabu',
    session: 'malam',
    name: 'SOP Konro Makassar Hangat Ringan',
    regionalOrigin: 'Makassar, Sulawesi Selatan',
    tagline: 'Kuah iga kluwek rempah hangat, pereda lelah malam hari',
    description: 'Sup iga sapi konro dengan kuah kaldu rempah berwarna gelap beraroma kayu manis, cengkeh, dan kluwek yang menenangkan tubuh. Dilengkapi nasi putih terpisah, sambal cabai segar, dan irisan seledri.',
    price: 28000,
    tier: 'Premium',
    nutrition: NUTRITION_STANDARDS.malam,
    packagingDefault: 'Paper Bowl',
    ingredients: ['Iga Sapi Konro Lembut', 'Kuah Kaldu Rempah Kluwek & Kayu Manis', 'Nasi Putih Porsi Pas', 'Sambal Rawit Segar', 'Jeruk Nipis', 'Bawang Goreng'],
    features: ['Kuah rempah menghangatkan saluran pernapasan', 'Daging iga lepas dari tulang dengan mudah', 'Nasi putih dipisah'],
    servingAdvice: 'Santap kuah hangatnya terlebih dahulu untuk merelaksasi tubuh.',
    targetAudience: 'Penikmat sup iga, yang ingin tidur nyenyak & bugar',
  },

  // --- KAMIS ---
  {
    id: 'kamis-sarapan',
    day: 'kamis',
    session: 'sarapan',
    name: 'Nasi Kuning Komplit Nusantara',
    regionalOrigin: 'Jawa & Nusantara',
    tagline: 'Favorit anak sekolah, mahasiswa & pekerja pagi ceria',
    description: 'Nasi kuning wangi kunyit segar dan santan lembut berpadu suwiran ayam bumbu rempah, dadar telur rawis, tempe orek karamel renyah, perkedel kentang lembut, dan sambal bajak manis terpisah. Kemasan paper bowl memudahkan santap cepat.',
    price: 20000,
    tier: 'Reguler',
    nutrition: NUTRITION_STANDARDS.sarapan,
    packagingDefault: 'Paper Bowl',
    ingredients: ['Nasi Kuning Harum Pandan & Kunyit', 'Ayam Suwir Rempah', 'Telur Iris Rawis', 'Kering Tempe Manis', 'Perkedel Kentang Mini', 'Sambal Bajak Pisah', 'Irisan Mentimun'],
    features: ['Warna kuning alami dari kunyit murni tanpa pewarna sintetis', 'Lauk kering praktis tanpa tumpahan', 'Kenyang pas tanpa mengantuk'],
    servingAdvice: 'Bisa langsung dinikmati dalam Paper Bowl on-the-go.',
    targetAudience: 'Anak sekolah, mahasiswa kampus, pekerja pagi',
  },
  {
    id: 'kamis-siang',
    day: 'kamis',
    session: 'siang',
    name: 'Nasi Rendang Padang Komplit + Sayur Nangka',
    regionalOrigin: 'Minangkabau, Sumatera Barat',
    tagline: 'Protein tinggi padat energi, rendang otentik masak lambat',
    description: 'Rendang daging sapi empuk dengan bumbu kelapa sangrai hitam karamel khas Minang. Disajikan bersama daun singkong rebus lembut, gulai nangka kapau gurih, kuah kaldu gulai terpisah, dan sambal cabai ijo (lado mudo) segar.',
    price: 25000,
    tier: 'Premium',
    nutrition: NUTRITION_STANDARDS.siang,
    packagingDefault: 'Box Lunch',
    ingredients: ['Nasi Putih Pulen Hangat', 'Rendang Daging Sapi Bumbu Hitam', 'Gulai Nangka Muda Gurih', 'Daun Singkong Rebus Lembut', 'Sambal Cabe Ijo Minang', 'Kuah Gulai Terpisah'],
    features: ['Kaya protein sapi murni tanpa lemak berlebih', 'Box Lunch sekat menjaga sambal cabe ijo tetap segar', 'Bumbu rendang meresap sampai serat terdalam'],
    servingAdvice: 'Siram sedikit kuah gulai di atas nasi dan nikmati dengan bumbu rendang.',
    targetAudience: 'Pekerja berat, penggemar makanan Padang, gym & protein seeker',
  },
  {
    id: 'kamis-malam',
    day: 'kamis',
    session: 'malam',
    name: 'Ketoprak Telur Bumbu Siram Segar',
    regionalOrigin: 'Betawi / Cirebon',
    tagline: 'Santap malam sehat nabati, tinggi serat cocok untuk diet',
    description: 'Tahu putih segar goreng lembut, bihun beras, lontong lembut, dan tauge rebus krenyes disajikan dengan telur dadar/ceplok gurih. Bumbu kacang bawang putih ulek gurih manis harum disajikan terpisah sehingga Anda dapat mengatur kekentalannya sendiri.',
    price: 20000,
    tier: 'Reguler',
    nutrition: NUTRITION_STANDARDS.malam,
    packagingDefault: 'Paper Bowl',
    ingredients: ['Tahu Goreng Lembut Segar', 'Bihun Beras & Lontong Pulen', 'Tauge Rebus Krenyes', 'Telur Gurih', 'Bumbu Kacang Bawang Putih Siram', 'Emping Melinjo & Kerupuk'],
    features: ['Rendah kalori jenuh & tinggi serat alami', 'Bumbu kacang fresh disiram terpisah', 'Pilihan sehat makan malam tanpa rasa bersalah'],
    servingAdvice: 'Tuangkan bumbu kacang dan aduk bersama tauge segar.',
    targetAudience: 'Penjaga berat badan, diet seimbang, vegetarian-friendly',
  },

  // --- JUMAT ---
  {
    id: 'jumat-sarapan',
    day: 'jumat',
    session: 'sarapan',
    name: 'Nasi Liwet Solo Komplit — Jumat Berkah',
    regionalOrigin: 'Solo, Jawa Tengah',
    tagline: 'Jumat Berkah: Cashback Rp500/porsi dialokasikan untuk sedekah makan gratis!',
    description: 'Nasi liwet gurih beraroma daun salam dan serai, dipadukan sayur labu siam pedas manis, opor ayam suwir lembut, tahu bacem gurih, ½ butir telur areh, dan siraman areh santan kental gurih. Setiap porsi otomatis menyumbang Rp500 untuk program porsi berkah dhuafa & ojol harian.',
    price: 20000,
    tier: 'Reguler',
    nutrition: NUTRITION_STANDARDS.sarapan,
    packagingDefault: 'Box Lunch',
    isJumatBerkah: true,
    ingredients: ['Nasi Liwet Gurih Serai', 'Sayur Labu Siam Krecek Gurih', 'Ayam Suwir Opor Lembut', 'Tahu Bacem Manis Gurih', '½ Butir Telur Rebus Areh', 'Areh Santan Gurih Siram'],
    features: ['Spesial Jumat Berkah: Cashback Rp500/porsi untuk sedekah 250K/hari', 'Kelezatan otentik Kota Solo', 'Kemasan sekat rapi & higienis'],
    servingAdvice: 'Santap dengan mengucap syukur di awal hari Jumat yang penuh berkah.',
    targetAudience: 'Komunitas berkah, dermawan kuliner, penikmat sarapan Solo',
  },
  {
    id: 'jumat-siang',
    day: 'jumat',
    session: 'siang',
    name: 'Cwie Mie Malang Asli + Bakso & Pangsit',
    regionalOrigin: 'Malang, Jawa Timur',
    tagline: 'Mie tipis kenyal khas Malang, taburan ayam gurih halus & kuah siram',
    description: 'Mie telur gandum tipis bertekstur kenyal khas Malang bertabur cincangan daging ayam putih berbumbu gurih halus, selada segar, bakso sapi kenyal halus, dan pangsit goreng renyah keemasan. Dilengkapi kuah kaldu bening gurih siram terpisah dan saus cabai khas.',
    price: 23000,
    tier: 'Premium',
    nutrition: NUTRITION_STANDARDS.siang,
    packagingDefault: 'Paper Bowl',
    ingredients: ['Mie Tipis Kenyal Khas Malang', 'Topping Ayam Cincang Halus Gurih', 'Bakso Sapi Kenyal', 'Pangsit Goreng Renyah & Pangsit Rebus', 'Selada Segar & Daun Bawang', 'Kuah Kaldu Siram Terpisah'],
    features: ['Mie anti lembek dengan kuah siram terpisah', 'Tekstur kontras antara mie kenyal dan pangsit renyah', 'Saos cabai Malang khas asam gurih pedas'],
    servingAdvice: 'Tuang sedikit kuah kaldu ke dalam mie untuk membasahi tekstur, lalu nikmati sisa kuah bersama bakso.',
    targetAudience: 'Pecinta mie nusantara, makan siang segar santai',
  },
  {
    id: 'jumat-malam',
    day: 'jumat',
    session: 'malam',
    name: 'Rawon Surabaya Daging Sapi + Bergedel',
    regionalOrigin: 'Surabaya, Jawa Timur',
    tagline: 'Kuah hitam kluwek medok gurih pekat, perkedel kentang & telur asin',
    description: 'Rawon daging sapi empuk berkuah hitam legam racikan kluwek pilihan dan rempah daun jeruk purut. Disajikan dengan nasi putih pulen, bergedel daging kentang lembut, ½ butir telur asin masir Brebes, tauge pendek renyah, sambal terasi ulek segar, dan kerupuk udang.',
    price: 28000,
    tier: 'Premium',
    nutrition: NUTRITION_STANDARDS.malam,
    packagingDefault: 'Paper Bowl',
    ingredients: ['Potongan Daging Sapi Rawon Empuk', 'Kuah Hitam Kluwek Rempah Mantap', 'Bergedel Daging Kentang Lembut', '½ Telur Asin Masir', 'Tauge Pendek Segar', 'Sambal Terasi & Nasi Terpisah'],
    features: ['Kluwek matang alami tanpa rasa getir', 'Kuah hitam berkaldu kaya zat besi & antioksidan', 'Lengkap telur asin dan bergedel'],
    servingAdvice: 'Campurkan tauge pendek segar dan sambal terasi ke dalam kuah rawon panas.',
    targetAudience: 'Pecinta masakan Jawa Timur, makan malam lezat bersama teman',
  },

  // --- SABTU ---
  {
    id: 'sabtu-sarapan',
    day: 'sabtu',
    session: 'sarapan',
    name: 'Nasi Jenggo Bali + Sate Lilit & Sambal Matah',
    regionalOrigin: 'Bali',
    tagline: 'Nuansa liburan santai dengan sate lilit ayam & kecombrang',
    description: 'Nasi putih pulen beralas daun pisang khas pulau dewata, dilengkapi 2 tusuk sate lilit ayam berbumbu base genep wangi batang serai, ayam suwir sisit pedas manis, orek tempe kering manis, serundeng gurih, kacang tanah goreng, dan sambal matah kecombrang segar.',
    price: 20000,
    tier: 'Reguler',
    nutrition: NUTRITION_STANDARDS.sarapan,
    packagingDefault: 'Box Lunch',
    ingredients: ['Nasi Pulen Harum Daun Pisang', '2 Tusuk Sate Lilit Ayam Batang Serai', 'Ayam Suwir Sisit Bumbu Bali', 'Sambal Matah Kecombrang Segar', 'Kering Tempe & Kacang Goreng', 'Serundeng Kelapa Gurih'],
    features: ['Aroma daun pisang & serai asli', 'Sambal matah segar racikan minyak kelapa asli', 'Porsi pas untuk sarapan akhir pekan santai'],
    servingAdvice: 'Aduk sambal matah bersama suwiran ayam sisit untuk kesegaran eksotis.',
    targetAudience: 'Penikmat akhir pekan, pencari kuliner Bali halal',
  },
  {
    id: 'sabtu-siang',
    day: 'sabtu',
    session: 'siang',
    name: 'Soto Daging Madura Kuah Bening Gurih',
    regionalOrigin: 'Madura, Jawa Timur',
    tagline: 'Kuah bening gurih segar kaya serai jahe dengan telur rebus',
    description: 'Soto daging sapi Madura dengan kaldu rebusan daging gurih bening yang dibumbui serai, jahe, ketumbar, dan bawang merah goreng. Dilengkapi potongan daging sapi empuk, ½ butir telur rebus, kentang goreng tipis, nasi putih terpisah, sambal cabai rawit pedas, dan perasan jeruk nipis.',
    price: 28000,
    tier: 'Premium',
    nutrition: NUTRITION_STANDARDS.siang,
    packagingDefault: 'Paper Bowl',
    ingredients: ['Daging Sapi Empuk Madura', 'Kuah Kaldu Rempah Serai Jahe Bening', '½ Telur Rebus', 'Keripik Kentang Tipis', 'Nasi Putih Pulen Terpisah', 'Sambal Rawit Madura & Jeruk Nipis'],
    features: ['Kuah kaldu segar tanpa santan, ringan di tubuh', 'Daging sapi empuk tidak alot', 'Kemasan Paper Bowl anti bocor'],
    servingAdvice: 'Kucurkan jeruk nipis dan taburkan daun bawang segar.',
    targetAudience: 'Makan siang keluarga akhir pekan, pencari hidangan non-santan',
  },
  {
    id: 'sabtu-malam',
    day: 'sabtu',
    session: 'malam',
    name: 'Nasi Madura Babat, Paru, Hati & Usus Goreng',
    regionalOrigin: 'Madura, Jawa Timur',
    tagline: 'Malam minggu seru: aneka jeroan gurih garing bumbu kuning + sambal korek',
    description: 'Nasi putih pulen hangat bertabur serundeng lengkuas gurih, disajikan dengan aneka jeroan sapi pilihan (babat lembut, paru garing gurih, hati empuk, usus goreng kriuk) yang dimarinasi bumbu ketumbar kunyit. Dilengkapi lalapan mentimun kemangi dan sambal korek pedas terpisah.',
    price: 23000,
    tier: 'Premium',
    nutrition: NUTRITION_STANDARDS.malam,
    packagingDefault: 'Box Lunch',
    ingredients: ['Nasi Putih Hangat Pulen', 'Babat & Paru Goreng Gurih', 'Hati & Usus Goreng Kriuk', 'Serundeng Lengkuas Gurih Kering', 'Sambal Korek Rawit Ulek', 'Lalap Timun & Kemangi'],
    features: ['Jeroan diolah bersih higienis tanpa aroma amis', 'Tekstur luar garing dalam lembut', 'Sambal korek pedas nendang bikin melek malam minggu'],
    servingAdvice: 'Cocol lauk gurih ke sambal korek dan serundeng hangat.',
    targetAudience: 'Pecinta nasi madura malam hari, santap malam minggu seru',
  },

  // --- MINGGU (PAKET SPESIAL 5 ORANG) ---
  {
    id: 'minggu-liwetan-5p',
    day: 'minggu',
    session: 'spesial',
    name: 'Paket Bancakan Liwetan Nusantara (5 Orang)',
    regionalOrigin: 'Jawa & Sunda Tradisional',
    tagline: 'Pesta rame-rame 5 orang hanya Rp20.000 / orang!',
    description: 'Tradisi makan bersama ala bancakan beralas daun pisang untuk 5 orang lengkap. Berisi 5 porsi nasi liwet gurih rempah serai daun salam, 5 potong ayam goreng lengkuas gurih keemasan, 5 pcs tahu & tempe bacem legit, sayur urap kelapa sangrai segar, sambal terasi dadak, kerupuk kampung 1 toples mini, serta 5 cup Es Teh Rempah Le’Paroan.',
    price: 100000,
    tier: 'Paket 5 Orang',
    nutrition: NUTRITION_STANDARDS.spesial,
    packagingDefault: 'Family Pack',
    image: paketLiwetanImg,
    ingredients: [
      '5 Porsi Nasi Liwet Rempah Daun Salam',
      '5 Potong Ayam Goreng Lengkuas Rempah',
      '5 Pcs Tahu & Tempe Bacem Legit',
      'Sayur Urap Kelapa Sangrai Segar',
      'Sambal Terasi Dadak & Lalap Kemangi Timun',
      'Kerupuk Kaleng Kampung',
      '5 Cup Es Teh Rempah Le’Paroan (Pilihan Serai / Pokak)',
    ],
    features: [
      'Super Hemat: Hanya Rp20.000 / orang untuk hidangan pesta komplit',
      'Disertai daun pisang bersih siap gelar ala bancakan',
      'Termasuk 5 cup minuman teh rempah khas',
    ],
    servingAdvice: 'Gelar daun pisang di meja, tuang nasi liwet memanjang dan tata lauk di sekelilingnya.',
    targetAudience: 'Keluarga berkumpul, arisan, teman satu kost, piknik hari Minggu',
  },
  {
    id: 'minggu-madura-rawon-5p',
    day: 'minggu',
    session: 'spesial',
    name: 'Paket Pesta Madura & Rawon Daging Komplit (5 Orang)',
    regionalOrigin: 'Jawa Timur Komplit',
    tagline: 'Pesta hidangan daging & rawon legendaris untuk 5 orang (Rp25K/orang)',
    description: 'Paket mewah pesta daging sapi Jawa Timur untuk 5 porsi. Dilengkapi 5 porsi nasi putih pulen, 5 porsi mangkuk Rawon kuah kluwek hitam legam daging sapi empuk, platter gorengan babat, paru & usus gurih krispi, 5 butir telur asin Brebes masir, 5 pcs bergedel daging kentang, tauge pendek segar, sambal petis & terasi, serta 5 cup Es Teh Rempah Le’Paroan.',
    price: 125000,
    tier: 'Paket 5 Orang',
    nutrition: NUTRITION_STANDARDS.spesial,
    packagingDefault: 'Family Pack',
    ingredients: [
      '5 Porsi Nasi Putih Pulen',
      '5 Porsi Rawon Daging Sapi Kuah Kluwek',
      'Platter Babat & Paru Goreng Rempah Gurih',
      '5 Butir Telur Asin Masir Brebes',
      '5 Pcs Bergedel Daging Kentang',
      'Tauge Pendek, Jeruk Nipis, Sambal Terasi',
      '5 Cup Es Teh Rempah Le’Paroan',
    ],
    features: [
      'Pesta daging puas hanya Rp25.000 / orang',
      'Kemasan kantong kuah thermal kedap panas anti bocor',
      'Lauk pauk lengkap lauk basah & garing',
    ],
    servingAdvice: 'Panaskan kuah rawon sebentar bila ingin disajikan mengepul panas.',
    targetAudience: 'Makan siang keluarga besar, traktiran hari Minggu, perayaan sederhana',
  },

  // --- MINUMAN KHAS (SETIAP HARI) ---
  {
    id: 'minuman-teh-serai',
    day: 'all',
    session: 'minuman',
    name: 'Teh Rempah Le’Paroan — Rasa Serai',
    regionalOrigin: 'Racikan Tradisi Le’Paron',
    tagline: 'Seduhan batang serai segar, daun pandan & cengkeh (Hangat / Es)',
    description: 'Seduhan daun teh hitam pilihan dengan batang serai segar geprek, cengkeh wangi, dan daun pandan alami. Memberikan efek relaksasi yang menenangkan, menyegarkan tenggorokan, serta memperlancar sistem pencernaan sehabis menyantap hidangan.',
    price: 5000,
    tier: 'Minuman',
    nutrition: NUTRITION_STANDARDS.minuman,
    packagingDefault: 'Cup Food Grade',
    ingredients: ['Daun Teh Hitam Pilihan', 'Batang Serai Segar Geprek', 'Cengkeh Wangi', 'Daun Pandan Segar', 'Gula Tebu Alami (Bisa Request Less Sweet)'],
    features: ['Pilihan sajian: Es Dingin Segar atau Hangat Menenangkan', '100% rempah alami tanpa sirup sintesis', 'Harga merakyat cuma Rp5.000 / cup'],
    servingAdvice: 'Nikmati dingin di siang terik atau hangat di malam yang sejuk.',
    targetAudience: 'Semua pelanggan, pendamping wajib setiap menu makanan',
  },
  {
    id: 'minuman-teh-pokak',
    day: 'all',
    session: 'minuman',
    name: 'Teh Rempah Le’Paroan — Rasa Pokak',
    regionalOrigin: 'Wedang Pokak Rempah Jawa',
    tagline: 'Racikan kayu manis, jahe wangi, kapulaga & serai (Hangat / Es)',
    description: 'Resep wedang pokak pusaka keraton Jawa yang disajikan dalam format teh modern. Perpaduan jahe wangi, kayu manis, serai, kapulaga, dan cengkeh yang berkhasiat menghangatkan tubuh, meningkatkan imunitas, dan menjaga daya tahan tubuh dari cuaca tak menentu.',
    price: 5000,
    tier: 'Minuman',
    nutrition: NUTRITION_STANDARDS.minuman,
    packagingDefault: 'Cup Food Grade',
    ingredients: ['Ekstrak Wedang Pokak Tradisional', 'Jahe Merah & Jahe Emprit', 'Kayu Manis Alami', 'Kapulaga & Cengkeh', 'Gula Aren / Tebu Pilihan'],
    features: ['Aroma rempah harum menembus hidung & menghangatkan dada', 'Dapat dinikmati Hangat atau Dingin dengan Es', 'Harga bersahabat Rp5.000'],
    servingAdvice: 'Sangat disarankan diminum hangat di pagi atau malam hari.',
    targetAudience: 'Pencinta wedang rempah, menjaga daya tahan tubuh',
  },
];
