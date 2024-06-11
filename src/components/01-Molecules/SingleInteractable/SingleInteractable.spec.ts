import { mount } from 'cypress/vue'
import SingleInteractable from './SingleInteractable.vue'

describe('<SingleInteractable />', () => {
  const label = { label: 'Lorem ipsum', trailingIcon: 'ChevronDown' }

  it('Displays buttons & chips', () => {
    mount(SingleInteractable, {
      propsData: {
        label,
        theme: {
          name: 'outline',
          colorRole: 'primary',
          size: 'md'
        },
        type: 'button'
      }
    })
    cy.get('.a-basicInteractable__icon svg').should('have.class', 'vue3-icon')

    mount(SingleInteractable, {
      propsData: {
        label,
        theme: {
          name: 'outline',
          colorRole: 'primary',
          size: 'md'
        },
        type: 'chip'
      }
    })
    cy.get('.a-basicInteractable__icon svg').should('have.class', 'vue3-icon')
  })

  it('Has several themes', () => {
    const label = { label: 'Lorem ipsum', trailingIcon: 'ChevronDown' }
    const themes = ['outline', 'filled', 'tonal', 'elevated', 'text']
    let i = 0

    while (i < themes.length) {
      mount(SingleInteractable, {
        propsData: {
          label,
          theme: {
            name: themes[i],
            colorRole: 'primary',
            size: 'md'
          },
          type: 'button'
        }
      })
      cy.get('.m-singleInteractable').should('have.class', 'm-singleInteractable--' + themes[i])
      i++
    }
  })

  it('Has several sizes', () => {
    const label = { label: 'Lorem ipsum', trailingIcon: 'ChevronDown' }
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
    let i = 0

    while (i < sizes.length) {
      mount(SingleInteractable, {
        propsData: {
          label,
          theme: {
            name: 'filled',
            colorRole: 'primary',
            size: sizes[i]
          },
          type: 'button'
        }
      })
      cy.get('.m-singleInteractable').should('have.class', 'm-singleInteractable--' + sizes[i])
      i++
    }
  })

  it('Can use any brand color', () => {
    const label = { label: 'Lorem ipsum', trailingIcon: 'ChevronDown' }
    const colorThemes = ['primary', 'secondary', 'tertiary', 'neutral', 'neutral-variant']
    let i = 0

    while (i < colorThemes.length) {
      mount(SingleInteractable, {
        propsData: {
          label,
          theme: {
            name: 'filled',
            colorRole: colorThemes[i],
            size: 'md'
          },
          type: 'button'
        }
      })
      cy.get('.m-singleInteractable').should(
        'have.class',
        'm-singleInteractable--' + colorThemes[i]
      )
      i++
    }
  })

  it('Can use any utility color', () => {
    const label = { label: 'Lorem ipsum', trailingIcon: 'ChevronDown' }
    const colorThemes = ['error', 'warning', 'success', 'info']
    let i = 0

    while (i < colorThemes.length) {
      mount(SingleInteractable, {
        propsData: {
          label,
          theme: {
            name: 'filled',
            colorRole: colorThemes[i],
            size: 'md'
          },
          type: 'button'
        }
      })
      cy.get('.m-singleInteractable').should(
        'have.class',
        'm-singleInteractable--' + colorThemes[i]
      )
      i++
    }
  })
})
