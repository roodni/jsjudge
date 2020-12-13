半角英字および半角スペースのみからなる文字列が2つ引数で与えられます。

文字列を並び替えて一致するなら`true`、そうでなければ`false`を返してください。  
ただし、大文字と小文字は同一の文字として扱ってください。また、スペースは無視してください。

```js
f("Dormitory", "Dirty Room")  // true
f("kuwa", "numa") // false
```

大文字と小文字の変換には
[String.prototype.toLowerCase() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
が役に立つかもしれません。