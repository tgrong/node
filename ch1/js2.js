var fs=require('fs');
fs.readFile(__dirname + '/hello.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

console.log('我是有底线的');