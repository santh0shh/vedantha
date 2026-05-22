export default function AboutSection() {
  return (
    <section className="bg-[#0c0f0f] px-margin-desktop py-section-gap" id="about">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 md:grid-cols-2">
        <div className="text-xs font-bold tracking-[0.2em] text-on-surface-variant/40 uppercase">
          About
        </div>
        <div>
          <h2 className="mb-6 text-3xl leading-[1.11] font-bold md:text-4xl">
            We connect exceptional talent with leading companies across IT and
            manufacturing sectors.
          </h2>
          <p className="leading-relaxed text-on-surface-variant">
            Our mission-driven approach focuses on building trust, ensuring
            transparency, and delivering rapid placements that transform careers
            and empower businesses.
          </p>
        </div>
      </div>
    </section>
  )
}
