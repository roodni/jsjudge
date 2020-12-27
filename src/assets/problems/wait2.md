関数`f1`と`f2`と`callback`が引数で与えられます。

`f1`は関数を引数にとる関数です。`f1`を呼び出すと即座にundefinedが返されますが、
`f1`の呼び出しから待機時間(テストケースによって異なる)が経過すると、
`f1`の引数に与えられた関数の引数に数値`v1`が与えられて呼び出されます。

`f1`の定義として、例えば次のようなものが考えられます。なお`setTimeout`の書き換えは対策済みなので、
<router-link to="./predict">未来予知</router-link>
のようなズルはできません。
```js
const setTimeout = self.setTimeout; // 書き換え対策
function f1(g) {
  setTimeout(() => { g(v1); }, 待機時間);
}
```

`f2`も`f1`と同様の関数です。`f2`の引数に与えられた関数の引数に与えられる数値を`v2`とします。

`callback`の引数に`v1 + v2`を与えて呼び出して下さい。


<details>
<summary>解答例(易)</summary>

易ケースは待機時間が短いので次のコードで正答になります。

```js
f1(v1 => {
  f2(v2 => {
    callback(v1 + v2);
  });
});
```

一方、難ケースでは時間切れになってしまいます。

</details>

<details>
<summary>ヒント(難)</summary>

関数内で定義された関数は、ローカル変数の値を書きかえることができます。

```js
function f() {
  let x = 1;
  setTimeout(() => {
    console.log(x); // 1
  }, 1000);
  setTimeout(() => {
    x = 2;
  }, 2000);
  setTimeout(() => {
    console.log(x); // 2
  }, 3000);
}

f();
```

</details>