export default function CronosSvgPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
      <svg
        viewBox="0 0 760 410"
        className="block h-auto w-full select-none"
        role="img"
        aria-label="Prévia vetorial da interface real do UFABC Cronos mostrando o quadro de horários com disciplinas, créditos e turmas"
      >
        <defs>
          <linearGradient id="cronosYellow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#fde047" />
          </linearGradient>
          <linearGradient id="cronosBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#cfe3fc" />
          </linearGradient>
          <filter id="cardShadow" x="-4%" y="-4%" width="108%" height="110%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0f172a" floodOpacity="0.06" />
          </filter>
        </defs>

        {/* Fundo principal */}
        <rect width="760" height="410" fill="#ffffff" />

        {/* Cabeçalho: Quadro de horários + badges */}
        <text
          x="20"
          y="38"
          fill="#0f172a"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="-0.02em"
        >
          Quadro de horários
        </text>

        {/* Badge Créditos: 16 */}
        <rect x="216" y="18" width="96" height="26" rx="6" fill="#dcfce7" />
        <text
          x="264"
          y="35"
          textAnchor="middle"
          fill="#15803d"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="12"
          fontWeight="600"
        >
          Créditos: 16
        </text>

        {/* Badge Estamos no: Quinzenal II */}
        <rect x="322" y="18" width="174" height="26" rx="6" fill="#dbeafe" />
        <text
          x="409"
          y="35"
          textAnchor="middle"
          fill="#2563eb"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="12"
          fontWeight="600"
        >
          Estamos no: Quinzenal II
        </text>

        {/* Grade da tabela */}
        <g stroke="#e2e8f0" strokeWidth="1">
          {/* Borda externa da tabela */}
          <rect x="20" y="58" width="720" height="332" rx="8" fill="#ffffff" />
          {/* Linha horizontal cabeçalho */}
          <line x1="20" y1="106" x2="740" y2="106" />
          {/* Linha horizontal 9:00 */}
          <line x1="20" y1="234" x2="108" y2="234" />
          <line x1="424" y1="234" x2="582" y2="234" />
          {/* Linha horizontal 10:00 */}
          <line x1="20" y1="362" x2="740" y2="362" />

          {/* Linhas verticais das colunas */}
          <line x1="108" y1="58" x2="108" y2="390" />
          <line x1="266" y1="58" x2="266" y2="390" />
          <line x1="424" y1="58" x2="424" y2="390" />
          <line x1="582" y1="58" x2="582" y2="390" />
        </g>

        {/* Cabeçalhos das colunas */}
        <g
          fill="#334155"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="13"
          fontWeight="600"
          textAnchor="middle"
        >
          <text x="64" y="87">Horário</text>
          <text x="187" y="87">Segunda</text>
          <text x="345" y="87">Terça</text>
          <text x="503" y="87">Quarta</text>
          <text x="661" y="87">Quinta</text>
        </g>

        {/* Coluna de horários */}
        <g
          fill="#475569"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="12"
          textAnchor="middle"
        >
          <text x="64" y="174">8:00 às 9:00</text>
          <text x="64" y="294">9:00 às</text>
          <text x="64" y="311">10:00</text>
        </g>

        {/* Botões "+" na coluna Quarta */}
        {[170, 298].map((cy) => (
          <g key={cy} className="cursor-pointer transition-opacity hover:opacity-80">
            <circle cx="503" cy={cy} r="15" fill="#ecfdf5" stroke="#d1fae5" strokeWidth="1" />
            <path
              d={`M498 ${cy} H508 M503 ${cy - 5} V${cy + 5}`}
              stroke="#10b981"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* Card 1: Segunda - Redes Convergentes */}
        <g
          filter="url(#cardShadow)"
          className="cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
        >
          <rect
            x="114"
            y="112"
            width="146"
            height="244"
            rx="10"
            fill="url(#cronosYellow)"
            stroke="#facc15"
            strokeWidth="0.8"
          />
          <text
            x="124"
            y="131"
            fill="#854d0e"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="10"
            fontWeight="500"
          >
            DA1MCZA023-17SA
          </text>
          <text
            x="124"
            y="152"
            fill="#1e293b"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="13.5"
            fontWeight="700"
          >
            <tspan x="124" dy="0">Redes</tspan>
            <tspan x="124" dy="17">Convergentes</tspan>
          </text>
          <text
            x="124"
            y="194"
            fill="#713f12"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
          >
            Carlos Alberto Kamienski
          </text>

          {/* Pin + Sala */}
          <g transform="translate(124, 206)" fill="none" stroke="#713f12" strokeWidth="1.3">
            <path d="M5 10.5s4-3.2 4-6a4 4 0 1 0-8 0c0 2.8 4 6 4 6Z" />
            <circle cx="5" cy="4.5" r="1.2" fill="#713f12" />
          </g>
          <text
            x="138"
            y="215"
            fill="#422006"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
            fontWeight="600"
          >
            SA <tspan fontWeight="500">Sala: S-207-0</tspan>
          </text>

          <text
            x="124"
            y="234"
            fill="#0284c7"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
            fontWeight="600"
          >
            8:00 às 10:00
          </text>

          <text
            x="124"
            y="256"
            fill="#713f12"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
          >
            Matutino
          </text>
          <rect x="176" y="243" width="48" height="18" rx="4" fill="#f1f5f9" />
          <text
            x="200"
            y="255.5"
            textAnchor="middle"
            fill="#334155"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="9.5"
            fontWeight="700"
          >
            TEORIA
          </text>

          {/* Rodapé do card */}
          <text
            x="124"
            y="341"
            fill="#713f12"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
          >
            Semanal
          </text>
          <g transform="translate(174, 332)" fill="none" stroke="#854d0e" strokeWidth="1.2">
            <circle cx="5" cy="5" r="4.5" />
            <path d="M5 4.5v2.5M5 3h.01" strokeLinecap="round" />
          </g>
          <g transform="translate(200, 332)" fill="none" stroke="#713f12" strokeWidth="1.2">
            <path d="M1.5 4.5a3.5 3.5 0 0 1 6-2l1 1M8.5 5.5a3.5 3.5 0 0 1-6 2l-1-1" strokeLinecap="round" />
          </g>
          <path
            d="M234 334 L240 340 M240 334 L234 340"
            stroke="#ef4444"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>

        {/* Card 2: Terça - Sistemas Inteligentes */}
        <g
          filter="url(#cardShadow)"
          className="cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
        >
          <rect
            x="272"
            y="112"
            width="146"
            height="244"
            rx="10"
            fill="url(#cronosYellow)"
            stroke="#facc15"
            strokeWidth="0.8"
          />
          <text
            x="282"
            y="131"
            fill="#854d0e"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="10"
            fontWeight="500"
          >
            DA1ESZI014-17SA
          </text>
          <text
            x="282"
            y="152"
            fill="#1e293b"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="13.5"
            fontWeight="700"
          >
            <tspan x="282" dy="0">Sistemas</tspan>
            <tspan x="282" dy="17">Inteligentes</tspan>
          </text>
          <text
            x="282"
            y="194"
            fill="#713f12"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
          >
            <tspan x="282" dy="0">Luneque Del Rio De</tspan>
            <tspan x="282" dy="13">Souza E Silva Junior</tspan>
          </text>

          {/* Pin + Sala */}
          <g transform="translate(282, 217)" fill="none" stroke="#713f12" strokeWidth="1.3">
            <path d="M5 10.5s4-3.2 4-6a4 4 0 1 0-8 0c0 2.8 4 6 4 6Z" />
            <circle cx="5" cy="4.5" r="1.2" fill="#713f12" />
          </g>
          <text
            x="296"
            y="226"
            fill="#422006"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
            fontWeight="600"
          >
            SA <tspan fontWeight="500">Sala: S-305-2</tspan>
          </text>

          <text
            x="282"
            y="245"
            fill="#0284c7"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
            fontWeight="600"
          >
            8:00 às 10:00
          </text>

          <text
            x="282"
            y="267"
            fill="#713f12"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
          >
            Matutino
          </text>
          <rect x="334" y="254" width="48" height="18" rx="4" fill="#f1f5f9" />
          <text
            x="358"
            y="266.5"
            textAnchor="middle"
            fill="#334155"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="9.5"
            fontWeight="700"
          >
            TEORIA
          </text>

          {/* Rodapé do card */}
          <text
            x="282"
            y="341"
            fill="#713f12"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
          >
            Semanal
          </text>
          <g transform="translate(332, 332)" fill="none" stroke="#854d0e" strokeWidth="1.2">
            <circle cx="5" cy="5" r="4.5" />
            <path d="M5 4.5v2.5M5 3h.01" strokeLinecap="round" />
          </g>
          <g transform="translate(358, 332)" fill="none" stroke="#713f12" strokeWidth="1.2">
            <path d="M1.5 4.5a3.5 3.5 0 0 1 6-2l1 1M8.5 5.5a3.5 3.5 0 0 1-6 2l-1-1" strokeLinecap="round" />
          </g>
          <path
            d="M392 334 L398 340 M398 334 L392 340"
            stroke="#ef4444"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>

        {/* Card 3: Quinta - Interação Humano-Computador */}
        <g
          filter="url(#cardShadow)"
          className="cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
        >
          <rect
            x="588"
            y="112"
            width="146"
            height="244"
            rx="10"
            fill="url(#cronosBlue)"
            stroke="#bfdbfe"
            strokeWidth="0.8"
          />
          <text
            x="598"
            y="131"
            fill="#1e40af"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="10"
            fontWeight="500"
          >
            DA1MCZA008-17SA
          </text>
          <text
            x="598"
            y="152"
            fill="#0f172a"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="13.5"
            fontWeight="700"
          >
            <tspan x="598" dy="0">Interação Humano-</tspan>
            <tspan x="598" dy="17">Computador</tspan>
          </text>
          <text
            x="598"
            y="194"
            fill="#1e3a8a"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
          >
            Juliana Cristina Braga
          </text>

          {/* Pin + Sala */}
          <g transform="translate(598, 206)" fill="none" stroke="#1e3a8a" strokeWidth="1.3">
            <path d="M5 10.5s4-3.2 4-6a4 4 0 1 0-8 0c0 2.8 4 6 4 6Z" />
            <circle cx="5" cy="4.5" r="1.2" fill="#1e3a8a" />
          </g>
          <text
            x="612"
            y="215"
            fill="#0f172a"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
            fontWeight="600"
          >
            SA <tspan fontWeight="500">Sala: S-206-0</tspan>
          </text>

          <text
            x="598"
            y="234"
            fill="#0284c7"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
            fontWeight="600"
          >
            8:00 às 10:00
          </text>

          <text
            x="598"
            y="256"
            fill="#1e3a8a"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
          >
            Matutino
          </text>
          <rect x="650" y="243" width="48" height="18" rx="4" fill="#ffffff" />
          <text
            x="674"
            y="255.5"
            textAnchor="middle"
            fill="#334155"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="9.5"
            fontWeight="700"
          >
            TEORIA
          </text>

          {/* Rodapé do card */}
          <text
            x="598"
            y="341"
            fill="#1e3a8a"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
          >
            Semanal
          </text>
          <g transform="translate(648, 332)" fill="none" stroke="#1e40af" strokeWidth="1.2">
            <circle cx="5" cy="5" r="4.5" />
            <path d="M5 4.5v2.5M5 3h.01" strokeLinecap="round" />
          </g>
          <g transform="translate(674, 332)" fill="none" stroke="#1e3a8a" strokeWidth="1.2">
            <path d="M1.5 4.5a3.5 3.5 0 0 1 6-2l1 1M8.5 5.5a3.5 3.5 0 0 1-6 2l-1-1" strokeLinecap="round" />
          </g>
          <path
            d="M708 334 L714 340 M714 334 L708 340"
            stroke="#ef4444"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>

        {/* Sugestão visual da próxima faixa de horário (10:00) */}
        <g opacity="0.85">
          <rect x="114" y="368" width="146" height="22" rx="6" fill="#dbeafe" />
          <rect x="430" y="368" width="146" height="22" rx="6" fill="#fef08a" />
          <rect x="588" y="368" width="146" height="22" rx="6" fill="#fef08a" />
        </g>
      </svg>
    </div>
  );
}
