//数据结构set与map
{
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size',list.size);
}

{
  let arr = [1,2,3,4,5];
  let list = new Set(arr);

  console.log('size',list.size);
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);//不会被写成新的元素

  console.log('list',list);
//可做数组去重
  let arr=[1,2,3,1,'2'];//比较是使用严等于，数据类型不转换
  let list2=new Set(arr);

  console.log('unique',list2);
}

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  console.log('has',list.has('add'));
  console.log('delete',list.delete('add'),list);
  list.clear();
  console.log('list',list);
}

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  for(let key of list.keys()){
    console.log('keys',key);
  }
  for(let value of list.values()){
    console.log('value',value);
  }
  for(let [key,value] of list.entries()){
    console.log('entries',key,value);
  }

  list.forEach(function(item){console.log(item);})
}


{
  let weakList=new WeakSet();

  let arg={};

  weakList.add(arg);

  // weakList.add(2);

  console.log('weakList',weakList);
}

{
  let map = new Map();
  let arr=['123'];

  map.set(arr,456);

  console.log('map',map,map.get(arr));
}

{
  let map = new Map([['a',123],['b',456]]);
  console.log('map args',map);
  console.log('size',map.size);
  console.log('delete',map.delete('a'),map);
  console.log('clear',map.clear(),map);
}

{
  let weakmap=new WeakMap();

  let o={};
  weakmap.set(o,123);
  console.log(weakmap.get(o));
}

{
  let map = new Map();
  let set = new Set();
  let arr = [];
  let obj = {};
  let temp = {a:1};
  // 增
  map.set('a',1);
  set.add(temp);
  arr.push({a:1});
  obj.a=1; // obj['a']=1;

  //删
  map.delete('a');
  set.forEach(item => item.a ? delete(item.a) : null);// set.delet(temp)
  let index = arr.findIndex(item => item.a);
  arr.splice(index, 1);
  delete obj.a;// delete obj['a']

  //改
  map.set('a',2);
  set.forEach(item => item.a ? item.a=2 : null);// temp.a = 2;
  arr.forEach(item => item.a ? item.a=2 : null);
  obj.a = 2;// obj['a']=2;

  //查
  let map_exist = map.has('a');
  let set_exist = set.has({a:1});//false
  let set_exist1 = set.has(temp);//true
  let arr_exist = arr.find(item => item.a);
  let obj_exist = 'a' in obj;
}