/**
 * Created by lijianzhou on 16/4/29.
 */
var stu=require('./student');
var tea=require('./teacher');

function add(teacherName,students){
    tea.add2(teacherName);
    students.forEach(function(item,index){
        stu.add2(item);
    })
}
exports.add=add;