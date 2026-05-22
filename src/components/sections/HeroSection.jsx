import Icon from '../icons/Icon'
import { handleNavClick } from '../../utils/scrollToHash'

export default function HeroSection() {
  return (
    <section className="hero-gradient relative flex min-h-[80vh] items-center px-margin-desktop">
      <div className="mx-auto grid w-full max-w-container-max grid-cols-1 gap-12 py-20 lg:grid-cols-12">
        <div className="flex flex-col justify-center lg:col-span-7">
          <span className="mb-4 w-fit rounded border border-primary/20 px-3 py-1 text-base md:text-xs font-bold tracking-[0.2em] text-primary uppercase">
            25+ Hiring Partners
          </span>
          <h1 className="mb-6 text-6xl leading-[1.0] font-bold md:text-7xl">
            Connecting <br />
            Talent With <br />
            <span className="text-on-surface-variant/40">Opportunity</span>
          </h1>
          <p className="mb-10 max-w-lg text-xl md:text-lg leading-relaxed text-on-surface-variant">
            Premier recruitment partner for IT and manufacturing sectors. Zero
            cost for candidates, excellence for employers.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#apply"
              className="flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary/90"
              onClick={(e) => handleNavClick(e, '#apply')}
            >
              Apply For Jobs
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="rounded-md border border-outline px-8 py-4 font-bold text-white transition-all hover:bg-white/5"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Hire Talent
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-12 lg:col-span-5">
          <div className="stat-divider pl-6">
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="mt-1 text-sm tracking-widest text-on-surface-variant uppercase">
              Candidates Placed
            </p>
          </div>
          <div className="stat-divider pl-6">
            <h2 className="text-4xl font-bold">18</h2>
            <p className="mt-1 text-sm tracking-widest text-on-surface-variant uppercase">
              Days Average Hire
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
