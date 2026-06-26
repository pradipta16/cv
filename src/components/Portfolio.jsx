import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionWrapper from './SectionWrapper'

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

const FlowchartSvg = () => (
  <svg viewBox="0 0 220 150" className="w-full h-full" fill="none">
    <ellipse cx="110" cy="14" rx="32" ry="11" fill="#0f172a"/>
    <text x="110" y="18" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">START</text>
    <line x1="110" y1="25" x2="110" y2="37" stroke="#94a3b8" strokeWidth="1.5"/>
    <polygon points="110,39 106,33 114,33" fill="#94a3b8"/>
    <rect x="74" y="39" width="72" height="20" rx="4" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5"/>
    <text x="110" y="52" textAnchor="middle" fill="#1d4ed8" fontSize="6.5">Input Request</text>
    <line x1="110" y1="59" x2="110" y2="71" stroke="#94a3b8" strokeWidth="1.5"/>
    <polygon points="110,73 106,67 114,67" fill="#94a3b8"/>
    <polygon points="110,73 150,91 110,109 70,91" fill="#fefce8" stroke="#eab308" strokeWidth="1.5"/>
    <text x="110" y="88" textAnchor="middle" fill="#92400e" fontSize="6">Valid?</text>
    <text x="110" y="98" textAnchor="middle" fill="#92400e" fontSize="6">Request</text>
    <line x1="150" y1="91" x2="172" y2="91" stroke="#94a3b8" strokeWidth="1.5"/>
    <text x="156" y="87" fill="#16a34a" fontSize="6" fontWeight="bold">Ya</text>
    <polygon points="174,91 168,87 168,95" fill="#94a3b8"/>
    <rect x="174" y="82" width="36" height="18" rx="4" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5"/>
    <text x="192" y="93" textAnchor="middle" fill="#15803d" fontSize="6">Process</text>
    <line x1="110" y1="109" x2="110" y2="121" stroke="#94a3b8" strokeWidth="1.5"/>
    <text x="114" y="118" fill="#dc2626" fontSize="6" fontWeight="bold">Tidak</text>
    <polygon points="110,123 106,117 114,117" fill="#94a3b8"/>
    <rect x="74" y="123" width="72" height="18" rx="4" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5"/>
    <text x="110" y="135" textAnchor="middle" fill="#dc2626" fontSize="6">Return Error</text>
    <line x1="192" y1="100" x2="192" y2="141" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2"/>
    <line x1="192" y1="141" x2="150" y2="141" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2"/>
    <ellipse cx="120" cy="141" rx="28" ry="10" fill="#0f172a"/>
    <text x="120" y="145" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">END</text>
  </svg>
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

const items = [
  { label:'ERD',            title:'Entity Relationship Diagram', desc:'Perancangan relasi antar entitas sistem untuk implementasi PostgreSQL & MongoDB pada SIMRS dan sistem integrasi.',     tags:['PostgreSQL','Data Modeling','Normalisasi'], Svg:ERDSvg },
  { label:'DFD',            title:'Data Flow Diagram',           desc:'Visualisasi aliran data antara entitas eksternal, proses, dan data store untuk analisis kebutuhan sistem.',             tags:['Level 0','Level 1','System Analysis'],      Svg:DFDSvg },
  { label:'Flowchart',      title:'Business Process Flowchart',  desc:'Pemetaan alur proses bisnis dan decision logic sistem untuk komunikasi teknis dengan stakeholder.',                       tags:['Business Process','Figma','Draw.io'],       Svg:FlowchartSvg },
  { label:'Database Design',title:'Database Architecture',       desc:'Desain struktur database PostgreSQL & MongoDB termasuk migrasi data MySQL → MongoDB pada proyek integrasi sistem.',     tags:['PostgreSQL','MongoDB','Migration'],          Svg:DBSvg },
  { label:'API Design',     title:'API Endpoint Design',         desc:'Perancangan REST API endpoint, request/response structure & optimasi payload untuk efisiensi pertukaran data.',          tags:['REST API','JSON','Integration'],            Svg:APISvg },
]

export default function Portfolio() {
  const [ref, inView] = useInView()
  return (
    <SectionWrapper id="portfolio" label="03" title="Portfolio">
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div key={item.label}
            initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="card overflow-hidden flex flex-col border-t-4 border-t-blue-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default">
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
        Preview adalah representasi visual — artifact asli tersedia atas permintaan.
      </p>
    </SectionWrapper>
  )
}
