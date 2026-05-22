import { advantages } from '../../data/siteData'
import Icon from '../icons/Icon'

export default function WhyUsSection() {
  return (
    <section className="bg-[#0c0f0f] px-margin-desktop py-section-gap">
      <div className="mx-auto max-w-container-max">
        <div className="mb-16">
          <span className="mb-2 block text-xs font-bold tracking-[0.2em] text-on-surface-variant/40 uppercase">
            Why Us
          </span>
          <h2 className="text-4xl font-bold">Our Advantages</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <div key={item.title} className="space-y-4">
              <Icon name={item.icon} className="h-6 w-6 text-primary" />
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-xs leading-relaxed text-on-surface-variant">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
