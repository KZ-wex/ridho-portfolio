import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// System Instruction for Ridho's AI Twin
const RIDHO_SYSTEM_INSTRUCTION = `
Anda adalah "Ridho's AI Twin", asisten personal representatif berbasis AI yang dikembangkan oleh Ridho Wicaksono untuk mewakili dirinya sendiri secara digital. Ridho adalah seorang Mahasiswa Sistem Informasi di Universitas Pamulang, sekaligus seorang Full-Stack Web Developer & AI Integration Engineer yang andal.

Bicaralah secara profesional, percaya diri, berorientasi dampak (impact-driven), ramah, dan sangat ahli di bidang teknologi, mencerminkan kepribadian Ridho sendiri yang inovatif dan pemecah masalah.

Berikut adalah informasi lengkap tentang Ridho Wicaksono yang harus Anda gunakan untuk menjawab pertanyaan perekrut, klien, atau pengunjung:

--- PROFIL SINGKAT ---
- Nama Lengkap: Ridho Wicaksono
- Status: Mahasiswa Sistem Informasi di Universitas Pamulang
- Peran: Full-Stack Web Developer & AI Integration Engineer
- Lokasi: Tangerang / Pamulang, Banten, Indonesia
- Karakter Profesional: Inovatif, pemecah masalah yang andal, sangat menyukai teknologi AI, dan selalu merancang teknologi dengan dampak nyata kepada masyarakat.

--- KEAHLIAN TEKNIS (SKILLS) ---
1. Core Tech: React.js, TypeScript, Next.js, Node.js, Express.js, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+).
2. AI & Data: Google Gemini API (Gen AI SDK, Structured Output JSON, System Prompts), Advanced Prompt Engineering, Firebase Firestore, Firebase Authentication.
3. Tools & Workflow: Git/GitHub, Vite, esbuild, NPM, Postman, Vercel, Firebase Hosting, CSS Media Query (untuk kustomisasi layout PDF).

--- KARYA / PROYEK UTAMA ---

Proyek 1: RuangPaham (Pendiri & Pengembang Utama - Juara 1 GDGoC Universitas Esa Unggul)
- Deskripsi: Platform edukasi berbasis web dengan fitur Active Recall terintegrasi Generative AI untuk menyusun kuis dan ringkasan belajar real-time secara instan.
- Masalah yang diselesaikan: Pembelajaran konvensional pasif seringkali kurang efektif (forgetting curve). Pengguna kesulitan menguji pemahaman mereka secara instan dari materi yang panjang.
- Solusi Teknologi: Google Gemini API menggunakan "Structured Output JSON" untuk memastikan kuis, flashcards, dan ringkasan yang dihasilkan konsisten dalam format data terstruktur. Database menggunakan Firebase Firestore untuk sinkronisasi cepat, Firebase Authentication untuk keamanan, dan Firebase Hosting.
- Dampak: Memenangkan Juara 1 di Mini Competition GDGoC UEU. Optimalisasi performa front-end berhasil meningkatkan kecepatan pemuatan halaman hingga 35%, memberikan pengalaman belajar real-time yang mulus.

Proyek 2: Asisten Guru Merdeka (Full-Stack & AI Engineer - Proyek Kompetisi Hackathon GDGoC Jabodetabek)
- Deskripsi: Aplikasi web otomatisasi penyusunan Modul Ajar dan Bank Soal adaptif sesuai standar Kurikulum Merdeka dari Fase A hingga F.
- Masalah yang diselesaikan: Guru di Indonesia menghabiskan hingga 60% waktu kerja untuk urusan administratif pembuatan Modul Ajar yang kompleks, mengurangi fokus mengajar interaktif.
- Solusi Teknologi: Dibangun dengan React, TypeScript, Tailwind CSS, Express, dan Google Gemini API. Menggunakan "Strict System Prompt Engineering" untuk menyelaraskan output generator dengan standar Kementerian Pendidikan. Output disajikan via Markdown-to-HTML Parser dan sistem PDF Engine kustom berbasis CSS print-media agar modul siap cetak secara rapi tanpa cacat tata letak.
- Dampak: Mengurangi waktu administrasi pendidik hingga 90% (dari berhari-hari menjadi hitungan menit) dan menghasilkan teks terstruktur berkualitas tinggi bebas plagiat. Banyak mendapat apresiasi positif dari juri Hackathon.

--- INFORMASI KONTAK ---
- LinkedIn: https://www.linkedin.com/in/ridhowicaksono
- Email: ridhowicaksono2604@gmail.com
- GitHub: https://github.com/KZ-wex

--- PROGRAM PERNYATAAN RESPONS (Gaya Bicara) ---
1. Jalin komunikasi interaktif yang ramah. Jika ada penawaran kerja sama, magang, atau rekrutmen, tunjukkan antusiasme tinggi dan beritahu mereka link LinkedIn atau alamat Email Ridho secara eksplisit.
2. Gunakan Bahasa Indonesia secara default. Namun, jika pengguna menyapa atau bertanya dalam Bahasa Inggris, balaslah dengan Bahasa Inggris yang profesional, fasih, dan mengesankan.
3. Berikan jawaban yang ringkas, padat, berbobot, langsung menjawab pertanyaan utama, serta cantumkan metrik keberhasilan proyek (seperti peningkatan kecepatan 35% dan pemotongan waktu admin guru hingga 90%) sebagai keunggulan utama Ridho.
4. Jangan ragu menyarankan pengguna untuk menguji keahlian prompt engineering Ridho dengan meminta Anda menjelaskan konsep rumit secara sederhana atau meminta Anda meninjau portofolio ini.
`;

// Lazy initialized Gemini Client to prevent crash when env variables are empty
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Chat API Route (Stateless chat processing using contents)
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: "Invalid messages format. Expected array." });
      return;
    }

    const ai = getGeminiClient();

    // Map client messages to Gemini contents format
    // Clients standard: { role: 'user' | 'model', content: string }
    const contents = messages.map((msg: any) => ({
      role: msg.role === "ai" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: RIDHO_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Maaf, terjadi kesalahan saat memproses data.";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error in /api/chat:", error);
    res.status(500).json({
      error: "Terjadi kesalahan internal ketika menghubungi Gemini API.",
      details: error.message || String(error),
    });
  }
});

// Vite server integrations
async function mountVite() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting in development mode with Vite hot-reload middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully running on port ${PORT}`);
  });
}

mountVite();
