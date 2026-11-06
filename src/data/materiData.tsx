import { InlineIcon } from '../components/InlineIcon';
import { MateriData, MateriId } from '../types';

import shot1Img from '../assets/images/page_2_image_0.png';
import shot2Img from '../assets/images/page_3_image_1.png';
import shot3Img from '../assets/images/page_4_image_2.png';
import shotWarnaIntro from '../assets/images/page_5_image_3.png';
import shotWarnaCompare from '../assets/images/page_6_image_4.png';
import shotTypo from '../assets/images/page_7_image_5.png';
import shotSpace from '../assets/images/page_8_image_6.png';
import shotBalance from '../assets/keseimbangan.webp';
import shotSummary from '../assets/images/page_10_image_8.png';
import shotConclusion from '../assets/contohdesain.webp';

export const robotImages = {
  shot1: shot1Img,
  shot2: shot2Img,
  shot3: shot3Img,
  shotWarnaIntro,
  shotWarnaCompare,
  shotTypo,
  shotSpace,
  shotBalance,
  shotSummary,
  shotConclusion
};

export const allMateris: Record<MateriId, MateriData> = {
  'warna': {
    id: 'warna',
    orderNumber: '01',
    title: 'Warna',
    englishTitle: 'Color & Harmony',
    iconName: 'Palette',
    tagline: 'Warna bukan sekadar hiasan, tapi dapat memengaruhi perasaan dan tindakan audiens.',
    themeColor: '#EA580C',
    themeBg: '#FFF7ED',
    themeBorder: '#FDBA74',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
    shotImageHero: shotWarnaIntro,
    summary: 'Pelajari psikologi warna dingin vs hangat, aturan kontras keterbacaan, dan formula 60-30-10 agar desain tidak ramai.',
    subMateriList: [
      {
        id: 'psikologi-warna',
        title: 'Psikologi & Makna Emosi Warna',
        subtitle: 'Mengapa warna memicu reaksi psikologis spontan?',
        concept: 'Setiap warna memancarkan gelombang emosional spesifik di alam bawah sadar manusia. Memilih warna yang salah dapat merusak pesan utama desain.',
        bullets: [
          <><InlineIcon name="Circle" color="#2563eb" />{" Biru: Memancarkan ketenangan, integritas, keteraturan, dan rasa aman. Sangat ideal untuk institusi pendidikan, teknologi, perbankan, atau asuransi."}</>,
          <><InlineIcon name="Circle" color="#dc2626" />{" Merah: Menstimulasi detak jantung, urgensi, dan nafsu makan. Identik dengan industri kuliner, diskon kilat, dan aksi berani."}</>,
          <><InlineIcon name="Circle" color="#16a34a" />{" Hijau: Melambangkan kesegaran, pertumbuhan, alam, dan kesehatan. Cocok untuk produk organik, ramah lingkungan, dan kesehatan berkelanjutan."}</>,
          <><InlineIcon name="Circle" color="#ca8a04" />{" Kuning: Penuh optimisme, keceriaan, dan menarik perhatian seketika. Sering dipakai untuk peringatan atau sorotan utama."}</>
        ],
        tips: 'Pilih warna berdasarkan pesan yang ingin disampaikan ke audiens, bukan semata-mata warna favorit pribadimu!',
        shotImageKey: 'shotWarnaCompare',
        comparison: {
          badTitle: 'Warna Keliru: Poster Kuliner Dingin',
          badDescription: 'Poster restoran burger menggunakan dominan biru gelap dan abu-abu. Pengunjung merasa kehilangan nafsu makan karena terkesan medis atau dingin.',
          goodTitle: 'Warna Tepat: Poster Kuliner Menggugah',
          goodDescription: 'Poster restoran menggunakan dominan merah hangat, kuning keemasan, dan oranye. Visual langsung memicu rasa lapar dan selera makan!'
        }
      },
      {
        id: 'roda-warna',
        title: 'Roda Warna & Skema Harmoni',
        subtitle: 'Formula ilmiah memadukan warna tanpa membuat mata sakit',
        concept: 'Harmoni warna tercipta ketika kombinasi warna memiliki hubungan geometris teratur pada Roda Warna (Color Wheel).',
        bullets: [
          <><InlineIcon name="Palette" />{" Monokromatik: Menggunakan satu warna dasar dengan variasi intensitas terang (tint) dan gelap (shade). Memberikan kesan rapi, minimalis, dan elegan."}</>,
          <><InlineIcon name="Handshake" />{" Analog: Memilih 2-3 warna yang posisinya bersebelahan di roda warna (misal: kuning, oranye, merah). Terasa natural dan menenangkan."}</>,
          <><InlineIcon name="Zap" />{" Komplementer: Dua warna yang saling berhadapan langsung (misal: biru vs oranye, ungu vs kuning). Menciptakan kontras tinggi yang energik dan mencolok."}</>
        ],
        tips: 'Jika ragu, mulailah dengan skema monokromatik atau analog sebelum mencoba warna komplementer yang berani.',
        shotImageKey: 'shotWarnaIntro'
      },
      {
        id: 'kontras-keterbacaan',
        title: 'Kontras & Keterbacaan (Accessibility)',
        subtitle: 'Memastikan informasi dapat dibaca dengan mudah dan nyaman',
        concept: 'Kontras adalah perbedaan intensitas cahaya antara teks dan latar belakang. Tanpa kontras yang cukup, pesan penting akan lenyap.',
        bullets: [
          <><InlineIcon name="TriangleAlert" />{" Bahaya Low Contrast: Teks kuning di latar putih atau teks abu-abu tua di latar hitam membuat mata cepat lelah dan tidak inklusif bagi audiens."}</>,
          <><InlineIcon name="Eye" />{" High Contrast yang Sehat: Teks hitam pekat di atas kertas krem (#FAF8F5) atau teks putih bersih di atas navy blue gelap."}</>,
          <><InlineIcon name="Target" />{" Uji Menyipitkan Mata (Squint Test): Sipitkan matamu saat melihat desain; jika teks melebur dengan background, kontrasnya belum cukup!"}</>
        ],
        tips: "Pastikan teks utama selalu memiliki rasio kontras minimal 4.5: 1 terhadap latar belakangnya.",
        shotImageKey: 'shotWarnaCompare'
      },
      {
        id: 'aturan-60-30-10',
        title: 'Formula Emas 60-30-10 & Palette Limiter',
        subtitle: 'Kunci menjaga desain agar tidak tampak seperti "karnaval ramai"',
        concept: 'Seperti yang Robo sampaikan di Shot 5: "Jangan pakai terlalu banyak warna, nanti malah ramai!" Gunakan aturan proporsi interior 60-30-10.',
        bullets: [
          <><InlineIcon name="Landmark" />{" 60% Warna Dominan: Biasanya adalah warna latar belakang netral (putih, krem gading, atau dark slate)."}</>,
          <><InlineIcon name="DraftingCompass" />{" 30% Warna Sekunder: Digunakan untuk struktur komponen, kartu, sidebar, atau tipografi pendukung."}</>,
          <><InlineIcon name="Star" />{" 10% Warna Aksen: Warna cerah mencolok untuk tombol ajakan (Call to Action), lencana, atau status aktif."}</>
        ],
        tips: 'Batasi palet desainmu maksimal pada 3 warna utama. Kesederhanaan menciptakan dampak visual yang jauh lebih berkelas.',
        shotImageKey: 'shotSummary'
      }
    ]
  },

  'tipografi': {
    id: 'tipografi',
    orderNumber: '02',
    title: 'Tipografi',
    englishTitle: 'Typography & Hierarchy',
    iconName: 'Type',
    tagline: 'Seni memilih dan menata huruf agar teks tidak sekadar dibaca, tetapi juga dirasakan.',
    themeColor: '#2563EB',
    themeBg: '#EFF6FF',
    themeBorder: '#93C5FD',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    shotImageHero: shotTypo,
    summary: 'Pahami klasifikasi Serif vs Sans-Serif, cara membangun hirarki ukuran yang tegas, serta aturan emas kombinasi maksimal 2 jenis font.',
    subMateriList: [
      {
        id: 'klasifikasi-font',
        title: 'Klasifikasi & Karakteristik Font',
        subtitle: 'Mengenal kepribadian di balik bentuk huruf',
        concept: 'Huruf bukan sekadar simbol tulisan, melainkan memiliki nada suara visual (tone of voice).',
        bullets: [
          <><InlineIcon name="Landmark" />{" Serif (Berkait): Memiliki sirip/kait kecil di ujung garis huruf (contoh: Playfair Display, Times). Menghadirkan wibawa, sejarah, keanggunan, dan formalitas."}</>,
          <><InlineIcon name="Laptop" />{" Sans-Serif (Tanpa Kait): Ujung huruf lurus, bersih, dan geometris (contoh: Inter, Plus Jakarta Sans). Memberi kesan modern, ramah, dan sangat mudah dibaca di layar digital."}</>,
          <>{" Display & Script: Bentuk dekoratif atau tulisan tangan unik. Khusus untuk judul pendek bertema; pantang digunakan untuk paragraf panjang!"}</>
        ],
        tips: 'Jangan pernah gunakan font bersambung/berliku (script) untuk paragraf kecil. Seperti kata Robo: "Bikin orang malas membaca!"',
        shotImageKey: 'shotTypo',
        comparison: {
          badTitle: 'Font Berliku & Sulit Dibaca',
          badDescription: 'Pengumuman ujian sekolah ditulis dengan font script miring kecil-kecil. Siswa kesulitan memahami jadwal dan instruksi penting.',
          goodTitle: 'Font Jernih & Lugas',
          goodDescription: 'Judul pengumuman menggunakan Serif tegas dan isi menggunakan Sans-serif yang bersih. Informasi langsung terbaca dalam 2 detik!'
        }
      },
      {
        id: 'hirarki-tipografi',
        title: 'Hirarki Visual Tipografi',
        subtitle: 'Membimbing alur baca mata dari hal terpenting hingga detail',
        concept: 'Hirarki menentukan urutan informasi yang dibaca pertama kali oleh mata audiens menggunakan kontras ukuran, ketebalan, dan warna.',
        bullets: [
          <><InlineIcon name="Megaphone" />{" Judul Utama (Heading 1): Ukuran terbesar dan paling tebal. Menarik perhatian audiens dalam sekejap mata."}</>,
          <><InlineIcon name="Files" />{" Subjudul (Heading 2/3): Ukuran menengah untuk mengelompokkan topik bahasan menjadi bagian teratur."}</>,
          <><InlineIcon name="BookOpen" />{" Teks Isi (Body Text): Ukuran proporsional (14px - 16px) dengan ketebalan reguler untuk kenyamanan membaca berlama-lama."}</>,
          <><InlineIcon name="Tag" />{" Keterangan/Caption: Ukuran kecil (11px - 12px) untuk catatan kaki, label, atau hak cipta."}</>
        ],
        tips: 'Jika semua teks dibuat besar dan tebal, maka tidak ada satu pun yang terasa penting!',
        shotImageKey: 'shotTypo'
      },
      {
        id: 'spasi-dan-leading',
        title: 'Spasi Baris (Leading) & Kerning',
        subtitle: 'Mencegah efek "tembok teks" yang menyesakkan mata',
        concept: "Keterbacaan teks sangat dipengaruhi oleh ruang nafas di antara baris (leading/line-height) dan antar huruf (tracking/kerning).",
        bullets: [
          <><InlineIcon name="BrickWall" />{" Leading Terlalu Rapat: Baris atas dan bawah saling menabrak, menyebabkan mata sering salah baris saat membaca."}</>,
          <><InlineIcon name="Wind" />{" Leading Terlalu Lebar: Baris teks terlihat terpisah-pisah sehingga kalimat terasa tidak saling menyambung."}</>,
          <><InlineIcon name="Ruler" />{" Standar Ideal: Gunakan line-height antara 1.4 hingga 1.6 kali ukuran font untuk teks paragraf."}</>
        ],
        tips: 'Batasi panjang satu baris teks maksimal 50-75 karakter agar mata tidak lelah melompat ke baris berikutnya.',
        shotImageKey: 'shotTypo'
      },
      {
        id: 'aturan-maksimal-2-font',
        title: 'Golden Rule: Maksimal 1 - 2 Jenis Font',
        subtitle: 'Kombinasi font harmonis tanpa kekacauan visual',
        concept: 'Seperti pesan tegas di Shot 6: "Cukup satu atau dua jenis huruf saja, biar nggak berantakan."',
        bullets: [
          <><InlineIcon name="Drama" />{" Pasangan Klasik (Serif + Sans): Judul menggunakan Serif berbobot elegan, sementara paragraf isi menggunakan Sans-Serif bersih."}</>,
          <><InlineIcon name="Shield" />{" Monokrom Keluarga Font (Superfamily): Cukup gunakan Satu font (misal: Inter) namun variasikan bobotnya (Bold untuk judul, Regular untuk isi)."}</>,
          <><InlineIcon name="Ban" />{" Hindari Font Serupa Tapi Tak Sama: Memadukan Arial dengan Helvetica terlihat seperti kesalahan ketidaksengajaan daripada desain yang terencana."}</>
        ],
        tips: 'Ingat prinsip kesederhanaan: jika 1 keluarga font sudah bisa menyelesaikan pekerjaan dengan rapi, kamu tidak butuh font kedua!',
        shotImageKey: 'shotSummary'
      }
    ]
  },

  'ruang-kosong': {
    id: 'ruang-kosong',
    orderNumber: '03',
    title: 'Ruang Kosong',
    englishTitle: 'Negative Space & Breathing Room',
    iconName: 'Maximize2',
    tagline: 'Bukan pemborosan tempat, ruang kosong adalah oksigen yang membuat mata bisa bernapas.',
    themeColor: '#059669',
    themeBg: '#ECFDF5',
    themeBorder: '#6EE7B7',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    shotImageHero: shotSpace,
    summary: 'Ketahui pentingnya ruang napas (Micro vs Macro), cara membuat objek penting langsung menonjol, dan analogi buku padat vs buku nyaman.',
    subMateriList: [
      {
        id: 'hakikat-ruang-kosong',
        title: 'Hakikat Ruang Kosong (Negative Space)',
        subtitle: 'Bukan tempat kosong yang mubazir, melainkan elemen aktif',
        concept: 'Banyak pemula merasa takut dengan ruang kosong dan tergoda mengisinya dengan stiker, garis, atau teks tambahan. Padahal ruang kosong adalah bingkai alami yang melindungi pesan inti.',
        bullets: [
          <><InlineIcon name="Wind" />{" Oksigen Visual: Ruang kosong memberi jeda mental bagi otak sebelum berpindah memproses informasi berikutnya."}</>,
          <><InlineIcon name="Palette" />{" Warna Bebas: White space tidak harus putih! Latar hitam, krem gading, atau gradien polos tetap disebut ruang kosong jika tidak dihuni objek aktif."}</>,
          <><InlineIcon name="Gem" />{" Simbol Kemewahan: Brand premium (seperti Apple atau majalah seni) selalu menggunakan ruang kosong yang sangat lapang untuk memancarkan aura eksklusif."}</>
        ],
        tips: 'Jangan penuhi setiap sudut kanvas. Berikan ruang bernapas agar desainmu terasa rileks dan berkelas.',
        shotImageKey: 'shotSpace',
        comparison: {
          badTitle: 'Desain Padat & Sesak (Claustrophobic)',
          badDescription: 'Semua foto produk ditempel rapat ke tepi layar, teks menyentuh bingkai, dan tanpa margin. Mata merasa pusing dan bingung harus melihat ke mana.',
          goodTitle: 'Desain Lega & Bernapas (Spacious)',
          goodDescription: 'Diberikan padding dan margin lapang di sekeliling elemen. Produk tampak menonjol seperti dipajang di galeri seni bergengsi.'
        }
      },
      {
        id: 'micro-vs-macro-space',
        title: "Micro Space Vs Macro Space",
        subtitle: 'Dua tingkatan ruang kosong yang menyusun harmoni tata letak',
        concept: 'Ruang kosong bekerja pada dua skala yang saling melengkapi: skala detail kecil (micro) dan skala layout keseluruhan (macro).',
        bullets: [
          <><InlineIcon name="Microscope" />{" Micro White Space: Jarak antar huruf (kerning), jarak antar baris kalimat (leading), dan padding tipis di dalam sebuah tombol."}</>,
          <><InlineIcon name="Telescope" />{" Macro White Space: Margin tepi layar kanvas, jarak antar blok section halaman, dan ruang lapang antara foto dan paragraf."}</>,
          <><InlineIcon name="Scale" />{" Keseimbangan Keduanya: Jika hanya macro yang diperhatikan tapi micro rapat, teks akan tetap sulit dibaca!"}</>
        ],
        tips: 'Konsistensi jarak (misal kelipatan 8px: 8, 16, 24, 32, 48px) membuat ritme ruang kosong terasa sangat harmonis.',
        shotImageKey: 'shotSpace'
      },
      {
        id: 'focal-point-dan-isolasi',
        title: 'Menonjolkan Focal Point Lewat Isolasi',
        subtitle: 'Membuat objek menjadi pusat perhatian tanpa perlu memperbesarnya',
        concept: 'Cara tercepat membuat sebuah benda diperhatikan bukanlah dengan membuatnya raksasa, melainkan dengan membiarkan ruang di sekelilingnya kosong melompong.',
        bullets: [
          <><InlineIcon name="Target" />{" Prinsip Isolasi: Objek tunggal yang dikelilingi ruang kosong luas akan menjadi magnet bagi pandangan mata seketika."}</>,
          <><InlineIcon name="Ban" />{" Jebakan \"Perbesar Logonya\": Klien sering minta memperbesar logo, padahal yang dibutuhkan hanyalah memberi ruang kosong lebih di sekitar logo!"}</>,
          <><InlineIcon name="Zap" />{" Eliminasi Elemen Pengganggu: Hapus dekorasi yang tidak memiliki fungsi pesan."}</>
        ],
        tips: 'Ingat kata pepatah desain: "Desain visual mencapai kesempurnaan bukan saat tidak ada lagi yang bisa ditambah, tetapi saat tidak ada lagi yang bisa dikurangi."',
        shotImageKey: 'shotSummary'
      },
      {
        id: 'analogi-buku-padat',
        title: "Analogi Buku Padat Vs Buku Bernapas",
        subtitle: 'Pelajaran dari Shot 7 storyboard',
        concept: 'Sebagaimana Robo mengilustrasikan: "Coba bandingkan buku padat dengan yang ada jaraknya, mana yang lebih nyaman?"',
        bullets: [
          <><InlineIcon name="BookOpen" />{" Buku Tanpa Margin: Teks dicetak hingga ke tepi kertas. Jempol pembaca menutupi tulisan, mata mudah lelah, dan terasa membosankan."}</>,
          <><InlineIcon name="LibraryBig" />{" Buku Berjarak Sehat: Memiliki margin luar yang lapang dan jeda antar paragraf. Membaca menjadi pengalaman yang menyenangkan dan tidak melelahkan."}</>
        ],
        tips: 'Selalu sisakan batas tepi (margin) minimal 5-10% dari lebar layar agar konten tidak terkesan "tergencet" bingkai.',
        shotImageKey: 'shotSpace'
      }
    ]
  },

  'keseimbangan': {
    id: 'keseimbangan',
    orderNumber: '04',
    title: 'Keseimbangan',
    englishTitle: 'Visual Balance & Equilibrium',
    iconName: 'Scale',
    tagline: 'Seperti neraca bobot: jangan biarkan elemen menumpuk di satu sisi agar visual terasa harmonis.',
    themeColor: '#7C3AED',
    themeBg: '#F5F3FF',
    themeBorder: '#C4B5FD',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    shotImageHero: shotBalance,
    summary: 'Pelajari konsep bobot visual, perbedaan keseimbangan simetris vs asimetris, dan bagaimana alur pandang mata bergerak melintasi layout.',
    subMateriList: [
      {
        id: 'konsep-bobot-visual',
        title: 'Konsep Bobot Visual (Visual Weight)',
        subtitle: 'Mengapa suatu elemen terasa lebih "berat" daripada elemen lainnya?',
        concept: 'Dalam dunia 2D, elemen visual tidak punya massa fisik, namun otak kita mengaitkan atribut tertentu dengan bobot gravitasi psikologis.',
        bullets: [
          <><InlineIcon name="Ruler" />{" Ukuran: Objek yang lebih besar terasa lebih berat daripada objek kecil."}</>,
          <><InlineIcon name="Square" color="#0f172a" />{" Warna & Kontras: Warna gelap, pekat, atau kontras tinggi memiliki bobot visual lebih berat daripada warna terang atau transparan."}</>,
          <><InlineIcon name="Image" />{" Kompleksitas: Foto wajah manusia atau ilustrasi detail memiliki bobot visual yang sangat kuat dibanding kotak teks polos."}</>,
          <><InlineIcon name="MapPin" />{" Posisi: Elemen di bagian atas atau sudut tepi kanvas sering kali menarik gravitasi visual lebih tinggi."}</>
        ],
        tips: 'Satu foto berukuran besar di sebelah kiri bisa diseimbangkan oleh tiga baris teks tebal di sebelah kanan.',
        shotImageKey: 'shotBalance',
        comparison: {
          badTitle: 'Berat Sebelah (Miring)',
          badDescription: 'Semua foto, judul besar, dan tombol ditumpuk di sebelah kiri. Sisi kanan kosong melompong. Mata merasa ada rasa tidak nyaman dan tidak tuntas.',
          goodTitle: 'Seimbang Harmonis',
          goodDescription: 'Foto besar di sisi kiri diimbangi secara proporsional dengan judul elegan dan paragraf tertata di sisi kanan.'
        }
      },
      {
        id: 'keseimbangan-simetris',
        title: 'Keseimbangan Simetris (Formal Balance)',
        subtitle: 'Ketenangan lewat cermin keteraturan',
        concept: 'Keseimbangan simetris terjadi ketika elemen di kedua sisi sumbu tengah (vertikal atau horizontal) memiliki bentuk dan bobot yang identik atau hampir serupa (seperti Shot 8).',
        bullets: [
          <><InlineIcon name="Landmark" />{" Karakter: Menghadirkan kesan formal, agung, teratur, stabil, dan terpercaya."}</>,
          <><InlineIcon name="Scroll" />{" Penggunaan Ideal: Piagam penghargaan, sertifikat, undangan pernikahan resmi, poster film bertema monumen, atau lambang negara."}</>,
          <><InlineIcon name="TriangleAlert" />{" Potensi Kelemahan: Jika tidak dieksekusi dengan variasi tipografi yang tajam, bisa terasa statis atau monoton."}</>
        ],
        tips: 'Gunakan simetris saat kamu ingin mengomunikasikan stabilitas, kemapanan, dan rasa khidmat.',
        shotImageKey: 'shotBalance'
      },
      {
        id: 'keseimbangan-asimetris',
        title: 'Keseimbangan Asimetris (Dynamic Balance)',
        subtitle: 'Keindahan modern yang dinamis dan ekspresif',
        concept: 'Sisi kiri dan kanan memiliki elemen yang sama sekali berbeda bentuk, namun bobot visual keseluruhannya tetap setara seperti jungkat-jungkit anak-anak.',
        bullets: [
          <><InlineIcon name="Zap" />{" Karakter: Menghadirkan kesan energik, kontemporer, dinamis, dan tidak membosankan."}</>,
          <><InlineIcon name="Scale" />{" Contoh Penerapan: Sebuah foto produk mobil sport besar di sebelah kiri diimbangi oleh judul tebal, deskripsi singkat, dan tombol beli di sebelah kanan."}</>,
          <><InlineIcon name="Brain" />{" Keunggulan: Menahan perhatian mata audiens lebih lama karena mendorong mata menjelajahi kanvas."}</>
        ],
        tips: 'Kuncinya adalah mengimbangi objek besar yang pekat dengan kelompok objek kecil yang memiliki ruang napas cukup.',
        shotImageKey: 'shotSummary'
      },
      {
        id: 'alur-pandang-dan-gravitasi',
        title: 'Alur Pandang (Eye Flow: Z & F Pattern)',
        subtitle: 'Memandu perjalanan mata dari titik awal ke titik akhir',
        concept: 'Keseimbangan yang baik tidak hanya diam di tempat, melainkan membimbing arah gerak mata secara alami.',
        bullets: [
          <><InlineIcon name="Zap" />{" Z-Pattern: Mata bergerak dari kiri-atas (Logo) -> kanan-atas (Menu) -> diagonal kiri-bawah (Foto) -> kanan-bawah (Tombol Call to Action). Sangat cocok untuk landing page visual."}</>,
          <><InlineIcon name="Newspaper" />{" F-Pattern: Mata membaca baris atas secara horizontal, turun ke bawah, membaca sedikit, lalu memindai sisi kiri secara vertikal. Cocok untuk artikel atau blog."}</>
        ],
        tips: 'Tempatkan informasi paling kritikal di jalur alami alur pandang mata audiens.',
        shotImageKey: 'shotSummary'
      }
    ]
  },

  'contoh-desain': {
    id: 'contoh-desain',
    orderNumber: '05',
    title: 'Contoh Desain',
    englishTitle: 'Design Showcase & Case Studies',
    iconName: 'Layout',
    tagline: 'Harmoni dari 4 elemen dasar visual dalam ragam poster karya nyata.',
    themeColor: '#00a1db',
    themeBg: '#F0F9FF',
    themeBorder: '#7DD3FC',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    shotImageHero: shotConclusion,
    summary: 'Rangkuman lengkap dan studi kasus bagaimana keempat elemen berpadu harmonis dalam poster nyata.',
    subMateriList: [
      {
        id: 'harmoni-4-pilar',
        title: 'Harmoni 4 Elemen Desain Visual',
        subtitle: 'Sinergi antara warna, huruf, ruang, dan bobot',
        concept: 'Seperti pesan Robo di Shot 9: "Jadi, ingat ya: warna, tipografi, ruang kosong, dan keseimbangan. Dengan ini, Teman-teman bisa bikin desain yang bukan cuma bagus, tapi juga efektif!"',
        bullets: [
          <><InlineIcon name="Palette" />{" Warna: Memancarkan emosi, membangun atmosfer, dan mengarahkan suasana hati audiens."}</>,
          <><InlineIcon name="Type" />{" Tipografi: Menyampaikan pesan tekstual dengan jernih melalui hirarki dan font yang tepat."}</>,
          <><InlineIcon name="DraftingCompass" />{" Ruang Kosong: Memberi oksigen visual agar mata tidak lelah dan pesan utama bersinar."}</>,
          <><InlineIcon name="Scale" />{" Keseimbangan: Memastikan bobot visual terdistribusi harmonis dan tidak miring."}</>
        ],
        tips: 'Desain yang hebat bukanlah yang paling ramai hiasannya, melainkan yang paling harmonis dan jelas tujuannya!',
        shotImageKey: 'shotSummary'
      },
      {
        id: 'refleksi-karya',
        title: 'Refleksi: Cek Desainmu Sendiri!',
        subtitle: 'Pesan Robo dari Shot 10 & 11',
        concept: 'Sesuai Shot 10: "Sekarang, coba cek desainmu, kira-kira elemen mana yang sudah diterapkan?" Sebelum membagikan karyamu, lakukan 4 langkah evaluasi mandiri.',
        bullets: [
          '1. Cek Warna: Apakah palet warna sudah mendukung pesan dan tidak melebihi 3 warna utama (60-30-10)?',
          '2. Cek Tipografi: Apakah teks mudah dibaca dan maksimal hanya menggunakan 1-2 jenis font?',
          '3. Cek Ruang Kosong: Apakah ada margin yang lapang di tepi dan ruang bernapas di sekeliling elemen penting?',
          '4. Cek Keseimbangan: Apakah susunan elemen terasa seimbang dan tidak berat sebelah?'
        ],
        tips: 'Jadikan 4 pertanyaan ini sebagai kebiasaan emas sebelum menyelesaikan setiap proyek desainmu.',
        shotImageKey: 'shotConclusion'
      },
      {
        id: 'terus-berkarya',
        title: 'Kesimpulan & Teruslah Berkarya',
        subtitle: 'Langkah awal perjalanan kreatifmu bersama Robo',
        concept: 'Desain visual adalah keterampilan yang akan terus berkembang seiring dengan latihan dan kepekaan rasa mengamati sekeliling.',
        bullets: [
          <><InlineIcon name="Star" />{" Amati Desain di Sekitarmu: Mulai sekarang, perhatikan poster, buku, atau aplikasi yang kamu lihat sehari-hari."}</>,
          <><InlineIcon name="Rocket" />{" Terapkan di Tugas & Karyamu: Gunakan prinsip ini saat membuat tugas sekolah, presentasi, atau konten media sosial."}</>,
          <><InlineIcon name="Bot" />{" Robo Mengucapkan Selamat: Kamu telah berhasil mempelajari seluruh dasar desain visual!"}</>
        ],
        tips: 'Teruslah berlatih, bereksperimen, dan jangan pernah takut mencoba kombinasi visual baru!',
        shotImageKey: 'shotConclusion'
      }
    ]
  }
};

(allMateris as any)['kesimpulan'] = allMateris['contoh-desain'];
