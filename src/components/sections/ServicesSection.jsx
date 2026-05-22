import { services } from '../../data/siteData'
import Icon from '../icons/Icon'

export default function ServicesSection() {
  return (
    <section className="px-margin-desktop py-section-gap" id="services">
      <div className="mx-auto max-w-container-max">
        <div className="mb-16">
          <span className="mb-2 block text-xs font-bold tracking-[0.2em] text-on-surface-variant/40 uppercase">
            Services
          </span>
          <h2 className="text-4xl font-bold">Comprehensive Solutions</h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="group bg-[#0b0b0b] p-12 transition-all hover:bg-surface-container-low"
            >
              <div className="mb-8 text-primary">
                <Icon name={service.icon} className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 text-xl font-bold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
