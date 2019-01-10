{
  // 基本定义
  let ajax=function(callback){
    console.log('执行');
    setTimeout(function () {
      callback&&callback.call()
    }, 1000);
  };
  ajax(function(){
    console.log('timeout1');
  })
}

{
  let ajax=function(){
    console.log('执行2');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax().then(function(){
    console.log('promise','timeout2');
  })
}

{
  let callback = (code) => {
    console.log('开始');
    return new Promise( (resolve,reject) => {
      setTimeout(function () {
        if (code === 0) {
          resolve('正常运行')
        } else {
          reject('参数错误')
        }
      }, 1000);
    })
  };
  let test = 0;
  callback(test)
    .then(( msg ) => {
      console.log( msg );
      return new Promise((resolve, reject) => {
        setTimeout(function () {
         resolve('继续执行');
        }, 1500);
      });
    })
    .then(( msg ) => {
      console.log( msg );
      console.log('全部执行完毕');
    })
    .catch((e) => {
      console.log(e);
    })
}

{
  let ajax=function(num){
    console.log('执行4');
    return new Promise(function(resolve,reject){
      if(num>5){
        resolve()
      }else{
        throw new Error('出错了')
      }
    })
  }

  ajax(6).then(function(){
    console.log('log',6);
  }).catch(function(err){
    console.log('catch',err);
  });

  ajax(3).then(function(){
    console.log('log',3);
  }).catch(function(err){
    console.log('catch',err);
  });
}
