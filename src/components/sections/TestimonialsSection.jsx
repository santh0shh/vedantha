import { useState } from 'react'
import { testimonials } from '../../data/siteData'
import Icon from '../icons/Icon'

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const goPrev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const goNext = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <section className="bg-[#0c0f0f] px-margin-desktop py-section-gap">
      <div className="mx-auto max-w-container-max">
        <div className="mb-16">
          <span className="mb-2 block text-xs font-bold tracking-[0.2em] text-on-surface-variant/40 uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold">Success Stories</h2>
        </div>

        <div className="relative rounded-lg border border-white/5 bg-surface-container-low p-12">
          <blockquote>
            <p className="mb-10 max-w-4xl text-2xl leading-tight font-medium md:text-3xl">
              &ldquo;{current.quote}&rdquo;
            </p>
          </blockquote>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-bold text-white">{current.name}</p>
              <p className="text-sm text-on-surface-variant">{current.role}</p>
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                className="rounded-full border border-white/10 p-3 transition-colors hover:bg-white/5"
                aria-label="Previous testimonial"
                onClick={goPrev}
              >
                <Icon name="chevronLeft" className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="rounded-full border border-white/10 p-3 transition-colors hover:bg-white/5"
                aria-label="Next testimonial"
                onClick={goNext}
              >
                <Icon name="chevronRight" className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div
            className="mt-6 flex justify-center gap-2"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? 'bg-primary' : 'bg-white/20'
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
