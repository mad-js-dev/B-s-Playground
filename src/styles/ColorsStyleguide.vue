<template>
    <div>
        <div>
            <h2>Base colors</h2>
            <h3>Brand colors</h3>
            <div class="colorPalette colorPalette--base">
                <div class="" v-for="key in ['primary', 'secondary', 'tertiary', 'neutral', 'neutral-variant']"
                    :key="key">
                    <div class="colorSampleHeading">
                        {{ `${key} Base` }}
                    </div>
                    <div class="colorSamplePalette">
                        <div :class="`colorSample colorSample--base ${key}`" />
                    </div>
                </div>
            </div>
            <h3>Utility colors</h3>
            <div class="colorPalette colorPalette--base">
                <div class="" v-for="key in ['error', 'warning', 'success', 'info']" :key="key">
                    <div class="colorSampleHeading">
                        {{ `${key} Base` }}
                    </div>
                    <div class="colorSamplePalette">
                        <div :class="`colorSample colorSample--base ${key}`" />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2>Brand palettes</h2>
            <div class="colorPalette" v-for="key in ['primary', 'secondary', 'tertiary', 'neutral', 'neutral-variant']"
                :key="key">
                <div class="colorSampleHeading">
                    {{ `${key} palette` }}
                </div>
                <div class="colorSamplePalette">
                    <div :class="`colorSample ${key}-${index} ${(index <= 4) ? 'colorSample--reverse' : ''} `"
                        v-for="index in [0, 2, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98, 100]" :key="index">
                        {{ `${index}` }}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2>Utility palettes</h2>
            <div class="colorPalette" v-for="key in ['error', 'warning', 'info', 'success']" :key="key">
                <div class="colorSampleHeading">
                    {{ `${key} palette` }}
                </div>
                <div class="colorSamplePalette">
                    <div :class="`colorSample ${key}-${index}`"
                        v-for="index in [0, 2, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98, 100]" :key="index">
                        {{ `${index}` }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@use 'sass:map';
@import './settings.scss';



@each $color-setting, $colors in $color-settings {
    $basePalette: map.get($color-settings, $color-setting);

    @each $colorBaseName, $color in $colors {
        .#{$colorBaseName} {
            background-color: $color;
        }
    }
}

@each $paletteName, $value in $color-palettes {
    @each $colorId, $colorValue in $value {
        .#{$paletteName}-#{$colorId} {
            background-color: $colorValue;
        }
    }
}


.colorSample {
    flex-basis: 100%;
    height: 25px;
    font-size: 10px;
    padding: 3px;
    color: grey;
}

.colorPalette {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;

    &--base {
        gap: 10px;

        &>div {
            flex-basis: 100%;
        }
    }
}

.colorSampleHeading {
    flex-basis: 35%;
    text-transform: capitalize;
    font-size: 10px;
}

.colorSamplePalette {
    display: flex;
    flex-direction: row;
    flex-basis: 65%;
    border-radius: 5px;
    overflow: hidden;
}
</style>
