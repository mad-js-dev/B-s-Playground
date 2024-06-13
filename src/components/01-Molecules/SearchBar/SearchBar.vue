<template>
    <div class="m-searchBar">
        <BasicInteractable leadingIcon="Magnify" label="Lorem Ipsum" trailingIcon="Close" :hasInput="true"
            inputPlaceholder="placeholder" />
    </div>
</template>

<script setup lang="ts">
import BasicInteractable from "@/components/00-Atoms/BasicInteractable/BasicInteractable.vue"

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
}
</style>