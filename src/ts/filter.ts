const filtering = (name: string, cards: NodeListOf<Element>): void => {
  cards.forEach((element: Element): void => {
    const card = element as HTMLElement
    const absence: boolean = card.dataset.filterCard != name
    const showAll: boolean = name.toLowerCase() === 'all'

    if (absence && !showAll) {
      card.classList.add('hidden')
    } else {
      card.classList.remove('hidden')
      card.classList.add('filter-show')

      setTimeout((): void => card.classList.remove('filter-show'), 300)
    }
  })
}

const init = (): void => {
  const filters = document.querySelectorAll('*[data-filter]') as NodeListOf<Element>

  filters.forEach((element: Element): void => {
    const filter = element as HTMLElement

    if (!filter) return

    const categories = filter.querySelectorAll('*[data-filter-category]') as NodeListOf<Element>
    const categoryActive = filter.getElementsByClassName('filter-active') as HTMLCollectionOf<Element>
    const cards = filter.querySelectorAll('*[data-filter-card]') as NodeListOf<Element>

    const currentCard = (category: HTMLElement): void => {
      const name = String(category.dataset.filterCategory)

      categoryActive[0].className = categoryActive[0].className.replace('filter-active', '')
      category.classList.add('filter-active')

      filtering(name, cards)
    }

    categories.forEach((element: Element): void => {
      const category = element as HTMLElement

      category.addEventListener('click', ((): void => {
        currentCard(category)
      }) as EventListener)
    })
  })
}

export default { init }
