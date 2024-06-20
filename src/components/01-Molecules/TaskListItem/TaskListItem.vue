<template>
    <div
        :class="{ 'm-taskListItem': true, 'm-taskListItem--editMode': editMode, 'm-taskListItem--isOpen': (!editMode && isOpen) }">
        <div class="m-taskListItem__header">
            <BasicInteractable
                :leadingIcon="(editMode) ? 'Delete' : (completed) ? 'CheckboxMarkedOutline' : 'CheckboxBlankOutline'"
                @onLeadIconClick="(e) => (editMode) ? deleteItem() : editCheck()"
                :trailingIcon="(editMode) ? 'ContentSave' : 'Pen'" @onTrailIconClick="saveItem()" :label="title"
                placeholder="Title" @change="editTitle" :hasInput="editMode" @onLabelClick="isOpen = !isOpen" />
        </div>
        <div class="m-taskListItem__content">
            <BasicInteractable :label="description" placeholder="Description" :hasInput="editMode"
                @change="editDescription" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TaskListItemProps } from "@/types/componentsProps";
import { ref, watch, defineProps } from 'vue'
import BasicInteractable from "@/components/00-Atoms/BasicInteractable/BasicInteractable.vue";

const props = defineProps<TaskListItemProps>();
let editMode = ref(false)
let isOpen = ref(false)

let id = ref(props.id);
let completed = ref(props.completed);
let title = ref(props.title)
let description = ref(props.description)

const emit = defineEmits<{
    (e: 'change', value: TaskListItemProps): void
    (e: 'delete', value: TaskListItemProps): void
}>()

watch(() => props.id, (value) => {
    id.value = value
});
watch(() => props.completed, (value) => {
    completed.value = value
});
watch(() => props.title, (value) => {
    title.value = value
});
watch(() => props.description, (value) => {
    description.value = value
});

const editCheck = () => {
    completed.value = !completed.value
    emitChange();
}

const editTitle = (value) => {
    title.value = value
}

const editDescription = (value) => {
    description.value = value
}

const saveItem = () => {
    emitChange();
    editMode.value = !editMode.value
}

const deleteItem = () => {
    editMode.value = !editMode.value
    emit("delete", { id: id.value, title: title.value, description: description.value, completed: completed.value } as TaskListItemProps)
}

const emitChange = () => {
    emit("change", { id: id.value, title: title.value, description: description.value, completed: completed.value } as TaskListItemProps)
}
</script>

<style lang="scss">
@use 'sass:color';
@use '../../../styles/mixins.scss';
@import '../../../styles/settings';

.m-taskListItem {

    input {
        //border: 1px solid;
        outline: -webkit-focus-ring-color auto 1px;
        padding: 10px;
    }

    .m-taskListItem__header {
        padding: 16px 0;
    }

    .a-basicInteractable__label div {
        margin: initial;
        border: 8px solid transparent;
    }

    .a-basicInteractable__icon {
        padding: 0 8px 0 0;

        &:hover {

            cursor: pointer
        }
    }

    .m-taskListItem__content {
        overflow: hidden;
    }


    &--editMode {
        .a-basicInteractable__icon--leading {
            //order: 2;
        }

        .m-taskListItem__content {
            padding: 0 16px;
        }

        .a-basicInteractable__input {
            //order: 1;
        }

        .a-basicInteractable__icon--trailing {
            //order: 3;
        }
    }

    &:not(.m-taskListItem--editMode) {
        .m-taskListItem__header {
            .a-basicInteractable__label:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }

        .m-taskListItem__content {
            height: 0;
        }

        &.m-taskListItem--isOpen {
            .m-taskListItem__content {
                height: 100%;
            }
        }
    }
}
</style>