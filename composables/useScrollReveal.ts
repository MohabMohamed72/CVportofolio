import type { DirectiveBinding } from 'vue'

export function useScrollReveal() {
  const observe = (el: HTMLElement) => {
    if (!import.meta.client) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
  }

  const vReveal = {
    mounted(el: HTMLElement, binding: DirectiveBinding<number | undefined>) {
      el.classList.add('reveal-hidden')
      if (binding.value) {
        el.style.transitionDelay = `${binding.value}ms`
      }
      observe(el)
    }
  }

  return { vReveal }
}
