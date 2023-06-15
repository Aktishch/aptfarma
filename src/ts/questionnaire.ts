const questionnaireImages = (image: HTMLImageElement, data: string): void => {
  if (image.dataset.questionnaireImage == data) {
    if (image.classList.contains('hidden')) {
      image.classList.remove('hidden')
      image.classList.add('block')
    }
  } else {
    image.classList.remove('block')
    image.classList.add('hidden')
  }
}

const init = (): void => {
  const questionnaire = document.querySelector('*[data-questionnaire]') as HTMLElement

  if (!questionnaire) return

  const inputs = questionnaire.querySelectorAll('*[data-questionnaire-input]') as NodeListOf<Element>
  const result = questionnaire.querySelector('*[data-questionnaire-result]') as HTMLElement
  const quantity = questionnaire.querySelector('*[data-questionnaire-quantity]') as HTMLElement
  const title = questionnaire.querySelector('*[data-questionnaire-title]') as HTMLElement
  const text = questionnaire.querySelector('*[data-questionnaire-text]') as HTMLElement
  const form = questionnaire.querySelector('*[data-questionnaire-form]') as HTMLFormElement
  const name = questionnaire.querySelector('*[data-questionnaire-name]') as HTMLInputElement
  const button = questionnaire.querySelector('*[data-questionnaire-button]') as HTMLButtonElement
  const images = questionnaire.querySelectorAll('*[data-questionnaire-image]') as NodeListOf<Element>

  let number = 0

  inputs.forEach((element: Element): void => {
    const input = element as HTMLInputElement

    const inputsChecked = (): void => {
      if (input.checked) {
        input.dataset.questionnaireInput == 'yes' ? ++number : --number

        images.forEach((element: Element): void => {
          const image = element as HTMLImageElement

          if (number > 4) {
            if (result.classList.contains('bg-primary')) {
              result.classList.remove('bg-primary')
              result.classList.add('bg-second')
            }

            title.innerText = 'ТРЕВОЖНАЯ СИТУАЦИЯ'
            text.innerText =
              'Ваш бизнес имеет серьезные риски и может вскоре закрыться. Управленческая франшиза может решить 99% ваших проблем.'

            if (form.classList.contains('hidden')) form.classList.remove('hidden')

            name.value = 'РЕШИТЬ ПРОБЛЕМЫ'

            questionnaireImages(image, 'anxiety')

            button.innerText = 'РЕШИТЬ ПРОБЛЕМЫ'
          } else if (number == 0 || number == 1) {
            if (result.classList.contains('bg-second')) {
              result.classList.remove('bg-second')
              result.classList.add('bg-primary')
            }

            title.innerText = 'У ВАС ВСË ХОРОШО'
            text.innerText = 'Похоже ваш бизнес растет и развивается. Это прекрасно!'

            if (!form.classList.contains('hidden')) form.classList.add('hidden')

            questionnaireImages(image, 'good')
          } else if (number < 2 || number < 5) {
            if (result.classList.contains('bg-primary')) {
              result.classList.remove('bg-primary')
              result.classList.add('bg-second')
            }

            title.innerText = 'ЕСТЬ ЧТО УЛУЧШИТЬ'
            text.innerText =
              'В вашем бизнесе определенно есть точки роста. Предлагаем познакомиться с нашим подходом управления аптечным бизнесом.'

            if (form.classList.contains('hidden')) form.classList.remove('hidden')

            name.value = 'УЗНАТЬ ПОДРОБНЕЕ'

            questionnaireImages(image, 'improvement')

            button.innerText = 'УЗНАТЬ ПОДРОБНЕЕ'
          }
        })
      }

      quantity.innerText = String(number)
    }

    inputsChecked()

    input.addEventListener('change', inputsChecked as EventListener)
  })
}

export default { init }
