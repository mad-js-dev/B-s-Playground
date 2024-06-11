import { mount } from 'cypress/vue'
import BadgeInteractable from './BadgeInteractable.vue'
import SvgIcon from 'vue3-icon'

describe('<BadgeInteractable />', () => {
  const testLabel = 'Lorem ipsum'
  const testPill = '123456'

  it('Displays icons. Can have a label and a pill', () => {
    mount(BadgeInteractable, {
      propsData: {
        icon: 'ChevronUp',
        label: testLabel,
        pill: testPill
      }
    })

    cy.get('.a-iconBadge__label').should('have.text', testLabel)
  })

  it('Always displays an icon even when no icon is passed (in order to never use it without icons)', () => {
    mount(BadgeInteractable, {
      propsData: {}
    })
    cy.get('.a-iconBadge svg').should('have.class', 'vue3-icon')
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
})
