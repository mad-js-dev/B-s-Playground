<template>
  <div class="styleguide">
    <h1>This is the styleguide view page</h1>
    <template v-for="(contentItem, index) in content" v-bind:key="index">
      <h2>{{ contentItem.title }}</h2>
      <template v-for="(item, itemIndex) in contentItem.items" v-bind:key="itemIndex">
        <RouterLink :to="item.path">
          <SingleInteractable :type="'button'" :label="{ label: item.title }" :theme="{
      name: 'elevated',
      size: 'sm',
      colorRole: 'primary'
    }
      " />
        </RouterLink>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import SingleInteractable from "@/components/01-Molecules/SingleInteractable/SingleInteractable.vue"
import { ref } from "vue";

const content = ref([
  {
    title: 'Settings',
    items: [
      {
        path: '/styleguide/colors/palettes',
        title: 'Palettes'
      },
      {
        path: '/styleguide/colors/tokens',
        title: 'Tokens'
      }
    ]
  },
  {
    title: 'Atoms',
    items: [
      {
        path: '/styleguide/components/badgeInteractable',
        title: 'Badge Interactable'
      },
      {
        path: '/styleguide/components/basicInteractable',
        title: 'Basic Interactable'
      }
    ]
  },
  {
    title: 'Molecules',
    items: [
      {
        path: '/styleguide/components/singleInteractable',
        title: 'Single Interactable'
      },
      {
        path: '/styleguide/components/tabsInteractable',
        title: 'Tabs Interactable'
      }
    ]
  },
  {
    title: 'Organisms',
    items: [
      {
        path: '/styleguide/components/toggableInteractable',
        title: 'Toggable Interactable'
      },
    ]
  }
])
</script>

<style>
.styleguide {
  padding-left: 100px;
}
</style>
