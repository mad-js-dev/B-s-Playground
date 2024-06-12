import { mount } from 'cypress/vue'
import BasicInteractable from './BasicInteractable.vue'
import SvgIcon from 'vue3-icon'

describe('<BasicInteractable />', () => {
  const testLabel = 'Lorem ipsum'

  it('Must have a label. Additionally, can have a trailing / leading separators & icons', () => {
    mount(BasicInteractable, {
      propsData: {
        label: testLabel,
        leadingIcon: 'ChevronUp',
        trailingIcon: 'ChevronDown',
        leadingSeparator: true,
        trailingSeparator: true
      }
    })

    cy.get('.a-basicInteractable__icon--leading svg').should('have.class', 'vue3-icon')
    cy.get('.a-basicInteractable__icon--trailing svg').should('have.class', 'vue3-icon')
    cy.get('.a-basicInteractable__label').should('have.text', testLabel)
  })

  it('Can have an input instead of a label. Additionally, the input can have a placeholder', () => {
    mount(BasicInteractable, {
      propsData: {
        label: '',
        leadingIcon: 'ChevronUp',
        trailingIcon: 'ChevronDown',
        leadingSeparator: true,
        trailingSeparator: true,
        hasInput: true,
        inputPlaceholder: 'This is a placeholder'
      }
    })

    cy.get('.a-basicInteractable__input input').should('exist')
    cy.get('.a-basicInteractable__input input[placeholder="This is a placeholder"').should('exist')
  })

  it('Emits a change event every  time the input changes', () => {
    mount(BasicInteractable, {
      propsData: {
        label: 'ab',
        leadingIcon: 'ChevronUp',
        trailingIcon: 'ChevronDown',
        leadingSeparator: true,
        trailingSeparator: true,
        hasInput: true,
        inputPlaceholder: 'This is a placeholder',
        onChange: cy.spy().as('changeSpy')
      }
    })

    cy.get('.a-basicInteractable__input input').type('c')
    cy.get('@changeSpy').should('be.calledWith', 'abc')
  })
})
