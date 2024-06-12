<template>
    <div class="styleguide">
        <h2>Toggable Interactable</h2>
        <div style="display: flex; gap: 20px;">
            <div>
                <h3>Type: [Button]</h3>
                <div>
                    <ToggableInteractable :type="'single'" :interactableType="'button'" :label="[labeloff, labelon]"
                        :theme="{
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
                    <ToggableInteractable :type="'single'" :interactableType="'chip'" :label="[labeloff, labelon]"
                        :theme="{
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
                    <ToggableInteractable :type="'multiple'" :interactableType="'chip'" :label="[labeloff, labelon]"
                        :theme="{
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
    </div>
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