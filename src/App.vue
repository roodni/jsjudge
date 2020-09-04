<template>
  <v-app>
    <v-app-bar app flat>
      <v-toolbar-title class="mr-4">
        桑システム
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn text to="/" exact>
          トップ
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