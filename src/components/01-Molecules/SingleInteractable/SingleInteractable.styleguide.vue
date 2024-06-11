<template>
    <h2>Single Interactable</h2>
    <div class="playgroundControls">
        <div>
            <input :value="label.leadingIcon" @change="(e) => updateLabel(e, 'leadingIcon')" type="text">
        </div>
        <div>
            <input :value="label.leadingSeparator" @change="(e) => updateLabel(e, 'leadingSeparator')" type="checkbox">
        </div>
        <div>
            <input :value="label.label + ''" @change="(e) => updateLabel(e, 'label')" type="text">
        </div>
        <div>
            <input :value="label.trailingSeparator" @change="(e) => updateLabel(e, 'trailingSeparator')"
                type="checkbox">
        </div>
        <div>
            <input :value="label.trailingIcon" @change="(e) => updateLabel(e, 'trailingIcon')" type="text">
        </div>
    </div>


    <div v-for="type in  ['chip', 'button'] " v-bind:key="type" class="sectionWrapper">
        <h3>type: {{ type }}</h3>
        <h4>Themes</h4>
        <div class="sectionWrapper__itemsWrapper">
            <div class="sectionWrapper__item" v-for="themeName in getComponentThemes()" v-bind:key="themeName">
                <p>{{ themeName }}</p>
                <SingleInteractable :type="type as SingleInteractableProps" :label="label" :theme="{
                name: themeName,
                size: 'sm',
                colorRole: 'primary'
            }" />
            </div>
        </div>
        <h4>Color Roles</h4>
        <div class="sectionWrapper__itemsWrapper">
            <div class="sectionWrapper__item" v-for=" paletteName  in  getPaletteNames(PaletteNames.BrandPaletteNames) "
                v-bind:key="paletteName">
                <p>{{ paletteName }}</p>
                <SingleInteractable :type="type as SingleInteractableProps['type']" :label="label" :theme="{
                name: 'filled',
                size: 'sm',
                colorRole: paletteName
            }
                " />
            </div>
        </div>
        <div class="sectionWrapper__itemsWrapper">
            <div class="sectionWrapper__item"
                v-for=" paletteName  in  getPaletteNames(PaletteNames.UtilityPaletteNames) " v-bind:key="paletteName">
                <p>{{ paletteName }}</p>
                <SingleInteractable :type="type as SingleInteractableProps['type']" :label="label" :theme="{
                name: 'filled',
                size: 'sm',
                colorRole: paletteName
            }
                " />
            </div>
        </div>
        <h4>Sizes</h4>
        <div class="sectionWrapper__itemsWrapper" style="flex-direction: column;align-items: start;">
            <div class="sectionWrapper__item" v-for="(themeSize, themeSizeval, themeSizeIndex)  in  ThemeSizes "
                v-bind:key="themeSize" style="min-width: 100%;">
                <p>{{ themeSize }}</p>
                <template v-for="index in  [5, 4, 3, 2, 1, 0] " v-bind:key="index">
                    <SingleInteractable v-if="index - themeSizeIndex + 1 > 0"
                        :type="type as SingleInteractableProps['type']" :label="label" :theme="{
                name: getComponentThemes()[5 - index],
                size: themeSize,
                colorRole: 'primary'
            }
                " />
                </template>
            </div>
        </div>


    </div>

</template>

<script lang="ts" setup>
import { ref } from "vue";
import { BrandPaletteNames, UtilityPaletteNames, PaletteNames, ThemeSizes, ButtonThemeNames } from '@/enums/themeEnums'
import SingleInteractable from "./SingleInteractable.vue"
import type { SingleInteractableProps } from "@/types/componentsProps";

const label = ref({
    leadingIcon: 'ChevronLeft',
    leadingSeparator: false,
    label: 'Default1',
    trailingSeparator: false,
    trailingIcon: 'ChevronRight',
})

function updateLabel(e: Event, prop: string) {
    //console.log(e.target, (e.target as HTMLInputElement).type, (e.target as HTMLInputElement).value)
    const elem = (e.target as HTMLInputElement);
    console.log(elem, elem.value)
    let result = { ...label.value, [prop]: (elem.type === 'checkbox') ? !(elem.value === 'true') : elem.value };
    console.log(result)
    label.value = result;
}

function getComponentSizes() {
    const result = [];
    for (const themeName in ThemeSizes) {
        result.push(themeName);
    }
    return result
}

function getComponentThemes() {
    const result = [];
    for (const themeName in ButtonThemeNames) {
        result.push(themeName);
    }
    return result
}

function getPaletteNames(type: PaletteNames) {
    const result = [];

    if (type === PaletteNames.BrandPaletteNames) {
        for (const name in BrandPaletteNames) {
            result.push(name);
        }
    } else if (type === PaletteNames.UtilityPaletteNames) {
        for (const name in UtilityPaletteNames) {
            result.push(name);
        }
    }

    return result;
}
</script>

<style lang="scss" scoped>
@use '../../../styles/mixins.scss';

.sectionWrapper {
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 100%;
    margin-bottom: 46px;

    &__itemsWrapper {
        display: flex;
        gap: 10px;
        align-content: center;
        align-items: center;
        height: 100%;
        margin-bottom: 24px;
    }

    &__item {
        border: 1px solid black;
        flex-basis: 100%;
    }
}

.playgroundControls {
    display: flex;
    align-items: center;


    &>* {
        flex-basis: 100%;
        text-align: center;
    }
}
</style>
