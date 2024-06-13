<template>
    <div style="display: flex; gap: 10px; flex-direction: column; width: 100%;">
        <h2>Simple Interactable</h2>

        <div style="display: flex; gap: 10px; align-content: center; align-items:center; height: 100%;">
            <div style="border: 1px solid black; flex-basis: 25%;">
                <BasicInteractable leadingIcon="ChevronDown" />
            </div>
            <div style="border: 1px solid black; flex-basis: 100%;">
                <BasicInteractable label="Lorem Ipsum" />
            </div>
            <div style="border: 1px solid black; flex-basis: 100%;">
                <BasicInteractable leadingIcon="ChevronDown" label="Lorem Ipsum" />
                <BasicInteractable leadingIcon="ChevronDown" :leadingSeparator="true" label="Lorem Ipsum" />
            </div>
            <div style="border: 1px solid black; flex-basis: 100%;">
                <BasicInteractable :leadingIcon="undefined" label="Lorem Ipsum" trailingIcon="ChevronDown" />
                <BasicInteractable :leadingIcon="undefined" label="Lorem Ipsum" trailingIcon="ChevronDown" />
            </div>
            <div style="border: 1px solid black; flex-basis: 100%;">
                <BasicInteractable leadingIcon="ChevronDown" label="Lorem Ipsum" trailingIcon="ChevronDown" />
                <BasicInteractable leadingIcon="ChevronDown" label="Lorem Ipsum" :trailingSeparator="true"
                    trailingIcon="ChevronDown" />
            </div>
        </div>

        <div style="display: flex; gap: 10px; align-content: center; align-items:center; height: 100%;">
            <div style="border: 1px solid black; flex-basis: 25%;">
                <BasicInteractable leadingIcon="ChevronDown" :hasInput="true" inputPlaceholder="placeholder" />
            </div>
            <div style="border: 1px solid black; flex-basis: 100%;">
                <BasicInteractable label="Lorem Ipsum" :hasInput="true" inputPlaceholder="placeholder" />
            </div>
            <div style="border: 1px solid black; flex-basis: 100%;">
                <BasicInteractable leadingIcon="ChevronDown" label="Lorem Ipsum" :hasInput="true"
                    inputPlaceholder="placeholder" />
                <BasicInteractable leadingIcon="ChevronDown" :leadingSeparator="true" label="Lorem Ipsum"
                    :hasInput="true" inputPlaceholder="placeholder" />
            </div>
            <div style="border: 1px solid black; flex-basis: 100%;">
                <BasicInteractable :leadingIcon="undefined" label="Lorem Ipsum" trailingIcon="ChevronDown"
                    :hasInput="true" inputPlaceholder="placeholder" />
                <BasicInteractable :leadingIcon="undefined" label="Lorem Ipsum" trailingIcon="ChevronDown"
                    :hasInput="true" inputPlaceholder="placeholder" />
            </div>
            <div style="border: 1px solid black; flex-basis: 100%;">
                <BasicInteractable leadingIcon="ChevronDown" label="Lorem Ipsum" trailingIcon="ChevronDown"
                    :hasInput="true" inputPlaceholder="placeholder" />
                <BasicInteractable leadingIcon="ChevronDown" label="Lorem Ipsum" :trailingSeparator="true"
                    trailingIcon="ChevronDown" :hasInput="true" inputPlaceholder="placeholder" />
            </div>
        </div>
    </div>




</template>

<script lang="ts" setup>
import { toRefs } from "vue";
import type { PropType } from 'vue'
import BasicInteractable from "./BasicInteractable.vue"

</script>

<style lang="scss" scoped>
@use '../../../styles/mixins.scss';
</style>
