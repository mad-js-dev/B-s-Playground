import { mount } from 'cypress/vue'
import TaskListItem from './TaskListItem.vue'
import SvgIcon from 'vue3-icon'

describe('<TaskListItem />', () => {
  it('Displays tabs integrating BadgeInteractabe components', () => {
    mount(TaskListItem, {
      propsData: {
        title: 'Lorem ipsum',
        description: 'Dolor est ipsum'
      }
    })
  })
})
