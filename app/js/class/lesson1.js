//块级作用域

for (let i = 1; i < 3; i++) {
  console.log(i);
}
// console.log(i); //ReferenceError 外部报错未定义


let a = 1;
// let a = 2; // 重复声明变量会导致无法编译


const PI = 3.1415926; // 必须在声明时就赋值
// PI = 2; // 一次声明后无法再次赋值
const k = [] // 引用类型可以修改
k.b = 1;
k.a = 2;
console.log(PI, k);