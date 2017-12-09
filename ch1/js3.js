var fs=require('fs');
var data=fs.readFileSync(__dirname + '/hello.txt','utf-8');
console.log(data);
console.log('我是有底线的');


