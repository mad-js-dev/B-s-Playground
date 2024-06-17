<template>
    <TabsInteractable :label="[
        {
            label: 'Lorem ipsum',
        },
        {
            label: 'Lorem ipsum',
        },
        {
            label: 'Lorem ipsum',
        },]" />
</template>

<script setup lang="ts">
import type { BadgeInteractableProps, TabsInteractableProps } from "@/types/componentsProps";
import { toRefs } from 'vue'
import TabsInteractable from "./TabsInteractable.vue"

const props = defineProps<TabsInteractableProps>()

const { label } = toRefs(props);

</script>

<style lang="scss" scoped>
@use '../../../styles/mixins.scss';
</style>
