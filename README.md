

<!-- 確認内容 -->
# Javascript学習内容
### ※環境構築・VSCode設定は完了済みのため省略

---

### 基本文法:01_basic_syntax
- 基本ルール
- 演算
- 変数

---

### データ系:02_data_structure
- データ型
- 配列

---

### 制御構文:03_control_flow
- ループ
- 条件分岐

---

### 関数:04_function

## 概要

JavaScriptの関数について学習する中で、

- JavaScriptの実行方法
- Node.jsの役割
- HTMLとの関係
- 関数宣言と関数式の違い
- ホイスティング（Hoisting）

について理解を深めた。

---

# 1. JavaScriptは単独では実行できない

JavaScriptファイルは単なるテキストファイルであり、そのままでは動作しない。

実行するためにはJavaScriptエンジン（実行環境）が必要。

## 主な実行環境

### ブラウザ

- Chrome
- Safari
- Firefox

```html
<script src="test.js"></script>
```

HTML経由でJavaScriptを実行する。

### Node.js

```bash
node test.js
```

HTML不要。

JavaScriptファイルを直接実行できる。

---

## 学習前の認識

```text
HTML
 ↓
JavaScript
 ↓
実行
```

---

## 学習後の認識

```text
JavaScript
 ↓
実行環境
 ↓
実行
```

実行環境には、

- ブラウザ
- Node.js

などが存在する。

---

# 2. VS CodeでJavaScriptを実行する方法

## サンプルコード

```javascript
var hello = function () {
    console.log("Good Morning");
};

hello();
```

## ターミナルで実行

```bash
node test.js
```

結果

```text
Good Morning
```

---

# 3. 関数宣言

## 基本形

```javascript
function sayHello() {
    console.log("Hello");
}

sayHello();
```

結果

```text
Hello
```

### 特徴

- 名前を付けて定義する
- ホイスティングの対象になる
- 実行前に登録される

---

# 4. 関数式

## 基本形

```javascript
var hello = function () {
    console.log("Good Morning");
};

hello();
```

結果

```text
Good Morning
```

---

## 名前付き関数式

```javascript
var hello = function sayHello() {
    console.log("Good Morning");
};

hello();
```

結果

```text
Good Morning
```

関数名は省略可能。

---

# 5. 引数を持つ関数

## 基本形

```javascript
function sayGreeting(greeting) {
    console.log(greeting);
}

sayGreeting("Good Evening");
```

結果

```text
Good Evening
```

---

## 引数とは

```javascript
function sayGreeting(greeting)
```

の

```javascript
greeting
```

が引数（パラメータ）。

実行時に値を受け取るための変数。

---

# 6. 発生した疑問

## サンプルコード

```javascript
function say_hello() {
    console.log("hello World!!");
}

say_hello();

function say_hello(greeting) {
    console.log(greeting);
}

say_hello("Good Evening");
```

---

## 予想していた結果

```text
hello World!!
Good Evening
```

---

## 実際の結果

```text
undefined
Good Evening
```

---

# 7. 原因：ホイスティング（Hoisting）

JavaScriptでは関数宣言が実行前に先読みされる。

## JavaScript内部のイメージ

実行前

```javascript
function say_hello() {
    console.log("hello World!!");
}

function say_hello(greeting) {
    console.log(greeting);
}
```

↓

JavaScript内部

```javascript
function say_hello(greeting) {
    console.log(greeting);
}

say_hello();

say_hello("Good Evening");
```

同じ名前の関数は後の定義で上書きされる。

---

## なぜ undefined が表示されたのか

```javascript
say_hello();
```

↓

```javascript
say_hello(undefined);
```

↓

```javascript
console.log(undefined);
```

結果

```text
undefined
```

---

# 8. JavaScriptの実行イメージ

## 学習前の認識

```text
1行目
 ↓
2行目
 ↓
3行目
 ↓
...
```

完全な逐次処理だと思っていた。

---

## 実際

```text
① 事前準備
   ・関数宣言を登録
   ・変数宣言を登録

② 上から順番に実行
```

---

## イメージ図

```text
コード読み込み
      ↓
関数宣言を登録
      ↓
実行開始
      ↓
上から順番に処理
```

---

# 9. 関数宣言と関数式の違い

## 関数宣言

```javascript
function hello() {
    console.log("Hello");
}
```

特徴

- ホイスティングされる
- 実行前に登録される

---

## 関数式

```javascript
var hello = function () {
    console.log("Hello");
};
```

特徴

- ホイスティングされない（関数本体は）
- 上から順番に実行される
- 定義前に呼び出すとエラーになる

---

# 10. 命名ルールの重要性

今回の問題の原因

```javascript
function say_hello() {}
function say_hello() {}
```

同じ名前の関数を定義していた。

---

## 推奨

```javascript
function sayHello() {}

function sayGreeting() {}
```

役割ごとに名前を分ける。

---

## 現代的な書き方

```javascript
const sayHello = () => {
    console.log("Hello");
};

const sayGreeting = (greeting) => {
    console.log(greeting);
};
```

同じ名前で再定義するとエラーになるため、安全性が高い。

---

# 今回の学び

- JavaScriptを実行するには実行環境が必要
- ブラウザ実行にはHTMLが必要な場合が多い
- Node.jsならHTML不要で実行できる
- 関数宣言はホイスティングされる
- 関数式はホイスティングされない
- JavaScriptは「事前準備 → 実行」の流れで動く
- 同じ名前の関数はバグの原因になるため避ける
- 予想と異なる実行結果から言語仕様を学ぶことが重要

---

# 今回の気付き

「JavaScriptは上から順番に実行される」と理解していたため、

```javascript
function say_hello() {}
function say_hello(greeting) {}
```

で後ろの関数が先に有効になることは想定していなかった。

実際にコードを実行し、

```text
undefined
```

という予想外の結果からホイスティングの仕組みを学ぶことができた。

これは単なる文法暗記ではなく、JavaScript内部の動作を理解する良いサンプルとなった。

---

