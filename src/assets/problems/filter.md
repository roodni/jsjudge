次の表に示すプロパティを持つ、科目を表すオブジェクトを考えます。

| キー | データ型 | 説明 |
| --- | --- | --- |
| `name` | string | 科目名 |
| `score` | number | 点数 |

科目を表すオブジェクトの配列`subjects`と、閾値`max`が引数で与えられます。

`subjects`から点数が`max`以下である科目だけを抜き出して、その科目名の配列を返してください。ただし、返す科目名の順番は与えられた科目の順番と同じになるようにしてください。

```js
const subjects = [
  { name: "英語第一", score: 79 },
  { name: "英語第二", score: 65 },
  { name: "英語第三", score: 90 },
  { name: "英語第四", score: 60 },
  { name: "英語第五", score: 77 },
  { name: "英語第六", score: 77 },
  { name: "英語第七", score: 63 },
  { name: "英語第八", score: 80 }
];

f(subjects, 65);  // ["英語第二", "英語第四", "英語第七"]
```