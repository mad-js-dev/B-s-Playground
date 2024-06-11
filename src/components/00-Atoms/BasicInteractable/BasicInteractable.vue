<template>
    <div :class="{
        'a-basicInteractable': true,
        'a-basicInteractable--hasLeadingIcon': leadingIcon,
        'a-basicInteractable--hasTrailingIcon': trailingIcon,
        'a-basicInteractable--hasLeadingSeparator': leadingSeparator,
        'a-basicInteractable--hasTrailingSeparator': trailingSeparator,
    }">
        <div v-if="leadingIcon" :class="`${atomic}__icon ${atomic}__icon--leading`">
            <svg-icon type="mdi" :path="MDI[`mdi${leadingIcon}` as keyof typeof MDI]" :size="24"></svg-icon>
        </div>
        <div v-if="leadingSeparator" :class="`${atomic}__separatorWapper ${atomic}__separatorWapper--leading`">
            <div :class="`${atomic}__separatorLine`"></div>
        </div>
        <div v-if="label" :class="`${atomic}__label`">
            <div>{{ label }}</div>
        </div>
        <div v-if="trailingSeparator" :class="`${atomic}__separatorWapper ${atomic}__separatorWapper--trailing`">
            <div :class="`${atomic}__separatorLine`"></div>
        </div>
        <div v-if="trailingIcon" :class="`${atomic}__icon ${atomic}__icon--trailing`">
            <svg-icon type="mdi" :path="MDI[`mdi${trailingIcon}` as keyof typeof MDI]" :size="24"></svg-icon>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { type BasicInteractableProps } from '@/types/componentsProps'
import { ref, toRefs } from 'vue'
import SvgIcon from 'vue3-icon'
import * as MDI from '@mdi/js'

const atomic = ref('a-basicInteractable');

const props = defineProps<BasicInteractableProps>()

const { leadingIcon, label } = toRefs(props);

</script>

<style lang="scss" scoped>
@use '../../../styles/mixins.scss';
$height: 24px;
$onSurface: black;

.a-basicInteractable {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    margin: 5px;
    width: auto;
    flex-basis: 100%;

    &__separatorWapper {
        flex-basis: auto;
        position: relative;
        height: 100%;
        flex-basis: 100%;

        &--leading {
            padding-right: 12px;
            padding-left: 3px;
        }

        &--trailing {
            padding-left: 12px;
            padding-right: 3px;
        }
    }

    &__separatorLine {
        position: absolute;
        top: 20%;
        width: 2px;
        height: 60%;
    }

    &__label {
        flex-basis: 100%;
        display: flex;
        align-items: center;

        &:first-child {
            padding-left: 12px;
        }

        &:last-child {
            padding-right: 12px;
        }
    }
}
</style>
