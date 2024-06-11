import { mount } from 'cypress/vue'
import TabsInteractable from './TabsInteractable.vue'
import SvgIcon from 'vue3-icon'

describe('<TabsInteractable />', () => {
  const testLabels = [
    {
      label: 'Lorem ipsum'
    },
    {
      label: 'Lorem ipsum',
      pill: ''
    },
    {
      label: 'Lorem ipsum',
      pill: '123+'
    }
  ]
  const testPill = '123456'

  it('Displays tabs integrating BadgeInteractabe components', () => {
    mount(TabsInteractable, {
      propsData: {
        labels: testLabels,
        type: 'primary'
      }
    })
    mount(TabsInteractable, {
      propsData: {
        labels: testLabels,
        type: 'secondary'
      }
    })
    cy.get('.a-iconBadge svg').should('have.class', 'vue3-icon')
    cy.get('.a-iconBadge svg').should('have.class', 'vue3-icon')
  })
})
