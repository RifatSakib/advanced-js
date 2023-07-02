
function doSomething(){

    console.log(5555);


}
console.log(2222);
console.log(3333);
setTimeout(doSomething, 1000);
console.log(4444);
setTimeout(function(){

    console.log("hello buddy");
    
},3000);

setInterval(() => {

    console.log("doing it again and again");
    
},3000);



