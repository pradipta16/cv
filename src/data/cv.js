export const profile = {
  name: 'Gantangsanra Pradipta Putra Krismurtono',
  shortName: 'Gantangsanra P.P.K',
  role: 'System Analyst',
  roles: ['System Analyst', 'Database Designer', 'API Architect', 'Business Analyst'],
  location: 'Sidoarjo, Jawa Timur',
  phone: '0821 4440 9855',
  email: 'gantangsanra@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gpradipta1/',
  linkedinHandle: 'gpradipta1',
  bio: 'System Analyst dengan pengalaman lebih dari 3 tahun dalam analisis kebutuhan bisnis dan perancangan sistem. Berpengalaman menerjemahkan kebutuhan bisnis menjadi solusi teknis melalui business process mapping, flowchart, DFD, ERD, serta desain database menggunakan PostgreSQL dan MongoDB. Berhasil merancang dan mengoptimalkan API endpoint untuk meningkatkan efisiensi pertukaran data dan performa aplikasi.',
}

export const stats = [
  { value: 3, suffix: '+', label: 'Tahun Pengalaman' },
  { value: 2, suffix: '', label: 'Perusahaan' },
  { value: 4, suffix: '+', label: 'Rumah Sakit Diimplementasi' },
]

export const experience = [
  {
    title: 'System Analyst',
    company: 'PT Tamadun Teknologi Internasional',
    location: 'Yogyakarta',
    period: 'Mei 2025 – Sekarang',
    current: true,
    tags: ['PostgreSQL', 'MongoDB', 'API Design', 'ERD', 'DFD'],
    bullets: [
      'Menganalisis kebutuhan bisnis berdasarkan PRD dan menerjemahkannya menjadi spesifikasi teknis sistem.',
      'Mendesain flowchart, DFD, ERD, serta model data untuk implementasi PostgreSQL dan MongoDB/NoSQL.',
      'Merancang struktur database, API endpoint, serta request dan response API untuk integrasi sistem.',
      'Mengoptimalkan desain response API existing sehingga meningkatkan performa sistem secara signifikan.',
      'Membuat dokumentasi teknis dan berkoordinasi dengan stakeholder bisnis & teknis.',
      'Mendukung integrasi service pihak ketiga melalui mapping resource, testing API, dan validasi data.',
      'Melakukan mapping dan migrasi data dari MySQL ke MongoDB.',
    ],
  },
  {
    title: 'System Analyst & Implementor',
    company: 'PT Inova Medika Solusindo',
    location: 'Bandung',
    period: 'Des 2022 – Des 2024',
    current: false,
    tags: ['PostgreSQL', 'SIMRS', 'JIRA', 'Figma', 'Draw.io', 'QA Testing'],
    project: 'Pengembangan, Go Live & Optimalisasi SIMRS – RSUD dr. Rehatta, RSUD dr. Saiful Anwar, RSU Islam Mawardi, RSUD dr. Soegiri',
    bullets: [
      'Menganalisis kebutuhan pengguna dan menerjemahkan ke dalam teknis untuk pengembangan SIMRS.',
      'Mendesain diagram proses bisnis dan model sistem menggunakan Figma & Draw.io.',
      'Merancang dan mengelola struktur basis data PostgreSQL untuk sistem terintegrasi.',
      'Berkoordinasi dengan tim pengembang untuk memastikan integrasi sistem dengan basis data.',
      'Melakukan pengujian sistem secara detail berdasarkan alur skenario yang dirancang.',
      'Melakukan migrasi data dengan memastikan kompatibilitas dan akurasi.',
      'Memberikan pelatihan dan pendampingan kepada pengguna sistem.',
      'Memastikan Go Live berjalan tanpa hambatan di 4 rumah sakit.',
      'Menggunakan JIRA untuk monitoring sprint dan target penyelesaian proyek.',
    ],
  },
]

export const technicalSkills = [
  'System Analysis', 'Business Process Analysis', 'Database Design',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Data Migration & Mapping',
  'API Integration & Testing', 'API Endpoint Design', 'QA Testing',
  'ERD', 'DFD', 'Flowchart', 'SDLC',
]

export const softSkills = [
  { name: 'Analytical Thinking', level: 90 },
  { name: 'Problem Solving', level: 88 },
  { name: 'Stakeholder Management', level: 85 },
  { name: 'Communication', level: 87 },
  { name: 'Cross-functional Collaboration', level: 85 },
  { name: 'Time Management', level: 82 },
]

export const education = {
  school: 'Politeknik Negeri Malang',
  degree: 'D3 Manajemen Informatika',
  gpa: '3.36',
  period: 'Agustus 2019 – Agustus 2022',
}

export const certifications = [
  { name: 'SQL (Intermediate) Certificate', issuer: 'HackerRank', date: 'Juli 2024', color: 'cyan' },
  { name: 'Python', issuer: 'Digital Talent Scholarship', date: 'April 2024', color: 'violet' },
  { name: 'Become a System Analyst', issuer: 'Sevima Expert Sharing Class', date: 'April 2023', color: 'emerald' },
  { name: 'Data Analyst', issuer: 'Coursera', date: 'November 2022', color: 'amber' },
]
