<template>
  <v-app class="my-app">
    <v-navigation-drawer
      :clipped=true
      v-model="drawer"
      temporary
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar 
      dense
      app
      elevation="3"
    >
    <v-app-bar-nav-icon class="appBarIcon" @click.stop="drawer = !drawer" />
    <div class="titleContentContainer" :class="isWide ? 'ignoreMaxWidth' : ''">
      <NuxtLink to="/" style="cursor: pointer" class="mainTitleClass" 
        :class="[this.currentPath == '/' ? 'selected' : 'unselected',
          this.$vuetify.theme.dark ? 'isDark' : '']">
        <v-toolbar-title v-text="title" />
      </NuxtLink>
      <div class="nonMobileContent">
        <NuxtLink to="/posts" style="cursor: pointer" class="secondaryMenuClass"
            :class="[this.currentPath.startsWith('/posts') ? 'selected' : 'unselected',
              this.$vuetify.theme.dark ? 'isDark' : '']">
        <v-toolbar-title v-text="'Articles'" />
      </NuxtLink>
      <NuxtLink to="/about" style="cursor: pointer" class="secondaryMenuClass"
            :class="[this.currentPath.startsWith('/about') ? 'selected' : 'unselected',
              this.$vuetify.theme.dark ? 'isDark' : '']">
        <v-toolbar-title v-text="'About'" />
      </NuxtLink>
      </div>

      <v-btn class='titleIcon' text icon @click="darkMode()"><v-icon>mdi-brightness-4</v-icon></v-btn>
      <v-switch v-if="showWide"
      class="wideSwitch"
      v-model="isWide"
      label="Wide"
      color="primary"
      value="primary"
      hide-details
    ></v-switch>
    </div>
    </v-app-bar>
    <v-main>
      <v-container fluid :class="isWide ? 'ignoreMaxWidth mainContainer' : 'mainContainer'">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :outlined="true" class="siteFooter font-weight-medium" :absolute="true" app>
        <div class="footerContent">
          Never Meant - {{ new Date().getFullYear() }}  
        </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      currentPath: this.$nuxt.$route.path,
      title: 'Never Meant',
      isDark: this.$vuetify.theme.dark,
      drawer: false,
      isMobile: true,
      isWide: false,
      showWide: false,
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Articles',
          to: '/posts'
        },
        {
          title: 'About',
          to: '/about'
        }
      ],
    }
  },

  beforeDestroy () {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },

  mounted() {
    this.currentPath = this.$nuxt.$route.path;
    window.addEventListener('resize', this.onResize, { passive: true })
    this.onResize();
    if (window) {
      window.history.scrollRestoration = 'auto';
    }
  },

  watch:{
    $route (to, from){
        this.currentPath = to.path;
    }
  },

  methods : {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },

    onResize () {
      this.isMobile = window.innerWidth < 600 ||  window.innerHeight < 600;
      this.showWide = window.innerWidth > 800;
    },
  }
}
</script>

<style>

html, body {
  background-color: var(--v-background-base);
}

.v-tooltip__content {
    opacity: 1 !important;
    background-color: var(--v-tooltipBackgroundColor-base) !important;
    border: 1px solid var(--v-primary-base) !important;
    color: var(--v-textColor-base) !important;
    max-width: 500px !important;
    border: 1px solid silver;
}

.my-app.v-application {
    color: var(--v-textColor-base) !important;
}

.v-application {
  line-height:1.68 !important;
}

.titleContentContainer {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 715px;
  overflow-x: hidden;
  overflow-y: hidden;
  display: inherit;
}

.siteFooter {
  width: 100%;
}

.questionsBlock {
  line-height: 1.3;
}

.footerContent {
  margin-left: auto;
  margin-right: auto;
  max-width: 715px;
  width: 100%;
  font-size: 13px;
  font-style: italic;
}

.footerContent.ignoreMaxWidth {
  max-width: 1366px;
} 


.footerContent > .row > .col {

}

.nonMobileContent {
  display: inherit;
}

@media(min-width: 601px) {
  .nonMobileContent {
    display: inherit;
  }

  .appBarIcon {
    display: none !important;
  }
}

@media(max-width: 600px) {
  .nonMobileContent {
    display: none;
  }

  .appBarIcon {
    display:inherit;
  }
}


.container.mainContainer:not(.ignoreMaxWidth) {
    max-width: 715px;
    overflow-x: hidden;
}

.container.mainContainer.ignoreMaxWidth {
    max-width:1000px;
    overflow-x: hidden;
}

.appBarIcon {
  margin-right: 5px;
}

.v-list-item__action {
  margin-right: 0px !important;
}

.v-navigation-drawer {
  width: 190px !important;
}

.mainTitleClass {
  font-weight: bold;
  color: #46797b;
  text-decoration: none;
}

.secondaryMenuClass {
    text-decoration: none;
    color: rgba(0,0,0,.87) !important;
}

.secondaryMenuClass.isDark {
  color: #eaeaea !important;
}

.selected.mainTitleClass,
.mainTitleClass:hover,
.selected.secondaryMenuClass,
.secondaryMenuClass:hover {
  border-bottom: 2px solid #46797b;
}

.mainTitleClass.isDark {
  color: #7fc3b0;
}

.selected.mainTitleClass.isDark,
.mainTitleClass.isDark:hover,
.selected.secondaryMenuClass.isDark,
.secondaryMenuClass.isDark:hover {
  box-sizing: border-box;
  border-bottom: 2px solid #7fc3b0;
}

.unselected {
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
}

.secondaryMenuClass {
  margin-left: 30px;
}

.secondaryMenuClass.isDark {
  color: #eaeaea;
}

.titleIcon {
height: 24px !important;
width: 36px !important;
margin-top: 6px;
margin-left: 25px;
}

.wideSwitch {
  height: 24px !important;
  margin-top: 6px !important;
  margin-left: 27px;
}

.wideSwitch .v-input--selection-controls__ripple {
  height: 0px !important;
}

:not(pre) > code[class*="language-"], pre[class*="language-"] {
  background: #f7f7f7;
}

.nuxt-content-highlight {
  background: #f7f7f7;
  border: 0.5px dotted silver;
  border-radius: 5px;
  font-size: 14px;
  position: relative;
}

.nuxt-content-highlight > .filename {
  font-weight: 500;
  color: black;
  height: 0px;
  position: absolute;
  right: 11px;
  font-style: italic;
  top: 5px;
}

.v-application pre > code {
  background-color: transparent !important;
  text-shadow: 0 0px white !important;
  font-size: 100%;
  color: #111 !important;
}

:not(pre) code {
  background-color: #daf7ea !important;
  color: black !important;
}

.nuxt-content-highlight {
  overflow: auto;
}

code {
  text-shadow: 0 0px white !important;
}

html {
  overflow-x: hidden;
  width: 100%;
}

.nuxt-content-highlight {
  margin-bottom: 20px;
}

pre > code {
  padding-left: 0px !important;
}

.v-application code, .v-application kbd {
  font-weight: 400 !important;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
}
</style>
