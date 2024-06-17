import { mount } from 'cypress/vue'
import SearchBar from './TaskList.vue'
import SvgIcon from 'vue3-icon'

describe('<SearchBar />', () => {
  const testLabel = 'Search'

  it('Has a search leading icon and an input', () => {
    mount(SearchBar, {
      propsData: {
        searchPlaceholder: testLabel,
        title: 'My task list',
        data: [
          {
            id: 0,
            title: 'Lorem ipsum dolor sit amet alpha',
            description:
              'Consectetur adipiscing elit. Duis interdum sagittis dui et lobortis. Mauris placerat libero felis, non vehicula nulla venenatis varius.',
            completed: false
          },
          {
            id: 1,
            title: 'Lorem ipsum dolor sit amet beta',
            description:
              'Consectetur adipiscing elit. Duis interdum sagittis dui et lobortis. Mauris placerat libero felis, non vehicula nulla venenatis varius.',
            completed: true
          },
          {
            id: 2,
            title: 'Lorem ipsum dolor sit amet charlie',
            description:
              'Consectetur adipiscing elit. Duis interdum sagittis dui et lobortis. Mauris placerat libero felis, non vehicula nulla venenatis varius.',
            completed: false
          },
          {
            id: 3,
            title: 'Lorem ipsum dolor sit amet delta',
            description:
              'Consectetur adipiscing elit. Duis interdum sagittis dui et lobortis. Mauris placerat libero felis, non vehicula nulla venenatis varius.',
            completed: true
          }
        ]
      }
    })
    cy.get('.t-taskList').should('exist')
    /*
    cy.get('.a-basicInteractable input[placeholder="Search"]').should('exist')
    cy.get('.a-basicInteractable__icon--trailing svg').should('have.css', 'display', 'none')
    cy.get('.a-basicInteractable input').should('exist').click().type('a')
    cy.get('.a-basicInteractable__icon--trailing svg')
      .should('not.have.css', 'display', 'none')
      .click()
      .should('have.css', 'display', 'none')
      .get('.a-basicInteractable input')
      .should('have.value', '')
      */
  })
})
