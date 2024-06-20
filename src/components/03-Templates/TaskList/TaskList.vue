<template>
    <div ref="root" class="t-taskList">
        <div class="t-taskList__headerContainer">
            <div class="t-taskList__headerWrapper">
                <BasicInteractable :hasInput="titleEditMode" :leadingIcon="(titleEditMode) ? 'Close' : 'Pen'"
                    :label="titleValue" @onLeadIconClick="editTitleTrigger" @change="updateTitleState" />
            </div>
            <div class="t-taskList__addWrapper">
                <SingleInteractable type="button" :label="{
                    leadingIcon: 'Plus',
                }" :theme="{
                    name: 'elevated',
                    size: 'md',
                    colorRole: 'primary'
                }" @click="$emit('addItem')" />
            </div>
        </div>
        <div class="t-taskList__filtersContainer">
            <div class="t-taskList__searchWrapper">
                <SearchBar placeholder="Search" @change="(e) => searchString = e" />
            </div>
            <div class="t-taskList__filterWrapper">
                <ToggableInteractable :type="'single'" :interactableType="'chip'" :label="labels"
                    @change="(e) => toggleFilterState = e" />
            </div>
        </div>
        <div class="t-taskList__listWrapper">
            <template v-for="(item, index) in filterData()" v-bind:key="index">
                <TaskListItem :title="item.title" v-bind="item" @change="itemChange"
                    @delete="(item) => $emit('deleteItem', item)" />
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { type TaskListProps } from '@/types/componentsProps'
import { reactive, ref, toRefs, computed, watch, type PropType } from 'vue'
import BasicInteractable from "@/components/00-Atoms/BasicInteractable/BasicInteractable.vue"
import SearchBar from "@/components/01-Molecules/SearchBar/SearchBar.vue"
import SingleInteractable from "@/components/01-Molecules/SingleInteractable/SingleInteractable.vue"
import ToggableInteractable from "@/components/02-Organisms/ToggableInteractable/ToggableInteractable.vue"
import TaskListItem from "@/components/01-Molecules/TaskListItem/TaskListItem.vue"

const root = ref(null)
const props = defineProps<TaskListProps>();
let titleEditMode = ref(false)
let searchString = ref('')
let toggleFilterState = ref(0)

let titleValue = ref(props.title)
let dataCollection = ref(props.data)

const emit = defineEmits<{
    (e: 'editTitle'): void,
    (e: 'addItem'): void,
    (e: 'editItem', value: string): void
    (e: 'deleteItem', value: string): void
}>()

watch(() => props.title, (value) => {
    titleValue.value = value
});

watch(() => props.data, (value) => {
    dataCollection.value = value
});

const labels = [
    {
        leadingIcon: 'SetAll',
        leadingSeparator: false,
        label: 'All',
        trailingSeparator: false,
        trailingIcon: '',
    },
    {
        leadingIcon: 'CheckBold',
        leadingSeparator: false,
        label: 'Done',
        trailingSeparator: false,
        trailingIcon: '',
    },
    {
        leadingIcon: 'BorderAllVariant',
        leadingSeparator: false,
        label: 'Not done',
        trailingSeparator: false,
        trailingIcon: '',
    }
]

const editTitleTrigger = () => {
    titleEditMode.value = !titleEditMode.value
    if (titleEditMode.value == false) emit('editTitle', titleValue.value)
}

const updateTitleState = (title) => {
    titleValue.value = title
}

const itemChange = (updatedItem) => {
    dataCollection.value = dataCollection.value.map((item) => {
        if (item.id == updatedItem.id) return updatedItem
        return item
    })
    emit('editItem', updatedItem)
}

const filterData = () => {
    let toggleFiltered = dataCollection.value.filter((item) => {
        let toggleComplete = true
        let result = true
        if (toggleFilterState.value != 0) {
            if (toggleFilterState.value == 1 && !item.completed) toggleComplete = false
            if (toggleFilterState.value == 2 && item.completed) toggleComplete = false
        }
        result = (toggleComplete) ? true : false

        return result
    })

    let result = toggleFiltered.filter((item) => {
        if (searchString.value.length > 0) {
            if (item.title.includes(searchString.value)) return true
            if (item.description.includes(searchString.value)) return true
            return false
        } else {
            return true
        }
    })

    return result
}
</script>

<style lang="scss">
@use '../../../styles/mixins.scss';
@import '../../../styles/settings';

.t-taskList {
    max-width: 450px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 12px;
    gap: 20px;
    height: 100%;
    min-height: 300px;
    padding: 20px 12px 10px 12px;

    &__headerContainer {
        display: flex;
        height: auto;
        width: 100%;
        gap: 2%;

    }

    &__headerWrapper {
        flex-basis: 89%;
        display: flex;

        .a-basicInteractable__label {

            user-select: none;
            flex-basis: auto;

            div {
                margin: 0;
            }
        }


        .a-basicInteractable__label,
        input {
            padding-left: 16px;
            flex-basis: auto;
            @include getTypographyStyles('label', 'lg');
        }

        .a-basicInteractable__icon {
            margin-top: -24px;
            margin-right: -22px;
        }
    }

    &__addWrapper {
        flex-basis: 9%;
    }

    &__filtersContainer {
        display: flex;
        height: auto;
        width: 100%;
        gap: 2%;

    }

    &__searchWrapper {
        flex-basis: calc(70%);

        .a-basicInteractable__input input {
            @include getTypographyStyles('label', 'sm');
        }
    }

    &__filterWrapper {
        align-self: center;
        flex-basis: 29%;
        position: relative;

        &::-webkit-scrollbar {
            margin-left: 30px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: red;
            margin-left: 30px;
        }

        .a-basicInteractable__icon {
            padding-left: 6px;
        }

        .a-basicInteractable__label {
            @include getTypographyStyles('label', 'sm');
            padding-left: 12px;
            padding-right: 6px;
        }
    }

    &__listWrapper {
        flex-basis: 100%;
        overflow: auto;
        height: 74%;
    }
}
</style>