import { Project, SkillCategory } from "./types";

export const PORTFOLIO_OWNER = {
  name: "Ridho Wicaksono",
  title: "Full-Stack Web Developer & AI Integration Engineer",
  institution: "Universitas Pamulang",
  tagline: "Menghubungkan arsitektur web yang kokoh dengan model kecerdasan buatan (LLM) untuk menghasilkan produk digital berkinerja tinggi.",
  headline: "Membangun Aplikasi Web Modern & Terintegrasi AI",
  aboutMe: "Saya adalah mahasiswa Sistem Informasi Universitas Pamulang yang berfokus pada Full-Stack Web Development dan AI Integration Engineering. Menguasai pembuatan aplikasi web responsif serta teknik Structured Prompt Engineering menggunakan Google Gemini API.",
  contacts: {
    email: "ridhowicaksono2604@gmail.com",
    linkedin: "https://www.linkedin.com/in/ridhowicaksono",
    github: "https://github.com/KZ-wex",
    location: "Tangerang / Pamulang, Banten, Indonesia"
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "ruangpaham",
    title: "RuangPaham",
    role: "Pendiri & Pengembang Utama",
    award: "Juara 1 Mini Competition GDGoC Universitas Esa Unggul",
    category: "AI Integration",
    shortDescription: "Platfom edukasi Active Recall cerdas terintegrasi Generative AI.",
    description: "Platform edukasi modern berbasis web yang memadukan teknik belajar aktif 'Active Recall' dengan kecerdasan buatan generatif (Generative AI) untuk efisiensi belajar real-time yang personal, cepat, dan instan.",
    color: "blue",
    techStack: [
      "Google Gemini API",
      "Structured Output JSON",
      "React.js",
      "Tailwind CSS",
      "Firebase Firestore",
      "Firebase Authentication",
      "Firebase Hosting"
    ],
    metrics: [
      {
        label: "Peningkatan Kecepatan",
        value: "+35%",
        description: "Optimalisasi rendering data real-time meningkatkan kecepatan muat halaman."
      },
      {
        label: "Konsistensi AI Output",
        value: "100%",
        description: "Structured JSON schema berhasil menghasilkan kuis & ringkasan bebas eror parser."
      },
      {
        label: "Urutan Prestasi",
        value: "Juara 1",
        description: "Meraih penghargaan terbaik di kompetisi regional GDGoC Universitas Esa Unggul."
      }
    ],
    caseStudy: {
      summary: "RuangPaham merevolusi metode belajar pasif menjadi sistem interaktif berbasis Active Recall. Dengan memanfaatkan Gemini API secara cerdas via skema Structured Output, platform ini secara instan memformulasikan bank pertanyaan, kuis, dan ringkasan berkualitas tinggi langsung dari materi yang dimasukkan oleh siswa.",
      problem: "Metode belajar konvensional yang pasif (seperti membaca ulang buku teks) seringkali tidak efisien dan rentan terjebak dalam fenomena Forgetting Curve Ebbinghaus. Siswa sering kesulitan menguji tingkat pemahaman materi mereka secara mandiri karena menyusun pertanyaan kuis secara manual membutuhkan waktu lama dan menguras tenaga.",
      solution: "Kami membangun RuangPaham dengan memanfaatkan kemampuan penalaran dari Google Gemini API. Meluncurkan modul generator kuis cerdas berbasis 'Structured Output JSON' agar data soal, opsi jawaban, kunci jawaban, dan pembahasan yang diproduksi AI selalu konsisten dan dapat diparsing aman oleh frontend tanpa kegagalan sistem. Kami memakai Firebase Firestore untuk menyimpan & menyinkronkan flashcards pengguna secara instan, serta mengamankan kredensial user via Firebase Authentication.",
      impact: "Proyek ini berhasil memenangkan Juara 1 di Mini Competition GDGoC Universitas Esa Unggul. Optimalisasi arsitektur pengiriman umpan balik secara asinkron dari Gemini API ke UI memangkas waktu pemuatan data real-time hingga 35%, menciptakan alur belajar mulus tanpa jeda tunggu tinggi bagi ribuan pengguna potensial."
    },
    githubUrl: "https://github.com/KZ-wex/ruangpaham",
    demoUrl: "https://ruangpaham.web.app"
  },
  {
    id: "asisten-guru-merdeka",
    title: "Asisten Guru Merdeka",
    role: "Full-Stack & AI Engineer",
    award: "Apresiasi Terbaik GDGoC Jabodetabek Hackathon",
    category: "Full-Stack Web",
    shortDescription: "Aplikasi otomatisasi penyusunan Modul Ajar & Bank Soal Kurikulum Merdeka.",
    description: "Aplikasi web yang mengotomatisasi penyusunan rancangan Modul Ajar komprehensif dan pembuatan Bank Soal adaptif sesuai standar Kurikulum Merdeka Indonesia dari Fase A hingga Fase F.",
    color: "emerald",
    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Google Gemini API",
      "Strict Prompt Engineering",
      "Markdown Parser",
      "CSS Print Media Engine"
    ],
    metrics: [
      {
        label: "Efisiensi Waktu",
        value: "90%",
        description: "Mengurangi beban pengerjaan administrasi guru dari berhari-hari menjadi hitungan menit."
      },
      {
        label: "Keaslian Konten",
        value: "100%",
        description: "Setiap draf pengajaran dirancang orisinal dan bebas dari indikasi plagiarisme."
      },
      {
        label: "Cakupan Kurikulum",
        value: "Fase A-F",
        description: "Mendukung generasi RPP & soal dari tingkat Sekolah Dasar hingga Menengah Atas."
      }
    ],
    caseStudy: {
      summary: "Asisten Guru Merdeka adalah solusi transformatif berbasis AI yang mengotomatisasi penyusunan Modul Ajar berstandar nasional kementerian secara instan. Mengombinasikan prompt engineering ketat dengan tata letak laporan siap cetak (print-ready PDF) untuk memangkas jam kerja administratif guru di Indonesia secara signifikan.",
      problem: "Transisi ke Kurikulum Merdeka mewajibkan guru menyusun modul rancangan pembelajaran yang detail dan adaptif. Dokumen administratif ini memakan hingga 60% waktu produktif para pendidik setiap minggunya, mengalihkan konsentrasi utama mereka dari kegiatan mendidik yang interaktif dan humanis di dalam kelas.",
      solution: "Kami menciptakan asisten otomatisasi berskala penuh yang ditenagai oleh Google Gemini API (Gen AI SDK). Dengan merumuskan 'Strict System Prompt Engineering', kami menyinkronkan respons AI agar sesuai format regulasi resmi kementerian tanpa penyimpangan konteks. Dokumen yang dihasilkan disajikan secara interaktif menggunakan Markdown-to-HTML parser agar guru bisa merevisi drafnya. Tim kami juga mendesain PDF export kustom berbasis CSS Media Queries khusus cetak sehingga dokumen rapi sesuai tata letak cetak tanpa terpotong.",
      impact: "Aplikasi ini memangkas beban kerja administrasi guru hingga 90%. Para guru kini dapat mendesain Modul Ajar lengkap berstandar nasional dalam kurun waktu kurang dari 5 menit, dibandingkan pengerjaan manual yang biasanya memakan waktu berhari-hari. Proyek ini mendulang pujian besar di Hackathon GDGoC Jabodetabek atas dampak sosialnya yang nyata bagi sistem pendidikan Indonesia."
    },
    githubUrl: "https://github.com/KZ-wex/asisten-guru-merdeka",
    demoUrl: "https://asisten-guru-merdeka.dev"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Frontend & Backend Core",
    description: "Arsitektur web modern yang responsif, modular, dan backend API terstruktur.",
    skills: [
      { name: "React.js", status: "Core Stack", icon: "React", description: "Perakitan SPA performa tinggi dengan custom hooks & modular state management." },
      { name: "Node.js & Express", status: "Production Ready", icon: "Node", description: "REST API proxy & middleware server-side aman untuk menyembunyikan API keys." },
      { name: "TypeScript", status: "Core Stack", icon: "TypeScript", description: "Strict type definitions untuk keandalan data lintas komponen web." },
      { name: "Tailwind CSS", status: "Production Ready", icon: "Tailwind", description: "Styling utility-first presisi tinggi dengan sistem desain Vercel/Linear." },
      { name: "JavaScript (ES6+)", status: "Core Stack", icon: "JS", description: "Pemrosesan data asinkronis, manipulasi DOM, dan event handling." },
      { name: "HTML5 & CSS3", status: "Core Stack", icon: "HTML5", description: "Aksesibilitas semantic HTML & CSS Print Media Engine untuk laporan cetak." }
    ]
  },
  {
    title: "AI Architecture & Prompt Engineering",
    description: "Integrasi model kognitif canggih, rekayasa instruksi sistem, dan format data JSON.",
    skills: [
      { name: "Google Gemini API / SDK", status: "Production Ready", icon: "Gemini", description: "Pemanfaatan model Gemini 2.5/3.5 untuk fitur cerdas server-side." },
      { name: "Strict Core Prompt Engineering", status: "Advanced", icon: "Prompt", description: "Perumusan instruksi sistem tanpa alusinasi untuk konsistensi persona." },
      { name: "Structured Output (JSON Schema)", status: "Production Ready", icon: "JSON", description: "Format respons AI terstruktur & valid tanpa risiko syntax error." },
      { name: "Firebase (Firestore, Auth)", status: "Core Stack", icon: "Firebase", description: "Penyimpanan NoSQL dokumen real-time dan otentikasi pengguna." },
      { name: "Google Cloud Grounding", status: "Exploring", icon: "Cloud", description: "Penambatan respons AI dengan sumber data eksternal yang terverifikasi." }
    ]
  },
  {
    title: "Developer Tools & Workflows",
    description: "Siklus pengembangan terstruktur, otomasi build, dan jaminan kualitas kode.",
    skills: [
      { name: "Git & GitHub", status: "Core Stack", icon: "Git", description: "Manajemen versi kode, kolaborasi tim, dan branching workflow." },
      { name: "Vite & Build Tools", status: "Production Ready", icon: "Vite", description: "Dev server kilat dan bundling produksi teroptimasi." },
      { name: "esbuild Server Bundler", status: "Advanced", icon: "Esbuild", description: "Bundling CommonJS/ESM server-side untuk cold-start cepat di Cloud Run." },
      { name: "Postman API Testing", status: "Core Stack", icon: "Postman", description: "Pengujian endpoint API dan verifikasi payload data." },
      { name: "CSS PDF Export Engine", status: "Production Ready", icon: "PDF", description: "Format tata letak cetak dokumen otomatis dari aplikasi web." }
    ]
  }
];

export const RECOMMENDED_PROMPTS = [
  "Siapa Ridho Wicaksono?",
  "Berapa skor performa muat halaman proyek RuangPaham?",
  "Bagaimana proyek Asisten Guru Merdeka memotong beban kerja admin?",
  "Keahlian apa saja yang dimiliki Ridho?",
  "Bagaimana cara menghubungi Ridho?"
];
