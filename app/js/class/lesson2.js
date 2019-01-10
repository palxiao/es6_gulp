/**数组解构赋值 */

{
  let a,b,rest;
  let t = [1,2];
  [a,b]=t;
  console.log(a,b);
}

{
  let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5,6];
  console.log(a,b,rest);
}

{
  let a,b;
  ({a,b}={a:1,b:2})
  console.log(a,b);
}

{
  let a,b,c,rest;
  [a,b,c=3]=[1,2];
  console.log(a,b,c);
}
/** 应用场景 */
//变量交换（无中间变量）
{
  let a=1;
  let b=2;
  [a,b]=[b,a];
  console.log(a,b);
}
//变量赋值（无中间变量）
{
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b]=f();
  console.log(a,b);
}
//选择性接收赋值
{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,,b]=f();
  console.log(a,b);
}

{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,...b]=f();
  console.log(a,b);
}

/**对象解构赋值 */
// 按key value匹配
{
  let o={q:42,p:true,c:99};
  let {p=false,q,k=0,c}=o;
  console.log(p,q,k,c);
}

{
  let {a=10,b=5}={a:3};
  console.log(a,b);
}
/**使用场景 */
{
  let metaData={
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]}=metaData;
  console.log(esTitle,cnTitle);
  // let {title,test} = metaData;
  // console.log(title,test[0].title);
  
}
