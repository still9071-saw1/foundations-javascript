// 通常関数
function say_hello() {
    console.log("hello Would!!");
}
say_hello();

// 関数式：関数を変数に代入
var hello = function say_hello() {
    console.log("Good Morning");
};
hello();

// ↑関数名は省略できる
var hello = function () {
    console.log("Good Afternoon");
};
hello();

// 引数がある関数
function say_hello2(greeting) {
    console.log(greeting);
}
say_hello2("Good Evening");

// 関数内での計算
function cal(x) {
    console.log(x * 3);
};
cal(6);

// 引数が複数
function cal2(x, y) {
    console.log(x / y);
};
cal2(6,3);

// 戻り値の関数
function cal3(x, y) {
    return x / y;
};

var result = cal3(21,3);
console.log(result);


