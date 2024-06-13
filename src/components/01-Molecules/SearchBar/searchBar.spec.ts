import { mount } from 'cypress/vue'
import SearchBar from './SearchBar.vue'
import SvgIcon from 'vue3-icon'

describe('<SearchBar />', () => {
  const testLabel = 'Search'

  it('Has a search leading icon', () => {
    mount(SearchBar, {
      propsData: {}
    })
    cy.get('.foo').should('have.class', 'bar')
  })

  /*
  it('Has a search input', () => {
    mount(SearchBar, {
      propsData: {}
    })
    cy.get('.foo').should('have.class', 'bar')
  })

  it('Has a "search" by default as placeholder', () => {
    mount(SearchBar, {
      propsData: {}
    })
    cy.get('.foo').should('have.class', 'bar')
  })

  it('has a custom placeholder prop', () => {
    mount(SearchBar, {
      propsData: {}
    })
    cy.get('.foo').should('have.class', 'bar')
  })

  it('When its state != "" has a trailing cross icon', () => {
    mount(SearchBar, {
      propsData: {}
    })
    cy.get('.foo').should('have.class', 'bar')
  })

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
