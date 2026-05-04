## 学習内容

### 設定

- Auto Save：after Delay
- Compare：ファイル比較
- Format Document：インデント修正

---

### 拡張機能

- Live Server：ローカルサーバで表示できる
- Code Spell Checker：スペルチェック
- JavaScript Snippet Pack：補完機能
- 画面の縮小：⌘ーー　　　　問題ない
- 画面の拡大：⇧⌘＋ーー　　できない場合がある
- 画面サイズリセット：⌘＋0

---

### 基礎内容

- ファイル構成
    - index.hrml
        - <script src=""></script>
    - app.js
        - console.log("Hello JavaScript");
        - alert("Hello JavaScript");
        - let d = 7 / 8;　console.log(d);
    - style.css

---

### 基礎ルール

- パス指定に気をつける
- 半角英数字
- コメント：//
- セミコロンは必ず末尾にはいる
- 文字入力；””or’’を使用　但し混ぜない
- 命令は上から実行される
- インデントに気をつける　拡張機能で一掃
- イコールの前後、記号との間には半角スペースを入れる
- 企業のコーディングルール
    - Googleのコーディングルール

---

### 演算

- 四則演算、余り、べき乗
    - +、-、＊、/、%、＊＊
- 変数
- 変数名を入れる事で、意味を推測できるようになる
- 使いまわせる
- 変更が容易になる
- 値を再代入できない：　const foo = “bar”;
    - 安全性からconstを使用する
- 値を再代入できる：　　let foo = “bar”
- var：今は使われない
- JavaScriptのバージョン
    - ES5:2015年以前
    - ES6（ES2015）2015年以降
        - 2023年ES14（ES2023）が最新バージョン
- 予約語は使用しない
- letは再代入は出来るが、再宣言はできない。エラーになります

---

### 型

- 数字；演算ができる
- “文字” + “同士”の+は結合になる　→　文字同士
- 数字も文字として行えば結合できる　”1” + “1”　文字の11
- 論理値：true：条件を満たす　false：条件を満たさない
- null：あえて値がない事を設定する
    - 使用例）エラーが出たらなど、元々無いデータに用いる
- 未定義：値が分からない　使わない
- オブジェクト：キーと値を対で格納できるまとまり

---

### 配列

- 配列はconstかletの後に続けて配列名を定義する
- 複数のあたいをまとめて並列に管理するまとまり
    - const array ＝ [1,2,3];             const array = [1,”Hello”,3];　　様々な値を入れる事が出来る
- 配列の要素の順番は0から始まる
- 呼び出し：console.log(array[2]);　←↑それぞれのカッコに注意

---

### ループ文

- while、map、for、forEach、do-while複数存在
- 今回の対象：for
    
    ```
    const array = [1, 2, "sawki", 4, 5];
    const array2 = "sawaki";
    // 配列の長さを取得します
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    // 文字列に使用した場合、文字列の文字数を取得します
    console.log(array2.length);
    ```
    
    - 実行条件（初期値,条件式,増減式）
    - ++はインクリメント：1ループでiに1と足す
    - 配列の場合：要素の数
    - 文字列の場合：文字列の文字数を取得する
    - 

---

### 条件分

- あらかじめ定めた条件によって処理を分岐させる

```
/ ログインを確認している条件分岐の例
let isLogin = false;
if (isLogin === false) {
    alert("ログインしてください");
} else {
    alert("ログインしています");
}
```

- 基本は　isLogin === false　だがisLoginのみでtureという認識になる。　!isLoginでfalse
- ===は等しいかの判断　=は代入になる　==は大体みたいな意味らしく使わないし間違いやすい
- ログインの場合は、初期値をfalseにしておいた方が良いかも。Tureだと事故りそう
- elseで分岐を増やす事が出来る

---

### 関数

- 複数の処理からなるプログラムをまとめておくもの
- 2種類の書き方がある
    
    ```
    // 関数の定義
    function 関数名 (){ 処理 }
    
    //アロー関数の定義
    const 関数名 = () => { 処理 }
    ```
    

サンプルコード

```jsx
if (new Date().getHours() >20) {
    document.body.style.backgroundColor = "#000";
}
```

■ ① 簡単な説明

「**今の時間が20時（夜8時）より後だったら、背景を黒にする**」コードです。

---

#### 1. new Date()

→ **現在の日時を取得するオブジェクト**

---

#### 2. .getHours()

→ **現在の「時間（0〜23）」を取得**

---

#### 3. > 20

→ **20時より大きいか？を判定**

---

#### 4. document.body.style.backgroundColor

→ HTMLの <body> のCSSを変更している

- document → HTML全体
- body → <body>
- style → CSS操作
- backgroundColor → 背景色

---

#### 5. #000

→ **黒色（カラーコード）**

---

#### 昼と夜で色を変える

```
if (newDate().getHours()>=20) {
document.body.style.backgroundColor="#000";
}else {
document.body.style.backgroundColor="#fff";
}
```

---

#### Step4：関数化（次のレベル）

```
functionchangeBackgroundByTime() {
lethour=newDate().getHours();

if (hour>20) {
document.body.style.backgroundColor="#000";
    }
}

changeBackgroundByTime();
```

---

このコードで学ぶべき本質は3つです：

1. **日時の取得（Date）**
2. **条件分岐（if）**
3. **DOM操作（style変更）**

---

### 関数（引数）

```jsx
function changeDarkMode(time) {
    if (new Date().getHours() >= time) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}
if (season === "winter") {
    changeDarkMode(18);
} else {
    changeDarkMode(20);
}
```

---

## 1. 関数 changeDarkMode

→ **time（時間）を引数として受け取る関数**

---

→ 「現在の時間が time 以上か？」をチェック

---

### ダークモード処理

```
document.body.style.backgroundColor="black";
document.body.style.color="white";→
```

- 背景：黒
- 文字：白

**背景だけじゃなく文字色も変えてる**

---

## 2. 季節による分岐

→ season が `"winter"` のとき

---

### 冬の場合

→ 18時からダークモード

---

### それ以外

→ 20時からダークモード

---

### ① season が未定義だとエラー

👉 `season` を事前に定義する必要あり

---

### ② ダークモード解除がない

今のコードは「ONだけ」

---

#### ■ ④ 改善版（実務寄り）

```
functionchangeDarkMode(time) {
lethour=newDate().getHours();

if (hour>=time) {
document.body.style.backgroundColor="black";
document.body.style.color="white";
    }else {
document.body.style.backgroundColor="white";
document.body.style.color="black";
    }
}
```

👉 OFFも追加（重要）
但し、これはエラーになる

---

### 実験用

```jsx
let season = "winter"; // ←①ここを変える（"winter" or "summer"）
let testHour = 17;     // ←②ここを変える（好きな時間）

function changeDarkMode(time, hour) {
    console.log("現在時刻:", hour);
    console.log("基準:", time);

    if (hour >= time) {
         document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        console.log("ダークモード ON");
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        console.log("ダークモード OFF");
    }
}

// 実行（ここは触らない）
if (season === "winter") {
    changeDarkMode(18, testHour);
} else {
    changeDarkMode(20, testHour);
}
```

- seasonやwinterなどは変数で、定義はない
- 引数を複数設定する事が出来る
- 

### 季節判定

```jsx
const date = new Date();
const month = date.getMonth() + 1; // 0-11の月を1-12に変換
let season = '';

if (month >= 3 && month <= 5) {
  season = '春';
} else if (month >= 6 && month <= 8) {
  season = '夏';
} else if (month >= 9 && month <= 11) {
  season = '秋';
} else {
  season = '冬'; // 12, 1, 2月
}

console.log(season); // 現在の季節が出力される
```

- letの宣言は1回だけ、2回行うとエラーになる
    - 上の2つのコードが存在した場合、seasonが2回宣言されている事になる
    - 結果、let season = '';でシンタックスエラーになる。
    - ただ、そこだけ見てもエラーが分からなかった

---

#### コールバック関数

```
function greet(name, callback) {
  console.log("こんにちは " + name);
  callback(); // ← 渡された関数を実行
}

function sayBye() {
  console.log("さようなら");
}

greet("太郎", sayBye);
```

- 渡された関数を実行する
- greet の中、好きなタイミングで実行できる

#### 3秒待つ：実例

```jsx
setTimeout(function() {
  console.log("3秒後に実行");
}, 3000);
```

コールバックはこの3つ👇

1. 関数を引数として渡す
2. 後で実行する
3. 処理を柔軟に切り替える

#### コールバック地獄

👉 **非同期処理をコールバックでつなぎすぎて、ネスト（入れ子）が深くなり、読みにくく・保守しにくくなる状態**です。

```jsx
getUser(userId, function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      console.log("コメント:", comments);

      saveLog(comments, function(result) {
        console.log("保存完了");

        notifyUser(user, function() {
          console.log("通知完了");
        });

      });

    });
  });
});
```

コールバック地獄は主にここで発生します👇

- API通信（fetch / axios）
- ファイル操作（Node.js）
- イベント処理（クリック → API → UI更新）
- DBアクセス

#### 

---

#### 標準組み込み関数、標準組み込みオブジェクト

- 初めから定義されている、関数やオブジェクトがある
    - parselint()；　　文字列を渡すと数値に変換する関数
    - console.log：　最初から組み込んでいるAPIオブジェクト
    - concat：　　　配列の結合

```
const mypokemons = ["サンダー", "フリーザー", "ファイヤー"];
console.log(mypokemons[0]); // サンダー
console.log(mypokemons[1]); // フリーザー
console.log(mypokemons[2]); // ファイヤー

mypokemons.push("ミュウツー");
console.log(mypokemons); // サンダー, フリーザー, ファイヤー, ミュウツー

console.log(mypokemons.length); // 4
```

---

#### ブラウザAPI

```
// 画面の幅と高さを取得
window.innerWidth;
console.log(window.innerWidth);
// 画面の高さを取得
window.innerHeight;
console.log(window.innerHeight);
```

- **windowのオブジェクト名は省略できる**

```
alert("こんにちは！"); // アラートを表示
const userName = prompt("あなたの名前は何ですか？");
 // ユーザーに入力を促す
console.log("こんにちは、" + userName + "さん！"); 
// 入力された名前を表示 
```

---

#### **HTMLの中から「1つだけ要素を取得する」ための基本メソッド**です。

- document.querySelector
- ボタンをクリックしたら、文字を書き換える

```
const btn = document.querySelector("#btn");
const text = document.querySelector("#text");

btn.addEventListener("click", function() {
  text.textContent = "クリックされました";
});
```

---

#### ① 要素を取得

```
constbtn=document.querySelector("#btn");
consttext=document.querySelector("#text");
```

- `#btn` → ボタン要素を取得
- `#text` → テキスト表示用の要素を取得
- `#` → id指定
- 最初に見つかった要素を1つ返す

---

#### ② クリックイベントを設定

```
btn.addEventListener("click",function() {
```

- `addEventListener` → イベント登録
- `"click"` → クリックされたとき
- `function() {}` → 実行する処理（コールバック関数）

---

#### ③ 実際の処理

```
text.textContent="クリックされました";
```

👉 文字を書き換えている

---

#### ④ ここが一番重要（コールバック）

```
function() {
text.textContent="クリックされました";
}
```

---

### ⚠ よくあるミス

❌ `()` を付ける

```
btn.addEventListener("click",function());// ❌
```

- これは文法エラー：**大きな違い（コールバック）**
    - **（）が付くと「実行」**
    - **付かないと「渡す」**

---

### ❌ 要素が取れてない

```
constbtn=document.querySelector("#btn");// nullの可能性
```

👉 **HTMLより先にJSが実行されると起きる**

対策👇

```
document.addEventListener("DOMContentLoaded", () => {
// ここに書く
});
```

---

#### ✔ 少しモダンな書き方

```
btn.addEventListener("click", () => {
text.textContent="クリックされました";
});
```

👉 アロー関数

---

#### 主要なwindowオブジェクト

- setTimeout
- querySelector
- querySelectorAll
- window.getElementById
- window.getElementsByClassName
- 注意点
    - スペルミスに注意
    - 複数、単数
- プロパティが増えて見にくい場合は変数に代入する
- プレフィックス：明示て役割を与える
    - 関数の前に$をつける：変数がhtml要素を格納している事を明示
    - 定数は大文字
    - ture /falseで使用：isxxx
        - 例）isLogin = false;
    - 単語の名称が組み合わせで成り立つ場合
        - 頭文字を大文字にする：キャメルケース
            - pokemonName
        - アンダーバーで繋げる：スネークケース
            - pokemon_name

---

#### SNSのタイムラインにポストする簡易的な例

```
const $post = document.createElement("article");
$post.setAttribute("class", "post");
$post.innerHTML = "調子はどうだい？";

const $timeline = document.querySelectorAll(".timeline")[0];
$timeline.appendChild($post);

console.log($post);
```

- 「要素を作る → 内容を入れる → 画面に追加する」**というDOM操作の基本が全部入っています。

👉 新しい投稿（article）を作って、timelineに追加している

👉 class="post" を付けている

👉 articleの中にテキストを入れる

何をしているか

- `.timeline` を**全部取得**
- `[0]` → 最初の1つを使う

何をしているか

👉 timelineの中に `$post` を追加

👉 作った要素をコンソールに表示

---

このコードは**DOM操作の基本フルセット**👇

1. 要素を作る（createElement）
2. 属性をつける（setAttribute）
3. 中身を入れる（innerHTML）
4. DOMに追加する（appendChild）

---

---

#### ポケモンゲットだぜ

```jsx
document.querySelector("#button")
.addEventListener("click",function(){
    if(Math.random() <= 0.1){
        alert("ピカチュウをゲットした！");
    }else{
        alert("ざんねん！もう少しでつかまえられたのに！");
    }
})
```

このコードのポイント👇

- `querySelector` → 要素取得
- `addEventListener` → イベント処理
- `Math.random()` → 確率処理
- `if` → 条件分岐