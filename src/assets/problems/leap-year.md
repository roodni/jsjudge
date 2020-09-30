西暦年`year`が引数で与えられます。うるう年であれば`true`を、うるう年でなければ`false`を返す関数`is_leap_year`を作成してください。

```js
is_leap_year(2020); // true
is_leap_year(2021); // false
is_leap_yaer(2100); // false
is_leap_year(2000); // true
```

* 西暦年が4で割り切れる年は(原則として)閏年。
* ただし、西暦年が100で割り切れる年は(原則として)平年。
* ただし、西暦年が400で割り切れる年は必ず閏年。

([wikipedia](https://ja.wikipedia.org/wiki/%E9%96%8F%E5%B9%B4)より引用)