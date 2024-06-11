<template>
    <div>
        <div>
            <h2>Base colors</h2>
        </div>
        <div class="collapsible" :class="(collapsibleStates[index]) ? 'collapsible--isOpen' : ''"
            v-for="PaletteName, index in ['primary', 'secondary', 'tertiary', 'neutral', 'neutral-variant']"
            :key="index" @click="updateCollapsibles(index)">
            <div class="collapsible__header">
                <h3>{{ PaletteName }}</h3>
            </div>
            <div class="collapsible__body">
                <div class="coloTokensPalette">
                    <div :class="`coloTokensPalette__token coloTokensPalette__token--${PaletteName}-${tokenName}`"
                        v-for="tokenName, index in ['element', 'onElement', 'container', 'onContainer']" :key="index">
                        {{ tokenName }}
                    </div>
                    <div class="tokenSample" :class="`tokenSample--${PaletteName}`">
                        <div class="tokenSample__container">
                            <p class="tokenSample__onContainer">Text on container</p>

                            <div class="tokenSample__element">
                                <p class="tokenSample__onElement">Text on element</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

//Switch this to :hover insted of click
const collapsibleStates = ref([true, false, false, false, false])

const updateCollapsibles = (index: number) => {
    collapsibleStates.value[index] = !collapsibleStates.value[index]
}
</script>

<style lang="scss" scoped>
@use 'sass:map';
@import './settings.scss';

.tokenSample {
    flex-basis: 100%;
    display: flex;
    align-items: end;
    flex-direction: column;
    font-size: 16px;
    font-weight: 800;

    &__container {
        padding: 10px;
        border-radius: 10px;
        text-align: center;
        width: 175px;
    }

    &__element {
        padding: 4px 10px;
        display: inline-block;
        border-radius: 5px;
    }

    @each $paletteName in ('primary', 'secondary', 'tertiary', 'neutral', 'neutral-variant') {
        &--#{$paletteName} {
            .tokenSample__container {
                background-color: getColorToken($paletteName, 'container');
            }

            .tokenSample__onContainer {
                color: getColorToken($paletteName, 'onContainer');
            }

            .tokenSample__element {
                background-color: getColorToken($paletteName, 'element');
            }

            .tokenSample__onElement {
                color: getColorToken($paletteName, 'onElement');
            }

        }

    }
}

.collapsible {
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px 0;

    &__header {
        border-radius: 10px;
        padding: 10px;

        &:hover {
            cursor: pointer;
        }
    }

    &__body {
        margin: 0 10px;
        height: 0px;
        overflow: hidden;
        transition: all 0.3s;
    }

    &--isOpen {
        .collapsible__body {
            height: 90px;
            transition: all 0.3s;
        }
    }
}

.coloTokensPalette {
    display: flex;
    gap: 8px;

    &__token {
        height: 75px;
        min-width: 75px;
        background-color: grey;
        border-radius: 6px;
        padding: 6px;
        font-size: 10px;
        color: black;
        border: 1px solid grey;
        text-shadow: 0px 0px 8px white;
        font-weight: bold;
    }
}

@each $paletteName, $colorSetting in $color-tokens {
    $tokens: map.get($color-tokens, $paletteName);

    @each $tokenName, $value in $tokens {
        .coloTokensPalette__token--#{$paletteName}-#{$tokenName} {
            background-color: $value;
        }
    }

}
</style>
