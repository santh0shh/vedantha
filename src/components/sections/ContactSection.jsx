import { useRef, useState } from 'react'
import { contactInfo } from '../../data/siteData'
import Icon from '../icons/Icon'

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  message: '',
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [resumeName, setResumeName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef(null)

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
    setResumeName('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0]
    setResumeName(file ? file.name : '')
  }

  return (
    <section className="bg-[#0c0f0f] px-margin-desktop py-section-gap" id="contact">
      <div className="mx-auto max-w-container-max">
        <div>
          <span className="mb-2 block text-xs font-bold tracking-[0.2em] text-on-surface-variant/40 uppercase">
            Contact
          </span>
          <h2 className="text-4xl font-bold">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-4 pt-12">
            <div className="space-y-6">
              <ContactRow icon="location" label="Address" value={contactInfo.address} />
              <ContactRow
                icon="phone"
                label="Phone"
                value={contactInfo.phone}
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              />
              <ContactRow
                icon="mail"
                label="Email"
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
              />
            </div>

            <div className="h-64 w-full overflow-hidden rounded-lg border border-white/10 grayscale contrast-125">
              <iframe src={contactInfo.mapUrl} title="Vedantha Global office location near Lalacheruvu, Rajahmundry" className="h-full w-full object-cover" loading="lazy"></iframe>
            </div>
          </div>

          <div className="lg:col-span-8 pt-12" id="apply">
            {submitted && (
              <p
                className="mb-6 rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary"
                role="status"
              >
                Thank you! Your application has been received. Our team will contact
                you shortly.
              </p>
            )}

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  id="fullName"
                  label="Full Name"
                  type="text"
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={update('fullName')}
                  required
                />
                <FormField
                  id="phone"
                  label="Phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={update('phone')}
                  required
                />
              </div>

              <FormField
                id="email"
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                value={form.email}
                onChange={update('email')}
                required
              />

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold tracking-wider text-on-surface-variant uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your career goals"
                  value={form.message}
                  onChange={update('message')}
                  className="w-full rounded-md border border-white/5 bg-surface-container-low px-4 py-3 text-sm focus:border-primary focus:ring-0 mt-2 placeholder:text-on-surface-variant/60"
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold tracking-wider text-on-surface-variant uppercase">
                  Resume
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  id="resume"
                  onChange={handleResumeChange}
                />
                <label
                  htmlFor="resume"
                  className="block cursor-pointer rounded-md border-2 border-dashed border-white/10 p-8 text-center transition-colors hover:border-primary/50 mt-2 placeholder:text-on-surface-variant/60"
                >
                  <Icon
                    name="upload"
                    className="mx-auto mb-3 h-8 w-8 text-on-surface-variant/40"
                  />
                  <p className="text-sm text-on-surface-variant">
                    {resumeName || 'Click to upload resume (PDF, DOC)'}
                  </p>
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-primary py-4 text-sm font-bold tracking-widest text-white uppercase transition-all hover:bg-primary/90 cursor-pointer"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon, label, value, href }) {
  const content = href ? (
    <a href={href} className="text-sm text-on-surface-variant hover:text-primary">
      {value}
    </a>
  ) : (
    <p className="text-sm text-on-surface-variant">{value}</p>
  )

  return (
    <div className="flex gap-4">
      <div className="text-primary">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <div className='leading-tight'>
        <h4 className="text-sm font-bold tracking-wide uppercase">{label}</h4>
        {content}
      </div>
    </div>
  )
}

function FormField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs font-bold tracking-wider text-on-surface-variant uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-md border border-white/5 bg-surface-container-low px-4 py-3 text-sm focus:border-primary focus:ring-0 mt-2 placeholder:text-on-surface-variant/60"
      />
    </div>
  )
}
