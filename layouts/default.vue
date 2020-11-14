<template>
  <v-app>
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
    >
    <v-app-bar-nav-icon class="appBarIcon" @click.stop="drawer = !drawer" />
    <div class="titleContentContainer">
      <NuxtLink to="/" tag="span" style="cursor: pointer" class="mainTitleClass" 
        :class="[this.$nuxt.$route.path == '/' ? 'selected' : 'unselected',
          this.$vuetify.theme.dark ? 'isDark' : '']">
        <v-toolbar-title v-text="title" />
      </NuxtLink>
      <div class="nonMobileContent">
        <NuxtLink to="/posts" tag="span" style="cursor: pointer" class="secondaryMenuClass"
            :class="[this.$nuxt.$route.path == '/posts' ? 'selected' : 'unselected',
              this.$vuetify.theme.dark ? 'isDark' : '']">
        <v-toolbar-title v-text="'All Posts'" />
      </NuxtLink>
      <NuxtLink to="/about" tag="span" style="cursor: pointer" class="secondaryMenuClass"
            :class="[this.$nuxt.$route.path == '/about' ? 'selected' : 'unselected',
              this.$vuetify.theme.dark ? 'isDark' : '']">
        <v-toolbar-title v-text="'About'" />
      </NuxtLink>
      </div>

      <v-btn class='titleIcon' text icon @click="darkMode()"><v-icon>mdi-brightness-4</v-icon></v-btn>
    </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
          <v-footer class="siteFooter font-weight-medium"
          absolute
          >
      <v-col
        cols="12"
      >
      <div class="footerContent">
        <a href="https://www.buymeacoffee.com/acsimpledex">
          <img src="https://img.buymeacoffee.com/button-api/?text=Support this site&emoji=💻&slug=acsimpledex&button_colour=FF5F5F&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00">
        </a>
        <br />
        Questions? <a href="mailto:ac.simpledex@gmail.com">Shoot me an email</a>, or <a href="https://github.com/campbell000/blog">create an issue!</a>
      </div>
      </v-col>
    </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Never Meant',
      isDark: this.$vuetify.theme.dark,
      drawer: false,
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'All Posts',
          to: '/posts'
        },
        {
          title: 'About',
          to: '/about'
        }
      ],
    }
  },

  methods : {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  }
}
</script>

<style>

.titleContentContainer {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  overflow-x: hidden;
  display: inherit;
}

.nonMobileContent {
  display: inherit;
}

@media(min-width: 501px) {
  .nonMobileContent {
    display: inherit;
  }

  .appBarIcon {
    display: none;
  }
}

@media(max-width: 500px) {
  .nonMobileContent {
    display: none;
  }

  .appBarIcon {
    display:inherit;
  }
}


.footerContent {
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
}

.container:not(.ignoreMaxWidth) {
    max-width: 700px;
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
  color: #4a8183;
}

.selected.mainTitleClass,
.mainTitleClass:hover {
  border-bottom: 2px solid #4a8183;
}

.mainTitleClass.isDark {
  color: #7fc3b0;
}

.selected.mainTitleClass.isDark,
.mainTitleClass.isDark:hover {
  box-sizing: border-box;
  border-bottom: 2px solid #7fc3b0;
}

.unselected {
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
}

.selected.secondaryMenuClass,
.secondaryMenuClass:hover
{
  box-sizing: border-box;
  border-bottom: 2px solid #523a47;
}

.secondaryMenuClass {
  margin-left: 30px;
  color: #523a47;
}

.selected.secondaryMenuClass.isDark,
.secondaryMenuClass.isDark:hover
{
  border-bottom: 2px solid #997e8c;
}

.secondaryMenuClass.isDark {
  color: #997e8c;
}

a[href^="https://www.buymeacoffee.com/acsimpledex"] > img {
  height: 41px;
}

.titleIcon {
height: 24px !important;
margin-top: 4px;
margin-left: 15px;
}

:not(pre) > .v-application code {
  background-color: #daf7ea;
  color: #437274;
}

pre.language-text.line-numbers {
  background-color: #daf7ea;
  color: #437274;
}

html {
  overflow-x: hidden;
  width: 100%;
}

pre > code {
  padding-left: 0px !important;
}
</style>
