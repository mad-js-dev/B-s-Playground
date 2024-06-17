<template>
    <div ref="root" class="t-taskList">
        <div class="t-taskList__headerWrapper">
            <BasicInteractable :hasInput="titleEditMode" :leadingIcon="(titleEditMode) ? 'Close' : 'Pen'"
                :label="state.title" @onLeadIconClick="editTitle" @click="$emit('add')" />
        </div>
        <div class="t-taskList__addWrapper">
            <SingleInteractable type="button" :label="{
                leadingIcon: 'Plus',
            }" :theme="{
                name: 'elevated',
                size: 'md',
                colorRole: 'primary'
            }" />
        </div>
        <div class="t-taskList__searchWrapper">
            <SearchBar placeholder="Search" @change="(e) => searchString = e" />
        </div>
        <div class="t-taskList__filterWrapper">
            <ToggableInteractable :type="'single'" :interactableType="'chip'" :label="labels"
                @change="(e) => toggleFilterState = e" />
        </div>
        <div class="t-taskList__listWrapper">
            <template v-for="(item, index) in filterData" v-bind:key="index">
                <TaskListItem :title="item.title" v-bind="item" @change="itemChange" />
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
const state = reactive(props)

let titleEditMode = ref(false)
let searchString = ref('')
let toggleFilterState = ref(0)

const emit = defineEmits<{
    (e: 'change', value: string): void
}>()

watch(() => props, (value) => {
    state.value = value
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

const editTitle = () => {
    titleEditMode.value = !titleEditMode.value
    if (titleEditMode.value == false) emit('change', { title: state.title })
}

const itemChange = (updatedItems) => {
    state.data = [...state.data, ...updatedItems]
    console.log(updatedItems, state.data)
    emit('change', { data: updatedItems })
}

const filterData = computed(() => {
    let toggleFiltered = state.data.filter((item) => {
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
        console.log(searchString.value, item)
        if (searchString.value.length > 0) {
            if (item.title.includes(searchString.value)) return true
            if (item.description.includes(searchString.value)) return true
            return false
        } else {
            return true
        }
    })
    return result
})
</script>

<style lang="scss">
@use '../../../styles/mixins.scss';
@import '../../../styles/settings';

.t-taskList {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 12px;
    gap: 20px;

    &__headerWrapper {
        flex-basis: calc(100% - 42px - 20px);
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
        flex-basis: 42px;
    }

    &__searchWrapper {
        flex-basis: calc(73% - 10px);

        .a-basicInteractable__input input {
            @include getTypographyStyles('label', 'md');
        }
    }

    &__filterWrapper {
        flex-basis: calc(27% - 10px);

        .o-ToggableInteractable,
        .o-ToggableInteractable__wrapper,
        .a-basicInteractable {
            height: 100%;
        }

        .a-basicInteractable__icon {
            padding-left: 6px;
        }

        .a-basicInteractable__label {
            padding-left: 12px;
            padding-right: 6px;
        }
    }

    &__listWrapper {
        flex-basis: 100%;
    }
}
</style>