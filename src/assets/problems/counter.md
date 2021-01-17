カウンターのオブジェクトを生成するクラスを作成してみましょう。

* コンストラクタは引数`init`と`add`を受けとる。
`init`はカウンターの初期値、`add`は1回のカウントで加算される値を意味する。
* メソッド`count`はカウントを`add`だけ加算する。
* プロパティ`value`は現在のカウントを返す。

上の条件を満たすカウンターのオブジェクトを生成するクラスのコンストラクタ、を返す関数を作成してください。

```js
const Counter = your_func();
const counter = new Counter(0, 100);
console.log(counter.value); // 0
counter.count();
console.log(counter.value); // 100
counter.count();
console.log(counter.value); // 200
```