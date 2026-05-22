import Icon from '../icons/Icon'

export default function CtaSection() {
  return (
    <section className="px-margin-desktop py-24 text-center">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Start Your Career <br />
          Journey Today
        </h2>
        <p className="mb-10 text-on-surface-variant">
          Apply now and get placed with top companies at zero cost
        </p>
        <a
          href="#apply"
          className="mx-auto flex w-fit items-center gap-2 rounded-md bg-primary px-10 py-4 text-lg font-bold text-white transition-all hover:bg-primary/90"
        >
          GET STARTED
          <Icon name="arrowRight" className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
