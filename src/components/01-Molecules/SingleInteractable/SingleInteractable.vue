<template>
    <BasicInteractable :class="{
        'm-singleInteractable': true,
        'm-singleInteractable--button': type === 'button',
        'm-singleInteractable--chip': type === 'chip',
        ...getThemeClassNames('m-singleInteractable', theme as themeProps)
    }" v-bind="props.label" />
</template>

<script lang="ts" setup>
import { type SingleInteractableProps, type themeProps } from '@/types/componentsProps'
import BasicInteractable from "@/components/00-Atoms/BasicInteractable/BasicInteractable.vue"

const props = defineProps<SingleInteractableProps>();

function getThemeClassNames(className: string, theme: themeProps): Object {
    let classes = new Map();
    classes.set(className + '--' + theme.name, true)
    classes.set(className + '--' + theme.colorRole, true)
    classes.set(className + '--' + theme.size, true)

    let result = Object.fromEntries(classes.entries());

    return result
}
</script>

<style lang="scss">
@use '../../../styles/mixins.scss';
@import '../../../styles/settings';
@import './componentThemes';
@import './componentSizes';
</style>
