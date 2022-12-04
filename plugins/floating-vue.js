import Vue from 'vue'
import FloatingVue from 'floating-vue'
FloatingVue.options.themes.tooltip.triggers = ['hover', 'focus', 'touch', 'click'];
import {
  // Directives
  VTooltip,
  VClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu
} from 'floating-vue'

import 'floating-vue/dist/style.css'

Vue.directive('tooltipp', VTooltip)
Vue.directive('close-popper', VClosePopper)

Vue.component('VDropdown', Dropdown)
Vue.component('VTooltipp', Tooltip)
Vue.component('VMenu', Menu)