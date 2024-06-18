<template>
    <div class="appView">
        <TaskList v-bind="taskList" @addItem="() => { store.createItem() }" @editItem="store.editItem"
            @deleteItem="(item) => store.deleteItem(item.id)" @editTitle="(title) => { store.editTitle(title) }" />
    </div>
</template>

<script setup lang="ts">
import { useTaskListsStore } from '@/stores/tasksLists'

import TaskList from "@/components/03-Templates/TaskList/TaskList.vue"
const store = useTaskListsStore()
const taskList = store.defaultTask

</script>

<style lang="scss">
.appView {
    min-width: 800px;
}
</style>