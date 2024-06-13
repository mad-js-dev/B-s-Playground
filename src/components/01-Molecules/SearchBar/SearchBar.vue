<template>
    <div :class="{
        'm-searchBar': true,
        'm-searchBar--hasContent': searchValue != '',
    }">
        <BasicInteractable leadingIcon="Magnify" :label="searchValue" trailingIcon="Close" :hasInput="true"
            :inputPlaceholder="placeholder" @change="(value) => { $emit('change', value), searchValue = value }"
            @onTrailIconClick="searchValue = ''" />
    </div>
</template>

<script setup lang="ts">
import { type SearchBarProps } from '@/types/componentsProps'
import { reactive, ref, toRefs, type PropType } from 'vue'
import BasicInteractable from "@/components/00-Atoms/BasicInteractable/BasicInteractable.vue"

withDefaults(defineProps<SearchBarProps>(),
    {
        placeholder: 'Default placeholder',
    })

defineEmits<{
    (e: 'change', value: string): void
}>()

let searchValue = ref('')
</script>

<style lang="scss">
.m-searchBar {
    width: 100%;
    border-radius: 28px;
    height: 56px;
    display: flex;
    background-color: grey;

    .a-basicInteractable__icon {
        padding: 0 16px;
    }

    .a-basicInteractable__icon--trailing svg {
        display: none;
    }

    &--hasContent .a-basicInteractable__icon--trailing svg {
        display: inherit;
    }
}
</style>