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
})
