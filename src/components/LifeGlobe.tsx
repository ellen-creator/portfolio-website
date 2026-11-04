// A globe that traces the route of my education and work: Hong Kong → Seoul → Ann Arbor.
// Land comes from Natural Earth (world-atlas), drawn with d3 orthographic projection.
// A small Waldo-like walker travels the route.
import { geoOrthographic, geoPath, geoGraticule10, geoInterpolate } from 'd3-geo'
import { feature } from 'topojson-client'
import land110 from 'world-atlas/land-110m.json'

const SIZE = 500
const C = SIZE / 2
const SCENE_SCALE = 1.0 // size of the traveller on the globe
const R = 200 // globe radius in SVG units

// View centred so Hong Kong, Seoul and Ann Arbor all face the viewer
const VIEW_LAT = 55
const VIEW_LON = 165

const CITIES = {
  hongKong: { lat: 22.3, lon: 114.2, title: 'Hong Kong', note: 'Design thinking, undergrad' },
  seoul: { lat: 37.57, lon: 126.98, title: 'Seoul', note: 'Business & consulting' },
  annArbor: { lat: 42.28, lon: -83.74, title: 'Ann Arbor', note: 'UI / UX, UMSI' },
}

const projection = geoOrthographic()
  .rotate([-VIEW_LON, -VIEW_LAT])
  .translate([C, C])
  .scale(R)
  .clipAngle(90)

const path = geoPath(projection)

// Land and graticule, as SVG path strings (back-side geometry is clipped by d3)
const landGeo = feature(land110 as any, (land110 as any).objects.land) as any
const LAND_D = path(landGeo) ?? ''
const GRID_D = path(geoGraticule10()) ?? ''

// Route: great-circle arcs Hong Kong → Seoul → Ann Arbor
const pt = (c: { lat: number; lon: number }): [number, number] => [c.lon, c.lat]
const arcAB = geoInterpolate(pt(CITIES.hongKong), pt(CITIES.seoul))
const arcBC = geoInterpolate(pt(CITIES.seoul), pt(CITIES.annArbor))
const routeGeo = {
  type: 'LineString' as const,
  coordinates: [
    ...Array.from({ length: 41 }, (_, i) => arcAB(i / 40)),
    ...Array.from({ length: 40 }, (_, i) => arcBC((i + 1) / 40)),
  ],
}
const ROUTE_D = path(routeGeo) ?? ''

// Pin position, or null when the city is on the far side
function pin(c: { lat: number; lon: number }) {
  const p = projection([c.lon, c.lat])
  if (!p) return null
  // on the visible side when the angular distance from the view centre is under 90°
  const d = Math.acos(
    Math.sin(rad(VIEW_LAT)) * Math.sin(rad(c.lat)) +
      Math.cos(rad(VIEW_LAT)) * Math.cos(rad(c.lat)) * Math.cos(rad(c.lon - VIEW_LON)),
  )
  return d < Math.PI / 2 ? { x: p[0], y: p[1] } : null
}
const rad = (d: number) => (d * Math.PI) / 180

// Small shaded scenes, one per city: studying in Hong Kong, working in Seoul, painting in Ann Arbor.
// Drawn in a 60×60 box whose base sits at y = 56.
function Shadow() {
  return <ellipse cx="30" cy="56" rx="20" ry="3.2" fill="#2E3B38" fillOpacity="0.3" />
}

function Head({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="5.2" fill="url(#walker-skin)" />
      <path d={`M${cx - 5.4} ${cy - 1.5} A5.4 5.4 0 0 1 ${cx + 5.4} ${cy - 1.5} Z`} fill="url(#walker-hat)" />
      <circle cx={cx - 1.8} cy={cy + 0.3} r="1.2" fill="none" stroke="#2E3B38" strokeWidth="0.6" />
      <circle cx={cx + 1.8} cy={cy + 0.3} r="1.2" fill="none" stroke="#2E3B38" strokeWidth="0.6" />
    </g>
  )
}

// Hong Kong: seated at a desk with a book open
function StudyScene() {
  return (
    <g>
      <Shadow />
      {/* chair */}
      <rect x="12" y="38" width="10" height="3" rx="1" fill="#8E7F6B" />
      <line x1="14" y1="41" x2="13" y2="56" stroke="#6E6252" strokeWidth="1.2" />
      {/* seated body, striped */}
      <rect x="13" y="26" width="11" height="13" rx="3" fill="url(#walker-shirt)" />
      <path d="M13 30 H24 M13 34 H24" stroke="#B5462F" strokeWidth="1.6" />
      <Head cx={18.5} cy={20} />
      {/* desk */}
      <rect x="22" y="36" width="34" height="3" rx="1" fill="url(#walker-desk)" />
      <rect x="25" y="39" width="2" height="16" fill="#7A5A3A" />
      <rect x="51" y="39" width="2" height="16" fill="#7A5A3A" />
      {/* open book */}
      <path d="M30 31 L38 33 L38 36 L30 34 Z" fill="#FFFDF7" stroke="#B5462F" strokeWidth="0.6" />
      <path d="M38 33 L46 31 L46 34 L38 36 Z" fill="#F4F0E6" stroke="#B5462F" strokeWidth="0.6" />
    </g>
  )
}

// Seoul: standing at a desk with a laptop
function WorkScene() {
  return (
    <g>
      <Shadow />
      <rect x="28" y="36" width="30" height="3" rx="1" fill="url(#walker-desk)" />
      <rect x="31" y="39" width="2" height="16" fill="#7A5A3A" />
      <rect x="55" y="39" width="2" height="16" fill="#7A5A3A" />
      {/* laptop */}
      <rect x="34" y="27" width="16" height="10" rx="1" fill="#3B4846" />
      <rect x="35.5" y="28.5" width="13" height="7" fill="#9FC4B0" />
      <rect x="30" y="36.5" width="24" height="1.6" rx="0.8" fill="#2E3B38" />
      {/* standing body, striped */}
      <rect x="14" y="24" width="11" height="15" rx="3" fill="url(#walker-shirt)" />
      <path d="M14 28 H25 M14 32 H25 M14 36 H25" stroke="#B5462F" strokeWidth="1.6" />
      <rect x="15" y="37" width="3" height="16" rx="1" fill="#2E3B38" />
      <rect x="21" y="37" width="3" height="16" rx="1" fill="#2E3B38" />
      <Head cx={19.5} cy={17} />
    </g>
  )
}

// Ann Arbor: painting at an easel
function PaintScene() {
  return (
    <g>
      <Shadow />
      {/* easel */}
      <line x1="16" y1="54" x2="22" y2="18" stroke="#7A5A3A" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="30" y1="54" x2="24" y2="18" stroke="#7A5A3A" strokeWidth="1.6" strokeLinecap="round" />
      {/* canvas with strokes */}
      <rect x="12" y="20" width="20" height="16" rx="1" fill="#FFFDF7" stroke="#B9B09C" strokeWidth="0.6" />
      <path d="M15 30 Q20 22 25 28" stroke="#D45A41" strokeWidth="1.4" fill="none" />
      <circle cx="26" cy="26" r="2" fill="#7FA6C9" />
      <circle cx="18" cy="26" r="1.6" fill="#E7C15B" />
      {/* painter, seated on a stool */}
      <rect x="38" y="44" width="10" height="2" rx="1" fill="#8E7F6B" />
      <rect x="40" y="46" width="1.6" height="10" fill="#6E6252" />
      <rect x="45" y="46" width="1.6" height="10" fill="#6E6252" />
      <rect x="37" y="29" width="11" height="15" rx="3" fill="url(#walker-shirt)" />
      <path d="M37 33 H48 M37 37 H48" stroke="#B5462F" strokeWidth="1.6" />
      <line x1="37" y1="31" x2="28" y2="27" stroke="#B5462F" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="27" x2="25" y2="24" stroke="#8E7F6B" strokeWidth="1" strokeLinecap="round" />
      <Head cx={42.5} cy={22} />
    </g>
  )
}

export default function LifeGlobe() {
  const hk = pin(CITIES.hongKong)
  const se = pin(CITIES.seoul)
  const aa = pin(CITIES.annArbor)

  return (
    <figure className="w-full max-w-[460px] mx-auto text-earth-500 dark:text-earth-400">
      <svg viewBox={`0 0 ${SIZE} ${SIZE + 40}`} className="w-full h-auto" role="img" aria-label="Globe showing the route from Hong Kong to Seoul to Ann Arbor, with a small walker on the path">
        <defs>
          {/* sea and light: lit from the upper left, falling into shadow at the edge */}
          <radialGradient id="globe-sea" cx="34%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#FBF8F1" />
            <stop offset="60%" stopColor="#F1EBDD" />
            <stop offset="100%" stopColor="#D8CFBB" />
          </radialGradient>
          {/* a soft shadow on the far edge that makes the sphere round */}
          <radialGradient id="globe-terminator" cx="40%" cy="38%" r="62%">
            <stop offset="60%" stopColor="#2E3B38" stopOpacity="0" />
            <stop offset="100%" stopColor="#2E3B38" stopOpacity="0.35" />
          </radialGradient>
          <radialGradient id="globe-ground" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2E3B38" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2E3B38" stopOpacity="0" />
          </radialGradient>
          <filter id="globe-lift" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#2E3B38" floodOpacity="0.22" />
          </filter>
          <linearGradient id="walker-shirt" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#D9D2C2" />
          </linearGradient>
          <radialGradient id="walker-skin" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FBE3CC" />
            <stop offset="100%" stopColor="#D9A982" />
          </radialGradient>
          <linearGradient id="walker-desk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B88B5E" />
            <stop offset="100%" stopColor="#7A5A3A" />
          </linearGradient>
          <linearGradient id="walker-hat" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D45A41" />
            <stop offset="100%" stopColor="#8E3520" />
          </linearGradient>
          <clipPath id="globe-clip">
            <circle cx={C} cy={C} r={R} />
          </clipPath>
        </defs>

        <ellipse cx={C} cy={C + R + 18} rx={R * 0.85} ry={14} fill="url(#globe-ground)" />

        <g filter="url(#globe-lift)">
          <circle cx={C} cy={C} r={R} fill="url(#globe-sea)" />
        </g>

        <g clipPath="url(#globe-clip)">
          <path d={GRID_D} fill="none" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="0.8" />
          <path d={LAND_D} fill="#A3B088" stroke="#8C9A70" strokeWidth="0.6" strokeLinejoin="round" />
          <circle cx={C} cy={C} r={R} fill="url(#globe-terminator)" />
        </g>

        <circle cx={C} cy={C} r={R} fill="none" stroke="#B9B09C" strokeWidth="1" />

        {/* route */}
        <path d={ROUTE_D} fill="none" stroke="#B5462F" strokeWidth="2.4" strokeDasharray="2 6" strokeLinecap="round" />

        {/* city pins */}
        {[hk, se, aa].map((p, i) =>
          p ? (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="9" fill="#B5462F" fillOpacity="0.18" />
              <circle cx={p.x} cy={p.y} r="4.5" fill="#B5462F" />
            </g>
          ) : null,
        )}

        {/* city names under each pin, with a light halo so they read over the land */}
        {hk && (
          <text x={hk.x - 6} y={hk.y + 16} textAnchor="end" className="font-sans font-bold fill-earth-900" fontSize="13" stroke="#EBECEC" strokeWidth="3" paintOrder="stroke">Hong Kong</text>
        )}
        {se && (
          <text x={se.x} y={se.y + 18} textAnchor="middle" className="font-sans font-bold fill-earth-900" fontSize="13" stroke="#EBECEC" strokeWidth="3" paintOrder="stroke">Seoul</text>
        )}
        {aa && (
          <text x={aa.x + 6} y={aa.y + 16} textAnchor="start" className="font-sans font-bold fill-earth-900" fontSize="13" stroke="#EBECEC" strokeWidth="3" paintOrder="stroke">Ann Arbor</text>
        )}
        {/* one traveller: studies in Hong Kong, works in Seoul, paints in Ann Arbor */}
        {hk && (
          <g transform={`translate(${hk.x - 30 * SCENE_SCALE} ${hk.y - 56 * SCENE_SCALE}) scale(${SCENE_SCALE})`}>
            <g className="traveller">
              <g className="scene scene-hk"><StudyScene /></g>
              <g className="scene scene-se"><WorkScene /></g>
              <g className="scene scene-aa"><PaintScene /></g>
            </g>
          </g>
        )}
      </svg>

      {hk && se && aa && (
        <style>{`
          @keyframes traveller-move {
            0%, 28% { transform: translate(0px, 0px); }
            40%, 60% { transform: translate(${((se.x - hk.x) / SCENE_SCALE).toFixed(1)}px, ${((se.y - hk.y) / SCENE_SCALE).toFixed(1)}px); }
            72%, 100% { transform: translate(${((aa.x - hk.x) / SCENE_SCALE).toFixed(1)}px, ${((aa.y - hk.y) / SCENE_SCALE).toFixed(1)}px); }
          }
          .traveller { animation: traveller-move 14s ease-in-out infinite; }
          @keyframes scene-hk-show { 0%, 30% { opacity: 1; } 36%, 100% { opacity: 0; } }
          @keyframes scene-se-show { 0%, 38% { opacity: 0; } 42%, 68% { opacity: 1; } 74%, 100% { opacity: 0; } }
          @keyframes scene-aa-show { 0%, 76% { opacity: 0; } 80%, 96% { opacity: 1; } 100% { opacity: 0; } }
          .scene-hk { animation: scene-hk-show 14s linear infinite; }
          .scene-se { animation: scene-se-show 14s linear infinite; }
          .scene-aa { animation: scene-aa-show 14s linear infinite; }
          @media (prefers-reduced-motion: reduce) {
            .traveller, .scene-hk, .scene-se, .scene-aa { animation: none; }
            .scene-se, .scene-aa { opacity: 0; }
          }
        `}</style>
      )}
      <style>{`
        .scene-bob { animation: scene-bob 2.4s ease-in-out infinite alternate; }
        .scene-bob-b { animation: scene-bob 2.4s ease-in-out infinite alternate-reverse; }
        @keyframes scene-bob { from { transform: translateY(0); } to { transform: translateY(-2px); } }
        .walker-bob { animation: walker-bob 0.5s ease-in-out infinite alternate; }
        .walker-leg-a { transform-origin: 0 10px; animation: walker-leg 0.5s ease-in-out infinite alternate; }
        .walker-leg-b { transform-origin: 0 10px; animation: walker-leg 0.5s ease-in-out infinite alternate-reverse; }
        .walker-arm-a { transform-origin: -7px 0px; animation: walker-arm 0.5s ease-in-out infinite alternate-reverse; }
        .walker-arm-b { transform-origin: 7px 0px; animation: walker-arm 0.5s ease-in-out infinite alternate; }
        @keyframes walker-bob { from { transform: translateY(0); } to { transform: translateY(-1.5px); } }
        @keyframes walker-leg { from { transform: rotate(-18deg); } to { transform: rotate(18deg); } }
        @keyframes walker-arm { from { transform: rotate(-22deg); } to { transform: rotate(22deg); } }
        @media (prefers-reduced-motion: reduce) {
          .walker-bob, .walker-leg-a, .walker-leg-b, .walker-arm-a, .walker-arm-b, .scene-bob, .scene-bob-b { animation: none; }
        }
      `}</style>

      <ul className="mt-4 space-y-1 max-w-sm mx-auto text-earth-900 dark:text-earth-50">
        {[
          ['Hong Kong', 'The University of Hong Kong'],
          ['Seoul', 'Google, BCG, Kearney'],
          ['Ann Arbor', 'University of Michigan'],
        ].map(([city, places]) => (
          <li key={city} className="grid grid-cols-[6rem_1fr] items-baseline gap-3 border-t border-earth-300 dark:border-earth-600 pt-1.5">
            <span className="font-sans font-bold uppercase text-xs tracking-wider text-accent">{city}</span>
            <span className="font-serif text-base leading-snug">{places}</span>
          </li>
        ))}
      </ul>
    </figure>
  )
}
