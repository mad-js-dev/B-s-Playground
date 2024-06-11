import { mount } from 'cypress/vue'
import BadgeInteractable from './BadgeInteractable.vue'
import SvgIcon from 'vue3-icon'

describe('<BadgeInteractable />', () => {
  const testLabel = 'Lorem ipsum'
  const testPill = '123456'
  it('Always displays an icon even when no icon is passed', () => {
    mount(BadgeInteractable, {
      propsData: {}
    })
    cy.get('.a-iconBadge svg').should('have.class', 'vue3-icon')
  })

  it('Can have a label', () => {
    mount(BadgeInteractable, {
      propsData: {
        icon: 'ChevronUp',
        label: testLabel
      }
    })

    cy.get('.a-iconBadge__label').should('have.text', testLabel)
  })

  it('Can have an empty pill', () => {
    mount(BadgeInteractable, {
      propsData: {
        icon: 'ChevronUp',
        label: testLabel,
        pill: ''
      }
    })

    cy.get('.a-iconBadge__pill').should('be.empty')
  })

  it('Can have text inside the pill', () => {
    mount(BadgeInteractable, {
      propsData: {
        icon: 'ChevronUp',
        label: testLabel,
        pill: testPill
      }
    })

    cy.get('.a-iconBadge__pill').should('have.text', testPill)
  })
})
