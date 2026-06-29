import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionWrapper from './SectionWrapper'
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'
import flowchartImg from '../assets/flowchart.png'

const BLUE = '#2563eb'

const ERDSvg = () => (
  <svg viewBox="0 0 220 140" className="w-full h-full" fill="none">
    <rect x="8" y="14" width="72" height="100" rx="5" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5"/>
    <rect x="8" y="14" width="72" height="20" rx="5" fill="#2563eb"/>
    <text x="44" y="28" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold">users</text>
    <line x1="8" y1="48" x2="80" y2="48" stroke="#e2e8f0" strokeWidth="1"/>
    {['🔑 id','name','email','role','status','created_at'].map((f,i)=>(
      <text key={f} x="18" y={56+i*14} fill="#64748b" fontSize="6.5">{f}</text>
    ))}
    <rect x="132" y="8" width="72" height="72" rx="5" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5"/>
    <rect x="132" y="8" width="72" height="20" rx="5" fill="#16a34a"/>
    <text x="168" y="22" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold">orders</text>
    {['🔑 id','🔗 user_id','total','status'].map((f,i)=>(
      <text key={f} x="142" y={42+i*13} fill="#64748b" fontSize="6.5">{f}</text>
    ))}
    <rect x="132" y="90" width="72" height="50" rx="5" fill="#fefce8" stroke="#fde047" strokeWidth="1.5"/>
    <rect x="132" y="90" width="72" height="20" rx="5" fill="#ca8a04"/>
    <text x="168" y="104" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold">products</text>
    {['🔑 id','name','price'].map((f,i)=>(
      <text key={f} x="142" y={120+i*12} fill="#64748b" fontSize="6.5">{f}</text>
    ))}
    <line x1="80" y1="45" x2="132" y2="32" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,2"/>
    <line x1="80" y1="70" x2="132" y2="110" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,2"/>
    <text x="96" y="35" fill="#94a3b8" fontSize="6">1  N</text>
    <text x="96" y="96" fill="#94a3b8" fontSize="6">1  N</text>
  </svg>
)

const DFDSvg = () => (
  <svg viewBox="0 0 220 140" className="w-full h-full" fill="none">
    <rect x="6" y="56" width="40" height="24" rx="3" fill="#faf5ff" stroke="#c084fc" strokeWidth="1.5"/>
    <text x="26" y="71" textAnchor="middle" fill="#7c3aed" fontSize="6.5" fontWeight="bold">User</text>
    <circle cx="88" cy="38" r="26" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5"/>
    <text x="88" y="35" textAnchor="middle" fill="#1d4ed8" fontSize="6" fontWeight="bold">1.0</text>
    <text x="88" y="46" textAnchor="middle" fill="#1d4ed8" fontSize="6">Login</text>
    <circle cx="88" cy="108" r="26" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5"/>
    <text x="88" y="105" textAnchor="middle" fill="#1d4ed8" fontSize="6" fontWeight="bold">2.0</text>
    <text x="88" y="116" textAnchor="middle" fill="#1d4ed8" fontSize="6">Process</text>
    <line x1="152" y1="58" x2="208" y2="58" stroke="#f97316" strokeWidth="1.5"/>
    <line x1="152" y1="72" x2="208" y2="72" stroke="#f97316" strokeWidth="1.5"/>
    <text x="180" y="68" textAnchor="middle" fill="#ea580c" fontSize="6.5" fontWeight="bold">D1 Database</text>
    <line x1="46" y1="63" x2="62" y2="48" stroke="#6366f1" strokeWidth="1.5"/>
    <text x="44" y="51" fill="#6366f1" fontSize="5.5">Input</text>
    <line x1="46" y1="69" x2="62" y2="100" stroke="#6366f1" strokeWidth="1.5"/>
    <line x1="114" y1="45" x2="152" y2="60" stroke="#6366f1" strokeWidth="1.5"/>
    <text x="120" y="46" fill="#6366f1" fontSize="5.5">Auth</text>
    <line x1="114" y1="102" x2="152" y2="68" stroke="#6366f1" strokeWidth="1.5"/>
    <text x="118" y="89" fill="#6366f1" fontSize="5.5">R/W</text>
    <line x1="88" y1="64" x2="88" y2="82" stroke="#6366f1" strokeWidth="1.5"/>
    <polygon points="88,84 84,76 92,76" fill="#6366f1"/>
    <polygon points="152,60 144,55 144,63" fill="#6366f1"/>
  </svg>
)

const FlowchartImg = () => (
  <img src={flowchartImg} alt="Business Process Flowchart" className="w-full h-full object-contain" />
)

const DBSvg = () => (
  <svg viewBox="0 0 220 140" className="w-full h-full" fill="none">
    <ellipse cx="66" cy="28" rx="42" ry="14" fill="#dbeafe" stroke="#60a5fa" strokeWidth="1.5"/>
    <rect x="24" y="28" width="84" height="50" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5"/>
    <ellipse cx="66" cy="78" rx="42" ry="14" fill="#dbeafe" stroke="#60a5fa" strokeWidth="1.5"/>
    <text x="66" y="31" textAnchor="middle" fill="#1d4ed8" fontSize="8" fontWeight="bold">PostgreSQL</text>
    <text x="66" y="50" textAnchor="middle" fill="#3b82f6" fontSize="6.5">users · transactions</text>
    <text x="66" y="63" textAnchor="middle" fill="#3b82f6" fontSize="6.5">products · orders</text>
    <ellipse cx="162" cy="72" rx="38" ry="12" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
    <rect x="124" y="72" width="76" height="50" rx="4" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5"/>
    <ellipse cx="162" cy="122" rx="38" ry="12" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
    <text x="162" y="75" textAnchor="middle" fill="#15803d" fontSize="8" fontWeight="bold">MongoDB</text>
    <text x="162" y="92" textAnchor="middle" fill="#16a34a" fontSize="6">{"{ _id, name, items[] }"}</text>
    <text x="162" y="105" textAnchor="middle" fill="#16a34a" fontSize="6">{"{ _id, status, meta }"}</text>
    <line x1="108" y1="55" x2="124" y2="80" stroke="#f97316" strokeWidth="2" strokeDasharray="5,3"/>
    <polygon points="124,80 116,74 119,82" fill="#f97316"/>
    <text x="107" y="64" fill="#ea580c" fontSize="6.5" fontWeight="bold">migrate</text>
  </svg>
)

const APISvg = () => (
  <svg viewBox="0 0 220 140" className="w-full h-full" fill="none">
    {[
      { y:10, m:'GET',    bg:'#dcfce7', tc:'#15803d', mc:'#16a34a', p:'/api/users' },
      { y:38, m:'POST',   bg:'#dbeafe', tc:'#1d4ed8', mc:'#2563eb', p:'/api/orders' },
      { y:66, m:'PUT',    bg:'#fef3c7', tc:'#92400e', mc:'#d97706', p:'/api/orders/:id' },
      { y:94, m:'DELETE', bg:'#fee2e2', tc:'#991b1b', mc:'#dc2626', p:'/api/users/:id' },
    ].map(ep => (
      <g key={ep.y}>
        <rect x="8" y={ep.y} width="204" height="22" rx="5" fill={ep.bg} stroke="#e2e8f0" strokeWidth="1"/>
        <rect x="11" y={ep.y+2} width="42" height="18" rx="4" fill={ep.mc}/>
        <text x="32" y={ep.y+14} textAnchor="middle" fill="white" fontSize="6.5" fontWeight="bold">{ep.m}</text>
        <text x="62" y={ep.y+14} fill={ep.tc} fontSize="7" fontFamily="monospace">{ep.p}</text>
        <rect x="186" y={ep.y+4} width="22" height="14" rx="3" fill="white" stroke="#e2e8f0"/>
        <text x="197" y={ep.y+14} textAnchor="middle" fill="#64748b" fontSize="6">200</text>
      </g>
    ))}
    <rect x="8" y="124" width="204" height="12" rx="3" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="16" y="133" fill="#94a3b8" fontSize="5.5" fontFamily="monospace">{"response: { data, status, message, meta }"}</text>
  </svg>
)

const SequenceSvg = () => {
  const actors = [
    { label: 'Client', x: 24,  fill: '#2563eb', stroke: '#93c5fd', bg: '#eff6ff' },
    { label: 'API',    x: 82,  fill: '#7c3aed', stroke: '#c4b5fd', bg: '#f5f3ff' },
    { label: 'Service',x: 148, fill: '#0891b2', stroke: '#67e8f9', bg: '#ecfeff' },
    { label: 'DB',     x: 205, fill: '#15803d', stroke: '#86efac', bg: '#f0fdf4' },
  ]
  const messages = [
    { from: 24,  to: 82,  y: 42,  label: 'POST /login',      color: '#2563eb', ret: false },
    { from: 82,  to: 148, y: 57,  label: 'validateUser()',    color: '#7c3aed', ret: false },
    { from: 148, to: 205, y: 72,  label: 'SELECT user',       color: '#0891b2', ret: false },
    { from: 205, to: 148, y: 87,  label: 'user data',         color: '#15803d', ret: true  },
    { from: 148, to: 82,  y: 102, label: 'JWT token',         color: '#0891b2', ret: true  },
    { from: 82,  to: 24,  y: 117, label: '200 OK + JWT',      color: '#7c3aed', ret: true  },
  ]
  return (
    <svg viewBox="0 0 230 140" className="w-full h-full" fill="none">
      {/* lifelines */}
      {actors.map(a => (
        <line key={a.x} x1={a.x} y1={26} x2={a.x} y2={134} stroke="#e2e8f0" strokeWidth="1.2" strokeDasharray="3,2"/>
      ))}
      {/* actor boxes */}
      {actors.map(a => (
        <g key={a.label}>
          <rect x={a.x - 19} y={6} width={38} height={16} rx="4" fill={a.bg} stroke={a.stroke} strokeWidth="1.2"/>
          <text x={a.x} y={17} textAnchor="middle" fill={a.fill} fontSize="6" fontWeight="bold">{a.label}</text>
        </g>
      ))}
      {/* messages */}
      {messages.map((m, i) => {
        const dir = m.to > m.from ? 1 : -1
        const arrowX = m.to + (dir < 0 ? 4 : -4)
        return (
          <g key={i}>
            <line
              x1={m.from} y1={m.y} x2={m.to} y2={m.y}
              stroke={m.color} strokeWidth="1.2"
              strokeDasharray={m.ret ? '4,2' : undefined}/>
            <polygon
              points={`${m.to},${m.y} ${m.to - dir*7},${m.y - 3} ${m.to - dir*7},${m.y + 3}`}
              fill={m.color}/>
            <text
              x={(m.from + m.to) / 2} y={m.y - 3}
              textAnchor="middle" fill={m.color} fontSize="5.5" fontWeight={m.ret ? '400' : '600'}>
              {m.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

const items = [
  {
    label: 'Flowchart',
    title: 'Business Process Flowchart',
    desc: 'Pemetaan alur proses bisnis dan decision logic sistem untuk komunikasi teknis dengan stakeholder.',
    detail: 'Memetakan alur proses bisnis end-to-end menggunakan standar flowchart yang dapat dipahami oleh stakeholder teknis maupun non-teknis. Mencakup decision point, error handling flow, dan happy path untuk setiap modul utama sistem.',
    highlights: ['Happy path & error flow', 'Decision logic mapping', 'Komunikasi ke stakeholder non-teknis', 'Dibuat dengan Figma & Draw.io'],
    tags: ['Figma', 'Lucidchart', 'Mermaid', 'Draw.io'],
    Svg: FlowchartImg,
  },
  {
    label: 'DFD',
    title: 'Data Flow Diagram',
    desc: 'Visualisasi aliran data antara entitas eksternal, proses, dan data store untuk analisis kebutuhan sistem.',
    detail: 'Membuat DFD Level 0 (Context Diagram) hingga Level 1 untuk memetakan aliran data sistem secara menyeluruh. Digunakan sebagai artefak utama dalam requirements gathering bersama stakeholder non-teknis, serta sebagai acuan desain proses backend.',
    highlights: ['Context Diagram (Level 0)', 'DFD Level 1 per modul', 'Identifikasi entitas eksternal', 'Acuan analisis kebutuhan sistem'],
    tags: ['Level 0', 'Level 1', 'System Analysis'],
    Svg: DFDSvg,
  },
  {
    label: 'ERD',
    title: 'Entity Relationship Diagram',
    desc: 'Perancangan relasi antar entitas sistem untuk implementasi PostgreSQL & MongoDB pada SIMRS dan sistem integrasi.',
    detail: 'Merancang ERD untuk sistem SIMRS dan integrasi multi-platform yang mencakup identifikasi entitas utama, penentuan atribut, serta normalisasi schema hingga 3NF. Relasi antar tabel didokumentasikan lengkap dengan cardinality dan foreign key constraint untuk memastikan integritas data.',
    highlights: ['Normalisasi schema 3NF', 'Relasi one-to-many & many-to-many', 'Foreign key & constraint mapping', 'Dokumentasi ERD untuk handoff tim dev'],
    tags: ['PostgreSQL', 'Data Modeling', 'Normalisasi'],
    Svg: ERDSvg,
  },
  {
    label: 'Database Design',
    title: 'Database Architecture',
    desc: 'Desain struktur database PostgreSQL & MongoDB termasuk migrasi data MySQL → MongoDB pada proyek integrasi sistem.',
    detail: 'Merancang arsitektur database hybrid yang menggunakan PostgreSQL untuk data transaksional dan MongoDB untuk data semi-struktural. Melakukan analisis dan eksekusi migrasi data dari MySQL ke MongoDB dengan zero data loss, termasuk transformasi schema dan validasi post-migration.',
    highlights: ['Hybrid PostgreSQL + MongoDB', 'Migrasi MySQL → MongoDB', 'Index optimization', 'Schema validation & rollback plan'],
    tags: ['PostgreSQL', 'MongoDB', 'Migration'],
    Svg: DBSvg,
  },
  {
    label: 'API Design',
    title: 'API Endpoint Design',
    desc: 'Perancangan REST API endpoint, request/response structure & optimasi payload untuk efisiensi pertukaran data.',
    detail: 'Merancang kontrak API RESTful yang konsisten mencakup naming convention, HTTP method, status code, dan struktur response standar. Melakukan optimasi payload untuk mengurangi data transfer dan latensi, serta mendokumentasikan endpoint dalam format yang dapat langsung dikonsumsi tim frontend maupun integrasi pihak ketiga.',
    highlights: ['REST naming convention', 'Standarisasi response structure', 'Payload optimization', 'Dokumentasi untuk konsumsi tim frontend & third-party'],
    tags: ['REST API', 'JSON', 'Integration'],
    Svg: APISvg,
  },
  {
    label: 'Sequence Diagram',
    title: 'Sequence Diagram',
    desc: 'Pemodelan interaksi antar komponen sistem secara sekuensial untuk menggambarkan alur komunikasi dan urutan proses.',
    detail: 'Membuat sequence diagram untuk mendokumentasikan alur interaksi antar aktor dan komponen sistem — mulai dari request masuk, proses validasi, operasi database, hingga response kembali ke client. Digunakan sebagai artefak teknis untuk komunikasi antar tim dan sebagai acuan implementasi.',
    highlights: ['Pemodelan alur request-response', 'Identifikasi interaksi antar service', 'Dokumentasi urutan proses autentikasi & otorisasi', 'Acuan implementasi untuk tim backend'],
    tags: ['System Design', 'UML', 'Draw.io'],
    Svg: SequenceSvg,
  },
]

const ZOOM_MIN = 0.5
const ZOOM_MAX = 4
const ZOOM_STEP = 0.25

function SvgLightbox({ Svg, title, onClose }) {
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const dragRef = useRef(null)

  const clampZoom = (v) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, v))

  const onWheel = useCallback((e) => {
    e.preventDefault()
    setZoom(z => clampZoom(z + (e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP)))
  }, [])

  const onMouseDown = useCallback((e) => {
    if (e.button !== 0) return
    dragRef.current = { startX: e.clientX - offset.x, startY: e.clientY - offset.y }
    e.currentTarget.style.cursor = 'grabbing'
  }, [offset])

  const onMouseMove = useCallback((e) => {
    if (!dragRef.current) return
    setOffset({ x: e.clientX - dragRef.current.startX, y: e.clientY - dragRef.current.startY })
  }, [])

  const onMouseUp = useCallback((e) => {
    dragRef.current = null
    if (e.currentTarget) e.currentTarget.style.cursor = 'grab'
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (el) el.addEventListener('wheel', onWheel, { passive: false })
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === '+' || e.key === '=') setZoom(z => clampZoom(z + ZOOM_STEP))
      if (e.key === '-') setZoom(z => clampZoom(z - ZOOM_STEP))
      if (e.key === '0') { setZoom(1); setOffset({ x: 0, y: 0 }) }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      if (el) el.removeEventListener('wheel', onWheel)
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose, onWheel])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      style={{ zIndex: 60 }}
      className="fixed inset-0 flex flex-col bg-slate-50"
      onClick={onClose}>

      {/* toolbar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 flex-shrink-0 bg-white shadow-sm"
           onClick={e => e.stopPropagation()}>
        <span className="text-sm text-slate-600 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>{title}</span>
        <div className="flex items-center gap-1">
          <button onClick={() => setZoom(z => clampZoom(z - ZOOM_STEP))}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors" title="Zoom out (-)">
            <ZoomOut size={17} strokeWidth={1.75} />
          </button>
          <button onClick={() => { setZoom(1); setOffset({ x: 0, y: 0 }) }}
            className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-colors text-sm font-semibold min-w-[56px] text-center"
            style={{ fontFamily: 'Inter, sans-serif' }}>
            {Math.round(zoom * 100)}%
          </button>
          <button onClick={() => setZoom(z => clampZoom(z + ZOOM_STEP))}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors" title="Zoom in (+)">
            <ZoomIn size={17} strokeWidth={1.75} />
          </button>
          <div className="w-px h-5 bg-slate-200 mx-1" />
          <button onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors">
            <X size={17} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* canvas */}
      <div ref={containerRef}
           className="flex-1 overflow-hidden flex items-center justify-center"
           style={{ cursor: 'grab' }}
           onClick={e => e.stopPropagation()}
           onMouseDown={onMouseDown}
           onMouseMove={onMouseMove}
           onMouseUp={onMouseUp}
           onMouseLeave={onMouseUp}>
        <div style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`, transformOrigin: 'center center', transition: dragRef.current ? 'none' : 'transform 0.15s ease', width: 600, height: 380, userSelect: 'none' }}>
          <Svg />
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 pb-4 flex-shrink-0" style={{ fontFamily: 'Inter, sans-serif' }}>
        Scroll untuk zoom · tekan <kbd className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-500 text-xs font-medium">0</kbd> untuk reset · <kbd className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-500 text-xs font-medium">ESC</kbd> untuk tutup
      </p>
    </motion.div>
  )
}

function PortfolioModal({ item, onClose }) {
  const [lightbox, setLightbox] = useState(false)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && !lightbox) onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, lightbox])

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm"
          onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}>

            {/* header */}
            <div className="flex items-start justify-between p-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="section-badge">{item.label}</span>
                <h2 className="text-sm font-bold text-slate-800">{item.title}</h2>
              </div>
              <button onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors flex-shrink-0">
                <X size={16} strokeWidth={2} />
              </button>
            </div>

            {/* SVG preview — klik untuk lightbox */}
            <div onClick={() => setLightbox(true)}
              className="relative bg-slate-50 border-b border-slate-100 h-56 p-6 flex items-center justify-center cursor-zoom-in group">
              <item.Svg />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/10 rounded-none">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 flex items-center gap-1.5 text-xs text-slate-600 font-medium shadow">
                  <Maximize2 size={12} strokeWidth={2} /> Perbesar
                </div>
              </div>
            </div>

            {/* body */}
            <div className="p-5 flex flex-col gap-4">
              <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>

              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">Highlights</h3>
                <ul className="flex flex-col gap-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="text-blue-500 font-bold mt-0.5 flex-shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">Tools & Teknologi</h3>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map(t => <span key={t} className="tag-slate text-[10px]">{t}</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {lightbox && <SvgLightbox Svg={item.Svg} title={item.title} onClose={() => setLightbox(false)} />}
      </AnimatePresence>
    </>
  )
}

export default function Portfolio() {
  const [ref, inView] = useInView()
  const [selected, setSelected] = useState(null)

  return (
    <SectionWrapper id="portfolio" label="05" title="Portofolio">
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div key={item.label}
            initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            onClick={() => setSelected(item)}
            className="card overflow-hidden flex flex-col border-t-4 border-t-blue-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            <div className="bg-slate-50 h-40 p-3 flex items-center justify-center border-b border-slate-100">
              <item.Svg />
            </div>
            <div className="p-4 flex flex-col gap-2 flex-1">
              <span className="section-badge self-start">{item.label}</span>
              <h3 className="text-sm font-bold text-slate-800 leading-snug">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed flex-1">{item.desc}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {item.tags.map(t => <span key={t} className="tag-slate text-[10px]">{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-slate-400 mt-6">
        Klik card untuk melihat detail — artifact asli tersedia atas permintaan.
      </p>

      {selected && <PortfolioModal item={selected} onClose={() => setSelected(null)} />}
    </SectionWrapper>
  )
}
