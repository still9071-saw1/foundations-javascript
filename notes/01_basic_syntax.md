# JavaScript 基本文法

## 目的

JavaScriptの基本ルール・演算・変数の理解

---

## 学習内容

* JavaScriptの基本ルール
* 演算（四則演算・比較演算）
* 変数（let / const）

---

## コード例

```javascript id="psm1qa"
// 出力
console.log("Hello JavaScript");

// 演算
console.log(1 + 2); // 3
console.log(5 > 3); // true

// 変数
let name = "Taro";
const age = 20;

console.log(name);
console.log(age);
```

---

## ポイント

### ■ 基本ルール

* 文の終わりは「;（セミコロン）」※省略可
* 大文字・小文字は区別される
* console.log()で出力確認できる

---

### ■ 演算

* * * * /（四則演算）
* > < ===（比較演算）
* true / false を返す

---

### ■ 変数

* let：再代入できる
* const：再代入できない（基本はこちらを使う）

```javascript
let count = 1;
count = 2; // OK

const price = 100;
// price = 200; // エラー
```

---

## 詰まった点

* 「=」と「===」の違いが曖昧
* letとconstの使い分けに迷った

---

## 理解したこと

* JavaScriptは値を操作して処理する言語
* console.logで動作確認するのが基本

---

## 次にやること

* データ型（文字列・数値・boolean）
* 配列の理解
