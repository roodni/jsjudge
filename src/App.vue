<template>
  <v-app>
    <v-app-bar app flat>
      <v-toolbar-title class="mr-4">
        開発中
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn text to="/">
          トップ
        </v-btn>
        <v-btn text to="/problems" exact>
          問題一覧
        </v-btn>
        <v-btn text to="/404">
          404
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main app>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>