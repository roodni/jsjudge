突然ですが、JavaScript講習会は今日からエスパー講習会に変更になりました。  
そこで皆さんには未来予知をしてもらいます。

0以上1未満の数を返す関数を作成してください。  
演習システムは関数の実行後に`Math.random`を用いて0以上1未満の乱数を生成します。両者の値が一致していれば正解です。

もう少し詳しく説明すると、提出された関数は次のジャッジ関数によって判定されます。
```js
(submitted_func, accept, reject) => {
  const predicted = submitted_func();
  const actual = Math.random();
  if (predicted === actual) {
    accept();
  } else {
    reject();
  }
}
```

引数`submitted_func`には提出された関数が格納されます。
ジャッジ関数が`accept`を呼べば正答、`reject`を呼べば誤答です。

<details>
<summary>ヒント</summary>

最初の文から察しがつくと思いますが、この問題は正攻法では解けません。`Math.random`の結果を予測するのは困難です。

しかし、この問題のジャッジ関数には脆弱性があるので、必ず正答になるようなコードを作成することができます。

</details>