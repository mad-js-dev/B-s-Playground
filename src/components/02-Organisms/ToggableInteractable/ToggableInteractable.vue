<template>
    <div :class="{
        'o-ToggableInteractable': true,
        'o-ToggableInteractable--isMultiple': (type == 'multiple'),
    }">
        <div class="o-ToggableInteractable__wrapper" v-if="type == 'multiple'">
            <template v-for="buttonLabel, index in label" v-bind:key="index">
                <SingleInteractable class="o-ToggableInteractable__interactable" :type="interactableType"
                    :label="buttonLabel" :theme="(state[index]) ? activeTheme : defaultTheme"
                    @click="(e) => updateState(e, index)" />
            </template>
        </div>
        <div class="o-ToggableInteractable__wrapper" v-if="type == 'single'">
            <SingleInteractable class="o-ToggableInteractable__interactable" :type="interactableType"
                :label="((label as Array<String>)[getActiveIndex()] as BasicInteractableProps)" :theme="getTheme()"
                @click="(e) => updateState(e, getNextIndex())" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { type BasicInteractableProps, type ToggableInteractableProps, type themeProps } from '@/types/componentsProps'
import SingleInteractable from "@/components/01-Molecules/SingleInteractable/SingleInteractable.vue"
import { ref } from 'vue';

const props = defineProps<ToggableInteractableProps>();
const state = ref(new Array((props.label as Array<Object>).length).fill(false));
state.value[0] = true

const emit = defineEmits<{
    (e: 'change', value: string): void
}>()

const defaultTheme = ref({
    name: 'outline',
    size: 'md',
    colorRole: 'primary'
} as themeProps)

const activeTheme = ref({
    name: 'outline',
    size: 'md',
    colorRole: 'primary'
})

const updateState = (e: Event, index: number) => {
    if (props.hasMultipleOption) {
        state.value[index] = !state.value[index];
    } else {
        state.value = state.value.map(() => {
            return false;
        })
        state.value[index] = true;
    }
    emit('change', index)
}

const getActiveIndex = () => {
    let result = 0;
    state.value.map((elem, index) => {
        if (elem) result = index
    })

    return result
}

const getNextIndex = () => {
    let index = getActiveIndex();
    return (index + 1 < state.value.length) ? index + 1 : 0
}

const getTheme = () => {
    if (props.type == 'single' && props.label.length <= 2) {
        return (state.value[0]) ? defaultTheme.value : activeTheme.value
    } else if (props.type == 'single' && props.label.length >= 2) {
        return (props.hasUnsetLabel && getActiveIndex() == 0) ? defaultTheme.value : activeTheme.value
    }
    return (state.value[getActiveIndex()]) ? defaultTheme.value : activeTheme.value
}

</script>

<style lang="scss">
@use '../../../styles/mixins.scss';
@import '../../../styles/settings';

.o-ToggableInteractable {
    width: 100%;

    &__wrapper {
        display: flex;
        flex-direction: row;
        gap: 0
    }

    &--isMultiple {
        .a-simpleInteractable {
            margin-left: 0;
            margin-right: 0;
            padding: 0;

            &:last-child {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                border-left: 0;
            }

            &:first-child {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                border-right: 0;
            }

            &:not(:first-child, :last-child) {
                border-radius: 0;
            }

            &.a-simpleInteractable:not(:first-child, :last-child)+.a-simpleInteractable:not(:first-child, :last-child) {
                border-left: 0;
            }
        }
    }
}
</style>
