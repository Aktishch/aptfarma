import touchDevice from './functions/touch-device'
import scrolledPage from './functions/scrolled-page'
import animation from './animation'

const init = (): void => {
  const smoothWrapper = document.querySelector('#smooth-wrapper') as HTMLElement

  if (!smoothWrapper || touchDevice.init()) return

  const html = document.documentElement as HTMLElement
  const body = document.body as HTMLBodyElement
  const speed = 0.04

  let offset = 0

  html.classList.add('overflow-x-hidden')
  body.classList.add('overflow-hidden')
  smoothWrapper.classList.add('fixed', 'z-1', 'top-0', 'left-0', 'right-0', 'overflow-hidden')

  const smoothScroll = (): void => {
    const height = smoothWrapper.getBoundingClientRect().height - 1

    body.style.height = `${Math.floor(height)}px`
    offset += (scrolledPage.init().top - offset) * speed
    smoothWrapper.style.transform = `translateY(-${offset}px)`

    requestAnimationFrame(smoothScroll)

    animation.init()
  }

  smoothScroll()
}

export default { init }
