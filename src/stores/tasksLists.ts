import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TaskListProps, TaskListItemProps } from '../types/componentsProps'
import { v4 as uuidv4 } from 'uuid'

const defaultTasksInitialState = {
  searchPlaceholder: 'Search',
  title: 'My task list[m]',
  data: [
    {
      id: uuidv4(),
      title: 'Lorem ipsum dolor sit amet delta',
      description:
        'Consectetur adipiscing elit. Duis interdum sagittis dui et lobortis. Mauris placerat libero felis, non vehicula nulla venenatis varius.',
      completed: true
    }
  ]
} as TaskListProps

const defaultItem = () => {
  return {
    id: uuidv4(),
    title: 'My default task title',
    description: '',
    completed: false
  } as TaskListItemProps
}

export const useTaskListsStore = defineStore('taskLists', () => {
  const defaultTask = ref(defaultTasksInitialState)

  function editTitle(title: string) {
    defaultTask.value.title = title
  }

  function createItem() {
    const newState = { ...defaultTask.value }
    newState.data.push(defaultItem())
    defaultTask.value = newState
  }

  function editItem(updateItem: TaskListItemProps) {
    const newState = { ...defaultTask.value }
    const result = defaultTask.value.data.map((item) => {
      if (item.id == updateItem.id) return updateItem
      return item
    })
    newState.data = result
    defaultTask.value = newState
  }

  function deleteItem(id: number) {
    const newState = { ...defaultTask.value }

    const result = defaultTask.value.data.filter((item) => {
      return item.id == id ? false : true
    })
    newState.data = result
    defaultTask.value = newState
  }

  return { defaultTask, createItem, editItem, deleteItem, editTitle }
})
