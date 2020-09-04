<template>
  <v-card>
    <v-card-title>これは何</v-card-title>
    <v-card-text>
      某所のJavaScript講習会のために用意された演習システムです。<br>
      問題文で示された要件を満たすJavaScriptの関数を実装して提出すると、演習システムが判定を行って結果を表示します。<br>
      関数の判定は
      <a href="https://developer.mozilla.org/ja/docs/Web/API/Web_Workers_API">Web Workers API</a>
      を用いてクライアントサイドで行われます。特にユーザ登録などは必要ありません。
    </v-card-text>
    <v-card-text>
      ご意見・ご要望・バグ報告などがありましたら、
      <a href="https://github.com/roodni/jsjudge/issues">Issues</a>
      まで連絡していただけるとありがたいです。
    </v-card-text>
  </v-card>
</template>

