var args = process.argv;
console.log(args);
/*
실행: 
E:\practice\nodejs\syntax>node 8_conditinal.js sherry
output:
[
  'C:\\Program Files\\nodejs\\node.exe', // nodejs 런타임이 어디에 있는지
  'E:\\practice\\nodejs\\syntax\\8_conditinal.js', // 실행시킨 파일 경로 
  'sherry'
]
*/
console.log(args[2]);
console.log('A');
console.log('B');
if(args[2] === '1'){
  console.log('C1');
} else {
  console.log('C2');
}
console.log('D');