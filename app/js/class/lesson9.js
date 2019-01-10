//新数据类型 symbol
{
  // 声明
  let a1=Symbol();
  let a2=Symbol();
  console.log(a1===a2);
  let a3=Symbol.for('a3');//寻找a3，找不到，创建
  let a4=Symbol.for('a3');//寻找a3，找到，赋值
  console.log(a3===a4);
}
//使用场景例子
{
  let a1=Symbol.for('abc');
  let obj={
    [a1]:'123',
    'abc':345,
    'c':456
  };
  console.log('obj',obj);

  for(let [key,value] of Object.entries(obj)){
    console.log('let of',key,value);
  }

  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]);
  })

  Reflect.ownKeys(obj).forEach(function(item){
    console.log('ownkeys',item,obj[item]);
  })
}
