<template>
    <h2>Toggable Interactable</h2>
    <div style="display: flex; gap: 20px;">
        <div>
            <h3>Type: [Button]</h3>
            <div>
                <ToggableInteractable :type="'single'" :interactableType="'button'" :label="[labeloff, labelon]" :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }

                    " />
                <ToggableInteractable :type="'single'" :interactableType="'button'"
                    :label="[labelOption1, labelOption2, labelOption3]" :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }

                    " />
                <ToggableInteractable :type="'single'" :interactableType="'button'"
                    :label="[labelDisabled, labelOption1, labelOption2, labelOption3]" :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }
                    " :hasUnsetLabel="true" />

            </div>
            <div>
                <ToggableInteractable :type="'multiple'" :interactableType="'button'" :label="[labeloff, labelon]"
                    :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }
                    " />
                <ToggableInteractable :type="'multiple'" :interactableType="'button'"
                    :label="[labelOption1, labelOption2, labelOption3]" :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }
                    " />
                <ToggableInteractable :type="'multiple'" :interactableType="'button'"
                    :label="[labelDisabled, labelOption1, labelOption2, labelOption3]" :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }
                    " />
                <ToggableInteractable :type="'multiple'" :interactableType="'button'"
                    :label="[labelOption1, labelOption2, labelOption3]" :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }
                    " :hasMultipleOption="true" />

            </div>
        </div>
        <div>
            <h3>Type: [Chip]</h3>
            <div>
                <ToggableInteractable :type="'single'" :interactableType="'chip'" :label="[labeloff, labelon]" :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }

                    " />
                <ToggableInteractable :type="'single'" :interactableType="'chip'"
                    :label="[labelOption1, labelOption2, labelOption3]" :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }

                    " />
                <ToggableInteractable :type="'single'" :interactableType="'chip'"
                    :label="[labelDisabled, labelOption1, labelOption2, labelOption3]" :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }
                    " :hasUnsetLabel="true" />

            </div>
            <div>
                <ToggableInteractable :type="'multiple'" :interactableType="'chip'" :label="[labeloff, labelon]" :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }
                    " />
                <ToggableInteractable :type="'multiple'" :interactableType="'chip'"
                    :label="[labelOption1, labelOption2, labelOption3]" :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }
                    " />
                <ToggableInteractable :type="'multiple'" :interactableType="'chip'"
                    :label="[labelDisabled, labelOption1, labelOption2, labelOption3]" :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }
                    " />
                <ToggableInteractable :type="'multiple'" :interactableType="'chip'"
                    :label="[labelOption1, labelOption2, labelOption3]" :theme="{
                    name: 'filled',
                    size: 'sm',
                    colorRole: 'primary'
                }
                    " :hasMultipleOption="true" />

            </div>
        </div>
    </div>
    <!--    
    <div v-for="type in  ['chip', 'button'] " v-bind:key="type" class="sectionWrapper">
        <h3>type: {{ type }}</h3>
        <h4>Themes</h4>
        <div class="sectionWrapper__itemsWrapper">
            <div class="sectionWrapper__item" v-for="themeName in getComponentThemes()" v-bind:key="themeName">
                <p>{{ themeName }}</p>
                <ToggableInteractable :type="type" :label="[label]" :theme="{
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
                <ToggableInteractable :type="type" :label="[label]" :theme="{
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
                <ToggableInteractable :type="type" :label="[label]" :theme="{
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
                    <ToggableInteractable v-if="index - themeSizeIndex + 1 > 0" :type="type" :label="[label]" :theme="{
        name: getComponentThemes()[5 - index],
        size: themeSize,
        colorRole: 'primary'
    }
        " />
                </template>
</div>
</div>


</div>
-->
</template>

<script setup lang="ts">
import { ref } from "vue";
import ToggableInteractable from "./ToggableInteractable.vue"

const labelon = ref({
    leadingIcon: '',
    leadingSeparator: false,
    label: 'On',
    trailingSeparator: false,
    trailingIcon: '',
})

const labeloff = ref({
    leadingIcon: '',
    leadingSeparator: false,
    label: 'Off',
    trailingSeparator: false,
    trailingIcon: '',
})

const labelDisabled = ref({
    leadingIcon: '',
    leadingSeparator: false,
    label: 'Unselected',
    trailingSeparator: false,
    trailingIcon: '',
})

const labelOption1 = ref({
    leadingIcon: '',
    leadingSeparator: false,
    label: 'Option1',
    trailingSeparator: false,
    trailingIcon: '',
})

const labelOption2 = ref({
    leadingIcon: '',
    leadingSeparator: false,
    label: 'Option2',
    trailingSeparator: false,
    trailingIcon: '',
})

const labelOption3 = ref({
    leadingIcon: '',
    leadingSeparator: false,
    label: 'Option3',
    trailingSeparator: false,
    trailingIcon: '',
})

</script>

<style lang="scss" scoped></style>