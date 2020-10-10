<template>
  <v-app>
    <v-app-bar app flat>
      <v-toolbar-title class="mr-4">
        JSJudge
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn text to="/" exact>
          説明
        </v-btn>
        <v-btn text to="/problems" exact>
          問題一覧
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main app>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="11">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
.frontmatter-markdown {
  pre {
    code {
      color: inherit !important;
      background-color: transparent !important;
      font-size: 100% !important;
      font-weight: bold !important;
      padding: 0 !important;
    }
  }
  code {
    color: #383a42 !important;
    background-color: transparent !important;
    font-size: 100% !important;
    font-weight: bold !important;
    padding: 0px 6px;
  }
  p {
    margin: 8px 0px !important;
  }
  ul {
    margin: 8px 0px;
  }
}
</style>