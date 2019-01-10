// export let A=123;
//
// export function test(){
//   console.log('test');
// }
//
// export class Hello{
//   test(){
//     console.log('class');
//   }
// }

let CL = 'R';
let fn = () => {
  console.log('a function');
}
class Test{
  test(){
    console.log('a class');
  }
}

export default {
  CL,
  Test,
  fn
}
