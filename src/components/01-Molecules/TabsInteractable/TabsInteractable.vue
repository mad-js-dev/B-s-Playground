<template>
    <div :class="{
        'm-tabsInteractable': true,
        'm-tabsInteractable--primary': type === 'primary',
        'm-tabsInteractable--secondary': type === 'secondary'
    }">
        <div class="m-tabsInteractable__content">
            <div v-for="(tab, index) in labels" v-bind:key="index" @click="selectedIndex = index"
                :class="{ 'm-tabsInteractable__item': true, 'm-tabsInteractable__item--active': selectedIndex === index }">
                <div class="m-tabsInteractable__itemContent">
                    <BadgeInteractable v-bind="tab" />
                </div>
                <div class="m-tabsInteractable__bar">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { BadgeInteractableProps, TabsInteractableProps } from "@/types/componentsProps";
import { ref, toRefs, defineEmits } from 'vue'
import BadgeInteractable from "@/components/00-Atoms/BadgeInteractable/BadgeInteractable.vue";

const props = withDefaults(defineProps<TabsInteractableProps>(), {
    type: 'primary',
    selectedTab: 0
})

const { labels, selectedTab } = toRefs(props);
let selectedIndex = ref(selectedTab.value);

defineEmits<{
    (e: 'change', id: number): void
}>()


</script>

<style lang="scss">
@use 'sass:color';
@use '../../../styles/mixins.scss';
@import '../../../styles/settings';
$mainColor: 'primary';

.m-tabsInteractable {
    width: 100%;
    overflow: hidden;

    &__content {
        display: flex;
        align-content: center;
        align-items: center;
    }

    &__item {
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        text-align: center;
        transition: all 0.1s;

        &:hover {
            cursor: pointer;
        }
    }

    &__bar {
        background-color: transparent;
        display: inline-block;
    }

    &--primary {
        & .m-tabsInteractable__itemContent {
            padding: 4px 0px;
        }

        & .m-tabsInteractable__bar {
            width: 25%;
            height: 3px;
            background-color: transparent;
            display: inline-block;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
        }
    }

    &--secondary {
        & .m-tabsInteractable__itemContent {
            padding: 2px 0px;
        }

        & .m-tabsInteractable__bar {
            width: 100%;
            height: 2px;
            background-color: transparent;
            display: inline-block;
        }

        .a-iconBadge {
            flex-direction: row
        }

        .a-iconBadge__icon {
            &:first-child {
                order: 2;
                margin-left: -5px;
            }

            svg {
                display: none;
            }
        }
    }

    &__item:hover,
    &__item--active {
        transition: all 0.1s;
        color: getColorToken($mainColor, 'element');
        background-color: color.adjust(getColorToken($mainColor, 'element'), $alpha: -0.92);

        .m-tabsInteractable__bar {
            background-color: getColorToken($mainColor, 'element');
        }

        .a-iconBadge__label {
            font-weight: 800;
        }

        .vue3-icon {
            fill: getColorToken($mainColor, 'element');
        }
    }
}
</style>