export function HeroVisual() {
  return (
    <div className="relative isolate h-120 w-full overflow-hidden rounded-[22px] border border-white/10 bg-project-visual">

      {/* Background grid and blue glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(#ffffff0a 1px, transparent 1px),
            linear-gradient(90deg, #ffffff0a 1px, transparent 1px)
          `,
          backgroundSize: '42px 42px',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(1,132,199,0.18),transparent_55%)]" />

      {/* Animated X-shaped connection paths */}
      <svg
        viewBox="0 0 500 560"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        fill="none"
      >
        {/* First diagonal */}
        <path
          d="M 55 100 L 445 460"
          stroke="#35b6f5"
          strokeOpacity="0.2"
          strokeWidth="1.5"
        />
        <path
          d="M 55 100 L 445 460"
          className="flow-line"
          stroke="#35b6f5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="5 12"
        />

        
      </svg>

      {/* API card */}
      <div className="absolute left-[8%] top-[5%] z-10 w-[60%] rounded-xl border border-white/15 bg-[#0c0e12]/95 p-5 shadow-2xl backdrop-blur-xl">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-success" />
          <span className="font-mono text-[10px] text-gray-400">
            API / V1
          </span>
        </div>

        <p className="mb-3 font-mono text-xs text-success">
          POST /api/agent/search
        </p>

        <div className="space-y-2">
          <div className="h-1.5 w-[90%] rounded bg-white/10" />
          <div className="h-1.5 w-[70%] rounded bg-white/10" />
          <div className="h-1.5 w-[82%] rounded bg-white/10" />
        </div>

        <div className="mt-4 flex justify-end">
          <span className="rounded bg-success/10 px-2 py-1 font-mono text-[9px] text-success">
            200 OK
          </span>
        </div>
      </div>

      {/* Central engineering node */}
      <div className="absolute left-1/2 top-[50%] z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-bright/60 bg-hero-node-bg shadow-[0_0_35px_rgba(1,132,199,0.3)]">
        <span className="font-bold tracking-tight text-blue-bright">
          EC
        </span>
        <span className="absolute -inset-1.75 rounded-full border border-blue-bright/20 animate-pulse" />
      </div>

      {/* Request / response card */}
      <div className="absolute bottom-[5%] right-[7%] z-10 w-[55%] rounded-xl border border-white/10 bg-[#0c0e12]/95 p-4 shadow-2xl backdrop-blur-xl">
        <p className="mb-3 font-mono text-[10px] text-blue-bright">
          RESPONSE.JSON
        </p>

        <div className="space-y-2 font-mono text-[10px] text-gray-400">
          <p>{'{ status: "success",'}</p>
          <p className="pl-3">{'agent: "active",'}</p>
          <p className="pl-3">{'results: 24'}</p>
          <p>{'}'}</p>
        </div>
      </div>

      {/* Decorative floating node */}
      <span className="absolute bottom-[27%] left-[16%] z-10 h-2 w-2 rounded-full bg-blue-bright shadow-[0_0_14px_#35b6f5] animate-pulse" />

    </div>
  );
}