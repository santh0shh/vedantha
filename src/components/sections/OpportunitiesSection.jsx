import { jobCategories } from '../../data/siteData'
import Icon from '../icons/Icon'

export default function OpportunitiesSection() {
  return (
    <section className="px-margin-desktop py-section-gap" id="jobs">
      <div className="mx-auto max-w-container-max">
        <div className="mb-16">
          <span className="mb-2 block text-xs font-bold tracking-[0.2em] text-on-surface-variant/40 uppercase">
            Opportunities
          </span>
          <h2 className="text-4xl font-bold">Job Categories</h2>
        </div>

        <div className="space-y-16">
          {jobCategories.map((category) => (
            <div key={category.id}>
              <h3 className="mb-8 flex items-center gap-3 text-lg font-bold">
                <Icon name={category.icon} className="h-5 w-5 text-primary" />
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {category.roles.map((role) => (
                  <button
                    key={role.title}
                    type="button"
                    className="flex cursor-pointer items-center justify-between rounded-md border border-white/5 bg-surface-container-low p-4 text-left transition-colors hover:bg-white/5"
                    onClick={() => {
                      document.getElementById('apply')?.scrollIntoView({
                        behavior: 'smooth',
                      })
                    }}
                  >
                    <span className="text-sm">{role.title}</span>
                    <span className="text-xs text-on-surface-variant/40">
                      {role.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
