const HEADER_OFFSET = 80 // matches h-20 fixed header

export function scrollToHash(href) {
  const id = href.replace('#', '')
  const target = document.getElementById(id)
  if (!target) return

  const top =
    target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
}

export function handleNavClick(e, href, onAfterScroll) {
  e.preventDefault()
  scrollToHash(href)
  onAfterScroll?.()
}
