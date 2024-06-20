<template>
    <div class="appView">
        <TaskList v-bind="store.defaultTask" @addItem="() => { console.log('addbtn'), store.createItem() }"
            @editItem="store.editItem" @deleteItem="(item) => store.deleteItem(item.id)"
            @editTitle="(title) => { store.editTitle(title) }" />
        <div>
            <h2 style="margin: 32px auto 0 auto;max-width: 70%;">Try out the app without loggin</h2>
            <p style="margin: 20px auto 0 auto;max-width: 70%;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis enim at consequat elementum.
                Suspendisse metus dolor, faucibus ut volutpat at, dapibus sed ex.
            </p>
            <div style="margin: 20px auto 0 auto;max-width: 70%;">
                <h3>Benefits</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                </ul>
                <button style="margin: 20px 0">CTA</button>
            </div>
        </div>
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
    display: flex;
    min-width: 800px;
    height: 60vh;
}
</style>