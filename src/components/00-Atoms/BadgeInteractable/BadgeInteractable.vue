<template>
    <div class="a-iconBadge">
        <div class="a-iconBadge__icon">
            <div v-if="pill != undefined" :class="{ 'a-iconBadge__pill': true }">
                <span v-if="pill != ''">{{ pill }}</span>
            </div>
            <svg-icon type="mdi" :path="MDI[`mdi${icon}` as keyof typeof MDI]" :size="36"></svg-icon>
        </div>
        <div v-if="label" class="a-iconBadge__label">
            {{ label }}
        </div>
    </div>

</template>

<script lang="ts" setup>
import { type BadgeInteractableProps } from '@/types/componentsProps'
import { toRefs } from 'vue'
import SvgIcon from 'vue3-icon'
import * as MDI from '@mdi/js'

const props = withDefaults(defineProps<BadgeInteractableProps>(),
    {
        icon: "ChevronRight",
    })

const { icon, label, pill } = toRefs(props);

</script>

<style lang="scss" scoped>
@use '../../../styles/mixins.scss';
$size: 36px;

.a-iconBadge {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    max-width: 120px;
    padding: 5px 0;

    &__icon {
        position: relative;
        height: $size;
    }

    svg {
        width: $size;
        height: $size;
    }

    &__pill {
        position: absolute;
        left: 60%;
        top: 2px;
        min-width: 0.57rem;
        min-height: 0.57rem;
        height: 0.57rem;
        border-radius: calc(0.57rem / 2);
        font-size: 0.5rem;
        background-color: grey;
        color: white;
        z-index: 1;
        //padding-top: 2px;

        span {
            margin: 0 5px;
            padding: 3px 0;
            font-weight: bold;
        }
    }

    &__label {
        text-align: center;
        font-size: calc($size / 2.5);
        margin-top: -8px;
        padding: 0 3px;
    }
}
</style>
