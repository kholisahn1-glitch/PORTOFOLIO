export interface ProjectItem {
  id: string;
  title: string;
  category: "Featured Backend" | "System Architecture" | "Information System";
  tag: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technology: string[];
  role: string;
  developmentProcess: string[];
  result: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  description: string;
  credentialUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Nur Kholisah",
  headline: "Backend Developer & Informatics Student",
  tagline: "Designing reliable server-side architectures, robust data flows, and scalable web solutions.",
  status: "Open to Internship & Junior Backend / Cloud Engineer Opportunities",
  education: {
    campus: "Politeknik Elektronika Negeri Surabaya (PENS)",
    major: "D3 Teknik Informatika",
    description:
      "Fokus studi mencakup Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Basis Data Relasional, Jaringan Komputer, dan Pengembangan Web.",
  },
  socials: {
    github: "https://github.com",
    whatsapp: "https://wa.me/62895806164444",
    phoneDisplay: "0895806164444",
    instagram: "https://www.instagram.com/kholisa.1/",
    instagramUsername: "kholisa.1",
    linkedin: "https://www.linkedin.com/in/nur-kholisah-2b5082322",
    email: "kholisahn1@gmail.com",
    emailMailto: "mailto:kholisahn1@gmail.com",
  },
};

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Pelatihan & Sertifikasi Backend Engineering",
    issuer: "Akademik PENS / Program Keahlian IT",
    year: "2024",
    category: "Backend & REST API",
    description: "Perancangan RESTful API dengan FastAPI & Laravel, standardisasi dokumentasi teknis IEEE PRD, dan implementasi endpoint.",
    credentialUrl: "#",
  },
  {
    id: "cert-2",
    title: "Sertifikasi Perancangan Database Relasional (CDM / PDM)",
    issuer: "Politeknik Elektronika Negeri Surabaya",
    year: "2023 - 2024",
    category: "Database Modeling",
    description: "Pemodelan basis data konseptual dan fisikal menggunakan PowerDesigner, normalisasi relasi, serta integritas data relasional.",
    credentialUrl: "#",
  },
  {
    id: "cert-3",
    title: "Eksplorasi Cloud Computing & AI/LLM Integration",
    issuer: "Workshop & Independent Study",
    year: "2024",
    category: "Cloud & AI",
    description: "Pemahaman fundamental cloud infrastructure, kontainerisasi dengan Docker, dan integrasi Large Language Models (Google Gemini & IBM Bob).",
    credentialUrl: "#",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    skills: ["Python", "PHP", "JavaScript", "C", "C++"],
    description: "Bahasa pemrograman inti untuk pemrosesan logika sistem dan algoritma.",
  },
  {
    category: "Backend & Frameworks",
    skills: ["FastAPI", "Laravel", "Node.js", "Express.js"],
    description: "Framework modern untuk pembuatan web service dan REST API.",
  },
  {
    category: "Database & Modeling",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "ERD", "CDM", "PDM", "PowerDesigner", "pgAdmin", "phpMyAdmin", "MongoDB Compass"],
    description: "Perancangan skema relasional, normalisasi data, dan manajemen database.",
  },
  {
    category: "API & Architecture",
    skills: ["REST API Design & Integration", "Client-Server Architecture", "IEEE PRD Requirements", "System Usability Scale (SUS)"],
    description: "Desain arsitektur endpoint, pemodelan aliran data, dan dokumentasi teknis standar industri.",
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "Cisco Packet Tracer", "Postman", "Thunder Client", "VS Code Stack"],
    description: "Kontainerisasi, version control, pengujian endpoint, dan otomasi alur kerja.",
  },
  {
    category: "Currently Exploring (Cloud & LLM)",
    skills: ["Cloud Computing Fundamentals", "Large Language Model (LLM) Integration", "Google Gemini API", "IBM Bob"],
    description: "Eksplorasi infrastruktur cloud dan integrasi API AI cerdas.",
    highlight: true,
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "si-bansos-ngrowo",
    title: "SI-BANSOS NGROWO",
    category: "Featured Backend",
    tag: "REST API & Database Modeling",
    overview:
      "Web portal transparansi penyaluran bantuan sosial dan kanal pengaduan warga desa untuk akuntabilitas data.",
    problem:
      "Kurangnya transparansi dalam alokasi bantuan sosial desa serta tidak adanya saluran resmi dan tercatat bagi warga untuk menyampaikan keluhan atau verifikasi status penerimaan bansos.",
    solution:
      "Membangun aplikasi web dengan endpoint RESTful API berbasis FastAPI yang menyajikan data penerima bansos secara terstruktur serta menyediakan sistem pelaporan aduan warga.",
    features: [
      "API penyajian data penerima bansos desa terverifikasi",
      "Modul registrasi dan pelaporan keluhan warga",
      "Dashboard admin desa untuk manajemen status bantuan",
      "Validasi payload data dan sanitasi input form",
    ],
    technology: ["FastAPI", "Python", "MySQL", "Bootstrap", "PowerDesigner (CDM/PDM)"],
    role: "Backend Developer & Database Designer",
    developmentProcess: [
      "Merancang arsitektur basis data relasional melalui tahapan ERD, CDM, hingga PDM menggunakan PowerDesigner.",
      "Mengembangkan endpoint REST API menggunakan FastAPI dengan dokumentasi otomatis OpenAPI/Swagger.",
      "Menyusun laporan dan spesifikasi teknis perangkat lunak berbasis format IEEE PRD (Product Requirement Document).",
    ],
    result:
      "Sistem backend berhasil memproses alur aduan dan verifikasi data bansos sesuai spesifikasi dokumen IEEE PRD. [Data metrik pengguna: Belum diisi]",
    githubUrl: "#",
  },
  {
    id: "ecopath",
    title: "EcoPath",
    category: "Featured Backend",
    tag: "Logika Struktur Data & Backend",
    overview:
      "Sistem informasi pengelolaan logistik sampah dan penentuan alur rute pengangkutan berbasis optimasi logika backend dan struktur data.",
    problem:
      "Rute dan jadwal pengangkutan sampah yang tidak terorganisir mengakibatkan penumpukan sampah di titik penampungan dan inefisiensi alokasi armada.",
    solution:
      "Mengembangkan sistem informasi berbasis web dengan logika pemrosesan data backend untuk mengelola titik TPS, volume sampah, dan alur distribusi armada.",
    features: [
      "Pencatatan titik lokasi penampungan dan estimasi volume sampah",
      "Logika penentuan alur distribusi penjemputan armada",
      "Manajemen status operasional dan armada angkut",
    ],
    technology: ["Python/PHP", "Relational Database", "REST API", "Data Structure Logic"],
    role: "Backend Developer & Data Structure Logic Designer",
    developmentProcess: [
      "Merancang skema relasi database untuk pencatatan titik penampungan dan volume sampah berkala.",
      "Mengimplementasikan logika struktur data dalam penyusunan urutan prioritas penjemputan armada.",
      "Mengintegrasikan logika backend dengan antarmuka web sistem informasi.",
    ],
    result:
      "Terciptanya sistem pencatatan terpusat untuk alur operasional pengelolaan sampah. [Data efisiensi rute: Belum diisi]",
    githubUrl: "#",
  },
  {
    id: "manajemen-keuangan",
    title: "Sistem Informasi Manajemen Keuangan",
    category: "Featured Backend",
    tag: "Database Relasional & Transaksi",
    overview:
      "Aplikasi web pencatatan transaksi kas masuk dan keluar secara real-time dengan kalkulasi saldo otomatis.",
    problem:
      "Pencatatan arus kas secara manual rentan terhadap selisih hitung, hilangnya bukti transaksi, serta lambatnya pembuatan rekap bulanan.",
    solution:
      "Membangun aplikasi web berbasis database relasional dengan kalkulasi otomatis untuk setiap transaksi debit dan kredit.",
    features: [
      "Pencatatan transaksi pemasukan dan pengeluaran berkala",
      "Perhitungan running balance (saldo berjalan) otomatis",
      "Filter dan agregasi laporan berdasarkan rentang tanggal serta kategori",
    ],
    technology: ["PHP / Web Framework", "MySQL", "Bootstrap", "SQL Aggregation Queries"],
    role: "Backend Developer & Database Engineer",
    developmentProcess: [
      "Merancang skema tabel transaksi dan kategori dengan relasi integritas referensial (foreign keys).",
      "Menulis query SQL terstruktur untuk kalkulasi total kas dan rekapitulasi data per periode.",
      "Menerapkan validasi form input pada sisi backend untuk mencegah anomali data numerik.",
    ],
    result:
      "Sistem pencatatan keuangan yang mengeliminasi risiko kesalahan hitung manual dalam pelaporan kas. [Data transaksi teruji: Belum diisi]",
    githubUrl: "#",
  },
  {
    id: "jejakhijau",
    title: "JejakHijau",
    category: "System Architecture",
    tag: "Arsitektur Sistem & Evaluasi SUS",
    overview:
      "Konsep aplikasi mobile terpadu untuk monitoring jejak karbon harian dan pemilahan sampah dengan pendekatan Human-Centered Design (HCD).",
    problem:
      "Sulitnya masyarakat melacak dampak emisi aktivitas harian secara kuantitatif serta rendahnya insentif untuk memilah sampah rumah tangga.",
    solution:
      "Merancang arsitektur sistem backend, alur data kalkulasi emisi karbon, serta rancangan antarmuka yang ramah pengguna yang divalidasi dengan pengujian usability.",
    features: [
      "Alur kalkulasi dan transmisi data jejak karbon",
      "Mekanisme pencatatan setoran sampah terpilah",
      "Konsep antarmuka mobile interaktif",
    ],
    technology: ["System Architecture", "Data Flow Modeling", "SUS Framework", "UI/UX Modeling"],
    role: "System Architect & Backend Flow Designer",
    developmentProcess: [
      "Merumuskan arsitektur sistem dan alur komunikasi data antara klien mobile dan server backend.",
      "Merancang skema algoritma kalkulasi emisi karbon.",
      "Melakukan evaluasi pengalaman pengguna menggunakan instrumen System Usability Scale (SUS).",
    ],
    result:
      "Dokumen arsitektur sistem yang tervalidasi dan laporan kelayakan antarmuka berdasarkan instrumen SUS. [Nilai skor SUS: Belum diisi]",
    demoUrl: "#",
  },
  {
    id: "welzy",
    title: "WELZY (App Usage Limiter)",
    category: "System Architecture",
    tag: "State Machine & Logic System",
    overview:
      "Konsep dan perancangan logika sistem aplikasi untuk membatasi durasi penggunaan aplikasi tertentu guna menjaga produktivitas pengguna.",
    problem:
      "Tingginya distraksi smartphone akibat penggunaan aplikasi media sosial/hiburan tanpa batasan waktu yang terukur.",
    solution:
      "Menyusun logika pengecekan batas waktu (usage threshold) dan aturan restriksi akses aplikasi berbasis sesi pengguna.",
    features: [
      "Pengaturan kuota limit waktu penggunaan per aplikasi",
      "Mekanisme status pembatasan sesi (session lock logic)",
      "Pencatatan log durasi pemakaian perangkat",
    ],
    technology: ["System Logic Design", "State Machine", "Algorithm Logic", "Python / C Prototype"],
    role: "System Logic Designer & Requirement Analyst",
    developmentProcess: [
      "Memetakan state machine dan alur logika pengecekan kondisi waktu pemakaian secara periodik.",
      "Menyusun algoritma pembatasan akses dan penanganan notifikasi batas sesi.",
    ],
    result:
      "Spesifikasi logika sistem pembatasan waktu operasional aplikasi siap diimplementasikan. [Tingkat efektivitas pembatasan: Belum diisi]",
    githubUrl: "#",
  },
  {
    id: "perpustakaan",
    title: "Sistem Informasi Manajemen Perpustakaan",
    category: "Information System",
    tag: "Sirkulasi Buku & Kalkulasi Denda",
    overview:
      "Aplikasi web pengelolaan inventaris buku, peminjaman, pengembalian, dan penghitungan denda otomatis.",
    problem:
      "Kesulitan dalam melacak ketersediaan stok buku, tanggal jatuh tempo peminjaman, dan penagihan denda keterlambatan secara akurat.",
    solution:
      "Membangun sistem sirkulasi terpusat yang memvalidasi ketersediaan stok secara otomatis saat peminjaman terjadi dan menghitung denda keterlambatan.",
    features: [
      "Katalog buku dan pelacakan status inventaris",
      "Manajemen sirkulasi peminjaman dan pengembalian",
      "Kalkulasi denda otomatis berdasarkan selisih tanggal jatuh tempo",
    ],
    technology: ["PHP", "MySQL", "JavaScript", "Relational Database Modeling"],
    role: "Backend Developer & Database Designer",
    developmentProcess: [
      "Merancang relasi entitas anggota, buku, dan tabel transaksi peminjaman.",
      "Mengimplementasikan logika pembaruan stok otomatis saat transaksi sirkulasi dilakukan.",
      "Membangun fungsi kalkulasi denda berdasarkan selisih tanggal jatuh tempo.",
    ],
    result:
      "Sistem sirkulasi buku yang mencatat riwayat transaksi dan denda secara konsisten. [Data buku teruji: Belum diisi]",
    githubUrl: "#",
  },
];
