import { mount } from 'cypress/vue'
import SearchBar from './SearchBar.vue'
import SvgIcon from 'vue3-icon'

describe('<SearchBar />', () => {
  const testLabel = 'Search'

  it('Has a search leading icon and an input', () => {
    mount(SearchBar, {
      propsData: {
        placeholder: testLabel
      }
    })
    cy.get('.a-basicInteractable__icon--leading svg').should('exist')
    cy.get('.a-basicInteractable input[placeholder="Search"]').should('exist')
    cy.get('.a-basicInteractable__icon--trailing svg').should('have.css', 'display', 'none')
    cy.get('.a-basicInteractable input').should('exist').click().type('a')
    cy.get('.a-basicInteractable__icon--trailing svg')
      .should('not.have.css', 'display', 'none')
      .click()
      .should('have.css', 'display', 'none')
      .get('.a-basicInteractable input')
      .should('have.value', '')
  })

  /*
 
  it('When trailing cross icon is clicked state is reset to ""', () => {
    mount(SearchBar, {
      propsData: {}
    })
    cy.get('.foo').should('have.class', 'bar')
  })

  it('emits a change event every time a key is pressed while input is focused', () => {
    mount(SearchBar, {
      propsData: {}
    })
    cy.get('.foo').should('have.class', 'bar')
  })
  */
})
