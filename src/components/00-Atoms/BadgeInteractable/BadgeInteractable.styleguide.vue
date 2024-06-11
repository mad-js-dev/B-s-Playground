<template>
    <div style="display: flex; gap: 10px; flex-direction: column;">
        <h2>Icon Badge</h2>
        <div style="display: flex; gap: 10px;">
            <div style="border: 1px solid black;">
                <IconBadge icon="ChevronDown" />
            </div>
            <div style="border: 1px solid black;">
                <IconBadge icon="ChevronDown" label="Lorem ipsum" />
            </div>
            <div style="border: 1px solid black;">
                <IconBadge icon="ChevronDown" label="Lorem ipsum" pill="" />
            </div>
            <div style="border: 1px solid black;">
                <IconBadge icon="ChevronDown" label="Lorem ipsum" pill="999+" />
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";
import type { PropType } from 'vue'
import IconBadge from "./BadgeInteractable.vue"

</script>

<style lang="scss" scoped>
@use '../../../styles/mixins.scss';
</style>
