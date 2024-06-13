<template>
    <div :class="{
        'a-basicInteractable': true,
        'a-basicInteractable--hasLeadingIcon': leadingIcon,
        'a-basicInteractable--hasTrailingIcon': trailingIcon,
        'a-basicInteractable--hasLeadingSeparator': leadingSeparator,
        'a-basicInteractable--hasTrailingSeparator': trailingSeparator,
        'a-basicInteractable--hasInput': hasInput,
    }">
        <div v-if="leadingIcon" :class="`${atomic}__icon ${atomic}__icon--leading`">
            <svg-icon type="mdi" :path="MDI[`mdi${leadingIcon}` as keyof typeof MDI]" :size="24"></svg-icon>
        </div>
        <div v-if="leadingSeparator" :class="`${atomic}__separatorWapper ${atomic}__separatorWapper--leading`">
            <div :class="`${atomic}__separatorLine`"></div>
        </div>
        <div v-if="label && !hasInput" :class="`${atomic}__label`">
            <div>{{ label }}</div>
        </div>
        <div v-if="label != undefined && hasInput" :class="`${atomic}__input`">
            <input type="text" :value="inputState" :placeholder="inputPlaceholder" @keyup="valueChange" />
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
import { reactive, ref, toRefs, type PropType } from 'vue'
import SvgIcon from 'vue3-icon'
import * as MDI from '@mdi/js'

const atomic = ref('a-basicInteractable');

const props = withDefaults(defineProps<BasicInteractableProps>(),
    {
        hasInput: false,
    })

const { leadingIcon, label } = toRefs(props);

let inputState = reactive(label)

const emit = defineEmits<{
    (e: 'change', value: string): void
}>()

const valueChange = (e: KeyboardEvent) => {
    const result = (e.target as HTMLInputElement) ? e.target as HTMLInputElement : { value: "" };
    emit('change', result.value)
}


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
    width: 100%;
    flex-basis: 100%;

    &__separatorWapper {
        flex-basis: auto;
        position: relative;
        height: 100%;
        flex-basis: auto;

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

    &__icon {
        display: flex;
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

    &__input {
        flex-basis: 100%;

        input {
            border: 0;
            width: 100%;
            background: none;

            &:focus {
                outline: none;
            }
        }
    }
}
</style>
