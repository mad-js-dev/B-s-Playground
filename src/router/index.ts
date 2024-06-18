import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppView from '../views/AppView.vue'
import StyleguideView from '../views/StyleguideView.vue'
import ColorStyleguide from '../styles/ColorsStyleguide.vue'
import ColorTokenStyleguide from '../styles/ColorTokensStyleguide.vue'
import BadgeInteractablePlayground from '../components/00-Atoms/BadgeInteractable/BadgeInteractable.styleguide.vue'
import BasicInteractableStyleguide from '../components/00-Atoms/BasicInteractable/BasicInteractable.styleguide.vue'
import SingleInteractablePlayground from '../components/01-Molecules/SingleInteractable/SingleInteractable.styleguide.vue'
import TabsInteractablePlayground from '../components/01-Molecules/TabsInteractable/TabsInteractable.styleguide.vue'
import ToggableInteractablePlayground from '../components/02-Organisms/ToggableInteractable/ToggableInteractable.styleguide.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/app',
      name: 'app',
      component: AppView
    },
    {
      path: '/styleguide',
      name: 'styleguide',
      component: StyleguideView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/styleguide/colors/palettes',
      name: 'StyleguidePalettes',
      component: ColorStyleguide
    },
    {
      path: '/styleguide/colors/tokens',
      name: 'StyleguideTokens',
      component: ColorTokenStyleguide
    },
    {
      path: '/styleguide/components/badgeInteractable',
      name: 'StyleguideBadgeInteractable',
      component: BadgeInteractablePlayground
    },
    {
      path: '/styleguide/components/basicInteractable',
      name: 'StyleguideBasicInteractable',
      component: BasicInteractableStyleguide
    },
    {
      path: '/styleguide/components/singleInteractable',
      name: 'StyleguideSingleInteractable',
      component: SingleInteractablePlayground
    },
    {
      path: '/styleguide/components/tabsInteractable',
      name: 'StyleguideTabsInteractable',
      component: TabsInteractablePlayground
    },
    {
      path: '/styleguide/components/toggableInteractable',
      name: 'StyleguideToggableInteractable',
      component: ToggableInteractablePlayground
    }
  ]
})

export default router
